import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/header.css';
// import './styles/HeaderMediaQueries.css';

// import Auth from '../../utils/auth';

const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontSize: isActive ? '20px' : '16px',
      color: isActive ? 'var(--orange)' : 'var(--light-white)',
    }
  }
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
            <NavLink style={navLinkStyles} className="nav-link" to="/findzone">
              Find Zone
            </NavLink>
            <NavLink style={navLinkStyles} className="nav-link" to="/profile">
              View Profile
            </NavLink>
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
