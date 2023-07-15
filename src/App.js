import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
// import Login from "./pages/Login";
import Header from "./components/Header";
import BuyBasket from "./pages/BuyBasket";
import BuyCompletion from "./pages/BuyCompletion";
import NotFound from "./pages/NotFound";
import ShowProduct from "./pages/ShowProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/products/:id" element={<ShowProduct />} />
        <Route path="/buy-completion" element={<BuyCompletion />} />
        <Route path="/buy-basket" element={<BuyBasket />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
