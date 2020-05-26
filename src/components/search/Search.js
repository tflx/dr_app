import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './search-style.module.scss';

const propTypes = {
};

const defaultProps = null;

function Search({handleQuery}) {
  return (
    <form className={styles.search} onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Filtrer temaer</label>
      <input
        name="search"
        className={styles.input}
        onChange={(e) => handleQuery(e.target.value)}
        placeholder='Fx. dokumentar'
      />
    </form>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;