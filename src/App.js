import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Header from "./components/Header";
import BuyBasket from "./pages/BuyBasket";
import BuyCompletion from "./pages/BuyCompletion";
import NotFound from "./pages/NotFound";
import ShowProduct from "./pages/ShowProduct";
import { useSelector } from "react-redux";
import "./App.css";
import SendToAddress from "./pages/SendToAddress";

function App() {
  const user = useSelector(state => state.user.username);

  return (
    <div className="App">
      {!user && <Login />}
      {user && (
        <>
          <Header />
          <Routes>
            <Route path="/buy-completion/send-to-address" element={<SendToAddress />} />
            <Route path="/products/:id" element={<ShowProduct />} />
            <Route path="/buy-completion" element={<BuyCompletion />} />
            <Route path="/buy-basket" element={<BuyBasket />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound to="/not-found" />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
