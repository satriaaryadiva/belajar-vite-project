import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";
import { removeFromCart, addToCart } from "../../../redux/slices/cartSlice";

const TableCard = () => {
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector(state => state.cart.data);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(data => setFetchedProducts(data));
    }, []);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            const foundProduct = fetchedProducts.find(product => product.id === item.id);
            // Ensure product and price are valid before calculation
            if (foundProduct && !isNaN(foundProduct.price) && !isNaN(item.qty)) {
                return acc + foundProduct.price * item.qty;
            } else {
                return acc;
            }
        }, 0);
        setTotalPrice(sum);
    }, [cart, fetchedProducts]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleAddToCart = (productId) => {
        dispatch(addToCart({ id: productId }));
    };

    return (
        <div className=" rounded-lg p-4 shadow-md w-full md:max-w-lg bg-gray-800">
            <div className="font-semibold text-lg mb-4 text-white">Shopping Cart</div>
            {cart.length > 0 ? (
                cart.map(item => {
                    const foundProduct = fetchedProducts.find(product => product.id === item.id);
                    if (!foundProduct || isNaN(foundProduct.price) || isNaN(item.qty)) return null; // Skip if product or price is not valid
                    return (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b bg-gray-800 py-4">
                            <div className="flex items-center ">
                                <img src={foundProduct.image} alt={foundProduct.title} className="w-24 h-24 mr-4 rounded-lg" />
                                <div>
                                    <div className="font-semibold text-white">{foundProduct.title}</div>
                                    <div className="text-gray-300">Price: {foundProduct.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 md:mt-0">
                                <div className="mr-2">Quantity: {item.qty}</div>
                                <div className="font-semibold text-white">{(item.qty * foundProduct.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                                <div className="flex ml-4">
                                    <button onClick={() => handleRemoveFromCart(item.id)} className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300">Remove</button>
                                    <button onClick={() => handleAddToCart(item.id)} className="px-3 py-1 ml-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300">Add</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-gray-300 text-center">Your cart is empty.</div>
            )}
            <div className="flex justify-between font-semibold mt-4">
                <div>Total Price:</div>
                <div className="text-white">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
            </div>
        </div>
    );
}

export default TableCard;
