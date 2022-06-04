import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Schedule from './components/pages/Schedule';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='outer-container'>
          <div className='inner-container'>
            <Routes>
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
  );
}

export default App;
