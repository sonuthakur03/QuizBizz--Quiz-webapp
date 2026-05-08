import React from "react";

const ScoreHistory = ({ attempts }) => {
  return (
    <div className="col-span-4 bg-background border border-border rounded-2xl p-6">
      <h2 className="text-text font-semibold mb-5 text-xl">
        Previous Attempts
      </h2>

      <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
        {attempts.length > 0 ? (
          attempts
            .slice()
            .reverse()
            .slice(0, 5)
            .map((result, index) => (
              <div
                key={result.id}
                className="grid grid-cols-4 items-center p-4 rounded-xl border border-border hover:bg-primary/10 transition-all"
              >
                <span className="text-text font-medium">
                  Attempt #{index + 1}
                </span>

                <span className="text-muted">
                  {result.score}/{result.total}
                </span>

                <span className="text-text font-semibold">
                  {((result.score / result.total) * 100).toFixed(0)}%
                </span>

                <span className="text-muted">
                  {result.category} • {result.difficulty} •{" "}
                  {result.type === "multiple" ? "MCQ" : "True / False"}
                </span>
              </div>
            ))
        ) : (
          <p className="text-muted">No previous attempts found.</p>
        )}
      </div>
    </div>
  );
};

export default ScoreHistory;
