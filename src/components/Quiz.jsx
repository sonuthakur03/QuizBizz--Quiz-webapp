import React from "react";
import QuizForm from "./Quiz/QuizForm";
import QuizMCQ from "./Quiz/QuizMCQ";
import QuizTF from "./Quiz/QuizTF";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [isQuestionsFetched, setIsQuestionsFetched] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [formattedData, setFormattedData] = React.useState(null);

  let score = 0;
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("Fetched:", isQuestionsFetched);
    console.log("Current Question Index: ", currentQuestionIndex);
    console.log("Answers: ", answers);
  }, [isQuestionsFetched]);

  // Utility function to decode HTML entities in questions and options
  const decodeHTML = (text) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  // Function to calculate the final score based on selected answers and correct answers
  const calculateScore = () => {
    console.log("Calculating score...");
    formattedData.map((question, i) => {
      if (answers[i] === question.correct_answer) {
        score++;
      }
    });

    const quizResults =
      (localStorage.getItem("quizResults") &&
        JSON.parse(localStorage.getItem("quizResults"))) ||
      [];
    const newResult = {
      id: Date.now(),
      score: score,
      total: formattedData.length,
      category: formattedData[0].category,
      difficulty: formattedData[0].difficulty,
      type: formattedData[0].type,
      date: new Date().toLocaleDateString(),
    };
    if (quizResults.length >= 5) {
      quizResults.shift();
    }
    quizResults.push(newResult);

    localStorage.setItem("quizResults", JSON.stringify(quizResults));

    console.log("Final Score: ", score);
  };

  // Handler for selecting an option in True/False quiz
  const handleSelectedOption = (e) => {
    console.log("Selected option: ", e.target.textContent.trim());
    const selectedOption = e.target.textContent.trim();
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: selectedOption }));
    console.log("Updated answers: ", answers);
  };

  // Function to fetch quiz questions based on selected settings
  const handleFetchQuiz = async (quizSettings) => {
    setIsLoading(true);
    const { topic, questions, difficulty, type } = quizSettings;
    if (!topic || !questions || !difficulty || !type) {
      console.log("Fill all fields first");
      setIsLoading(false);
      return;
    }
    // Construct the API URL with query parameters based on selected settings
    const apiUrl = `https://opentdb.com/api.php?amount=${questions}&category=${topic}&difficulty=${difficulty}&type=${type}`;
    console.log("API URL:", apiUrl);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log("Fetched quiz questions: ", data.results);
      if (data.response_code === 0) {
        setIsQuestionsFetched(true);
        // Format the data to include shuffled options for each question
        const formatted = data.results.map((question) => {
          const options = shuffleArray([
            question.correct_answer,
            ...question.incorrect_answers,
          ]);
          return {
            ...question,
            question: decodeHTML(question.question),
            category: decodeHTML(question.category),
            difficulty: decodeHTML(question.difficulty),
            correct_answer: decodeHTML(question.correct_answer),
            incorrect_answers: question.incorrect_answers.map(decodeHTML),
            options,
          };
        });
        setFormattedData(formatted);
      } else {
        console.log("No questions found for this config");
      }
    } catch (error) {
      console.error("Error fetching quiz questions: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handlers for navigating between questions
  const handleNext = () => {
    if (currentQuestionIndex < formattedData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      navigate("/score");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Function to shuffle options for each question
  const shuffleArray = (array) => {
    const shuffled = [...array]; // copy to avoid mutation

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      // swap
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  return (
    <section className="flex items-center justify-center flex-col max-h-screen w-[70%] bg-background">
      <div className="bg-surface border border-border p-10 rounded-2xl drop-shadow-[0_0_15px_rgba(99,102,241,0.2)] flex-center flex-col w-full">
        {isQuestionsFetched ? (
          formattedData?.[0]?.type === "multiple" ? (
            <QuizMCQ
              data={formattedData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
              handleSelectedOption={handleSelectedOption}
              answers={answers}
              calculateScore={calculateScore}
            />
          ) : (
            <QuizTF
              data={formattedData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
              handleSelectedOption={handleSelectedOption}
              answers={answers}
              calculateScore={calculateScore}
            />
          )
        ) : (
          <QuizForm
            setIsQuestionsFetched={setIsQuestionsFetched}
            handleFetchQuiz={handleFetchQuiz}
          />
        )}
        {isLoading && (
          <p className="text-text mt-2 text-center text-2xl animate-pulse  ">
            Fetching quiz questions...
          </p>
        )}
      </div>
    </section>
  );
};

export default Quiz;
