import React from 'react';
import PropTypes from 'prop-types';

import styles from './Board.module.css';

export default function Board({ children, bgColor, title }) {
  return (
    <div className={styles.root}>
      <div style={{ backgroundColor: bgColor }}>
        <span>{title}</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

Board.propTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
