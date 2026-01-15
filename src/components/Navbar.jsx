const Navbar = ({ cartCount, openCart }) => {
return (
    <div className="flex justify-between items-center bg-purple-600 text-white px-6 py-4">
        <h1 className="text-xl font-bold md:text-base ...">Arul Store</h1>
        <button
            onClick={openCart}
            className="bg-white text-white px-4 py-2 rounded font-semibold"
            >
            Cart ({cartCount})
        </button>
    </div>
);
};


export default Navbar;