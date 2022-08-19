import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state.userDetail)

    useEffect(() => {

        if (user.role === 'client' || user.role === 'admin') {
            navigate('/login')
        }

    })

    return (
        <>
            <h2>users Dashboard (Protected)</h2>

            <div>hi {user.username}</div>
        </>
    );
};

export default Dashboard;
