import React, { useState, useEffect } from 'react';

import { PhoneBookForm } from './phonebook/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './styleMain/styleMaine.module.css';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChenge = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };
  console.log(contacts);

  const addToContact = (contactsData, contactName, clearForm) => {
    const unicContactSearch = contacts.some(
      contact => contact.name === contactName
    );

    if (unicContactSearch) {
      alert(`${contactName} is already in contacts`);
      return;
    }
    setContacts([...contacts, contactsData]);
    setFilter('');

    clearForm();
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  useEffect(() => {
    const contactsFromLocalStotage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLocalStotage);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Phone book</h3>
      <PhoneBookForm props={contacts} addToContact={addToContact} />
      <h4 className={css.titleSecond}>Find Contact</h4>
      <Filter handleFilterChenge={handleFilterChenge} filterValue={filter} />
      <h4 className={css.titleSecond}>Contacts</h4>
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
}
