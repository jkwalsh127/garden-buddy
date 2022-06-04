import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Schedule from './components/pages/Schedule';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route 
                path="/findzone" 
                element={<Schedule />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
