import './App.css';
import Navbar from '../src/components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../src/components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
