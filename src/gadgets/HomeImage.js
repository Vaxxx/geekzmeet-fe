import React from 'react';
import logo from "../images/geekzmeet.jpg";
import {Link} from "react-router-dom";
import bgImage from "../images/social.jpg";

function HomeImage(props) {
    return (
        <div className="bg-contain rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden relative">
            <div className="absolute h=1/5 w=4/5 left=2/3 top=1/5 outline-shadow shadow-md">
                <img src={logo}    width="200" alt="GeekzMeet"/>
            </div>
            <div className="absolute h-1/2 w-1/3 left-1/3 top-1/4 shadow-xl">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4 bg-gray-300 opacity-60">
                        <p className="animate__animated animate__fadeInUp flex flex-wrap text-black text-bold text-lg font-serif font-medium"> <span className="text-3xl md:text-3xl sm:text-md sm:text-center font-bold text-blue-900">GeekzMeet</span> is a dating site where you get
                            to meet geekz. It is a hub where we ensure we assist our geekz all the way to get a
                            partner...
                            <br/> <Link to="/about"
                                        className="font-italic font-weight-bolder text-decoration-underline text-black underline">Why
                                GeekzMeet?</Link>
                        </p>
                    </div>
                </div>

            </div>
            <img src={bgImage}   alt="GeekzMeet Background "/>
        </div>
    );
}

export default HomeImage;