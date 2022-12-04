import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import Search from "./pages/search/Search";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Search' element={<Search />}/>
        {/* <Route path='/Ingredients' element={<Ingredients />}/> */}

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
