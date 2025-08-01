const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const exerciseTotal = parts.reduce(
    (numOfExercises, part) => numOfExercises + part.exercises,
    0
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exerciseTotal={exerciseTotal} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

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
