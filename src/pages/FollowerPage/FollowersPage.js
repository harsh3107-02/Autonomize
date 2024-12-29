import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header/Header';

const FollowersPage = () => {
  const { username } = useParams();
  const { data: userData } = useFetch(`https://api.github.com/users/${username}`);
  const { data: followers } = useFetch(`https://api.github.com/users/${username}/followers`);
  const navigate = useNavigate();  

  const handleGoBack = () => {
    navigate(`/repos/${username}`);
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>User Information</h3>
          {userData ? (
            <div>
              <img 
                src={userData.avatar_url} 
                alt={userData.login} 
                width="120" 
                style={{ borderRadius: '50%', marginBottom: '20px' }}
              />
              <h4 style={{ color: '#0077b5' }}>{userData.name || userData.login}</h4>
              <p style={{ fontSize: '16px', color: '#555' }}><strong>Username:</strong> {userData.login}</p>
              <p style={{ fontSize: '16px', color: '#555' }}><strong>Followers:</strong> {userData.followers}</p>
              <p style={{ fontSize: '16px', color: '#555' }}><strong>GitHub:</strong> <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>View Profile</a></p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>

        <div style={{ flex: 2, marginLeft: '30px' }}>
          <button 
            onClick={handleGoBack} 
            style={{ 
              marginBottom: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#0077b5', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s' 
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#005f8b'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b5'}
          >
            Go Back to Repositories
          </button>
          {followers ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {followers.map(follower => (
                <div key={follower.id} style={{ padding: '20px' }}>
                  <img 
                    src={follower.avatar_url} 
                    alt={follower.login} 
                    width="80" 
                    style={{ borderRadius: '50%', marginBottom: '15px', display: 'block', margin: '0 auto' }}
                  />
                  <h4 style={{ textAlign: 'center', color: '#0077b5' }}>
                    <Link to={`/repos/${follower.login}`} style={{ textDecoration: 'none', color: '#0077b5', fontWeight: 'bold' }}>
                      {follower.login}
                    </Link>
                  </h4>
                  <p style={{ textAlign: 'center', color: '#555' }}>{follower.bio || 'No bio available'}</p>
                  {follower.location && <p style={{ textAlign: 'center', color: '#555' }}><strong>Location:</strong> {follower.location}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p>No followers found or fetching data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowersPage;
