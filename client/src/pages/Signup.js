import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="login-container">
        <div className="card">
          <h4 className="card-head">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now access{' '}
                <Link to="/gardens">Garden Buddy.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className='form-wrap'>
                <input
                  className="login-input font-title"
                  placeholder="Your username"
                  name="Username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="login-input font-title"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="login-input font-title"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="login-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                  to="/gardens"
                >
                  Signup
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
    </main>
  );
};

export default Signup;

