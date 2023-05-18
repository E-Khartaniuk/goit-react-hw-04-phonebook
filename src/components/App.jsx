import React, { Component } from 'react';

import { PhoneBookForm } from './phonebook/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './styleMain/styleMaine.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addToContact = (contactsData, contactName, clearForm) => {
    const unicContactSearch = this.state.contacts.some(
      contact => contact.name === contactName
    );

    if (unicContactSearch) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactsData],
        filter: '',
      };
    });

    clearForm();
  };

  deleteContact = updatedContacts => {
    this.setState({ contacts: updatedContacts });
  };

  componentDidMount() {
    const contactsFromLocalStotage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLocalStotage);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

    console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    const filterValue = this.state.filter;
    return (
      <div className={css.conteiner}>
        <h3 className={css.title}>Phone book</h3>
        <PhoneBookForm
          state={this.state}
          handlerChenge={this.handlerChenge}
          handlerSubmit={this.handlerSubmit}
          addToContact={this.addToContact}
        />
        <h4 className={css.titleSecond}>Find Contact</h4>
        <Filter handlerChenge={this.handlerChenge} filterValue={filterValue} />
        <h4 className={css.titleSecond}>Contacts</h4>
        <ContactList
          state={this.state}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
// }
