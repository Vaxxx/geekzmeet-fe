import React from 'react';
import logo from "../images/geekzmeet.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom";

const Header = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="flex justify-between h-13 w-full bg-teal-700">
            <div className="flex justify-start align-left">
                <div className="p-2">
                    <img src={logo} alt="GeekzMeet" width="130"/>
                </div>
                <div>
                    <input
                        className="bg-gray-100 text-black border border-gray-400 hover:border-gray-800 rounded-full   shadow   px-20 ml-10 mt-3"
                        id="search" type="text" name="search" placeholder="Search GeekzMeet"  />
                </div>
            </div>
            <div className="flex align-center justify-center mx-10">

                <label className="text-blue-200 p-2 hover:text-gray-700 drop-shadow-2xl backdrop-brightness-50 bg-white/30"><Link to="/" title="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link></label>
                <button type="button"   className="text-blue-700 p-2 hover:text-gray-700"  title="Profile" onClick={() => setShowModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> </button>
                <label className="text-red-500 p-2 hover:text-gray-700"><Link to="/" title="Chat">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-86 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </Link></label>
                <label className="text-gray-100 p-2 hover:text-gray-700"><Link to="/" title="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </Link></label>

            </div>
            <div>

                <span><GiHamburgerMenu size={40} color="white"/></span>
            </div>

            {/*Profile Modal starts here*/}

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Profile
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {/* form Starts here*/}
                                    <div className="w-screen max-w-lg">
                                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <div className="mb-4">
                                                <label className="text-teal-700 text-xl ">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                    </svg>
                                                    <input
                                                        style={{ display: "none" }}
                                                        type="file"
                                                        id="file"
                                                        accept=".png,.jpeg,.jpg"
                                                    />
                                                    <span className="text-gray-700 font-bold">Add Photo</span>
                                                </label>
                                            </div>
                                            <div className="mb-6">

                                                <textarea
                                                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    placeholder="Enter your bio here"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="button">
                                                   Edit Profile
                                                </button>
                                            </div>
                                        </form>
                                        <p className="text-center text-gray-500 text-xs">
                                            &copy;2022 www.geekzmeet.com.
                                        </p>
                                    </div>
                                    {/*  form  ends here*/}

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 </>
                ) : null}
               {/*Profile Modal ends here*/}
           </div>
    );
};

export default Header;