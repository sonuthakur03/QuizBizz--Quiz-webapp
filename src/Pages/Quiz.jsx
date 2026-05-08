import React, { useState } from "react";
import QuizForm from "../components/Quiz/QuizForm.jsx";
import QuizMCQ from "../components/Quiz/QuizMCQ.jsx";
import QuizTF from "../components/Quiz/QuizTF.jsx";
import { useQuiz } from "../hooks/useQuiz";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [settings, setSettings] = useState({});

  const {
    formattedData,
    currentQuestionIndex,
    answers,
    isLoading,
    fetchQuiz,
    selectAnswer,
    next,
    prev,
  } = useQuiz();

  const handleStart = async (quizSettings) => {
    setSettings(quizSettings);
    await fetchQuiz(quizSettings);
    setStarted(true);
  };

  return (
    <section className="flex items-center justify-center w-[70%] bg-background py-8">
      <div className="flex-center flex-col bg-surface border border-border p-8 rounded-2xl w-full max-w-5xl">
        {!started ? (
          <QuizForm handleFetchQuiz={handleStart} />
        ) : (
          <>
            {formattedData?.[0]?.type === "multiple" ? (
              <QuizMCQ
                data={formattedData}
                currentQuestionIndex={currentQuestionIndex}
                answers={answers}
                handleNext={next}
                handlePrevious={prev}
                handleSelectedOption={selectAnswer}
              />
            ) : (
              <QuizTF
                data={formattedData}
                currentQuestionIndex={currentQuestionIndex}
                answers={answers}
                handleNext={next}
                handlePrevious={prev}
                handleSelectedOption={selectAnswer}
              />
            )}
          </>
        )}

        {isLoading && (
          <p className="text-text mt-4 animate-pulse">Loading questions...</p>
        )}
      </div>
    </section>
  );
};

export default Quiz;
