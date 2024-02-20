import InputForm from "../input";
import Button from "../Button/Button";
import { Login } from "../../services/auth.service";
import { useState } from "react";

const  FormLogin= () =>{
    const  [loginFailed,setLoginFailed]= useState("");






const  handleLogin=(e)=>{

    e.preventDefault();
    const  data = {
        username : e.target.email.value,
       password :e.target.password.value,
    }
Login(data,(status,res) =>{
    if(status){
        localStorage.setItem('token',res);
    }else{
        setLoginFailed(res.response.data);
       console.log(res.response.data);
       
    }
})
}

return (

    <form  onSubmit={handleLogin} >
   {loginFailed && <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
  <strong className="block font-medium text-red-800"> Something went wrong </strong>

  <p className="mt-2 text-sm text-red-700">
   id dan password anda salah
  </p>
</div> }
    <InputForm

    label='Username'  
    type='text' 
    placeholder='example@gmail.com ' 
    name='email' />

<InputForm 
    id ='password'
    label='password'  
    type='password' 
    placeholder='******' 
    name='password'>  </InputForm>

<Button className="bg-blue-600 w-full "
        type="submit"
        >Login</Button>    
    </form>



    
    );
}

export default FormLogin