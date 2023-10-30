import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import MainNavigation from './components/MainNavigation';
import NotFound from './components/NotFound';
import Basket from './components/Basket';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-list" element={<Products/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/single-product/:prodid" element={<SingleProduct/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

