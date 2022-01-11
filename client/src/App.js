import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home";
import NavbarNew from "./components/navbar";
import Contact from "./components/contact";
import Nepali from './components/languages/nepali';
import Hindi from './components/languages/hindi';
import Urdu from './components/languages/urdu';
import Bengali from './components/languages/bengali';
import Punjabi from './components/languages/punjabi';

import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarNew />
        <div className='content'>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/nepali" element={<Nepali/>}/>
          <Route exact path="/hindi" element={<Hindi/>}/>
          <Route exact path="/urdu" element={<Urdu/>}/>
          <Route exact path="/bengali" element={<Bengali/>}/>
          <Route exact path="/punjabi" element={<Punjabi/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
