import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);       
  }


const addToCart = (product) => {  
  const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
};


const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};


return (
    <div className="min-h-screen bg-gray-100">
    
    <Navbar cartCount={cart.length} openCart={() => setOpen(true)} />

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
      <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
  />
))}
</div>


{open && (
  <CartModal
  cart={cart}
  closeCart={() => setOpen(false)}
  removeFromCart={removeFromCart}
  />
)}
</div>
);
}


export default App;