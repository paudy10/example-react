import React from 'react';


const UserApp = () => {

    var appname = window.location.href.split("/").pop()

    return (
        <div>
            <p>hi app</p>
            <p>{appname}</p>
        </div>
    )
};

export default UserApp;
