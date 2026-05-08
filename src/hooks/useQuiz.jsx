import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useQuiz = () => {
  const [data, setData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // decode HTML
  const decodeHTML = (text) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  // shuffle
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // fetch quiz
  const fetchQuiz = async (quizSettings) => {
    setIsLoading(true);

    const { topic, questions, difficulty, type } = quizSettings;

    const api = `https://opentdb.com/api.php?amount=${questions}&category=${topic}&difficulty=${difficulty}&type=${type}`;

    try {
      const res = await fetch(api);
      const json = await res.json();

      const formatted = json.results.map((q) => {
        const decodedCorrect = decodeHTML(q.correct_answer);
        const decodedIncorrect = q.incorrect_answers.map(decodeHTML);

        const options = shuffleArray([decodedCorrect, ...decodedIncorrect]);

        return {
          ...q,
          question: decodeHTML(q.question),
          category: decodeHTML(q.category),
          difficulty: decodeHTML(q.difficulty),
          correct_answer: decodedCorrect,
          options,
        };
      });

      setData(json.results);
      setFormattedData(formatted);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // select answer
  const selectAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  // next
  const next = () => {
    if (currentQuestionIndex < formattedData.length - 1) {
      setCurrentQuestionIndex((p) => p + 1);
    } else {
      calculateScore();
      navigate("/score");
    }
  };

  // prev
  const prev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((p) => p - 1);
    }
  };

  // score
  const calculateScore = () => {
    let score = 0;

    const review = formattedData.map((q, i) => {
      const userAnswer = answers[i] ?? "Not answered";
      const correctAnswer = q.correct_answer;

      const isCorrect = userAnswer === correctAnswer;

      if (isCorrect) score++;

      return {
        question: q.question,
        userAnswer,
        correctAnswer,
        isCorrect,
      };
    });

    const results = JSON.parse(localStorage.getItem("quizResults")) || [];

    const newResult = {
      id: Date.now(),
      score,
      total: formattedData.length,
      category: formattedData[0].category,
      difficulty: formattedData[0].difficulty,
      type: formattedData[0].type,
      date: new Date().toLocaleDateString(),
      questions: review, // ✅ IMPORTANT FIX
    };

    results.push(newResult);

    if (results.length > 5) results.shift();

    localStorage.setItem("quizResults", JSON.stringify(results));
  };

  return {
    data,
    formattedData,
    currentQuestionIndex,
    answers,
    isLoading,
    fetchQuiz,
    selectAnswer,
    next,
    prev,
  };
};
