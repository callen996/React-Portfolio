import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
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
