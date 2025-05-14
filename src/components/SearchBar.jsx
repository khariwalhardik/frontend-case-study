import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({
  setSearchTerm,
  setFilterLocation,
  setFilterInterest,
  availableLocations,
  availableInterests,
}) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />

      <select
        onChange={(e) => setFilterLocation(e.target.value)}
        defaultValue=""
        className={styles.select}
      >
        <option value="">All Locations</option>
        {availableLocations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setFilterInterest(e.target.value)}
        defaultValue=""
        className={styles.select}
      >
        <option value="">All Interests</option>
        {availableInterests.map((int) => (
          <option key={int} value={int}>
            {int}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
