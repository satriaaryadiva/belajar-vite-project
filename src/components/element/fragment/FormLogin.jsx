import InputForm from "../input";
import Button from "../Button/Button";
import { Login } from "../../services/auth.service";

const  FormLogin= () =>{
    

const  handleSubmit=(e)=>{
    
    e.preventDefault();
    const  data = {
        username : e.target.email.value,
       password :e.target.password.value,
    }
Login(data,(status,res) =>{
    if(status){
        localStorage.setItem('email',data);
    }else{
        alert(res.response.message);
    }
})
}

return (
    

    <form  onSubmit={handleSubmit} >
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