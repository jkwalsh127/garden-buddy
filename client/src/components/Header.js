import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';
// import './styles/HeaderMediaQueries.css';

// import Auth from '../../utils/auth';

const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
  return (
    <header className="header">
      <Link className="" to="/">
        <h1 className="app-title">
          Garden Buddy
        </h1>
      </Link>
      <div className='nav'>
        {/* {Auth.loggedIn() ? ( */}
          <>
            <Link className="nav-link" to="/findzone">
              Find Zone
            </Link>
            <Link className="nav-link" to="/profile">
              View Profile
            </Link>
          </>
        {/*}) : (
          <>
          </>
        )}*/}
      </div>
    </header>
  );
};

export default Header;
