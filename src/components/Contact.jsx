import React  from 'react';
import { Container, Row, Col, FormGroup, Form, Button, Input } from 'reactstrap';
import getMapUrl from '../services/map-contact'
import '../css/contact.css';

const Contact = () => {
    const MapUrl = getMapUrl();
    return (
        <Container className='contact'>
            <h5 className='contact-title mt-5'>ارتباط با ما</h5>
            <Row>
                <Col className='mt-4' sm={12} lg={6} md={6}>
                    <div className='contact-div'>
                        <p className='' style={{ color: '#fff' }}>فرم ارتباط گیری</p>
                        <Container className='contact-bg'>
                            <Row className='contact-form'>
                                <Form>
                                    <FormGroup>
                                        <Input type="text" name="text" id="name-contact" placeholder="نام :" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="tel" name="text" id="tel-contact" placeholder="شماره تلفن :" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            id="text-contact"
                                            name="text"
                                            type="textarea"
                                            placeholder='متن پیام خود را وارد کنید !' 
                                        />
                                    </FormGroup>

                                    <Button id='send-pm-button' >ارسال پیام</Button>
                                </Form>
                            </Row>
                        </Container>

                    </div>
                </Col>
                <Col className='mt-4' sm={12} lg={6} md={6}>
                    <p className='main-color'>اطلاعات تماس</p>
                    <p className='main-color'>ایمیل : </p>
                    <img src={MapUrl} alt='نقشه مکان' className='image-fluid map-image'></img>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;