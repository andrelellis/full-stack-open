import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services/persons";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";

import { isDuplicateName } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const notify = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  // State Functions
  const addPerson = (newPerson) => {
    personService.createOne(newPerson).then((newEntry) => {
      notify(`added ${newEntry.name}`);
      setPersons([...persons, newEntry]);
    });
  };

  const updatePerson = (updatedPerson) => {
    personService.updateOne(updatedPerson).then((updatedEntry) => {
      notify(`Updated ${updatedEntry.name}`);
      setPersons(
        persons.map((person) =>
          person.id === updatedEntry.id ? updatedEntry : person
        )
      );
    });
  };

  const deletePerson = (id) => {
    personService.deleteOne(id).then((deletedEntry) => {
      notify(`deleted ${deletedEntry.name}`);
      setPersons(
        persons.filter((person) => {
          return person.id !== deletedEntry.id;
        })
      );
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
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const outdatedPerson = persons.filter(
          (person) => person.name === newName
        )[0];
        const updatedPerson = { ...outdatedPerson, number: newNumber };
        updatePerson(updatedPerson);
      }
      return resetForm();
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

  const handleDelete = (id) => {
    const person = persons.filter((person) => person.id === id)[0];
    if (window.confirm(`Delete ${person.name}?`)) deletePerson(id);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
      <Persons
        personList={persons}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
