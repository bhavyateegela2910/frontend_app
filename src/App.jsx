import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"; 
import Login from "./components/Login"; 
import Logout from "./components/Logout";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";  

function App() {
  return (
      <div>
    <BrowserRouter>
      
        <Header />
        <Routes>
          <Route index element={<Content />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
        <Footer />
     
     </BrowserRouter>
     </div>
  );
}

export default App;