import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Header from "./components/Header";
import BuyBasket from "./pages/BuyBasket";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/buy-basket" element={<BuyBasket />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
