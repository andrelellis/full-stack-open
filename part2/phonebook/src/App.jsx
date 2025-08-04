import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

import { isDuplicateName } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
