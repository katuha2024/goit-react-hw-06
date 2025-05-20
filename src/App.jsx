import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components2/contactform/ContactForm.jsx';
import ContactList from './components2/contactlist/ContactList.jsx';
import SearchBox from './components2/searchbox/SearchBox.jsx';
import './App.css';


function App() {
  const initialPhoneBook = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Ira', number: '0683436265' },
    {id: 'id-7', name: 'Katya', number: '0982916397'},
  ];

  const initAddContactValues = {
    contactName: "",
    contactPhone: "",
  };

  const [phoneBook, setPhoneBook] = useState(
    JSON.parse(window.localStorage.getItem('userContacts')) ?? initialPhoneBook
  );
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    window.localStorage.setItem('userContacts', JSON.stringify(phoneBook));
  }, [phoneBook]);

  const handleSubmit = (values) => {
    setPhoneBook([
      ...phoneBook,
      { id: nanoid(), name: values.contactName, number: values.contactPhone },
    ]);
  };

  const clickDeleteButton = (id) => {
    setPhoneBook((prevPhoneBook) =>
      prevPhoneBook.filter((contact) => contact.id !== id)
    );
  };

  const handleChange = (evt) => {
    setSearchPhrase(evt.target.value);
  };

  const filteredContacts = phoneBook.filter((contact) =>
    contact.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="Wrap">
        <div className="componentsWrap">
          <ContactForm onSubmit={handleSubmit} initValues={initAddContactValues} />
          <SearchBox value={searchPhrase} onChange={handleChange} />
        </div>
        <div className="Wrap">
          <ContactList contacts={filteredContacts} onDelete={clickDeleteButton} />
        </div>
      </div>
    </div>
  );
}

export default App;