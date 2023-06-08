import React, { useState, useEffect } from 'react';

// import { configureStore } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

import { PhoneBookForm } from './phonebook/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './styleMain/styleMaine.module.css';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // ]);

  // const addToContact = (contactsData, contactName, clearForm) => {
  //   const unicContactSearch = contacts.some(
  //     contact => contact.name === contactName
  //   );

  //   if (unicContactSearch) {
  //     alert(`${contactName} is already in contacts`);
  //     return;
  //   }
  //   setContacts([...contacts, contactsData]);
  //   // setFilter('');

  //   clearForm();
  // };

  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   const contactsFromLS = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsFromLS);
  //   if (parsedContacts.length !== 0) {
  //     console.log('parsedContacts', parsedContacts);
  //     dispatch({ type: 'contact/addLSContact', payload: parsedContacts });
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Phone book</h3>
      <PhoneBookForm />
      <h4 className={css.titleSecond}>Find Contact</h4>
      <Filter />
      <h4 className={css.titleSecond}>Contacts</h4>
      <ContactList></ContactList>
    </div>
  );
}
