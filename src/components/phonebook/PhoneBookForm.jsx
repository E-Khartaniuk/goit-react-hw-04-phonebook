import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneBookForm.module.css';

export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handlerSubmit = event => {
    event.preventDefault();

    const contactName = this.state.name;

    const contactsData = {
      id: nanoid(8),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addToContact(contactsData, contactName, this.clearForm);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handlerSubmit} className={css.form}>
          {' '}
          <label htmlFor="" className={css.formLable}>
            {' '}
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handlerChenge}
              className={css.formInput}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handlerChenge}
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
}
