import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/login.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import config from '../config.json';
import Loading from './Loading';
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }


    onChangeInput() {
        this.setState({
            username: document.getElementById('loginUsername').value,
            password: document.getElementById('loginPassword').value,
            email: document.getElementById('loginemail').value
        })
    }

    preventDefault(e) {
        e.preventDefault();
    }
    async onSubmitForm(e) {
        e.preventDefault();
        document.getElementById('login-button').innerHTML = 'لطفا منتظر بمانید ...';
        await axios.post(`${config.baseUrl}${config.api_signup}`, {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password
        })
            .then(res =>
                ((toast.success(res.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }),
                document.getElementById('login-button').innerHTML = 'ثبت نام'))
            )
            .catch((err) => ((toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }),
                document.getElementById('login-button').innerHTML = 'ثبت نام'))
            )


    };

    render() {
        return (
            <React.Fragment>
                <h5 className='login-title'>ورود به حساب کاربری</h5>
                <div className='login-div'>
                    <Container className='login-bg'>
                        <Row className='login-form'>
                            <Form method='POST'>
                                <FormGroup className='mt-3'>
                                    <Label style={{ color: 'white', float: 'right' }} for="loginUsername">نام کاربری</Label>
                                    <Input type="text" onKeyDown={this.onChangeInput} onChange={this.onChangeInput} name="username" id="loginUsername" placeholder="نام کاربری خود را وارد کنید ..." />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ color: 'white', float: 'right' }} for="loginemail">ایمیل</Label>
                                    <Input type='text' onKeyDown={this.onChangeInput} onChange={this.onChangeInput} name="email" id="loginemail" placeholder="ایمیل خود را وارد کنید ..." />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ color: 'white', float: 'right' }} for="loginPassword">رمزعبور</Label>
                                    <Input type="password" onKeyDown={this.onChangeInput} onChange={this.onChangeInput} name="password" id="loginPassword" placeholder="رمزعبور خود را وارد کنید ..." />
                                </FormGroup>
                                <Button className='btn mt-2' style={{ color: 'white' }} id='login-button' onClick={this.onSubmitForm}>ثبت نام</Button>
                                <Button className='dnone' id='loading-button' onClick={this.preventDefault} style={{ backgroundColor: 'gray', height: '6vh' }} ><Loading type={'spin'} width={25} /></Button>
                            </Form>
                        </Row>
                    </Container>
                    <Row><hr style={{ color: 'white', width: '50vw', marginRight: '20vw' }}></hr></Row>
                    <Row className='login-buttons'>
                        <Col>
                            <Link to='/login' ><Button id='signin-button' >ورود</Button></Link>
                            <Button id='forget-password' >فراموشی رمزعبور</Button>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;
