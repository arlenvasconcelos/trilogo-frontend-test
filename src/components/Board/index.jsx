import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

export default function Board({ children, bgColor, title }) {
  return (
    <Card
      size="small"
      title={title}
      style={{
        width: 300, borderRadius: ' 8px 8px 0 0', border: 0, height: '100%',
      }}
      headStyle={{
        borderRadius: ' 8px 8px 0 0',
        color: '#141414',
        backgroundColor: bgColor,
      }}
      bodyStyle={{
        overflowY: 'auto',
        height: 'calc(100% - 40px)',
      }}
    >
      {children}
    </Card>
  );
}

Board.propTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
