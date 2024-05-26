import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
 
import NavbarLayout from "../layout/navbarLayout";
 
 
import { ClipLoader } from "react-spinners"; // Import the spinner

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  

  useEffect(() => {
    getProducts(data => {
      setProducts(data);
      setLoading(false); // Set loading to false after products are loaded
    });
  }, []);

  return (
    <Fragment>  

        {/* Navigasi bar */<NavbarLayout/> }
      <div className="bg-gray-900 flex min-h-screen flex-col pt-20">
        <div className="w-4/5 mx-auto py-5">
          {loading ? (
            <div className="flex justify-center items-center w-full h-30 w-30">
              <ClipLoader color={" purple"} loading={loading} size={200} /> {/* Loading spinner */}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </Fragment>
  );
};

export default ProductPage;
