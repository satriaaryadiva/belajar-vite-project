/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";

const TableCard = ( ) => {
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector(state => state.cart.data);

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

    return (
        <div className="table-responsive  ">
            <table className="text-center table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th className="px-1 py-1">Product</th>
                        <th className="px-1 py-1">Price</th>
                        <th className="px-1 py-1">Quantity</th>
                        <th className="px-1 py-1">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {
                        const foundProduct = fetchedProducts.find(product => product.id === item.id);
                        if (!foundProduct || isNaN(foundProduct.price) || isNaN(item.qty)) return null; // Skip if product or price is not valid
                        return (
                            <tr key={item.id} className="text-white font-semibold">
                                <td className="px-1 py-2">{foundProduct.title?.substring(0, 20) || 'N/A'}</td>
                                <td className="px-1 py-2">{foundProduct.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                <td className="px-1 py-2">{item.qty}</td>
                                <td className="px-1 py-2">{(item.qty * foundProduct.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan={3} className="bg-black text-white p-1 rounded"><b>Total price</b></td>
                        <td className="bg-black text-white p-1 rounded"><b>{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableCard;
