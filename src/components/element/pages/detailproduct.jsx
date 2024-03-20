/* eslint-disable react/no-unknown-property */
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../../services/products.service";
import NavbarLayout from "../layout/navbarLayout";

const  DetailProduct=()=>{
    const  {id}= useParams();
const  [product, setProduct]=useState({});

useEffect(()=>{
    getDetailProduct(id, data => setProduct(data))
})


    return(
        <>
        <NavbarLayout/>
         {Object.keys(product).length > 0 && product && (<div className=" bg-gray-950 flex w-100  min-h-screen items-center font-sans justify-center  p-4 ">
        
        <div className="max-w-xl  flex font-sans justify-center  sm:min-w-min bg-gray-800 mb-3 text-xl font-semibold tracking-tight text-white border-black rounded-lg p-5  hover:shadow-cyan-400 shadow-lg transform hover:-translate-y-1 duration-300 border-t-8 hover:border-t-pink-400 hover:border-t-6 hover:border-r-8 drop-shadow-xl">
      <div className="flex-none w-48 relative ">
        <img src={product.image } alt="" className=" rounded-lg absolute inset-0 w-full h-full object-contain" loading="lazy" />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-white">
           {product.title}
          </h1>
          <div className="text-lg font-semibold ">
          Rp {product.price}
          </div>
          <div className="w-full flex-none text-sm font-medium text-yellow-600 mt-2">
         <p>{product.rating.rate}/5( {product.rating.count} reviews)</p>
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
        {product.description}
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              Buy now
            </button>
            <button className="h-10 px-6 font-semibold rounded-md border  bg-purple-700
             text-slate-300  "  type="button">
              Add to bag
            </button>
          </div>
          <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 hover:text-pink-500" type="button" aria-label="Like">
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-700">
       
        </p>
      </form>
    </div>
    
    
    
            </div>)}
        </>
    )
}

export default DetailProduct