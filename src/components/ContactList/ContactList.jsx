import ContactListItem from 'components/ContactListItem/ContactListItem';
import React, { Component } from 'react';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  filterContactList = contactId => {
    const { contacts } = this.props.state;
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );

    this.props.deleteContact(updatedContacts);
  };

  render() {
    const { contacts, filter } = this.props.state;
    return (
      <div className="contactList">
        <ul className={css.contactList}>
          {contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter);
            })
            .map(contact => {
              return (
                <ContactListItem
                  allContact={contacts}
                  contact={contact}
                  key={contact.id}
                  deleteContact={this.filterContactList}
                ></ContactListItem>
              );
            })}
        </ul>
      </div>
    );
  }
}
