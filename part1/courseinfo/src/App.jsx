const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const exerciseTotal = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total exerciseTotal={exerciseTotal} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// part and exercises arrays must have same length and be ordered
const Content = ({ parts }) => {
  const content = parts.map(({ name, exercises }, index) => (
    <Part key={index} name={name} numOfExercises={exercises}></Part>
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
