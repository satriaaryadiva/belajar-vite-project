import { Fragment } from "react";
import Card from "../fragment/Card";
import NavbarLayout from "../layout/navbarLayout";

const ProfilPage = () => {
    return (
        <Fragment>
            <NavbarLayout className="fixed z-50 sm:relative" />
            <div className="bg-gray-950 min-h-screen flex flex-col justify-between">
                <div className="  flex ">
                    <Card badge="Profile" className=" w-auto mx-auto mt-12 sm:mt-10 mb-4 p-3 rounded-xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 shadow-xl ">
                    </Card>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfilPage;
