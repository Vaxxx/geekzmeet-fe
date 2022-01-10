import {Link, useNavigate} from 'react-router-dom';
import HomeImage from "../../gadgets/HomeImage";
import {useState} from "react";
import axios from "axios";
import "./register.css"
import Swal from "sweetalert2";

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

    const handleInput =(event) => {
        event.persist()
        setRegister({...registerInput, [event.target.name] : event.target.value})
    }

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

    return (
        <div className="container mx-auto w-full lg:max-w-full lg:flex pb-5">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
                <div className="col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
                    {/*image here*/}
                    <HomeImage/>
                </div>
                <div className="col-span-1 md:col-span-1">
                    {/*Form starts here ..........*/}
                    <div className="flex items-center h-screen w-full bg-gray-200 ">

                        <div className="w-full h-2/3 bg-gray-300 rounded-3xl shadow p-8 m-4 p-10 mx-10 py-4 my-28">

                            <h1 className="block w-full text-center text-black text-3xl font-bold mb-6 shadow outline-black">Register Here</h1>
                            <form className="mb-4 md:flex md:flex-wrap md:justify-between rounded" onSubmit={registerSubmit}>
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                        First Name*
                                    </label>
                                    <input
                                        className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                        id="firstname" type="text" name="firstname" placeholder="Enter First Name" value={registerInput.firstname} onChange={handleInput}/>
                                    <span className="spanError">{registerInput.error_list.firstname}</span>
                                </div>
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                        Surname*
                                    </label>
                                    <input
                                        className="w-full bg-gray-100 text-gray-500 border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                        id="lastname" type="text" placeholder="Enter Last Name" name="surname" value={registerInput.surname} onChange={handleInput}/>
                                    <span className="spanError">{registerInput.error_list.surname}</span>
                                </div>
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                        Email Address*
                                    </label>
                                    <input
                                        className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                        id="email" type="email" name="email" placeholder="Enter Email Address" value={registerInput.email} onChange={handleInput}/>
                                    <span className="spanError">{registerInput.error_list.email}</span>
                                </div>
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                        Password *
                                    </label>
                                    <input
                                        className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                        id="password" type="password" name="password" placeholder="**************"value={registerInput.password} onChange={handleInput}/>
                                    <span className="spanError">{registerInput.error_list.password}</span>
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
                    </div>
                    {/*Form ends here ..........*/}
                </div>
            </div>


        </div>
    );
}

export default Index;