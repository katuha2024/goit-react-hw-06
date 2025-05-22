import React from 'react';
import ContactForm from './components/contactform/ContactForm.jsx';
import ContactList from './components/contactlist/ContactList.jsx';
import SearchBox from './components/searchbox/SearchBox.jsx';
import './App.css';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className="Wrap">
        <div className="componentsWrap">
          <ContactForm />
          <SearchBox />
        </div>
        <div className="Wrap">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
