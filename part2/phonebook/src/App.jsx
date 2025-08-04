import { useState } from "react";
import { isDuplicateName } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDuplicateName(newName, persons)) {
      setNewName("");
      return window.alert(`${newName} is already added to phonebook`);
    }
    const newPerson = { name: newName };
    addPerson(newPerson);
    setNewName("");
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
