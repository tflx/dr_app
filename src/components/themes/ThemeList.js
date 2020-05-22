import React from 'react'; // eslint-disable-line no-unused-vars
import Proptypes from 'prop-types'
import ThemeViewModel from '../../view-models/ThemeViewModel'
import ThemeCard from '../theme-card/ThemeCard';
import styles from './theme-list.module.scss';

const propTypes = {
  themes: Proptypes.arrayOf(ThemeViewModel)
};

const defaultProps = null;

function ThemeList({themes}) {

  return (
    <ul className={styles.themeList}>
      {themes.map(theme =>
        <li className={styles.themeItem} key={theme.Urn}>
          <ThemeCard {...theme} />
        </li>)
      }
    </ul>
  );
}

ThemeList.propTypes = propTypes;
ThemeList.defaultProps = defaultProps;

export default ThemeList;