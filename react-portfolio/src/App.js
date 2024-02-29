import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Find your Genealogy from './pages/FindYourGenalogy'
import NavBar from '../components/NavBar';


function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Find your Genealogy" element={<Find your Genealogy />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
