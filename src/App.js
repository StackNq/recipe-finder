import logo from './logo.svg';
import './App.css';

import NavBar from './components/commons/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
    </>
  );
}

export default App;
