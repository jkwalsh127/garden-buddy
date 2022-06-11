import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import Schedule from './pages/Schedule';
import Gardens from './pages/Gardens';
import Landing from './pages/Landing';
import Guides from './pages/Guides';
import Signup from './pages/Signup';
import Login from './pages/Login';
import herbLeft from './images/herbs-left.png';
import herbRight from './images/herbs-right.png';
import leafLeft from './images/leaf-left.png';
import leafRight from './images/leaf-right.png';
import Beets from './components/Beets';
import Tomatoes from './components/Tomatoes';
import Eggplants from './components/Eggplants';
import Carrots from './components/Carrots';
import Asparagus from './components/Asparagus';

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
          <div className='outer-container'>
            <div className='title-wrap'>
              <div className='title-container'>
                <div className='inc-imgs'>
                  <img src={leafLeft} alt="leafs" className='leafs'/>
                  <NavLink className="app-title font-title" to="/">
                    Garden Buddy
                  </NavLink>
                  <img src={leafRight} alt="leafs" className='leafs'/>
                </div>
                <p className='subtitle font-title'>
                  The app that grows with you
                </p>
              </div>
            </div>
            <div className='inner-container'>
              <Header />
              <div className='content-container'>
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
                      path="/guides/Tomatoes"
                      element={<Tomatoes />}
                  /> 
                  <Route 
                      path="/guides/Beets"
                      element={<Beets />}
                  />
                  <Route 
                      path="/guides/Carrots"
                      element={<Carrots />}
                  />
                  <Route 
                      path="/guides/Asparagus"
                      element={<Asparagus />}
                  />
                  <Route 
                      path="/guides/Eggplants"
                      element={<Eggplants />}
                  />               
                  <Route 
                      path="/gardens" 
                      element={<Gardens />}
                  />
                </Routes>
                <div className='lower-imgs'>
                  <img src={herbLeft} alt="herbs" className='herbs'/>
                  <img src={herbRight} alt="herbs" className='herbs'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
