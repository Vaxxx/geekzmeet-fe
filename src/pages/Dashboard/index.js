import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import "./dashboard.css"
import axios from "axios";
import Header from "../../components/header";
import Leftbar from "../../components/leftbar";
import Rightbar from "../../components/rightbar";
import Timeline from "../../components/timeline";

function Index(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    // console.log("PROPS: " + props.user)
    // console.log("localstorage file" + localStorage.getItem('auth_token'))
    // console.log("localstorage emailllllllllllllllllllllllllllllllllll" + localStorage.getItem('auth_name'))
     const EMAIL_ADDRESS = localStorage.getItem('auth_name');//get the email from the local storage







  //  get user datails viz firstname,lastname, email, dob, gender,
  //   useEffect(() => {
  //       axios.get(`/api/userdetails/` + EMAIL_ADDRESS).then(response => {
  //                    setName(response.data.firstname)
  //       });
  //   },[name, EMAIL_ADDRESS])


    const logout = (event) => {
        event.preventDefault();
        axios.post(`/api/logout`).then(response => {
            console.log('wwwwwwwwwwwwwwwwwwwwrrr')
            if(response.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                Swal.fire({
                    title: 'Success!'   ,
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(r => navigate('/'))
            }
        }).then(error => {
            console.log('error: ' + error)
        })
    }

    return (
        <div className="container-fluid mx-auto">
            {/*<div className="gap-8 flex flex-row space-x-4 justify-start items-stretch">*/}
    {/*TopBar Starts here..........................*/}
       <Header/>
    {/*TopBar Ends here..........................*/}

            <div className="h-screen overflow-hidden flex items-center justify-center">
                <div className="w-full flex flex-row flex-wrap">
                    <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
                        <div
                            className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
                            <div className="w-full text-right">
                                <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
                            </div>
                        </div>

                      {/*Leftbar Starts here*/}
                      {/*   <Leftbar/>*/}
                      {/*Leftbar Ends here*/}
                      {/* Timeline starts here*/}
                        <Timeline/>
                      {/* Timeline ends here*/}
                        {/*Rightbar starts here*/}
                        <Rightbar/>
                        {/*Rightbar ends here*/}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Index;