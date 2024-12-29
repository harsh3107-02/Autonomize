import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const RepositoryDetailPage = () => {
  const { username, repoName } = useParams();
  const { data: repository, error } = useFetch(`https://api.github.com/repos/${username}/${repoName}`);

  if (error) return <p>Error loading repository details.</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', marginTop: '100px' }}>
      {repository && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <div style={{ width: '45%' }}>
            {repository.owner && (
              <img
                src={`https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`}
                alt={repository.owner.login}
                style={{ width: '100px', borderRadius: '50%' }}
              />
            )}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  border: '2px solid #00c853',
                  backgroundColor: '#00c853',
                  borderRadius: '50%',
                  marginRight: '5px',
                  marginTop: '10px',
                  fontSize: '15px',
                  color: '#00c853',
                }}
              >
                ✅
              </span>
              <h4 style={{ margin: 0, marginTop: '10px' }}>Verified by GitHub</h4>
            </div>
            <p style={{ color: 'black', width: '280px' }}>
  GitHub confirms that this app meets the <span style={{ color: 'blue' }}>requirements for verification</span>.
</p>

            <p>
              <strong>Language:</strong> {repository.language || 'Loading...'}
            </p>
          </div>

          <div style={{ width: '45%' }}>
            <h4 style={{ color: 'grey', marginBottom: '10px' }}>Application</h4>
            {repository && (
              <>
                <h1 style={{ margin: '0', marginBottom: '10px' }}>{repository.name}</h1>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                  <button
                    style={{
                      backgroundColor: '#00c853',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginTop: '5px',
                    }}
                  >
                    Visit Repository
                  </button>
                </a>
                <p>
                  <strong>Description:</strong> {repository.description || 'No description available'}
                </p>
                <p>
                  <Link to={`/repos/${username}`} style={{ color: '#007bff' }}>
                  <button 
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
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoryDetailPage;


