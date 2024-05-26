import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";
import { removeFromCart, addToCart } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

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
        <div className="rounded-lg shadow-lg p-4 w-full max-w-full md:max-w-3xl bg-gray-800">
            <div className="text-lg mb-4 bg-inherit bg-purple-800 p-2 font-bold text-white   sticky top-0   text-center ">Shopping Cart</div>
            {cart.length > 0 ? (
                cart.map(item => {
                    const foundProduct = fetchedProducts.find(product => product.id === item.id);
                    if (!foundProduct || isNaN(foundProduct.price) || isNaN(item.qty)) return null;
                    return (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 py-4 gap-4">
                            <div className="flex items-center flex-grow gap-4">
                                <img src={foundProduct.image} alt={foundProduct.title} className="w-24 h-24 rounded-lg object-cover" />
                                <div className="flex flex-col">
                                    <div className="font-semibold text-white">{foundProduct.title}</div>
                                    <div className="text-gray-300">Price: {foundProduct.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                                <div className="flex items-center gap-2">
                                    <div className="text-white">Quantity: {item.qty}</div>
                                    <div className="font-semibold text-white">{(item.qty * foundProduct.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleRemoveFromCart(item.id)} className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300">Remove</button>
                                    <button onClick={() => handleAddToCart(item.id)} className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300">Add</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-gray-300 text-center">Your cart is empty. Go to <Link to='/product' className="text-blue-500">products</Link> to add items.</div>
            )}
            {cart.length > 0 && (
                <div className="flex justify-between font-semibold mt-4 p-4 bg-gray-700 rounded-b-lg">
                    <div className="text-white">Total Price:</div>
                    <div className="text-white">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                </div>
            )}
            
        </div>
    );
};

export default TableCard;
