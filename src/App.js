import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import TourDetails from "./pages/TourDetails/TourDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const roomsLST = require('./services/rooms.json');
console.log(roomsLST);
//const imagenumbers = ['room-1.jpg','room-2.jpg','room-3.jpg','room-4.jpg']
/*const images = imagenumbers.map((img) => {
  return {
      src: `${img}`,
      sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
      alt: `tour detail for  ${img}`,
      thumbnail: `../../assets/gallery/${img}`

  };
});*/
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/tourdetails" element={<TourDetails images={roomsLST} title={`delux room`}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
