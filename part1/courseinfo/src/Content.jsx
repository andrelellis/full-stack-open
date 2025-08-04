import Part from "./Part";

const Content = ({ parts }) => {
  const content = parts.map(({ name, exercises }, index) => (
    <Part key={index} name={name} numOfExercises={exercises}></Part>
  ));
  return <>{content}</>;
};

export default Content;
