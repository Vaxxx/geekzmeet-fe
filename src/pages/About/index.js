import React from 'react';
import {Link} from 'react-router-dom';
import bgImage from "../../images/social.jpg"
import logo from "../../images/geekzmeet.jpg"
import HomeImage from "../../gadgets/HomeImage";

function Index() {
    return (
        <div className="container mx-auto w-full lg:max-w-full lg:flex pb-5">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    {/*image here*/}
                    <HomeImage/>

                </div>
                <div className="col-span-2">
                    {/*Form starts here ..........*/}
                    <div className="w-full rounded overflow-hidden shadow-lg">
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
                    {/*Form ends here ..........*/}
                </div>
            </div>


        </div>
    );
}

export default Index;