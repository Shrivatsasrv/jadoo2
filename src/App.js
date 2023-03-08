
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Category from './components/Category';
import Destination from './components/Destination';

import Nav1 from './components/Nav1';
import News from './components/News';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import Booking from './components/Booking';
import Main from './components/Main';
import DestinationBlog from './components/DestinationBlog';
import Hotels from './components/Hotels';
import Flights from './components/Flights';
import BookingBlog from './components/BookingBlog';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  return (
    <div >
      <Routes>
        <Route path="/DestinationBlog" element={<DestinationBlog />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/BookingBlog" element={<BookingBlog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Main />
      {/* <Nav1 /> */}
      {/* <NavBar /> */}

      {/* <Hero /> */}

      <Category />
      <Destination />
      <Booking />
      <Testimonial />
      <Clients />
      <News />

      <Footer />





    </div>
  );
}

export default App;
