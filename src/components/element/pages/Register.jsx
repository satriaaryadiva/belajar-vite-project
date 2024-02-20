
import FormRegister from "../fragment/FormRegister"
import AuthLayout from "../layout/AuthLayout"

const  RegisterPage= ()=> {

    return(
     <AuthLayout title={'Register'} type={'Register'}> 
      <FormRegister></FormRegister>
     </AuthLayout>
      )

}
export default RegisterPage