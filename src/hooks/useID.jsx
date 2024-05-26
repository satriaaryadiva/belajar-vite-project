import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwt(token);
    return decodedToken.userId;
  }
  return null; // Return null jika tidak ada token atau token tidak valid
};
