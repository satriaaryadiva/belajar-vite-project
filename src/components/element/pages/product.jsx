import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import NavbarLayout from "../layout/navbarLayout";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../fragment/Banner";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts(data => {
      setProducts(data);
      setLoading(false);
    });
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(categories => setCategories(categories));
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col pt-20 bg-scroll scroll-smooth">
      <NavbarLayout />
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto px-5 pt-3 pb-3 border-black bg-white rounded-lg mb-8 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-5">Best item on this month</h2>
        {loading ? (
          <MoonLoader className="m-auto" color={"#ffffff"} size={80} />
        ) : (
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            showStatus={false}
            autoFocus={true}
            className="shadow-lg"
          >
            {products.slice(0, 6).map(product => (
              <div key={product.id} className="flex border-4 border-black flex-col items-center">
                <Link to={`/detailproduct/${product.id}`}>
                  <img src={product.image} alt={product.title} className="h-72 w-72 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105" />
                  <p className="legend text-center text-sm font-semibold text-black rounded-lg py-2 px-4">{product.title}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <Banner />

      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto py-8">
        <h2 className="text-center text-3xl font-bold text-white mb-8">CATALOGUE</h2>

        {loading ? (
          <div className="flex justify-center items-center  w-full h-60 font-bold">
            <MoonLoader color={"white"} loading={loading} size={80} />
          </div>
        ) : (
          categories.map(category => (
            <div key={category} className=" mb-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border border-white rounded-lg">
              <h3 className="text-2xl text-white mb-4 m-3 font-extrabold">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin gap-1  scroll-m-3 scrollbar-thumb-purple-500 sm:scrollbar-track-transparent  scrollbar-track-gray-950 scrollbar-rounded-sm rounded-sm">
                {products.filter(product => product.category === category).map(product => (
                  <CardProduct key={product.id} className="flex-shrink-0 w-60 shadow-lg shadow-black bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-lg">
                    <Link to={`/detailproduct/${product.id}`} key={product.id}>
                      <CardProduct.Header image={product.image} id={product.id} />
                      <CardProduct.Body title={product.title} id={product.id} />
                    </Link>
                    <CardProduct.Footer price={product.price} id={product.id} />
                  </CardProduct>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
