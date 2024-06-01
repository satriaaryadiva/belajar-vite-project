import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import NavbarLayout from "../layout/navbarLayout";
import { MoonLoader } from "react-spinners"; // Import the spinner
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

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
    <div className="bg-gray-900 flex min-h-screen flex-col pt-20">
      <NavbarLayout /> {/* Navigation bar */}

      {/* Carousel Section */}
      <div className="w-4/5 mx-auto py-5">
        <Carousel 
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
        >
          {products.slice(0, 5).map(product => ( // Show only the first 5 products in the carousel
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p className="legend">{product.title}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Products Grid */}
      <div className="w-4/5 mx-auto py-5">
        {loading ? (
          <div className="flex justify-center items-center w-full h-30 font-bold w-30">
            <MoonLoader color={"white"} loading={loading} size={200} /> {/* Loading spinner */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <CardProduct key={product.id}>
                <Link to={`/detailproduct/${product.id}`} key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                </Link>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
