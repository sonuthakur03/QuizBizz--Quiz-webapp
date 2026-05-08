import React from "react";
import { LuBrain, LuCircleCheck, LuNetwork, LuStar } from "react-icons/lu";
import { FaBolt, FaLongArrowAltRight } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex-center justify-between max-h-screen">
      <div className="max-w-[45%] self-start mt-10 flex justify-center flex-col gap-10">
        <span className="text-xs text-text bg-slate-500/20 py-2 px-6 rounded-full font-semibold flex-center gap-2 mb-4 w-max">
          <FaBolt className="text-lg text-yellow-400 " />
          Test Your Knowledge
        </span>
        <h2 className="font-heading text-6xl ">
          Learn, Challenge, and <span className="text-primary">Win!</span>
        </h2>
        <p className="text-lg w-[65%] text-text/80">
          Join thousands of learners and challenge yourself with our exciting
          quizzes across various topics!
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/quizzes"
            className="bg-primary text-xl text-text py-4 px-12 border border-border rounded-md flex-center gap-2"
          >
            Start Quiz <FaLongArrowAltRight className="mt-1" />
          </Link>
          <Link
            to="/topics"
            className=" text-text text-xl font-semibold py-4 px-12 border-2 border-border rounded-md flex-center gap-2"
          >
            Explore Topics
          </Link>
        </div>
        <div className="flex-center gap-8 justify-between w-[90%] mt-4 text-sm text-text/80">
          <div className="flex justify-between items-center gap-6  w-full">
            <LuCircleCheck className="text-primary text-3xl" />
            <span>Wide range of topics</span>
          </div>
          <div className="bg-primary/70 h-12 w-0.5"></div>
          <div className="flex justify-between items-center gap-6 w-full ">
            <LuNetwork className="text-primary text-3xl" />
            <span>Track your progress</span>
          </div>
          <div className="bg-primary/70 h-12 w-0.5"></div>
          <div className="flex justify-between items-center gap-6 w-full">
            <LuStar className="text-primary text-3xl" />
            <span>Complete and Win Rewards</span>
          </div>
        </div>
      </div>
      <div className=" w-[50%]">
        <img src="/bgHero.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
