import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPag from "./Components/Error";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"*"} element={<ErrorPag />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
