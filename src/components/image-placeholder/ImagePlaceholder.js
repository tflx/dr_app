import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './image-placeholder.module.scss';
const propTypes = {
};

const defaultProps = null;

function ImagePlaceholder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imagePlaceholder}></div>
    </div>
  );
}

ImagePlaceholder.propTypes = propTypes;
ImagePlaceholder.defaultProps = defaultProps;

export default ImagePlaceholder;