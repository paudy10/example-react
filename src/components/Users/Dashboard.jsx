import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap'

import '../../css/dashboard.css';
import UserNavbar from './component/navbar';

const Dashboard = (props) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.userDetail)

    useEffect(() => {

        if (user.role === 'client' || user.role === 'admin') {
            navigate('/login')
        }

    })

    return (
        <React.Fragment>
            <Container>
                <Row className='welcome'>
                    <p><span className='username'>{user.username}</span> عزیز , به داشبورد عطار خونه خوش آمدید !</p>
                </Row>
                <Row className='dashboard-div'>
                    <Col lg={2} md={2} sm={0} className='dash-nav'>
                        <UserNavbar />
                    </Col>
                    <Col lg={9} md={9} sm={12} className='dash-div' >
                        {props.component}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
