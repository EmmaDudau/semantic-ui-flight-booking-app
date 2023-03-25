import FixedMenuLayout from "./components/FixedMenuLayout";
import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Flights from "./components/Flights";
import ManageBookings from "./components/ManageBookings";
import Booking from "./components/Booking";

function App() {
  return (
      <Router>
        <FixedMenuLayout/>
        <Routes>
            <Route exact path="/" element = {<Home/>}></Route>
            <Route path="/book-a-flight" element={<Flights/>}></Route>
            <Route path="/edit-booking/:id" element={<Flights/>}></Route>
            <Route path="/manage-booking" element={<ManageBookings/>}></Route>
            <Route path="/booking" element={<Booking/>}></Route>
        </Routes>

      </Router>
  );
}

export default App;
