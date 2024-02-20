/* eslint-disable react/prop-types */


const  Label=(props) =>{
        const  {children} = props;
        

return(
<label 
        className='block text-black text-sm font-bold mb-2'>
            {children}
        </label>
)}
export default Label


        