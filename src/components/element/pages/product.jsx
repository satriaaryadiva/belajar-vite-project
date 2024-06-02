import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import CardProduct from "../fragment/cardProduct";
import NavbarLayout from "../layout/navbarLayout";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getProducts(data => {
      setProducts(data);
      setLoading(false);
    });
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(categories => setCategories(categories));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  return (
    <div className=" bg-black min-h-screen flex flex-col pt-20">
      <NavbarLayout />
      <div className="w-full   shadow-black md:w-4/5 lg:w-3/5 mx-auto  pt-3 bg-white rounded-lg mb-8">
        <h2 className="text-center text-3xl font-bold font-sans text-gray-900 mb-5">Best Sellers</h2>
        {/* Carousel Section */
        loading ? <MoonLoader   /> :  <Carousel
          showThumbs={true}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={true}
          autoFocus={true}
        
          className=" "
        >
          {products && products.slice(0, 6).map(product => (
            <div key={product.id} className="flex  border-black border-4 flex-col items-center">
              <Link to={`/detailproduct/${product.id}`}>
                <img src={product.image} alt={product.title} className="h-72 w-72  object-cover rounded-lg  mb-4" />
                <p className="legend text-center text-sm font-semibold text-gray-800 rounded-lg py-2 px-4    ">{product.title}  </p>
              </Link>
            </div>
          ))}
        </Carousel>}
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto py-8">
        <h2 className="text-center text-3xl font-bold text-white mb-8">All Products</h2>
        {/* Category Select */}
        <div className="text-center mb-8">
          <select className=" bg-black text-white p-3   " value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center w-full h-60 font-bold">
            <MoonLoader color={"white"} loading={loading} size={80} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <CardProduct key={product.id}>
                <Link to={`/detailproduct/${product.id}`} key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title} id={product.id}>
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
