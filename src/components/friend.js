import React from 'react';
import Placeholder from '../images/placeholder.jpg';

function Friend(props) {
    return (
        <div>
            <img src={Placeholder} alt="friends" className="w-100 h-100 rounded"/>
            <h5 className="text-blue-800 ml-8 p-2">John Doe</h5>
        </div>
    );
}

export default Friend;