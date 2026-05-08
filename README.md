# Quizify - React Quiz Application

## 📌 Overview

Quizify is a modern and interactive quiz application built with React and Tailwind CSS.
The app allows users to:

- Select quiz categories
- Choose difficulty levels
- Attempt Multiple Choice and True/False quizzes
- Navigate between questions
- Track scores
- Store previous quiz attempts using localStorage
- View previous quiz history

The application uses the Open Trivia Database API for fetching quiz questions dynamically.

---

# 🚀 Features

- 🎯 Dynamic quiz generation using OpenTDB API
- 🧠 Multiple Choice & True/False support
- 🔀 Randomized options
- 📊 Score calculation system
- 💾 LocalStorage quiz history
- 🎨 Modern responsive UI
- ⚡ Smooth transitions and hover effects
- 📱 Mobile-friendly layout

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Icons
- React Router DOM

## API

- Open Trivia DB API

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Quiz/
│   │   ├── QuizForm.jsx
│   │   ├── QuizMCQ.jsx
│   │   ├── QuizTF.jsx
│   │   └── ScorePage.jsx
│
├── hooks/
│   └── useQuiz.js
│
├── utils/
│   └── quizUtils.js
│
├── pages/
│   └── Quiz.jsx
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
```

## 2️⃣ Navigate into project

```bash
cd quiz-app
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Start development server

```bash
npm run dev
```

---

# 🌐 API Used

## Open Trivia Database

API Endpoint:

```bash
https://opentdb.com/api.php
```

Example:

```bash
https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple
```

---

# 🧠 Application Flow

```text
Quiz Form
   ↓
Fetch Questions
   ↓
Display Questions
   ↓
Store Answers
   ↓
Calculate Score
   ↓
Save Result to LocalStorage
   ↓
Display Score Dashboard
```

---

# 💾 LocalStorage Structure

```js
[
  {
    id: 123456,
    score: 8,
    total: 10,
    category: "History",
    difficulty: "medium",
    type: "multiple",
    date: "2026-05-08",
  },
];
```

---

# 🎨 UI Design Highlights

- Dark modern theme
- Indigo primary color palette
- Glassmorphism-inspired cards
- Interactive hover animations
- Responsive dashboard layout

---

# 📸 Future Improvements

- Timer system
- Leaderboard
- Authentication
- Multiplayer quizzes
- Category analytics
- Confetti animations
- Sound effects
- Backend database integration

---

# 👨‍💻 Author

Built with React, Tailwind CSS, and Open Trivia DB API.

---

# 📄 License

This project is open-source and available for learning purposes.
