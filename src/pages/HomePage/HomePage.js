import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'; 

const HomePage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/repos/${username}`);
    } else {
      alert('Please enter a valid GitHub username.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Header />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: '8px', width: '300px', marginTop: '20px' }}
      />
      <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Search
      </button>
    </div>
  );
};

export default HomePage;
