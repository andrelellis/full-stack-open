import personService from "./services/persons";

const Person = ({ person, handleDelete }) => {
  const { id, name, number } = person;
  return (
    <p>
      {name} {number} <button onClick={() => handleDelete(id)}>delete</button>
    </p>
  );
};

export default Person;
