import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Schedule from './components/pages/Schedule';
import Profile from './components/pages/Profile';
import Landing from './components/pages/Landing';

const client = new ApolloClient({
  uri: '/graphql',
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
                    path="/findzone" 
                    element={<Schedule />}
                />
                <Route 
                    path="/myprofile" 
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
