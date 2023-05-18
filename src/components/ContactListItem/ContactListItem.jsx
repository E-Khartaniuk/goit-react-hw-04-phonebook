import React, { Component } from 'react';
import css from './ContactListItem.module.css';

export default class ContactListItem extends Component {
  findIdToDeleteContact = () => {
    const { contact, deleteContact } = this.props;

    deleteContact(contact.id);
  };

  render() {
    const { name, number } = this.props.contact;
    return (
      <li className={css.listItem}>
        {name}: {number}{' '}
        <button onClick={this.findIdToDeleteContact} className={css.button}>
          Delete
        </button>
      </li>
    );
  }
}
