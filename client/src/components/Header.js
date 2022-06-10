import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

// import './styles/HeaderMediaQueries.css';




import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontSize: isActive ? '24px' : '20px',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'var(--orange)' : 'var(--light-white)',
    }
  }
  return (
    <header className="header">
      <div className='nav'>
        {/* {Auth.loggedIn() ? ( */}
          <>
            <NavLink style={navLinkStyles} className="nav-link" to="/findzone">
              Find Zone
            </NavLink>
            <NavLink style={navLinkStyles} className="nav-link" to="/guides">
              Grow Guides
            </NavLink>
            <NavLink style={navLinkStyles} className="nav-link" to="/gardens">
              View Profile
            </NavLink>
            <button className="nav-link" onClick={logout}>
                Logout
            </button>
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
