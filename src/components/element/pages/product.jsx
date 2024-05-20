import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import useLogin from "../../../hooks/useLogin";
import NavbarLayout from "../layout/navbarLayout";
import TableCard from "../fragment/TableCard";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState(""); // State untuk pesan notifikasi
    const username = useLogin();

    useEffect(() => {
        getProducts(data => setProducts(data));
    }, []);

    const handleAddToCart = () => {
        // Logika penambahan item ke keranjang
        // Anda dapat menambahkan logika di sini untuk menampilkan notifikasi
        setNotification("hore Produk anda berhasil ditambahkan ke keranjang");
        // Hapus notifikasi setelah beberapa detik
        setTimeout(() => {
            setNotification("");
        }, 4000); // 3000 milidetik = 3 detik
    };

    return (
        <Fragment>
            <NavbarLayout className="fixed z-50 sm:relative">{username}</NavbarLayout>
            <div className="bg-gray-900 flex min-h-screen flex-col">
                <div className="pt-20 flex flex-col-reverse justify-center py-5">
                    <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {products.length > 0 ? (
                            products.map(product => (
                                <CardProduct key={product.id}>
                                    <CardProduct.Header image={product.image} id={product.id} />
                                    <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                                    <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                                </CardProduct>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="w-min mx-auto right-2 bg-purple-500 h-max p-4 rounded">
                        <Link to="/product/cart">
                            <TableCard products={products} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Tampilkan notifikasi */}
            {notification && (
                <div className="fixed bottom-5 right-5 bg-green-500 text-black font-bold px-4 py-2 rounded">
                    {notification}
                </div>
            )}
        </Fragment>
    );
};

export default ProductPage;
