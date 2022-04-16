import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes className = 'routes'>
          <Route exact path = '/' element={<Landing/>}/>
          <Route exact path = '/:address' element={<Weather/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
