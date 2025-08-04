import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

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

    const resetForm = () => {
      setNewName("");
      setNewNumber("");
      document.getElementById("nameInput").focus();
    };

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
      <Filter filter={filter} changeHandler={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        nameChangeHandler={handleNameChange}
        numberChangeHandler={handleNumberChange}
        submitHandler={handleSubmit}
      />

      <h3>Numbers</h3>
      <Persons personList={persons} filter={filter} />
    </div>
  );
};

export default App;
