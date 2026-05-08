import React from "react";

const ScoreCard = ({ latestScore, latestAttempt, attempts }) => {
  return (
    <div className="col-span-1 bg-background border border-border rounded-2xl p-8 flex flex-col items-center justify-center min-h-[380px]">
      <div className="relative w-44 h-44 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.45)]">
        <div className="text-center">
          <p className="text-4xl font-bold text-text">
            {latestScore}/{latestAttempt?.total ? latestAttempt.total : 0}
          </p>

          <p className="text-lg text-muted mt-1">
            {latestAttempt?.total
              ? Math.round((latestAttempt.score / latestAttempt.total) * 100)
              : 0}
            %
          </p>
        </div>
      </div>

      <p className="mt-8 text-xl font-semibold text-text text-center">
        {attempts.length === 0
          ? "No Quiz Taken Yet"
          : latestAttempt && latestAttempt.score / latestAttempt.total >= 0.8
            ? "Excellent Performance 🚀"
            : latestAttempt && latestAttempt.score / latestAttempt.total >= 0.5
              ? "Good Attempt 👏"
              : "Keep Practicing 💪"}
      </p>
    </div>
  );
};

export default ScoreCard;
