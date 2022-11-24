import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
