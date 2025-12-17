import React, { useState } from "react";

function Poll() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
  });

  const handleVote = (option) => {
    setVotes({ ...votes, [option]: votes[option] + 1 });
  };

  const totalVotes =
    votes.OptionA + votes.OptionB + votes.OptionC;

  return (
    <div className="poll-container">
      <h2>📊 Classroom Online Poll</h2>
      <p><b>Question:</b> Which subject do you like the most?</p>

      <button onClick={() => handleVote("OptionA")}>
        Mathematics
      </button>

      <button onClick={() => handleVote("OptionB")}>
        Science
      </button>

      <button onClick={() => handleVote("OptionC")}>
        Computer Science
      </button>

      <div className="result">
        <h3>Live Results</h3>
        <p>Mathematics: {votes.OptionA}</p>
        <p>Science: {votes.OptionB}</p>
        <p>Computer Science: {votes.OptionC}</p>
        <p><b>Total Votes:</b> {totalVotes}</p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .poll-container {
          width: 400px;
          margin: 40px auto;
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          background: #f5f7fa;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }

        button {
          width: 100%;
          margin: 8px 0;
          padding: 10px;
          font-size: 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #45a049;
        }

        .result {
          margin-top: 20px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default Poll;