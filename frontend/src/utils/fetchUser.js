import jwt_decode from "jwt-decode";

export const fetchUser = () =>{
    const decodedUser = jwt_decode(localStorage.getItem('user'));
    const userInfo = localStorage.getItem('user') !== 'undefined' ? decodedUser : localStorage.clear();
    return userInfo;
}