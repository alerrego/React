
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ItemListContainer,ItemDetailContainer} from "./pages";
import { Cart, NavBar } from "./components";
import {CartProvider} from './context/cartContext'
import { CheckOut } from "./components/CheckOut";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/:category' element={<ItemListContainer/>}/>
      <Route path ='/itemDetail/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
