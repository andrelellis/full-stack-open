import { useState } from "react";
import { isDuplicateName } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // State Functions
  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Form Functions
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

  const resetForm = () => {
    setNewName("");
    setNewNumber("");
    document.getElementById("nameInput").focus();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </p>

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
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default App;
