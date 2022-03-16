import React from 'react';
import Friend from "./friend";
import {Link, useNavigate} from "react-router-dom";
import Placeholder from "../images/8.jpeg";
import axios from "axios";
import Swal from "sweetalert2";

function Rightbar() {
    const navigate = useNavigate();

    // logout codes
    const logout = (event) => {
        event.preventDefault();

        axios.post(`/api/logout`).then(response => {
            if(response.data.status === 200){
                localStorage.removeItem("auth_name");
                localStorage.removeItem('auth_token');
                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(r => navigate('/login'))
            }
        });
    }

    return (
            <div className="w-0 md:w-2/6 lg:w-2/6   h-full overflow-auto justify-items-center">

                {/*former right bar*/}
                <div className="flex flex-column justify-content-center items-center text-center p-5">
                    <img className="w-20 h-20 rounded-full mr-4" src={Placeholder} alt="GeekzMeet User"/>
                        <div className="text-sm mt-6">
                            <h3 className="text-gray-700 leading-none text-xl font-bold">Smithy</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores ea ex fugiat labore laudantium quas soluta.  </p>
                        </div>
                </div>




                <div className="antialiased flex flex-col hover:cursor-pointer my-5 ">
                    <Link className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-lg text-left text-gray-600 font-semibold"
                          to="/"><i className="fa fa-comment text-gray-600 text-2xl pl-10 pt-1 float-left"></i><span className="mx-5"></span>Messages</Link>

                    <Link className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-lg text-left text-gray-600 font-semibold"
                          to="/"><i className="fa fa-bell text-red-600 text-2xl pl-10 pt-1 float-left"></i><span className="mx-5"></span>Notifications</Link>

                    <Link className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full  text-lg text-left text-gray-600 font-semibold"
                          to="/"><i
                        className="fa fa-cog text-blue-900 text-2xl pl-10 pt-1 float-left"></i> <span className="mx-5"></span>Settings</Link>

                    <button className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-lg text-left text-gray-600 font-semibold"
                    ><i className="fa fa-sign-out text-gray-600 text-2xl pl-10 pt-1 float-left"></i><span className="mx-5"></span>Log
                        out</button>
                </div>
                {/*/////former right bar*/}


                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Friends Request</h3>
                        <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full"
                                             src="/images/person/1.jpeg" alt="Neil image"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-blue-600 dark:text-white">
                                        <p className="text-sm text-blue-700 truncate dark:text-gray-400 mr-3">follow</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full"
                                             src="/images/person/2.jpeg" alt="Bonnie image"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Bonnie Green
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-red-600 dark:text-white">
                                        <p className="text-sm text-blue-700 truncate dark:text-gray-400 mr-3">follow</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full"
                                             src="/images/person/3.jpeg" alt="Michael image"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Michael Gough
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-blue-600 dark:text-white">
                                        <p className="text-sm text-blue-700 truncate dark:text-gray-400 mr-3">follow</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full"
                                             src="/images/person/4.jpeg" alt="Lana image"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Lana Byrd
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-red-600 dark:text-white">
                                        <p className="text-sm text-blue-700 truncate dark:text-gray-400 mr-3">follow</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" />
                                        </svg>

                                    </div>
                                </div>
                            </li>
                            <li className="pt-3 pb-0 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full"
                                             src="/images/person/5.jpeg" alt="Thomas image"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Thomes Lean
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <p className="text-sm text-blue-700 truncate dark:text-gray-400 mr-3">follow</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

    );
}

export default Rightbar;