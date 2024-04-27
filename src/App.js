import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import Home from './Components/Home';
import Product from './Components/Product';
import Addtocart from './Components/Addtocart';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/add' element={<Addtocart/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
       
          

      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
