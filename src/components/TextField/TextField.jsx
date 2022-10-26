import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '../IconButton';
import { FiSearch } from 'react-icons/fi';
import {
  Label,
  InputContainer,
  Input,
  ButtonContainer,
} from './TexyField.styled';

// variants:
// variant='input'
// variant='search'

const TextField = ({
  onChange,
  value = '',
  label = '',
  type = 'text',
  name,
  variant = 'input',
}) => {
  const isSearchField = variant === 'search';
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputContainer>
        <Input type={type} name={name} onChange={onChange} value={value} />
        {isSearchField && (
          <ButtonContainer>
            <IconButton>
              <FiSearch color="grey" />
            </IconButton>
          </ButtonContainer>
        )}
      </InputContainer>
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
