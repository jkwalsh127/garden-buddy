import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Header from './components/Header';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Guides from './pages/Guides';
import Signup from './pages/Signup';
import Login from './pages/Login';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <div className='outer-container'>
            <div className='inner-container'>
              <Routes>
                <Route
                  path="/"
                  element={<Landing />}
                />
                <Route 
                    path="/login" 
                    element={<Login />}
                />
                <Route 
                path="/signup" 
                element={<Signup />}
                />
                <Route 
                    path="/findzone" 
                    element={<Schedule />}
                />
                <Route 
                    path="/guides" 
                    element={<Guides />}
                />
                <Route 
                    path="/gardens" 
                    element={<Profile />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
