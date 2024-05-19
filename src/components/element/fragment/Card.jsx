/* eslint-disable no-unused-vars */
import Text from "../input/Text";
import { getProfile } from "../../services/user.service";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Card = (props) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile(1, (data) => setProfile(data)); // Anda perlu memberikan ID pengguna sebagai argumen
  }, []);

  const { className, badge, children } = props;
  return (
    <article className={className}>
      <div className="rounded-[10px] bg-yellow-100 p-4 !pt-5 sm:p-6">
        <h1 className="rounded bg-blue-500 font-extrabold text-center p-1 text-xl">
          <b> Account information</b>
        </h1>
        {Object.keys(profile).length > 0 && profile && (
          <div className="mt-4  flex-wrap  items-center">
            <img className="rounded-full m-auto" src="https://via.placeholder.com/150" alt="" />
            <div className="flex flex-col ">
              <Text> Username : {profile.username}</Text>
              <Text>
                Fullname : {profile.name && profile.name.firstname} {profile.name && profile.name.lastname}
              </Text>
              <Text>Email : {profile.email}</Text>
              <Text> Phone : {profile.phone}</Text>
              <Text> Address : {profile.address && profile.address.city} </Text>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
