import { useRouteError } from "react-router-dom";

const  ErrorPage=()=>{
    const  error=useRouteError();

    return (<>
    <h1>halo ada yang error nih</h1>
        <p>{error.statustext||error.message}</p>
        </>
        )



}

export default ErrorPage