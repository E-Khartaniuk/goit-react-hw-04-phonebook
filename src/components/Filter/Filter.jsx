import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const [value, setValue] = useState(filterValue || '');

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    setValue(value);
    dispatch({
      type: 'filter/setFilter',
      payload: value,
    });
  };

  return (
    <input
      className={css.filterInput}
      name="filter"
      value={value}
      onChange={handleFilterChange}
    ></input>
  );
}
