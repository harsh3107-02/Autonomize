export const fetchUserData = (username) => {
    return Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]);
  };
  
  export const fetchFollowers = (username) => {
    return fetch(`https://api.github.com/users/${username}/followers`);
  };
  