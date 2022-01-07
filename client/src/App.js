import './App.css';
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarNew from "./components/navbar";
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
