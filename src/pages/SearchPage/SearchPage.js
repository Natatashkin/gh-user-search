import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UsersList, UsersListItem } from '../../components';
import debounce from 'lodash.debounce';
import * as ghApi from '../../api/ghApi';

const SearchPage = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userList, setUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query);
  const [page, setPage] = useState(3);
  const [loading, setIsLoading] = useState(false);
  const currentQuery = searchParams.get('q');

  const makeSearchQuery = useCallback(async (data, page) => {
    try {
      setIsLoading(true);
      const users = await ghApi.searchUsers(data, page);
      setUserList(users);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const debounceRequest = useCallback(debounce(makeSearchQuery, 1000), []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      debounceRequest(searchQuery, page);
    }
  }, [searchQuery, page, debounceRequest]);

  useEffect(() => {
    setSearchQuery(query);
    if (query) {
      setSearchParams({ q: query });
    } else {
      // console.log(searchParams.has('q'));
      searchParams.delete('q');
    }
  }, [query]);

  console.log('currentQuery >>>', currentQuery);
  console.log('searchQuery >>>', searchQuery);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {userList && (
        <UsersList>
          {userList.map(item => (
            <UsersListItem key={item.id} item={item} />
          ))}
        </UsersList>
      )}
    </div>
  );
};

export default SearchPage;
