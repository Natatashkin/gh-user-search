import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '../TextField';
import { PageTitle } from '../PageTitle';
import { PAGES_DATA } from '../../pages/constans';
import { HeaderContainer, SearchFieldContainer, Form } from './Header.styled';

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

  const handleOnChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleSearchResults = e => {
    console.log(searchQuery);
  };

  return (
    <HeaderContainer>
      <PageTitle title={pageTitle} />
      {showSearch && (
        <Form onSubmit={handleSearchResults}>
          <SearchFieldContainer>
            <TextField
              variant="search"
              name="search"
              value={searchQuery}
              onChange={handleOnChange}
            />
          </SearchFieldContainer>
        </Form>
      )}
    </HeaderContainer>
  );
};

export default Header;
