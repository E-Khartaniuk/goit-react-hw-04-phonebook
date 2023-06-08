import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneBookForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

export function PhoneBookForm({ addToContact }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();

  const handlerChenge = event => {
    const { value } = event.currentTarget;
    event.currentTarget.name === 'name'
      ? setContactName(value)
      : setContactNumber(value);
  };

  const clearForm = () => {
    setContactName('');
    setContactNumber('');
  };

  const handlerSubmit = event => {
    event.preventDefault();

    const unicContactSearch = state.contacts.some(
      contact => contact.name === contactName
    );

    if (unicContactSearch) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    dispatch({
      type: 'contact/addContact',
      payload: { id: nanoid(8), name: contactName, number: contactNumber },
    });

    clearForm();
  };

  return (
    <div>
      <form action="" onSubmit={handlerSubmit} className={css.form}>
        {' '}
        <label htmlFor="" className={css.formLable}>
          {' '}
          Name
          <input
            type="text"
            name="name"
            pattern="/^[a-zA-Zа-яА-Я]+(([\' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contactName}
            onChange={handlerChenge}
            className={css.formInput}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            pattern="/\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contactNumber}
            onChange={handlerChenge}
            className={css.formInput}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
