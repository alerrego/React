import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { Home } from "./pages/home";
import "./App.css"

 function App() {
  return (
    <>
      <div className="App">
        <Home/>
        <ItemListContainer texto ="Tu tienda de confianza"/>
      </div>
    </>
  );
}

export default App;
