import { useEffect, useState } from "react";
import Card from "../fragment/Card";
import NavbarLayout from "../layout/navbarLayout";
import { getProfile } from "../../services/user.service";

const ProfilPage = () => {
    const [Profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(1, (data) => setProfile(data)); // Anda perlu memberikan ID pengguna sebagai argumen
    }, []);

    return (
        <div className=" bottom-3 bg-gray-950 min-w-full min-h-screen justify-between items-stretch font-body">
            <NavbarLayout />
            <Card badge="Profile" className="mx-6 relative top-36 p-3 hover:animate-background rounded-xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_1s] transform ">Hello, {Profile.email}</Card>
        </div>
    );
};

export default ProfilPage;
