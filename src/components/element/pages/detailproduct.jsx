/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/products.service";
import NavbarLayout from "../layout/navbarLayout";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getDetailProduct(id, data => setProduct(data));
  }, [id]);

  return (
    <>
      <NavbarLayout />
      {Object.keys(product).length > 0 && product && (
        <div className="bg-gray-950 flex w-full min-h-screen items-center font-sans justify-center p-4">
          <div className="max-w-2xl w-full bg-gray-800 text-white rounded-lg shadow-lg p-5 hover:shadow-cyan-400 transform hover:-translate-y-1 transition-transform duration-300 border-t-8 hover:border-t-pink-400 border-r-8 drop-shadow-xl">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-none w-full sm:w-48 relative mb-4 sm:mb-0">
                <img src={product.image} alt={product.title} className="rounded-lg w-full h-full object-contain shadow-md" loading="lazy" />
              </div>
              <div className="flex-auto sm:ml-6">
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <div className="text-xl font-bold text-yellow-300 mb-2">Rp {product.price.toLocaleString("id-ID")}</div>
                <div className="text-yellow-400 mb-4">{product.rating.rate}/5 ({product.rating.count} reviews)</div>
                <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                  <button onClick={() => dispatch(addToCart({ id, qty: 1 }))} className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg" type="button">
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-600 hover:text-pink-500 transition-colors" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
