/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../Button/Button"

const  CardProduct=(props)=>{
const  { children }=props;
return(
    <div className="flex justify-center flex-wrap">
               <div className="w-full  max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-2">
               {children}
               </div>
        </div>
    );

};


const  Header= (props)=>{
    const  {image, id}= props
    return(
        
       <Link to={`/detailproduct/${id}`}>
        <img src={image} alt="product" className="  p-8 h-60 w-full rounded-t-lg" />
    </Link>

        )
}

const  Body= (props)=>{

const  {children,title}= props;
    return(

    <div className="px-5 pb-5 h-full">
                <a href="">
                    <h5 className=" bg-gray-800 mb-3 text-xl font-semibold tracking-tight text-white">{title}</h5>
                    <p className="text-m text-white"> 
                    {children.substring(0, 50) } ...lihat selengkapnya
                    
                    </p>
                    </a>
                </div>
    
    
    )
}

const Footer = ({ price, handleAddToCart, id }) => {
    if (!price || !handleAddToCart || !id) {
        throw new Error('Missing required props');
    }

    return (
        <div className="flex items-center  justify-between px-4 py-4">
            <span className="text-3xl font-bold text-white">
                {price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            </span>
            <Button
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded "
                onClick={() => handleAddToCart(id)}
            >
                add  
            </Button>
        </div>
    );
}


CardProduct.Header=Header;
CardProduct.Body=Body;
CardProduct.Footer=Footer;


export default CardProduct;