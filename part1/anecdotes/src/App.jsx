import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const initialVotes = {};
  anecdotes.forEach((quote, index) => (initialVotes[index] = 0));
  // eg. votes = {0: 1, 1: 3, 2: 4, 3: 2}

  const [votes, setVotes] = useState(initialVotes);

  console.log("votes: ", votes);
  let maxVotes = 0;
  let mostVotedQuote = "";

  for (const key in votes) {
    if (votes.hasOwnProperty(key)) {
      // >= means the most recent quote to tie for top votes is displayed.
      if (votes[key] >= maxVotes) {
        maxVotes = votes[key];
        mostVotedQuote = anecdotes[key];
      }
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <button
        onClick={() => {
          const newVotes = { ...votes };
          newVotes[selected] += 1;
          setVotes(newVotes);
        }}
      >
        vote
      </button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdote
      </button>
      {!!maxVotes && (
        <>
          <h2>Anecdote with most votes</h2>
          <p>{mostVotedQuote}</p>
          <p>has {maxVotes} votes</p>
        </>
      )}
    </>
  );
};

export default App;
