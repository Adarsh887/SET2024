import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Events from './components/Events';
import Imp_dates from './components/Imp_dates';
import Org from './components/Organization';
import Track from './components/track';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/important_dates" element={<Imp_dates/>} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/organization_committee" element={<Org/>}/>
        <Route path="/paper_track" element={<Track/>}/>
      </Routes>
    </Router>
  );
}

export default App;
