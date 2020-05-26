import React from 'react';
import LazyLoad from 'react-lazyload';
import { propTypes as themeCardProps } from '../../view-models/ThemeViewModel'
import styles from './theme-card.module.scss';
import ImagePlaceholder from '../image-placeholder/ImagePlaceholder';

const propTypes = {
  ...themeCardProps,
}

const defaultProps = null;

function ThemeCard({Title, Description, PrimaryImageUri, Items}) {
  return (
    <div className={styles.themeCard}>
      {PrimaryImageUri ?
        <LazyLoad offset={100} resize debounce throttle>
          <img width={1920} height={1080} alt={Title} className={styles.image} src={PrimaryImageUri} />
        </LazyLoad>
        : <ImagePlaceholder />
      }
      <h2> {Title} </h2>
      <p>{Description}</p>
    </div>
  );
}

ThemeCard.propTypes = propTypes;
ThemeCard.defaultProps = defaultProps;

export default ThemeCard;