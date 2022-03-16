/**
 * This is a file to ensure only authenticated users pass through the app.js
 */

import React, {useEffect} from 'react';
import useAuth from "../hooks/useAuth";

const Layout = ({children}) => {

    const {loginUserOnStartup} = useAuth();

    useEffect(() => {
        loginUserOnStartup();
    },[]);
    

    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Layout;