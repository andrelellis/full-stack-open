import Person from "./Person";

const Persons = ({ personList, filter, handleDelete }) => {
  return (
    <>
      {personList
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person) => (
          <Person key={person.id} person={person} handleDelete={handleDelete} />
        ))}
    </>
  );
};

export default Persons;
