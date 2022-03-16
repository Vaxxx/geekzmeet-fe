import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import "./register.css"
import Swal from "sweetalert2";
import React from "react";
import CardBody from "../../gadgets/CardBody";
import useForm from "../../hooks/useForm";

function Index() {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        firstname: '',
        surname: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        error_list: []
    });
///handle input
    const handleInput =(event) => {
        event.persist()
        setRegister({...registerInput, [event.target.name] : event.target.value})
    }

    const formLogin = () => {
        console.log("Callback function when form is submitted");
        console.log("Form values", values);
    }

    //custom hook call
    const {handleChange, values, errors, handleSubmit } = useForm(formLogin);

    //function to register a user
    const registerSubmit = (event) =>{
        event.preventDefault()
        const data = {
            firstname: registerInput.firstname,
            surname: registerInput.surname,
            email: registerInput.email,
            password: registerInput.password,
            dob: registerInput.dob,
            gender: registerInput.gender,
        }

        console.log(data)
        axios.get('/sanctum/csrf-cookie').then(res => {
           // console.log('csrf-token: ' + res)
            axios.post(`/api/register`, data)
                .then(response => {
                    if(response.data.status === 200){
                        localStorage.setItem('auth_token', response.data.token);
                        localStorage.setItem('auth_name', response.data.username);
                        Swal.fire({
                            title: 'Success!'   ,
                            text: response.data.message,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        }).then(r => navigate('/'))


                    }else{
                        setRegister({ ...registerInput, error_list: response.data.validation_errors})
                    }
                }).catch((error) =>{
                console.log("error: " + error)
            })
      });
    }


    function registerForm(){
        return(
            <div className="object-none object-right bg-gray-300 w-100 h-100 rounded-lg">
                <h1 className="block w-full text-center text-black text-3xl font-bold mb-6 shadow outline-black">Register Here</h1>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between rounded" onSubmit={registerSubmit}>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            First Name*
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="firstname" type="text" name="firstname" placeholder="Enter First Name" value={registerInput.firstname} onChange={handleInput}/>
                        <span className="spanError">{registerInput.error_list.firstname}   {errors.firstname && <h3>{errors.firstname}</h3>}</span>

                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Surname*
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-500 border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="lastname" type="text" placeholder="Enter Last Name" name="surname" value={registerInput.surname} onChange={handleInput}/>
                        <span className="spanError">{registerInput.error_list.surname}   {errors.surname && <h3>{errors.surname}</h3>}</span>
                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Email Address*
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="email" type="email" name="email" placeholder="Enter Email Address" value={registerInput.email} onChange={handleInput}/>
                        <span className="spanError">{registerInput.error_list.email}   {errors.email && <h3>{errors.email}</h3>}</span>
                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Password *
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="password" type="password" name="password" placeholder="**************"value={registerInput.password} onChange={handleInput}/>
                        <span className="spanError">{registerInput.error_list.password}   {errors.password && <h3>{errors.password}</h3>}</span>
                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Date Of Birth *
                        </label>
                        <input
                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                            id="dob" type="date" name="dob" value={registerInput.dob} onChange={handleInput}/>
                        <span className="spanError">{registerInput.error_list.dob}</span>
                    </div>
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                            Gender*
                        </label>
                        <div>
                            <select
                                className="w-full bg-gray-200 border border-black rounded-2xl border-double text-black text-xs py-3 px-4 pr-8 mb-3 "
                                id="gender" value={registerInput.gender} name="gender" onChange={handleInput}>
                                <option>Choose a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Custom">Custom</option>
                            </select>
                            <span className="spanError">{registerInput.error_list.gender}</span>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-3">
                            <button
                                className="md:w-full w-full bg-gray-900 text-white font-bold py-2 px-7 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
                <Link className="link link-grey w-full text-center text-underline text-green-600 px-3 border-b-4 hover:border-b-2 border-black text-md hover:bg-white text-black hover: py-4 hover:rounded-xl " to="/login">Already have an account? Sign In</Link>
            </div>
        )
    }

    return (
        <div className="antialiased">
            <CardBody form={registerForm()}/>
        </div>
    );
}

export default Index;