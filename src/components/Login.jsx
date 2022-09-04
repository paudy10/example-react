import axios from 'axios';
import React from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/login.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import config from '../config.json';
import {
    useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetailsAction } from '../userDetailSlice';



const Login = () => {

    const role = useSelector(state => state.userDetail.role)
    const dispatch = useDispatch();
    let password, email;
    const navigate = useNavigate();


    if (role === 'user') {
        navigate('/dashboard')
    }
    const onChangeInput = () => {
        password = document.getElementById('login2Password').value;
        email = document.getElementById('login2email').value;
    }


    const onSubmitLogin = async (e) => {
        e.preventDefault();
        document.getElementById('login-button').innerHTML = 'لطفا منتظر بمانید ...';

        await axios.post(`${config.baseUrl}${config.api_signin}`, {
            "email": email,
            "password": password
        })
            .then(res => ((toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }),
                localStorage.setItem("token", res.data.token),
                document.getElementById('login-button').innerHTML = 'ورود',
                dispatch(updateUserDetailsAction()),
                navigate('/dashboard')
                //sign in status 200 successfully
                //redirect
                //create and save token (jwt)
                // example for save token localStorage.setItem("token",this.state.password)
            )))
            .catch(err => ((toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }),
                document.getElementById('login-button').innerHTML = 'ورود'
            )
))


    };

return (
    <React.Fragment>
        <h5 className='login-title'>ورود به حساب کاربری</h5>
        <div className='login-div'>
            <Container className='login-bg'>
                <Row className='login-form'>
                    <Form method='GET'>
                        <FormGroup>
                            <Label style={{ color: 'white', float: 'right' }} for="login2email">ایمیل</Label>
                            <Input type='text' onKeyDown={onChangeInput} onChange={onChangeInput} name="email" id="login2email" placeholder="ایمیل خود را وارد کنید ..." />
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ color: 'white', float: 'right' }} for="login2Password">رمزعبور</Label>
                            <Input type="password" onKeyDown={onChangeInput} onChange={onChangeInput} name="password" id="login2Password" placeholder="رمزعبور خود را وارد کنید ..." />
                        </FormGroup>
                        <Button className='btn mt-2' style={{ color: 'white' }} id='login-button' onClick={onSubmitLogin}>ورود</Button>
                    </Form>
                </Row>
            </Container>
            <Row><hr style={{ color: 'white', width: '50vw', marginRight: '20vw' }}></hr></Row>
            <Row className='login-buttons'>
                <Col>
                    <Link to='/signup'><Button id='signin-button' >ثبت نام</Button></Link>
                    <Button id='forget-password' >فراموشی رمزعبور</Button>
                </Col>
            </Row>
        </div>
    </React.Fragment>
);
}


export default Login;
