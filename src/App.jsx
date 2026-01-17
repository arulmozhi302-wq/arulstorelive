import { useEffect, useState } from 'react';
import axios from 'axios';
import CartModal from "./components/CartModal";
import Navbar from './components/Navbar';



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(0);
  
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try{
     const response = await axios.get(
      "https://fakestoreapi.com/products"
    );
      setProducts(response.data);    
    } catch (error) {
      console.log(error);      
    }   
  }

  const addToCart = (products) => {
    const exists = cart.find(item => item.id === products.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, products]);
    }
  }

  
const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};


return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} openCart={() => setOpen(true)} />
      <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-purple-200">
        {
          products.map ((products) => (             
            <div key={products.id} className="bg-white text-black p-4 rounded shadow flex flex-col">
                <img
                    src={products.image}
                    alt={products.title}
                    className="h-40 object-contain mb-4"
                />

                <h2 className="font-semibold text-sm mb-2">{products.title}</h2>
                <p className="font-bold mb-3">₹ {products.price}</p>
                <button
                    onClick={() => addToCart(products)}
                    className="mt-auto bg-black text-white py-2 rounded"
                >
                Add to Cart
                </button>
            </div>
          ))
        }   
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