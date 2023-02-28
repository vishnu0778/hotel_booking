import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import "react-image-gallery/styles/css/image-gallery.css";
import Bookinglist from "./components/Bookinglist";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HotelDetails from "./components/HotelDetails";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import BookingOrder from "./components/BookingOrder";

function App() {
  return (
    <div className="App">
      <Header/>
     


      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/mybooking" element={<BookingOrder/>}/>
        <Route path="/booking_list" element={<Bookinglist/>}/>
        <Route path="/booking_details" element={<HotelDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
