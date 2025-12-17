import { useState } from "react";

function OnlineQuiz() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: "Delhi",
    },
    {
      question: "React is developed by?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "Which symbol is used for JSX?",
      options: ["{}", "< >", "()", "[]"],
      answer: "< >",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === questions[index].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");
    setIndex(index + 1);
  };

  return (
    <>
      {/* CSS INCLUDED IN SAME FILE */}
      <style>{`
        .quiz-box {
          width: 400px;
          margin: 50px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          font-family: Arial, sans-serif;
        }

        .score {
          text-align: right;
          font-weight: bold;
          color: #444;
        }

        h2 {
          margin-bottom: 15px;
        }

        .option-btn {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 5px;
          border: 2px solid #ddd;
          background: #f9f9f9;
          cursor: pointer;
          font-size: 16px;
        }

        .option-btn:hover {
          background: #eee;
        }

        .correct {
          background-color: #c8e6c9;
          border-color: #2e7d32;
        }

        .wrong {
          background-color: #ffcdd2;
          border-color: #c62828;
        }

        .next-btn {
          margin-top: 15px;
          padding: 10px;
          width: 100%;
          border: none;
          background: #1976d2;
          color: white;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }

        .next-btn:hover {
          background: #0d47a1;
        }

        .result {
          text-align: center;
        }
      `}</style>

      <div className="quiz-box">
        <div className="score">Score: {score}</div>

        {index < questions.length ? (
          <>
            <h2>{questions[index].question}</h2>

            {questions[index].options.map((option) => {
              let btnClass = "option-btn";
              if (selected) {
                if (option === questions[index].answer) {
                  btnClass += " correct";
                } else if (option === selected) {
                  btnClass += " wrong";
                }
              }

              return (
                <button
                  key={option}
                  className={btnClass}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              );
            })}

            {selected && (
              <button className="next-btn" onClick={nextQuestion}>
                Next Question
              </button>
            )}
          </>
        ) : (
          <div className="result">
            <h2>Quiz Finished 🎉</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default OnlineQuiz;