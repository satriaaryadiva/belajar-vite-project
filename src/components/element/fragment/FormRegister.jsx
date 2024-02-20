import InputForm from "../input";
import Button from "../Button/Button";

InputForm

const  FormRegister= () =>{



return (
    

<form  type="submit" id="email">
<InputForm 
    label='FullName'  
    type='text' 
    placeholder='Insert your full name' 
    name='Fullname'/>



<InputForm 
    label='Email'  
    type='email' 
    placeholder='example@gmail.com ' 
    name='email'>  </InputForm>


    

<InputForm 
    id ='password'
    label='password'  
    type='password' 
    placeholder='******' 
    name='password'/>


<InputForm 
    id ='password'
    label='confirm password'  
    type='password' 
    placeholder='confirm your password' 
    name='password'
    />

    <Button classname='bg-blue-600 w-full '>Register</Button>
    
    </form>



    
    );
}

export default FormRegister