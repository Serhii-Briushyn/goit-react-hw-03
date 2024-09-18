import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import "./App.css";

const initialContacts = [
  { id: nanoid(), name: "Gergely Tancos", number: "62" },
  { id: nanoid(), name: "Barbora Tothova", number: "56" },
  { id: nanoid(), name: "Lubomira Sykorova", number: "79" },
  { id: nanoid(), name: "Petra Varyova", number: "41" },
  { id: nanoid(), name: "Eleonora Petroova", number: "66" },
  { id: nanoid(), name: "Ildiko Braunova", number: "68" },
  { id: nanoid(), name: "Olha Briushyna", number: "65" },
  { id: nanoid(), name: "Lucia Grigova", number: "78" },
  { id: nanoid(), name: "Jana Sucikova", number: "40" },
  { id: nanoid(), name: "Jozef Tazky", number: "48" },
  { id: nanoid(), name: "Milan Zalesak", number: "47" },
  { id: nanoid(), name: "Adrian Pasztor", number: "74" },
  { id: nanoid(), name: "Igor Duben", number: "67" },
  { id: nanoid(), name: "Dominika Stankova", number: "59" },
  { id: nanoid(), name: "Jakub Samel", number: "45" },
  { id: nanoid(), name: "Jakub Sakmar", number: "77" },
  { id: nanoid(), name: "Martin Kovac", number: "44" },
  { id: nanoid(), name: "Roman Milata", number: "49" },
  { id: nanoid(), name: "Robert Vanco", number: "46" },
  { id: nanoid(), name: "Tomas Miklos", number: "55" },
  { id: nanoid(), name: "Martin Snejt", number: "50" },
  { id: nanoid(), name: "Ondrej Remenar", number: "61" },
  { id: nanoid(), name: "Anton Kuchara", number: "42" },
  { id: nanoid(), name: "Martin Jaroska", number: "58" },
  { id: nanoid(), name: "Martin Tomcala", number: "72" },
  { id: nanoid(), name: "Andrej Polak", number: "57" },
  { id: nanoid(), name: "Jan Tomasik", number: "73" },
  { id: nanoid(), name: "Radoslav Behun", number: "43" },
  { id: nanoid(), name: "Lubos Jankaj", number: "69" },
  { id: nanoid(), name: "Tomas Polakovic", number: "53" },
  { id: nanoid(), name: "Tomas Ondruska", number: "63" },
  { id: nanoid(), name: "Frantisek Blasko", number: "75" },
  { id: nanoid(), name: "Peter Ikrenyi", number: "52" },
  { id: nanoid(), name: "Warehouse", number: "70" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
