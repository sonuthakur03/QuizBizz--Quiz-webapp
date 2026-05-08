import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Score from "./Score";
import Topics from "./Topics";
import Contact from "./Contact";

const Main = () => {
  return (
    <main className="bg-background max-h-screen px-16 py-8 text-text flex-center flex-col gap-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/topics" element={<Topics />} />
        <Route
          path="*"
          element={<h2 className="text-3xl">Page Not Found</h2>}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
