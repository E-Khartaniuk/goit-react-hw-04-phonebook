import React from 'react';
import css from './ContactListItem.module.css';

export default function ContactListItem({ contact, deleteContact }) {
  const findIdToDeleteContact = () => {
    deleteContact(contact.id);
  };

  const name = contact.name;
  const number = contact.number;
  return (
    <li className={css.listItem}>
      {name}: {number}{' '}
      <button onClick={findIdToDeleteContact} className={css.button}>
        Delete
      </button>
    </li>
  );
}
