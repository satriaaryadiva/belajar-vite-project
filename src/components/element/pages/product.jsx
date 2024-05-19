import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import useLogin from "../../../hooks/useLogin";
import NavbarLayout from "../layout/navbarLayout";
import TableCard from "../fragment/TableCard";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const username = useLogin();

    useEffect(() => {
        getProducts(data => setProducts(data));
    }, []);

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
                                    <CardProduct.Footer price={product.price} id={product.id} />
                                    <hr className="w-full" />
                                </CardProduct>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="w-min mx-auto right-2 bg-purple-500 h-max p-4 rounded">
                        <TableCard products={products} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductPage;
