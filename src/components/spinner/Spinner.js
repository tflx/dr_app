import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './spinner-style.module.scss';

const propTypes = {
};

const defaultProps = null;

function Spinner(props) {
  return (
    <svg className={styles.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle className={styles.path} stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;