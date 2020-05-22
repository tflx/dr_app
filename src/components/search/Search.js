import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './search-style.module.scss';

const propTypes = {
};

const defaultProps = null;

function Search({handleQuery}) {
  return (
    <form className={styles.search} onSubmit={e => e.preventDefault()}>
      <input
        className={styles.input}
        onChange={(e) => handleQuery(e.target.value)}
        placeholder='Filtrer temaer'
      />
    </form>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;