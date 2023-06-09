// import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { createStore } from 'redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '111-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '222-89-12' },
    { id: 'id-3', name: 'Hermione Kline', number: '333-89-12' },
       { id: 'id-4', name: 'Hermione Kline', number: '444-89-12' },
    { id: 'id-5', name: 'Hermione Kline', number: '555-89-12' },
  ],
  filter: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'contact/addContact') {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  } else if (action.type === 'contact/deleteContact') {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
      filter: state.filter === action.payload ? '' : state.filter,
    };
  } else if (action.type === 'filter/setFilter') {
    return {
      ...state,
      filter: action.payload,
    };
  } else if (action.type === 'contact/addLSContact') {
    return {
      ...state,
      contacts: [...state.contacts, ...action.payload],
    };
  }
  return state;
};

export const store = createStore(reducer, initialState);

console.log(store.getState());
