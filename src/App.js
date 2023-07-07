
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ItemListContainer,ItemDetailContainer} from "./pages";
import { Cart, NavBar } from "./components";
import { CartProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path ='/itemDetail/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
