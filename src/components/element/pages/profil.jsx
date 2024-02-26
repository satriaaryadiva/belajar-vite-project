import useLogin from "../../../hooks/useLogin";
 const  ProfilPage=()=>{ 
    const  username= useLogin()   
    return (
        <div>
            <h1> halo i am {username}</h1>
        </div>
    )
}

export default ProfilPage