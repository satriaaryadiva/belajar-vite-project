import Card from "../fragment/Card";
import NavbarLayout from "../layout/navbarLayout";

const ProfilPage = () => {
    

    return (
        <div className="  justify-self-center justify-items-end bg-gray-950 min-w-full  flex-col-reverse  min-h-screen max-h-fit  flex flex-wrap items-stretch  sm:flex-col font-body">
            <NavbarLayout  className=' relative z-1' >
                
            </NavbarLayout>
            <Card badge="Profile" className=" sm:top-12  bottom-4 m-auto mt-5 w-fit items-center justify-center relative  p-3 hover:animate-background rounded-xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_1s] transform ">
            </Card>
        </div>
    );
};

export default ProfilPage;
