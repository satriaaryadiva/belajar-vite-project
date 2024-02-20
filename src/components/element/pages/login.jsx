import AuthLayout from "../layout/AuthLayout"
import Formlogin from "../fragment/FormLogin"
const  LoginPage= ()=> {

    return(
       <AuthLayout title={'Login'} type={'login'}>
      <Formlogin/>
       </AuthLayout> 
        );

}
export default LoginPage