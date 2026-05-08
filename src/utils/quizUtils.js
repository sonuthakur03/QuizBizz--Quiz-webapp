// Utility function to decode HTML entities in questions and options
const decodeHTML = (text) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
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

// Function to calculate the final score based on selected answers and correct answers
const calculateScore = () => {
  console.log("Calculating score...");
  formattedData.map((question, i) => {
    if (answers[i] === question.correct_answer) {
      score++;
    }
  });
  localStorage.setItem("latestScore", score);
  console.log("Final Score: ", score);
};

// Handlers for navigating between questions
const handleNext = () => {
  if (currentQuestionIndex < formattedData.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    calculateScore();
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

// exporting
export {
  decodeHTML,
  handleSelectedOption,
  handleFetchQuiz,
  calculateScore,
  handleNext,
  handlePrevious,
  shuffleArray,
};
