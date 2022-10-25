import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ onChange, value, label = '', type = 'text', name }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
