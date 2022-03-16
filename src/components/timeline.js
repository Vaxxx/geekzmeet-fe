import React, {useState} from 'react';
import Modal from "./modal/modal";
import './timeline.css';
import Placeholder from "../images/8.jpeg";
import {Link} from "react-router-dom";

function Timeline() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="w-full md:w-4/6 lg:w-4/6 p-5 md:px-12 lg:24 h-full scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-blue-100 h-32 overflow-y-scroll scrollbar">



            <div className="bg-white w-full shadow rounded-lg p-5">
                        <textarea  onClick={() => {
                            setModalOpen(true);
                        }} className="bg-gray-200 w-full rounded-lg shadow border hover:border-blue-900 hover:border-8 p-2" rows="5"
                                  placeholder="What's on your mind?"></textarea>

                <div className="w-full flex flex-row flex-wrap mt-3">
                    <div className="w-1/4"
                     // onClick={() => {
                     //     setModalOpen(true);
                     // }}
                    >
                        <label className="text-teal-700 text-xl ">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg,.mp4,.mp3"
                            />
                            <span className="flex l-0 ml-0 text-gray-700 font-bold">Photo</span>
                        </label>
                    </div>



                    <div className="w-1/4">
                        <label className="border-teal-700 text-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".mp4,.avi,.mpeg"
                            />
                            <span className="flex l-0 ml-0 text-gray-700 font-bold">Video</span>
                        </label>
                    </div>



                    <div className="w-1/4">
                        <label className="text-teal-700 text-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <input
                                style={{ display: "none" }}
                                type="date"
                                id="date"
                            />
                            <span className="flex l-0 ml-0 text-gray-700 font-bold">Event</span>
                        </label>
                    </div>


                    <div className="w-1/4">
                        <label className="text-blue-300 text-xl "
                         onClick={() => {
                             setModalOpen(true);
                         }}
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <input
                                style={{ display: "none" }}
                                type="text"
                                id="date"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            />
                            <span className="flex l-0 ml-0 text-gray-700 font-bold">Write your Story</span>
                        </label>
                    </div>



                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
            </div>

            <div className="mt-3 flex flex-col">


                <div className="bg-white mt-3">
                    <img className="border rounded-t-lg shadow-lg " alt=""
                         src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                        A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
                    </div>
                    <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
                        <div
                            className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Like
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment
                        </div>
                    </div>

                    <div
                        className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
                        <div className="w-full">
                            <div className="w-full text-left text-xl text-gray-600">
                                @Some Person
                            </div>
                            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on
                            Unsplash.
                            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on
                            Unsplash.
                        </div>
                    </div>
                </div>


                <div className="bg-white mt-3">
                    <img className="border rounded-t-lg shadow-lg " alt=""
                         src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                        A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
                    </div>
                    <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                        <div
                            className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Like
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment
                        </div>
                    </div>
                </div>


                <div className="bg-white mt-3">
                    <img className="border rounded-t-lg shadow-lg " alt=""
                         src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                        A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
                    </div>
                    <div className="bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap">
                        <div
                            className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Like
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share
                        </div>
                        <div
                            className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Timeline;