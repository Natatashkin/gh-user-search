import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '../TextField';
import { PageTitle } from '../PageTitle';
import { PAGES_DATA } from '../../pages/constans';
import { HeaderContainer, Form } from './Header.styled';
import debounce from 'lodash.debounce';

const Header = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const pageTitle = useMemo(() => {
    const currentPage = PAGES_DATA.find(
      ({ pathname }) => pathname === location.pathname
    );
    if (currentPage.pathname === '/search') {
      setShowSearch(true);
    }

    return currentPage.title;
  }, [location]);

  // const handleOnChange = debounce(setSearchQuery, 1000);
  const handleOnChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  console.log(searchQuery);
  const handleSearchResults = e => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <HeaderContainer>
      <PageTitle title={pageTitle} />
      {showSearch && (
        <Form onSubmit={handleSearchResults}>
          <TextField
            name="search"
            value={searchQuery}
            onChange={handleOnChange}
          />
        </Form>
      )}
    </HeaderContainer>
  );
};

export default Header;
