import React from "react";
import { LuCheck, LuX } from "react-icons/lu";

const ScoreAnswer = ({ latestAttempt }) => {
  return (
    <div className="col-span-4 bg-background border border-border rounded-2xl p-6">
      <h2 className="text-text font-semibold mb-5 text-xl">Answer Review</h2>

      <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2">
        {latestAttempt?.questions.map((item, index) => {
          const isCorrect = item.userAnswer === item.correctAnswer;

          return (
            <div
              key={index}
              className="border border-border rounded-2xl p-6 bg-surface hover:border-primary/50 transition-all"
            >
              {/* Question */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <p className="text-text font-semibold text-lg">
                  Q{index + 1}. {item.question}
                </p>

                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium ${
                    isCorrect
                      ? "bg-green-500/10 text-green-400 border border-green-500"
                      : "bg-red-500/10 text-red-400 border border-red-500"
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <LuCheck size={16} />
                      Correct
                    </>
                  ) : (
                    <>
                      <LuX size={16} />
                      Wrong
                    </>
                  )}
                </div>
              </div>

              {/* USER ANSWER */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted">Your Answer</span>

                <span
                  className={`px-4 py-2 rounded-xl font-medium ${
                    isCorrect
                      ? "bg-green-500/10 border border-green-500 text-green-400"
                      : "bg-red-500/10 border border-red-500 text-red-400"
                  }`}
                >
                  {item.userAnswer}
                </span>
              </div>

              {/* CORRECT ANSWER */}
              <div className="flex items-center justify-between">
                <span className="text-muted">Correct Answer</span>

                <span className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500 text-green-400 font-medium">
                  {item.correctAnswer}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreAnswer;
