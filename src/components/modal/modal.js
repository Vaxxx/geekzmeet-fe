import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1 className="font-bold text-3xl antialiased">What's on your mind?</h1>
                </div>
                <div className="body">
                    <textarea className="border border-gray-600 rounded-xl p-2 mb-3"> </textarea>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;