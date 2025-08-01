const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exerciseTotal={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// part and exercises arrays must have same length and be ordered
const Content = ({ parts, exercises }) => {
  const content = parts.map((part, index) => (
    <Part key={index} name={part} numOfExercises={exercises[index]}></Part>
  ));
  return <>{content}</>;
};

const Total = ({ exerciseTotal }) => {
  return <p>Number of exercises {exerciseTotal}</p>;
};

const Part = ({ name, numOfExercises }) => {
  return (
    <p>
      {name} {numOfExercises}
    </p>
  );
};

export default App;
