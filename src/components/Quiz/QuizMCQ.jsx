import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const QuizMCQ = ({
  data,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  handleNext,
  handlePrevious,
  handleSelectedOption,
  answers,
}) => {
  return (
    <>
      <h2 className="font-heading text-3xl font-bold text-text mb-8">
        Multiple Choice Questions
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
            <div className="block my-3 text-md font-medium text-text font-body self-start">
              Question {index + 1} : {question.question}
            </div>
            <div className="grid grid-cols-2 place-items-stretch gap-4 mt-4 w-full">
              {question.options.map((option, optIndex) => (
                <div
                  key={optIndex + 1}
                  className={`py-4 px-8 rounded-xl cursor-pointer transition-all duration-300 flex-center justify-start border ${
                    answers[currentQuestionIndex] === option
                      ? "bg-primary text-text border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] scale-[1.02]"
                      : "bg-surface border-border hover:bg-primary/20 hover:border-primary hover:-translate-y-1"
                  }
                `}
                  onClick={() => handleSelectedOption(option)}
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
          className={`bg-primary text-text p-4  w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 cursor-pointer ${
            currentQuestionIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <LuChevronLeft size={24} className="text-3xl" />
          Previous
        </button>
        <button
          className={`bg-primary  text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 cursor-pointer `}
          onClick={handleNext}
        >
          {currentQuestionIndex === data.length - 1 ? "Submit" : "Next"}
          <LuChevronRight size={24} className="text-3xl" />
        </button>
      </div>
    </>
  );
};

export default QuizMCQ;
