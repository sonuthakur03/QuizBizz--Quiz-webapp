import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const QuizTF = ({
  data,
  handleNext,
  handlePrevious,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  handleSelectedOption,
  answers,
}) => {
  return (
    <>
      <h2 className="font-heading text-3xl font-bold text-text mb-8">
        True / False Quiz
      </h2>

      {data?.map((question, index) => {
        return index === currentQuestionIndex ? (
          <div key={index + 1} className="flex-center flex-col w-[90%]">
            <div className="block mb-3 text-lg font-bold text-text font-body self-start">
              <p>Category: {question.category}</p>
              <p>Difficulty: {question.difficulty}</p>
            </div>
            <div className="block mb-3 text-md font-medium text-muted font-body self-start">
              Question {index + 1} of {data.length}
            </div>
            <div className="block mb-3 text-md font-bold text-text font-body self-start">
              Question {index + 1} : {question.question}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6 place-items-stretch w-full">
              {question.options.map((option, index) => (
                <div
                  key={index + 1}
                  className={`bg-surface border border-border py-4 px-16 rounded-xl 
                       hover:bg-primary hover:text-text hover:-translate-y-1
                       cursor-pointer transition-all flex-center text-lg font-semibold ${answers[currentQuestionIndex] === option ? "border-[3px] border-primary text-text" : ""} `}
                  onClick={handleSelectedOption}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ) : null;
      })}

      <div className="flex-center gap-4 mt-8">
        <button
          className={`bg-primary text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 cursor-pointer ${currentQuestionIndex === 0 ? "cursor-not-allowed opacity-50" : ""} `}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <LuChevronLeft size={24} />
          Previous
        </button>

        <button
          className={`bg-primary text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 cursor-pointer `}
          onClick={handleNext}
        >
          {currentQuestionIndex === data.length - 1 ? "Submit" : "Next"}
          <LuChevronRight size={24} />
        </button>
      </div>
    </>
  );
};

export default QuizTF;
