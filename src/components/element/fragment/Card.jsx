/* eslint-disable no-unused-vars */

import { Children } from "react";

/* eslint-disable react/prop-types */
const Card = (props)=>{
    const  {className, badge,children}=props;
    return(
 
<article  
  className ={className}
>
  <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">

    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900 font-Pixel">
    {children}
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        {badge}
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div>
  </div>
</article>
        
        )
}

export default Card