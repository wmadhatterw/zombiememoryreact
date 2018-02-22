import React from 'react';
import PropTypes from 'prop-types';

const Col = ({children, size}) => (
  <div className={`col-${size}`}>
    {children}
  </div>
  );

Col.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired
};

export default Col;