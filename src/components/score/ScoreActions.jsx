import React from "react";
import { Link } from "react-router-dom";
import { LuRotateCcw, LuHouse } from "react-icons/lu";

const ScoreActions = () => {
  return (
    <div className="col-span-1 bg-background border border-border rounded-2xl p-6 flex flex-col justify-center gap-5 min-h-[380px]">
      <Link
        to="/quizzes"
        className="bg-primary text-text py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <LuRotateCcw size={20} />
        Retake Quiz
      </Link>

      <Link
        to="/"
        className="bg-surface border border-border text-text py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-primary/10 transition-all"
      >
        <LuHouse size={20} />
        Back to Home
      </Link>
    </div>
  );
};

export default ScoreActions;
