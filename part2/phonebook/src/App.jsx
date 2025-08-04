import { useState } from "react";
import { isDuplicateName } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const resetForm = () => {
    setNewName("");
    setNewNumber("");
    document.getElementById("nameInput").focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDuplicateName(newName, persons)) {
      resetForm();
      return window.alert(`${newName} is already added to phonebook`);
    }
    const newPerson = { name: newName, number: newNumber };
    addPerson(newPerson);
    resetForm();
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input id={"nameInput"} value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
