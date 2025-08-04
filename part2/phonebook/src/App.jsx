import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

import { isDuplicateName } from "./helpers";

const dbURL = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(dbURL).then((response) => {
      setPersons(response.data);
    });
  }, []);

  // State Functions
  const addPerson = (newPerson) => {
    axios.post(dbURL, newPerson).then((response) => {
      console.log(response.data);
      setPersons([...persons, response.data]);
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Form Functions
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
