import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import Newsletter from './Newsletter';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/little-things-blog/" element={<Home />} />
            <Route path="/newsletters/:id" element={<Newsletter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
