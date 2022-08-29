
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AppSaz = () => {


    const user = useSelector(state => state.userDetail)

    return (
        <Container >
            <Row className='dashtop'>
                <Row style={{ textAlign: 'center' }}>
                    <Col style={{ color: 'var(--main-color)' }}>پلن شما</Col>
                </Row>
                <hr style={{ marginTop: '2vh', width: '60%', marginRight: '20%', color: '#ccc' }} />
                <Row style={{ textAlign: 'center' }}>
                    <Col>{user.plan}</Col>

                </Row>
            </Row>
        </Container>
    )
}

export default AppSaz;