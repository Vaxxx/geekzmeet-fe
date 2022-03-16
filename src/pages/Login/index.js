import React, {useState} from 'react';
import {Link, useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import CardBody from "../../gadgets/CardBody";


function Index() {
    const navigate = useNavigate();


    const[loginInput, setLogin] = useState({
        email : '',
        password: '',
        error_list: []
    })

    const handleInput = (event)=>{
        event.persist();
        setLogin({...loginInput, [event.target.name]: event.target.value});
    }

    const loginSubmit = (event)=>{
        event.preventDefault();
        const data = {
            email : loginInput.email,
            password: loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`/api/login`, data).then(response => {
                console.log(response.data.status + "STATUS")
                if (response.data.status === 200) {
                    localStorage.setItem('auth_token', response.data.token)
                    localStorage.setItem('auth_name', response.data.username)
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'

                   }).then(r => navigate('/dashboard'))
                }else if(response.data.status === 401){
                    Swal.fire({
                        title: 'error!',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    }).then(r => navigate('/login'))
                } else {
                    console.log("error: " + response.data.validation_errors)
                    setLogin({...loginInput, error_list: response.data.validation_errors})
                }
            }).catch((error) => {
                console.log('error: ' + error)
            })
        });
    }
    function form () {
        return(
            <div className="object-none object-right bg-gray-300 w-100 h-100 rounded-lg">
                <h1 className="block w-full text-center text-black text-3xl font-bold mb-6 shadow outline-black">Login Here</h1>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between rounded" onSubmit={loginSubmit}>

                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Email Address*
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="email" type="email" name="email" placeholder="Enter Email Address" value={loginInput.email} onChange={handleInput}/>
                        <span>{loginInput.error_list.email}</span>
                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Password *
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="password" type="password" name="password" placeholder="**************" value={loginInput.password} onChange={handleInput}/>
                        <span>{loginInput.error_list.password}</span>
                    </div>

                    <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-8">
                            <button
                                className="md:w-full w-full bg-gray-900 text-white font-bold py-3 px-40 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-lg">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
                <Link className="link link-grey w-full text-center text-underline text-green-600 px-3 border-b-4 hover:border-b-2 border-black text-lg hover:bg-white hover:text-2xl text-black  hover:rounded-lg align-item-right pb-25" to="/register">Not Yet Registered? Sign Up</Link>

            </div>
        )
    }



    return (

        <div className="antialiased">
            <CardBody form={form()}/>
        </div>
    );
}

export default Index;