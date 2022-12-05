import './App.css';
import Navbar from './infrastructure/UI/globalComponents/Navbar';
import Home from './infrastructure/UI/home/Home';
import Search from "./infrastructure/UI/search/Search";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/Home"/>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Search' element={<Search />} />
          {/* <Route path='/Ingredients' element={<Ingredients />}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
