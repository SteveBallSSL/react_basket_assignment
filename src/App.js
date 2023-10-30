import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './components/Home';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Basket from './components/Basket';

function App() {
  return (
    <>
    <MainNavigation />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;