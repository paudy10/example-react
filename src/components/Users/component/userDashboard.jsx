
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Emoji from '../../Emoji';

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
                    <Col style={{ color: 'var(--main-color)' }}>نام</Col>
                    <Col style={{ color: 'var(--main-color)' }}>دستگاه</Col>
                    <Col style={{ color: 'var(--main-color)' }}>مدل</Col>
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
                    <Col style={{ color: 'var(--main-color)' }}>ایمیل</Col>
                    <Col style={{ color: 'var(--main-color)' }}>پلن شما</Col>
                </Row>
                <hr style={{ marginTop: '2vh', width: '60%', marginRight: '20%', color: '#ccc' }} />
                <Row style={{ textAlign: 'center' }}>
                    <Col>{user.email}</Col>
                    <Col>{user.plan}</Col>
                </Row>
            </Row>

            <div style={{position:'fixed' , bottom:'10px' , left:'10px' , width:'200px'}}>
                <img id='this' onClick={() => document.getElementById("this").style.display = 'none'} src='https://daramad98.ir/wp-content/uploads/a8.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
            </div>

        </Container>
    )
}

export default AdminDashboard;