import axios from 'axios';
import React from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../css/login.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import config from '../../config.json';
import {
    useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetailsAction } from '../../userDetailSlice';
import Loading from '../Loading';
import '../../css/contact.css';


const AdminLogin = () => {

    const role = useSelector(state => state.userDetail.role)
    const dispatch = useDispatch();
    let password, email;
    const navigate = useNavigate();

    if (role === 'admin') {
        navigate('/admin/dashboard')
    }

    const onChangeInput = () => {
        password = document.getElementById('login3Password').value;
        email = document.getElementById('login3email').value;
    }

    const preventDefault = (e) => {
        e.preventDefault();
    }

    const onSubmitLogin = async (e) => {
        e.preventDefault();

        await axios.post(`${config.baseUrl}${config.api_admin_signin}`, {
            "email": email,
            "password": password
        })
            .then((res) => ((toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }),
                localStorage.setItem("token", res.data.token),
                dispatch(updateUserDetailsAction()),
                navigate('/admin/dashboard'))
                //sign in status 200 successfully
                //redirect
                //create and save token (jwt)
                // example for save token localStorage.setItem("token",this.state.password)
            ))
            .catch((err) => toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }))


    };

    return (
        <React.Fragment>
            <h5 className='login-title'>ورود به حساب کاربری</h5>
            <div className='login-div'>
                <Container className='login-bg'>
                    <Row className='login-form'>
                        <Form method='GET'>
                            <FormGroup>
                                <Label style={{ color: 'white', float: 'right' }} for="login3email">ایمیل</Label>
                                <Input type='text' onKeyDown={onChangeInput} onChange={onChangeInput} name="email" id="login3email" placeholder="ایمیل خود را وارد کنید ..." />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ color: 'white', float: 'right' }} for="login3Password">رمزعبور</Label>
                                <Input type="password" onKeyDown={onChangeInput} onChange={onChangeInput} name="password" id="login3Password" placeholder="رمزعبور خود را وارد کنید ..." />
                            </FormGroup>
                            <Button className='btn mt-2' style={{ color: 'white' }} id='login-button' onClick={onSubmitLogin}>ورود</Button>
                        <Button className='dnone' id='loading-button' onClick={preventDefault} style={{ backgroundColor: 'gray', height: '6vh'  }} ><Loading type={'spin'} width={25} /></Button>

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


export default AdminLogin;
