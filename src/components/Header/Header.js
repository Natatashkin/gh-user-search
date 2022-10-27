import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '../TextField';
import { PageTitle } from '../PageTitle';
import * as ghApi from '../../api/ghApi';
import { PAGES_DATA } from '../../pages/constans';
import { HeaderContainer, InputWrapper } from './Header.styled';
import debounce from 'lodash.debounce';

const Header = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [seachResult, setSearchResult] = useState(null);

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
    setSearchQuery(value);
  };

  const makeSearchQuery = useCallback(async query => {
    const result = await ghApi.searchUsers(query);
    setSearchResult(result.items);
  }, []);

  const debounceRequest = useCallback(debounce(makeSearchQuery, 1000), []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      debounceRequest(searchQuery);
    }
  }, [searchQuery, debounceRequest]);

  console.log(seachResult);

  return (
    <HeaderContainer>
      <PageTitle title={pageTitle} />
      {showSearch && (
        <InputWrapper>
          <TextField
            name="search"
            value={searchQuery}
            onChange={handleOnChange}
          />
        </InputWrapper>
      )}
    </HeaderContainer>
  );
};

export default Header;
