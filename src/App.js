
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ItemListContainer,ItemDetailContainer } from "./pages";
import { NavBar } from "./components";
 function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path ='/itemDetail/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
