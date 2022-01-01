import React from 'react';
import {Link} from 'react-router-dom';
import bgImage from "../../images/social.jpg"
import logo from "../../images/geekzmeet.jpg"
import HomeImage from "../../gadgets/HomeImage";

function Index() {
    return (
        <div className="container mx-auto w-full lg:max-w-full lg:flex pb-5">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    {/*image here*/}
                           <HomeImage/>

                </div>
                <div className="col-span-1">
                    {/*Form starts here ..........*/}
                    <div className="flex items-center h-screen w-full bg-gray-200 ">

                        <div className="w-full h-2/3 bg-gray-300 rounded-3xl shadow p-8 m-4 p-10 mx-10 py-4 my-28">

                            <h1 className="block w-full text-center text-black text-3xl font-bold mb-6 shadow outline-black">Register Here</h1>
                            <form className="mb-4 md:flex md:flex-wrap md:justify-between rounded" action="/" method="post">

                                   <div className="md:w-full px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                            Email Address*
                                        </label>
                                        <input
                                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                            id="email" type="email" placeholder="Enter Email Address"/>
                                   </div>
                                   <div className="md:w-full px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-gray-500 text-md font-bold mb-2" >
                                            Password *
                                        </label>
                                        <input
                                            className="w-full bg-gray-100 text-black border border-gray-200 rounded-xl py-3 px-4 mb-3"
                                            id="password" type="password" placeholder="**************"/>
                                   </div>

                                <div className="-mx-3 md:flex mt-2">
                                    <div className="md:w-full px-3">
                                        <button
                                            className="md:w-full w-full bg-gray-900 text-white font-bold py-2 px-7 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <Link className="link link-grey w-full text-center text-underline text-green-600 px-3 border-b-4 hover:border-b-2 border-black text-md hover:bg-white text-black hover: py-4 hover:rounded-xl align-item-right" to="/register">Not Yet Registered? Sign Up</Link>
                        </div>
                    </div>
                    {/*Form ends here ..........*/}
                </div>
            </div>


        </div>
    );
}

export default Index;