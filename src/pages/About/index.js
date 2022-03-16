import React from 'react';
import {Link} from 'react-router-dom';
import CardBody from "../../gadgets/CardBody";


function aboutGeekz(){
    return(
        <div className="bg-gray-100 ">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">GeekzMeet</div>
                <p className="text-gray-700   shadow rounded-3xl border text-md word-wrap">
                    GeekzMeet is a dating site where you get to meet geekz.
                    It is a hub where we ensure we assist our geekz all the way to get a partner.
                    Fitness is key and we coach our geekz on the importance of fitness in getting their partner.
                </p>
                <p className="text-gray-700 text-lg shadow rounded-3xl border word-wrap mx-7 mt-20">
                    GeekzMeet is more than just a dating site, there is all sort of socializing with same and opposite sex and
                    we assist you all the way to ensure you do the right thing to get your date.
                </p>
                <p className="text-gray-700 text-lg shadow rounded-3xl border word-wrap mx-7 mt-20">
                    At GeekzMeet, we coach you one on one and ensure we don’t leave you dry until you secure your date.
                    We hold conferences and meetings to ensure you have all the tools and gadgets to make your date wanting more.
                </p>
                <p className="text-gray-700 text-lg shadow rounded-3xl border word-wrap mx-7 mt-20">
                    Your nutrition is also another aspect of ensuring you are on top of your game. At GeekzMeet,
                    we give you tips and ensure you follow a routine to bring out the best of you
                </p>
                <p className="text-gray-700 text-lg shadow rounded-3xl border word-wrap mx-7 mt-20">
                    GeekzMeet is also a place where we share game tips and game jokes.
                    There is a whole lot of fun associating with people of like minds.
                </p>
                <p className="text-gray-700 text-lg shadow rounded-3xl border word-wrap mx-7 mt-20">
                    Welcome to GeekzMeet where we make you know that being a geek is the next best thing.
                </p>
            </div>
            <div className="font-bold text-xl mb-2 ">Membership in GeekzMeet</div>
            <div className="px-6 pt-4 pb-2">
                                <span
                                    className="inline-block bg-gray-400 rounded-full px-3 py-3 text-md font-semibold text-red-200 mr-2 mb-2">#Bronze</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-3 text-md font-semibold text-gray-700 mr-2 mb-2">#Silver</span>
                <span
                    className="inline-block bg-yellow-800 rounded-full px-3 py-3 text-md font-semibold text-gray-100 mr-2 mb-2">#Gold</span>
            </div>
        </div>
    )
}
function extraWidgets(){
    return (
        <div className="mt-40 h-30 w-30 left-0">
            <p>
                <Link className="bg-blue-700 m-4 p-5 rounded-lg text-white transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-100 hover:text-black" to="/login">Login</Link>
                <Link className="bg-green-700 m-4 p-5 rounded-lg text-white transform hover:-translate-y-1 hover:shadow-lg hover:bg-green-100 hover:text-black" to="/register">Register</Link>
            </p>
        </div>
    )
}

function Index() {


    return (
        <div className="antialiased">
           <CardBody form={aboutGeekz()} children={extraWidgets()}/>
        </div>
    );
}

export default Index;