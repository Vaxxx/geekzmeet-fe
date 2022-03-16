import {
    BrowserRouter,
    Routes,
    Route, Outlet, Navigate,
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import axios from "axios";
import React from "react";
import Layout from "./components/Layout";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.baseURL = "https://back.geekzmeet.com/";

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


function App() {

    return (
        <div className="App">
           <Layout>
               <Routes>
                   <Route exact path="/"   element={<Login/>}/>
                   <Route exact path="/login" element={ <Login/>}/>
                   <Route exact path="/register" element={<Register />}/>
                   <Route exact path="/about" element={<About/>} />


                   <Route exact path="/dashboard" element={<Dashboard/>} />


                   <Route exact path="*" element={<NotFound/>} />
               </Routes>
           </Layout>
        </div>
    );
}

export default App;