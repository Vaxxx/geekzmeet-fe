import axios from "axios";


 const axiosFunctions = () => {
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
 }

 export default axiosFunctions;