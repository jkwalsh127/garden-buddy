import React from 'react';
import { Link } from 'react-router-dom';
// import './styles/Header.css';
// import './styles/HeaderMediaQueries.css';

// import Auth from '../../utils/auth';

const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Garden Buddy
          </h1>
        </Link>
        <div>
          {/* {Auth.loggedIn() ? ( */}
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/findzone">
                Find Zone
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/profile">
                View Profile
              </Link>
            </>
          {/*}) : (
            <>
            </>
          )}*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
