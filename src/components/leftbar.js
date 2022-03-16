import React from 'react';
// import Placeholder from '../images/placeholder.jpg';
import Placeholder from '../images/8.jpeg'
import {Link} from "react-router-dom";

function Leftbar() {
    return (
        <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
            <div className="p-5 bg-white sticky top-0">
                <img className="rounded-3xl border border-indigo-100 shadow-lg w-100 h-100" alt="GeekzMeet User"
                     src={Placeholder}/>
                <div className="pt-2 border-t mt-5 w-full text-center text-xl text-indigo-400">
                       Samantha Adams
                </div>
            </div>


            <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer mt-10">
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
        </div>
    );
}

export default Leftbar;