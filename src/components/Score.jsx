import React from "react";
import { LuRotateCcw, LuHouse } from "react-icons/lu";
import { Link } from "react-router-dom";

const Score = () => {
  const attempts = JSON.parse(localStorage.getItem("quizResults")) || [];
  const latestAttempt =
    attempts.length > 0 ? attempts[attempts.length - 1] : null;
  const latestScore = latestAttempt ? latestAttempt.score : 0;

  return (
    <section className="max-h-screen bg-background flex items-center justify-center ">
      {/* 🌟 BIGGER CONTAINER */}
      <div className="bg-surface border border-border rounded-2xl w-full max-w-7xl p-4 shadow-[0_0_25px_rgba(99,102,241,0.25)]">
        <h1 className="text-3xl font-bold text-text mb-8">
          Quiz Results Dashboard
        </h1>

        {/* 🧩 GRID ROW LAYOUT*/}
        <div className="grid grid-cols-4 gap-4">
          {/* 🏆 SCORE CARD */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-36 h-36 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              <div>
                <p className="text-2xl font-bold text-text">
                  {latestScore}/
                  {latestAttempt && latestAttempt.total
                    ? latestAttempt.total
                    : 0}
                </p>
                <p className="text-sm text-muted">
                  {latestAttempt && latestAttempt.total
                    ? Math.round(
                        (latestAttempt.score / latestAttempt.total) * 100,
                      )
                    : 0}
                  %
                </p>
              </div>
            </div>

            <p className="mt-6 text-text text-lg font-semibold">
              {attempts.length === 0
                ? "No quiz taken yet"
                : latestAttempt &&
                    latestAttempt.score / latestAttempt.total >= 0.8
                  ? "Great Performance 🚀"
                  : "Keep Practicing 💪"}
            </p>
          </div>

          {/* 📊 SUMMARY  */}
          <div className="col-span-2 bg-background border border-border rounded-xl p-6 min-h-[300px]">
            <h2 className="text-text font-semibold mb-5 text-lg">Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Category</span>
                <span className="text-text font-medium">
                  {latestAttempt && latestAttempt.category
                    ? latestAttempt.category
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Difficulty</span>
                <span className="text-text font-medium">
                  {latestAttempt && latestAttempt.difficulty
                    ? latestAttempt.difficulty
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Type</span>
                <span className="text-text font-medium">
                  {latestAttempt && latestAttempt.type
                    ? latestAttempt.type === "multiple"
                      ? "Multiple Choice"
                      : latestAttempt.type === "boolean"
                        ? "True / False"
                        : latestAttempt.type
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Correct</span>
                <span className="text-text font-medium">
                  {latestAttempt && latestAttempt.score
                    ? latestAttempt.score
                    : 0}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Wrong</span>
                <span className="text-text font-medium">
                  {latestAttempt && latestAttempt.total && latestAttempt.score
                    ? latestAttempt.total - latestAttempt.score
                    : 0}
                </span>
              </div>
            </div>
          </div>

          {/* 🔁 ACTIONS  */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-6 flex flex-col justify-center gap-5 min-h-[300px]">
            <Link
              to="/quizzes"
              className="bg-primary text-text py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/80 transition-all"
            >
              <LuRotateCcw size={20} />
              {attempts.length === 0 ? "Take Quiz" : "Retake Quiz"}
            </Link>

            <Link
              to="/"
              className="bg-surface border border-border text-text py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-border/20 transition-all"
            >
              <LuHouse size={20} />
              Back to Home
            </Link>
          </div>

          {/* 📜 HISTORY */}
          <div className="col-span-4 bg-background border border-border rounded-xl p-6 min-h-[300px]">
            <h2 className="text-text font-semibold mb-5 text-lg">
              Previous Attempts
            </h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {attempts.length > 0 && latestScore ? (
                attempts.slice(-5).map((result, index) => (
                  <div
                    key={result.id}
                    className="grid grid-cols-4 p-3 rounded-lg border border-border hover:bg-primary/10 transition-all"
                  >
                    <span className="text-text">Attempt #{index + 1}</span>
                    <span className="text-muted">
                      {result.score}/{result.total}
                    </span>
                    <span className="text-text font-medium">
                      {result.score && result.total
                        ? ((result.score / result.total) * 100).toFixed(2) + "%"
                        : "0%"}
                    </span>
                    <span>
                      {result.category} - {result.difficulty} -{" "}
                      {result.type === "multiple"
                        ? "MCQ"
                        : result.type === "boolean"
                          ? "True / False"
                          : result.type}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-muted text-sm">No previous attempts.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Score;
