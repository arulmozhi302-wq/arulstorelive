
const ProductCard = ({ product, addToCart }) => {

return (
    <div className="bg-white text-black p-4 rounded shadow flex flex-col">
        <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mb-4"
        />

        <h2 className="font-semibold text-sm mb-2">{product.title}</h2>
        <p className="font-bold mb-3">₹ {product.price}</p>
        <button
            onClick={() => addToCart(product)}
            className="mt-auto bg-blue-600 text-white py-2 rounded"
        >
        Add to Cart
        </button>
    </div>
);
};


export default ProductCard;