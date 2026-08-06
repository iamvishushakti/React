import React from "react";
import AuthContext from "./AuthContext";
import loginDetail from "../../TEM_DB/loginDetail";

export default function AuthContextProvider({children}){
    const [loginUser, SetLoginUser] = React.useState({});
    const userAuthValidation = (data)=>{
        const existUser = loginDetail.find(
            (e) =>
                e.email === data.email &&
                e.password === data.password
        );

        

        if (existUser) {
            SetLoginUser(existUser);
            return {status:true, message:"login Successfully"}
        } else {
            SetLoginUser({});
            return {status:false, message:"invalid user detail"}
        }
    }
    const logOut = () =>{
        SetLoginUser({});
    }
    return(
        <AuthContext.Provider value={{loginUser, userAuthValidation, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}