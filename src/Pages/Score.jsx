import React from "react";
import ScoreSummary from "../components/score/ScoreSummary";
import ScoreCard from "../components/score/ScoreCard";
import ScoreActions from "../components/score/ScoreActions";
import ScoreHistory from "../components/score/ScoreHistory";
import ScoreAnswer from "../components/score/ScoreAnswer";

const Score = () => {
  const attempts = JSON.parse(localStorage.getItem("quizResults")) || [];

  const latestAttempt =
    attempts.length > 0 ? attempts[attempts.length - 1] : null;

  const latestScore = latestAttempt ? latestAttempt.score : 0;

  return (
    <section className="min-h-screen bg-background py-10 px-6">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-7xl p-6 shadow-[0_0_25px_rgba(99,102,241,0.25)]">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-text mb-8">
          Quiz Results Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-5">
          {/* 🏆 SCORE CARD */}
          <ScoreCard
            latestScore={latestScore}
            latestAttempt={latestAttempt}
            attempts={attempts}
          />

          {/* 📊 SUMMARY */}
          <ScoreSummary latestAttempt={latestAttempt} />

          {/* 🔁 ACTIONS */}
          <ScoreActions />

          {/* 📜 HISTORY */}
          <ScoreHistory attempts={attempts} />

          {/* ✅ ANSWER REVIEW */}
          <ScoreAnswer latestAttempt={latestAttempt} />
        </div>
      </div>
    </section>
  );
};

export default Score;
