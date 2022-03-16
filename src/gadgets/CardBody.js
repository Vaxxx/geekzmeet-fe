import React from 'react';
import social from "../images/social.jpg";
import logoPNG from "../images/geekzmeet.png";
import appleStoreWhiteButton from "../images/icons/apple-store-white-button.svg";
import googlePlayWhiteButton from "../images/icons/google-play-white-button.svg";
import {Link} from "react-router-dom";

/**
 *
 * @param form
 * @param children
 * @returns {JSX.Element}
 * @constructor
 *
 * The CardBody is a component that acts as a page for the login, register and about..
 * form prop is the position to place the form
 * children prop is used in the about page to add login and register button
 */

const CardBody = ({form, children}) => {
    return (
        <main>
            <div className="xl:h-screen bg-red-100  overflow-auto" style={{background: `url(${social}) repeat`}}>
                <div className="sm:h-96 xl:h-full container mx-auto px-5">
                    <div className="absolute top-8 bg-gray-100 opacity-75" >
                        <img src={logoPNG} width="200" alt=""/>
                    </div>
                    <br/>
                    <div
                        className="xl:h-full grid gap-y-8 sm:gap-y-0 sm:gap-x-10 sm:grid-cols-2 mt-32 xl:mt-auto content-center">
                        <div className="sm:col-span-1 space-y-5 md:space-y-8 mt-32">
                            {/*<h1 className="text-4xl sm:text-3xl xl:text-5xl font-semibold text-orange-500 shadow border-solid">GeekzMeet</h1>*/}
                            {/*<p className="max-w-sm text-5xl md:text-2xl ml-20 bg-gray-200 font-bold opacity-50 ">An Oasis for all Geeks</p>*/}

                            <div className="bg-gray-200 opacity-25 rounded text-lg  font-bold font-p-4 overflow-hidden top-20 mt-32 w-50 h-50">
                                <p>
                                    Geekzmeet is a dating site where you get
                                    to meet geekz. It is a hub where we ensure we assist our geekz all the way to get a
                                    partner...
                                    <Link to="/about"
                                          className="font-italic font-weight-bolder text-decoration-underline text-orange-500 underline">Why
                                        GeekzMeet?</Link>
                                </p>
                            </div>
                            {children}
                            <div className="flex justify-start space-x-4">
                                <a href="/"><img
                                    className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                                    src={appleStoreWhiteButton} alt=""/></a>
                                <a href="/"><img
                                    className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                                    src={googlePlayWhiteButton} alt=""/></a><br/><br/>

                            </div>

                        </div>
                        <div className="grid justify-items-center  opacity-75 ">
                            {/*Form starts here*/}
                            {form}

                            {/*Form ends here*/}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CardBody;