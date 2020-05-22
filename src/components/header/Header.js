import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './header-style.module.scss';

const propTypes = {
};

const defaultProps = null;

function Header() {
  return (
    <header className={styles.header}>
      <h1>Temaer</h1>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;