import './App.css';
import Converter from "./views/converter";
import NavbarNew from "./views/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="App">
      <NavbarNew />
      <Converter />
    </div>
  );
}

export default App;
