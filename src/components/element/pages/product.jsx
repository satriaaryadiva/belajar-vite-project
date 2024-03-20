import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import useLogin from "../../../hooks/useLogin";
import NavbarLayout from "../layout/navbarLayout";

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [products, setProducts] = useState([]);

    const username= useLogin();


// ini untuk
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            const product = products.find(product => product.id === item.id);
            return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
    }, [cart, products]);

    useEffect(() => {
        getProducts(data => setProducts(data));
    }, []);

   const handleAddToCart = id => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
            return;
        }
        setCart([
            ...cart,
            {
                id: id,
                qty: 1,
            },
        ]);
    };

    

    return (
        <Fragment>
            <div className="bg-gray-900  flex  min-h-screen flex-col">
                    <NavbarLayout > {username}</NavbarLayout>
                <div className=" pt-20 flex justify-center py-5">
                    <div className=" w-4/5 flex flex-wrap flex-1 ">
                        {products.length > 0 && products.map(product => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} id={product.id}/>
                                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                    handleAddToCart={handleAddToCart}
                                />
                                <hr className="w-full" />
                            </CardProduct>
                        ))}
                    </div>
                    <div className="w-min   right-2 bg-purple-500 h-max p-4 rounded flex flex-wrap">
                        <h1 className="text-3xl font-bold text-white">Keranjang</h1>
                        <table className=" table-auto flex border-separate border-spacing-x-5 flex-wrap" cellPadding={9}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 && cart.map(item => {
                                    const product = products.find(product => product.id === item.id);
                                    return (
                                        <tr key={item.id} >
                                            <td className="font-bold">{product.title.substring(0, 20)}</td>
                                            <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                            <td>{item.qty}</td>
                                            <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                        </tr>
                                   
                                    );
                                })}
                                <tr>
                                    <td colSpan={3} className="bg-black text-white p-1 rounded"><b>Total price </b></td>
                                    <td className="bg-black text-white p-1 rounded"><b>{totalPrice?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</b></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductPage;
