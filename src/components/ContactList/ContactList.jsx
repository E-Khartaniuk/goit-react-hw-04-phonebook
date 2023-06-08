import ContactListItem from 'components/ContactListItem/ContactListItem';
import React from 'react';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);

  return (
    <div className="contactList">
      <ul className={css.contactList}>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filterValue);
          })
          .map(contact => {
            return (
              <ContactListItem
                contact={contact}
                key={contact.id}
              ></ContactListItem>
            );
          })}
      </ul>
    </div>
  );
}
