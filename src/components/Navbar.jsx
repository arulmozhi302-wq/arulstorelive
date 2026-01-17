const Navbar = ({ cartCount, openCart}) => {
return (
    <div className="flex justify-between items-center bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-4">
        <h1 className="text-xl font-bold md:text-base ...">AK Store</h1>
        <button className="bg-black text-white px-4 py-2 rounded font-semibold" onClick={openCart}>
            Cart ({cartCount})
        </button>

    </div>
);
};


export default Navbar;