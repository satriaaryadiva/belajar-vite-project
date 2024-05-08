 
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const  TableCard= (props)=>{
     const  {products}=props

    const  cart = useSelector(state => state.cart.data);
        
     const  [totalPrice,setTotalPrice]=useState(0);

  



     useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            const product = products.find(product => product.id === item.id);
            return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
    }, [cart, products]);

     
    return(

        <table className=" text-center table-auto flex border-separate     sm:border-spacing-x-5 flex-wrap" cellPadding={9}>
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

    )
}

export default TableCard ;