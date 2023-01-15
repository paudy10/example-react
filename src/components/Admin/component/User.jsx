import React from 'react';
import { getusers } from '../../../services/getdata';
import { Container, Row, Col, Button } from 'react-bootstrap';
import config from '../../../config.json';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../Loading';

class User extends React.Component {

    state = {
        Users: [],
        DataisLoaded: false

    }


    async componentDidMount() {
        await getusers()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Users: json,
                    DataisLoaded: true
                });
            })
    }

    async deleteUser() {
        const url = window.location.href;
        const email = url.split('/').pop();

        await axios.post(`${config.baseUrl}${config.api_delUser}`, {
            "email": email
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

    render() {

        const url = window.location.href;
        const email = url.split('/').pop();

        const { DataisLoaded, Users } = this.state;
        if (!DataisLoaded) return <Container>
            <Row>
                <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
                </div>
            </Row>
            <Row>
                <div className='mt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='loadingBg'><Loading type='balls' color='#39ce0c' /></div>
                </div>
            </Row>
        </Container>;

        const Username = Users.map((User) => {
            if (User.email === email) {
                return (
                    <p>{User.username}</p>
                )
            }
            else {
                return '';
            }
        })
        const Email = Users.map((User) => {
            if (User.email === email) {
                return (
                    <p>{User.email}</p>
                )
            }
            else {
                return '';
            }
        })
        const Plan = Users.map((User) => {
            if (User.email === email) {
                return (
                    <p>{User.plan}</p>
                )
            }
            else {
                return '';
            }
        })
        const Password = Users.map((User) => {
            if (User.email === email) {
                return (
                    <p>{User.password}</p>
                )
            }
            else {
                return '';
            }
        })
        const CreatAt = Users.map((User) => {
            if (User.email === email) {
                const time = User.createdAt.split('T');
                const hour = time[1].split('.');
                return (
                    <p>{time[0]}  -  {hour[0]}</p>
                )
            }
            else {
                return '';
            }
        })
        return (
            <Container>
                <Row>
                    <p style={{ textAlign: 'center', color: '#8425ba' }}>اطلاعات کاربر</p>
                </Row>
                <hr style={{ width: '60%', marginRight: '20%' }} />
                <Row>
                    <div className='userDiv'>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>نام :</p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <p className='UserData'>{Username}</p>
                            </Col>
                        </Row>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>ایمیل :</p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <p className='UserData'>{Email}</p>
                            </Col>
                        </Row>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>رمزعبور رمزشده :</p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <p className='UserData pass'>{Password}</p>
                            </Col>
                        </Row>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>تاریخ ثبت نام :</p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <p className='UserData'>{CreatAt}</p>
                            </Col>
                        </Row>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>پلن :</p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <p className='UserData'>{Plan}</p>
                            </Col>
                        </Row>
                        <Row className='UserItems'>
                            <Col lg={6} sm={12}>
                                <p className='UserTitle'>حذف حساب کاربر </p>
                            </Col>
                            <Col lg={6} sm={12}>
                                <Button onClick={this.deleteUser} className='deleteUserBtn' ><i className='fa fa-trash'></i></Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        )
    }
};
export default User;