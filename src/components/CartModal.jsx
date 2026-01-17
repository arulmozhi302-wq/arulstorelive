const CartModal = ({ cart, closeCart, removeFromCart }) => {
    return (
        <div className="fixed inset-0 bg-purple-200 flex justify-center items-center">
        <div className="bg-white text-black w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={closeCart} className="bg-black text-white font-bold">X</button>
        </div>


        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
        cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <img src={item.image} className="h-16 w-16" />
                    <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="font-bold">₹ {item.price}</p>
                    </div>
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-black text-white px-3 py-1 rounded"
                >
                Remove
                </button>
            </div>
        ))
        )}
        </div>
        </div>
    );
};


export default CartModal;