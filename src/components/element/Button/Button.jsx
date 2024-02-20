



const  Button = (props) =>{

   
    


    // eslint-disable-next-line react/prop-types
    const  {children,className,type="button" ,onClick

} = props;
    
    
    return(
        <button
        className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
        type={type}
        onClick={onClick}
        >
         {children}

        </button>
        
        )

}

export default Button