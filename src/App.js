import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom";

import {Home} from "./pages/home/Home";
import {HotelReview} from "./pages/hotelReview/HotelReview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:hotelID" element={<HotelReview />} />
      </Routes>
    </div>
  );
}

export default App;
