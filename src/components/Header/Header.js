import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '../TextField';
import { PageTitle } from '../PageTitle';
import { PAGES_DATA } from '../../pages/constans';
import { HeaderContainer, InputWrapper } from './Header.styled';

const Header = ({ onGetQuery }) => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');

  const pageTitle = useMemo(() => {
    const currentPage = PAGES_DATA.find(
      ({ pathname }) => pathname === location.pathname
    );
    if (currentPage.pathname === '/search') {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }

    return currentPage.title;
  }, [location]);

  const handleOnChange = ({ target: { value } }) => {
    setQuery(value);
    onGetQuery(value);
  };

  return (
    <HeaderContainer>
      <PageTitle title={pageTitle} />
      {showSearch && (
        <InputWrapper>
          <TextField name="search" value={query} onChange={handleOnChange} />
        </InputWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;
