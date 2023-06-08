import React from 'react';
import css from './ContactListItem.module.css';

import { useDispatch } from 'react-redux';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const findIdToDeleteContact = () => {
    dispatch({
      type: 'contact/deleteContact',
      payload: contact.id,
    });
    // deleteContact(contact.id);
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
