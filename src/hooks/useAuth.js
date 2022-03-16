import React, { useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
import axios from "axios";
import AuthContext from "../context/authContext";

const useAuth = () => {

    let navigate  = useNavigate();
    const [userData, setUserData] = useState({
        signedIn: false,
        user: null
    });



    const {setAuthData} = useContext(AuthContext);

    //check user status
    useEffect(() => {
        setAuthData(userData);
    },[userData.signedIn]);

    //get cookie expiration
    function getAuthCookieExpiration(){
        let date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); //last for 1week
        return date;
    }

    //set cookie for a logged user
    function setAsLogged(user){
        const cookie = new Cookies();

        cookie.set('is_auth', true, {
            path: '/',
            expires: getAuthCookieExpiration(),
            httpOnly: false
        });

        setUserData({signedIn: true, user});
        navigate('/dashboard');
    }

    function setLogout(){
        const cookie = new Cookies();

        cookie.remove('is_auth', {
            path: '/',
            expires: getAuthCookieExpiration(),
            httpOnly:false
        });

        setUserData({signedIn: false, user: null})
        navigate('/login');
    }

    //check if its an existing user
    function loginUserOnStartup(){
        const cookie = new Cookies();

        if(cookie.get('is_auth')){
            axios.post('/api/existing_user')
                .then(response=>{
                    //meaning the user is authenticated
                    setUserData({
                        signedIn: true,
                        user: response.data.user
                    });
                    navigate('/dashboard');
                }).catch(error => {
                setUserData({
                    signedIn: false,
                    user: null
                });
                setLogout();
            });
        }else{
            //user is not authenticated
            setUserData({
                signedIn: false,
                user: null
            });
            navigate('/login');
        }
    }

    return {
        userData,
        setAsLogged,
        setLogout,
        loginUserOnStartup
    }
};

export default useAuth;