
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {


    const user = useSelector(state => state.userDetail)

    const userAgent = navigator.userAgent.split('(')[1].split(')')[0]
    let phone = userAgent;
    let model = userAgent;
    if (userAgent.split('; ')[0] === 'Linux') {
        phone = userAgent.split('; ')[1]
        model = userAgent.split('; ')[2]
    }
    else if (userAgent.split(' ')[0] === 'Windows') {
        phone = userAgent.split('; ')[1]
        model = userAgent.split('; ')[0]
    }

    return (
        <Container >
            <Row className='dashtop'>
                <Row style={{ textAlign: 'center' }}>
                    <Col style={{color:'var(--main-color)'}}>نام</Col>
                    <Col style={{color:'var(--main-color)'}}>دستگاه</Col>
                    <Col style={{color:'var(--main-color)'}}>مدل</Col>
                </Row>
                <hr style={{ marginTop: '2vh', width: '60%', marginRight: '20%', color: '#ccc' }} />
                <Row style={{ textAlign: 'center' }}>
                    <Col>{user.username}</Col>
                    <Col>{phone}</Col>
                    <Col>{model}</Col>
                </Row>
            </Row>
            <Row className='dashtop mt-2'>
                <Row style={{ textAlign: 'center' }}>
                    <Col style={{color:'var(--main-color)'}}>ایمیل</Col>
                </Row>
                <hr style={{ marginTop: '2vh', width: '60%', marginRight: '20%', color: '#ccc' }} />
                <Row style={{ textAlign: 'center' }}>
                    <Col>{user.email}</Col>
                </Row>
            </Row>
        </Container>
    )
}

export default AdminDashboard;