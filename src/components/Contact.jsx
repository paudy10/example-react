import React, { useEffect } from 'react';
import { Container, Row, Col, FormGroup, Form, Button, Input } from 'reactstrap';
import getMapUrl from '../services/map-contact'
import '../css/contact.css';
import { toast } from 'react-toastify';
import config from '../config.json';
import axios from 'axios';

const Contact = () => {

    useEffect(() => {
        localStorage.setItem('State','Contact Us')
    })
    let username, email, desc;

    const onChangeInput = () => {
        username = document.getElementById('name-contact').value;
        email = document.getElementById('tel-contact').value;
        desc = document.getElementById('text-contact').value;
    }


    const onSubmitForm = async (e) => {
        e.preventDefault();
        document.getElementById('send-pm-button').innerHTML = 'در حال بررسی پیام ...';

        await axios.post(`${config.baseUrl}${config.api_post_contact}`, {
            "email": email,
            "username": username,
            "desc": desc
        })
            .then((res) => toast.success('پیام شما با موفقیت ارسال شد !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }),
                document.getElementById('send-pm-button').innerHTML = 'ارسال پیام'
            )
            .catch(err => toast.error('پر کردن تمام فیلد ها الزامی است !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }),
                document.getElementById('send-pm-button').innerHTML = 'ارسال پیام'
            )

    };

    const MapUrl = getMapUrl();
    return (
        <Container className='contact'>
            <h5 className='contact-title mt-5'>ارتباط با ما <span style={{fontSize:'11px'}}>( تیکت )</span></h5>
            <Row>
                <Col className='mt-4' sm={12} lg={6} md={6}>
                    <div className='contact-div'>
                        <p className='' style={{ color: '#fff' }}>فرم ارتباط گیری</p>
                        <Container className='contact-bg'>
                            <Row className='contact-form'>
                                <Form>
                                    <FormGroup>
                                        <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="name-contact" placeholder="نام :" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="tel" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="tel-contact" placeholder="شماره تلفن :" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input onKeyDown={onChangeInput} onChange={onChangeInput}
                                            id="text-contact"
                                            name="text"
                                            type="textarea"
                                            placeholder='متن پیام خود را وارد کنید !'
                                        />
                                    </FormGroup>

                                    <Button onClick={onSubmitForm} id='send-pm-button' >ارسال پیام</Button>

                                </Form>
                            </Row>
                        </Container>

                    </div>
                </Col>
                <Col className='mt-4' sm={12} lg={6} md={6}>
                    <p className='main-color'>اطلاعات تماس</p>
                    <p className='main-color'>ایمیل : Mail@AttarKhune.Ir</p>
                    <p className='main-color'>شماره تلفن : 09170955479</p>
                    <p className='main-color'>کانال تلگرام : <a style={{textDecoration:"none" , color:'green'}} href='t.me/lamjvdl'>@AttarKhune</a></p>
                    <img src={MapUrl} alt='نقشه مکان' className='image-fluid map-image'></img>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;