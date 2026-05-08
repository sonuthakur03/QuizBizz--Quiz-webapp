import React from "react";

const ScoreSummary = ({ latestAttempt }) => {
  return (
    <div className="col-span-2 bg-background border border-border rounded-2xl p-8 min-h-[380px]">
      <h2 className="text-text font-semibold text-2xl mb-6">Quiz Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-muted">Category</span>

          <span className="text-text font-medium">
            {latestAttempt?.category || "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted">Difficulty</span>

          <span className="text-text font-medium capitalize">
            {latestAttempt?.difficulty || "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted">Question Type</span>

          <span className="text-text font-medium">
            {latestAttempt?.type === "multiple"
              ? "Multiple Choice"
              : latestAttempt?.type === "boolean"
                ? "True / False"
                : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted">Correct Answers</span>

          <span className="text-green-400 font-semibold">
            {latestAttempt?.score || 0}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted">Wrong Answers</span>

          <span className="text-red-400 font-semibold">
            {latestAttempt?.total && latestAttempt?.score
              ? latestAttempt.total - latestAttempt.score
              : 0}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted">Attempt Date</span>

          <span className="text-text font-medium">
            {latestAttempt?.date || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
