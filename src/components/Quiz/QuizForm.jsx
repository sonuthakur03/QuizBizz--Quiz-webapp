import React from "react";

const QuizForm = ({ setIsQuestionsFetched, handleFetchQuiz }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const quizSettings = {
      topic: formData.get("topic"),
      questions: formData.get("questions"),
      difficulty: formData.get("difficulty"),
      type: formData.get("type"),
    };
    handleFetchQuiz(quizSettings);
    console.log("Quizz setting: ", quizSettings);
  };

  return (
    <>
      <h2 className="font-heading text-3xl font-bold text-text mb-8">
        Explore Our Exciting Quizzes!
      </h2>

      <form action="#" className="w-full max-w-sm" onSubmit={handleSubmit}>
        <label
          htmlFor="topic"
          className="block mb-3 text-sm font-medium text-muted font-body"
        >
          Select a Quiz Topic:
        </label>
        <select
          id="topic"
          name="topic"
          className="bg-surface border border-border text-text text-sm rounded-xl focus:ring-primary focus:border-primary block w-full p-4 font-body transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            --Choose a Topic--
          </option>
          <option value="9">General Knowledge</option>
          <option value="17">Science & Nature</option>
          <option value="23">History</option>
          <option value="21">Sports</option>
          <option value="24">Politics</option>
          <option value="27">Animals</option>
        </select>
        <label
          htmlFor="questions"
          className="block my-3 text-sm font-medium text-muted font-body"
        >
          Select a number of Questions:
        </label>
        <select
          id="questions"
          name="questions"
          className="bg-surface border border-border text-text text-sm rounded-xl focus:ring-primary focus:border-primary block w-full p-4 font-body transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            --Choose Number of Questions--
          </option>
          <option value="5">5 Questions</option>
          <option value="10">10 Questions</option>
          <option value="15">15 Questions</option>
          <option value="20">20 Questions</option>
        </select>
        <label
          htmlFor="difficulty"
          className="block my-3 text-sm font-medium text-muted font-body"
        >
          Select difficulty level:
        </label>
        <select
          id="difficulty"
          name="difficulty"
          className="bg-surface border border-border text-text text-sm rounded-xl focus:ring-primary focus:border-primary block w-full p-4 font-body transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            --Choose Difficulty--
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label
          htmlFor="type"
          className="block my-3 text-sm font-medium text-muted font-body"
        >
          Select type of questions:
        </label>
        <select
          id="type"
          name="type"
          className="bg-surface border border-border text-text text-sm rounded-xl focus:ring-primary focus:border-primary block w-full p-4 font-body transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            --Choose Type of Questions--
          </option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>

        <button
          type="submit"
          className="mt-6 w-full font-body font-semibold text-white py-3.5 px-5 rounded-xl transition-all
                       bg-primary bg-gradient-to-t from-primary to-[#818cf8]
                       hover:from-[#5154ed] hover:to-[#6366F1]
                       active:scale-[0.98]"
        >
          Start Quiz
        </button>
      </form>
    </>
  );
};

export default QuizForm;
