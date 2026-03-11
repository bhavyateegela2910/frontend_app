import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"; 
import Login from "./components/Login"; 
import Register from "./components/Register";
import Orders from "./components/Orders";
import Cart from "./components/Cart";


function App() {
  return (
    <div>
      <Header />
      <Content />
      <Login />
      <Register />
      <Cart />
      <Orders />
      <Footer />
    </div>
  );
}

export default App;