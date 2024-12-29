import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RepositoryCard from '../../components/RespositoryCard/RepositoryCard';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const RepositoryListPage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { data: userDetails, error: userError } = useFetch(`https://api.github.com/users/${username}`);
  const { data: repositories, error: repoError } = useFetch(`https://api.github.com/users/${username}/repos`);

  if (userError || repoError) {
    navigate('/error');
    return null;
  }

  return (
    <div>
      <Header />
      {userDetails && (
        <div className="user-info" style={{margin:'20px'}}>
          <img src={userDetails.avatar_url} alt="Avatar" width="50" style={{ borderRadius: '50%' }} />
          <h2>{userDetails.name || username}</h2>
          <p>{userDetails.bio}</p>
          <button style={{ 
              marginBottom: '20px', 
              padding: '10px 20px', 
              backgroundColor: 'green', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s' 
            }}><Link to={`/followers/${username}`}>View Followers</Link></button>
        </div>
      )}
      <h2>Repositories:</h2>
      <div className="repository-list">
        {repositories && repositories.map(repo => (
          <RepositoryCard key={repo.id} repo={repo} username={username} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryListPage;


