import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPag from "./Components/Error";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import CartContextProvider from "./Components/context/CartContext";



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"*"} element={<ErrorPag />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
