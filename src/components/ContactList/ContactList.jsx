import ContactListItem from 'components/ContactListItem/ContactListItem';
import React from 'react';
import css from './ContactList.module.css';

export default function ContactList({ contacts, filter, deleteContact }) {
  const filterContactList = contactId => {
    deleteContact(contactId);
  };

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
                deleteContact={filterContactList}
              ></ContactListItem>
            );
          })}
      </ul>
    </div>
  );
}
