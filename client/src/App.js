import './App.css';
import Converter from "./views/converter";
import NavbarNew from "./views/navbar";
import Footer from "./views/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="App">
      <NavbarNew />
      <Converter />
      <Footer />
    </div>
  );
}

export default App;
