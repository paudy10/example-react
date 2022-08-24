import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import config from '../../../../config.json';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserContact = (props) => {

    const deletepm = async () => {
        const created = props.pm.createdAt;
        await axios.post(`${config.baseUrl}${config.api_delpm}`, {
            "createdAt": created
        })
            .then(res => toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }))
            .catch(err => toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }))
    }
    const time = props.pm.createdAt.split('T');
    const hour = time[1].split('.');
    const created = `${hour[0]} | ${time[0]} `
    return (
        <Row key={props.pm.creatAt} className='contactDiv' >

            <Col sm={12} lg={4}>
                <p>{props.pm.username}</p>
                <p>{props.pm.email}</p>
                <p>{created}</p>
            </Col>
            <Col sm={12} lg={8}>

                <hr style={{ width: '50%', marginRight: '25%', color: '#ccc' }}></hr>
                <p style={{ backgroundColor: 'white', padding: '2vh 2vw', width: '80%', marginRight: '10%', borderRadius: '20px', color: 'black' }}>{props.pm.desc}</p>
                <Row>
                    <Col>
                        <Button onClick={deletepm} className='deleteUserBtn' style={{ marginBottom: '2vh', width: '16%', marginRight: '42%' }}><i className='fa fa-trash'></i></Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    )

}

export default UserContact;
