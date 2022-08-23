import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import config from '../../../config.json';
import axios from 'axios';

const AllUsers = async () => {

    const users = await axios.get(`${config.baseUrl}${config.api_getUsers}`).then(res => res.data)
    alert(users)
    return (
        <Container>
            <Row>
                <Col>
                    <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>لیست کاربران</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AllUsers;