import { useState, useEffect } from "react";
import axios from "axios";
import "./content.css";
const API_URL = import.meta.env.VITE_API_URL;
function Content() {
  //const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const fetchProducts = async () => {
    const url =`${API_URL}/store`;
    const res = await axios.get(url);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="row">
      {/* <h3>Products Page</h3> */}
      {/* {/* /* <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>}
      <hr /> */}
      
        {products.map((product) => (
            <div className="box" >
                <img src={`${API_URL}/${product.imageUrl}`}width="200px" alt=""/>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <p><button>Add TO cart
            </button></p>

        </div>))}
      
    </div>
  );
}
export default Content;