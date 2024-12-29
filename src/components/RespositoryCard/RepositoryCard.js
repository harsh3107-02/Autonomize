// import React from 'react';
// import { Link } from 'react-router-dom';
// import './RepositroyCard.css'

// const RepositoryCard = ({ repo, username }) => {
//   const truncatedTitle = repo.name.length > 15 ? repo.name.slice(0, 12) + '...' : repo.name;

//   return (
//     <div className="repository-card">
//       <div className="repository-card-content">
//         <div className="repository-image">
//           <img
//             src={`https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`} // Random image
//             alt="Repository"
//           />
//         </div>

//         <div className="repository-details">-
//           <Link to={`/repos/${username}/${repo.name}`}>
//             <h3 style={{textDecoration:'none'}}>{truncatedTitle}<span
//                 style={{
//                   border: '2px solid #00c853',
//                   backgroundColor: '#00c853',
//                   borderRadius: '50%',
//                   marginLeft: '5px',
//                   marginTop: '10px',
//                   fontSize: '10px',
//                   color: '#00c853',
//                 }}
//               >
//                 ✅
//               </span></h3>
//           </Link>
//           <p>{repo.description || 'No description available.'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RepositoryCard;