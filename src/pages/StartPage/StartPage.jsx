// import * as ghApi from '../../api/ghApi';
// console.log(ghApi);
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ghApi from '../../api/ghApi';
import { useUser } from '../../context/UserContext';
import { Button, TextField } from '../../components';

const StartPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useUser();
  const [username, setUsername] = useState('');

  const handleChange = ({ target: { value } }) => {
    setUsername(value.trim());
  };

  const handleSkip = () => {
    navigate('/search');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await ghApi.getCurrentUser(username);
      console.log(response);
      setUserData(response);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Start Page</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          onChange={handleChange}
          value={username}
          label="Enter your github username"
        />
        <div className="buttonControls">
          <Button title="Submit" />
          <Button title="Skip" onClick={handleSkip} />
        </div>
      </form>
    </div>
  );
};

export default StartPage;
