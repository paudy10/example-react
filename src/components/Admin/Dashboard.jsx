import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state.userDetail)

    useEffect(() => {

        if (user.role === 'client' || user.role === 'user') {
            navigate('/admin/login')
        }

    })

    return (
        <>
            <h2>admins Dashboard (Protected)</h2>

            <div>hi {user.username}</div>
        </>
    );
};

export default Dashboard;
