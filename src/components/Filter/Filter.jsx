import React from 'react';

import css from './Filter.module.css';

export default function Filter({ filterValue, handleFilterChenge }) {
  return (
    <input
      className={css.filterInput}
      name="filter"
      value={filterValue}
      onChange={handleFilterChenge}
    ></input>
  );
}
