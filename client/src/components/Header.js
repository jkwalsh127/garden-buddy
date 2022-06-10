import React from 'react';
import { NavLink } from 'react-router-dom';
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
      color: isActive ? 'var(--orange)' : 'var(--green)',
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
