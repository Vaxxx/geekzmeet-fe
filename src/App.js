import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import {useEffect, useState} from "react";
import axios from "axios";


axios.defaults.withCredentials = true;
 axios.defaults.baseURL = "http://localhost:8000";
 axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

 axios.interceptors.request.use(function (config){
     const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
     return config;
 });


function App() {
    let [user, setUser] = useState(false)
    let[email, setEmail] = useState('');
    const userAuthentication = () => {
        let setUser;
        setUser = localStorage.getItem('auth_token');
        return setUser;
        console.log("i am here")
        console.log(userAuthentication() + " Authentication state")
    }

    const getEmail = () =>{
        let setEmail;
        setEmail = localStorage.getItem('auth_name');
        return setEmail
    }
     useEffect(() => {
         userAuthentication();
     });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/about" element={<About />} />
            {/*{user && (*/}
                <Route exact path="/dashboard" element={<Dashboard user={userAuthentication()} email={getEmail()} />} />
                {/*)}*/}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
