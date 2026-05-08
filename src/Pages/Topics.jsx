import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = [
    { id: 9, name: "General Knowledge", icon: "🧠" },
    { id: 17, name: "Science & Nature", icon: "🔬" },
    { id: 23, name: "History", icon: "📜" },
    { id: 21, name: "Sports", icon: "🏏" },
    { id: 24, name: "Politics", icon: "🏛️" },
    { id: 27, name: "Animals", icon: "🐾" },
  ];

  return (
    <section className="max-h-screen bg-background flex items-center justify-center p-6 ">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-7xl p-4">
        {/* 🧠 ABOUT SECTION */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text mb-3">About Quiz App</h1>
          <p className="text-muted leading-relaxed">
            This is a dynamic quiz platform where you can test your knowledge
            across different categories like science, history, sports and more.
            Each quiz is generated in real-time and your scores are saved to
            track your progress over time.
          </p>
        </div>

        {/* 🎯 TOPICS SECTION */}
        <h2 className="text-2xl font-semibold text-text mb-6">
          Choose a Topic
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to="/quizzes"
              className="bg-background border border-border rounded-xl p-6 hover:bg-primary/10 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{topic.icon}</div>
              <h3 className="text-text font-semibold text-lg">{topic.name}</h3>
              <p className="text-muted text-sm mt-2">
                Start a quiz in {topic.name}
              </p>
            </Link>
          ))}
        </div>

        {/* 🔥 FOOTER NOTE */}
        <div className="mt-10 text-center text-muted text-sm">
          Built with React + Open Trivia API ⚡
        </div>
      </div>
    </section>
  );
};

export default Topics;
