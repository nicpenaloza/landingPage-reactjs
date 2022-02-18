import './App.css';
import Navbar from '../src/components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MainSection from '../src/components/MainSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainSection />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
