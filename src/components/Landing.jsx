import React, { Component } from 'react';
import { Col, Row, Container, CardImg, Button } from 'reactstrap';
import image from '../images/main-image.jpg';
import '../css/landing.css';
import 'react-toastify/dist/ReactToastify.css';
import getCounter from '../services/counter'
import Counter from './counter';
import { Link } from "react-router-dom";
import Options from './options';
import Emoji from './Emoji';

class Landing extends Component {
    state = {}

    render() {
        const counter = getCounter();
        return (
            <Container>

                <Row className='welcome-sec'>
                    <Col className='welcome-image' sm={12} lg={7} md={6}>
                        <CardImg className='image-fluid' src={image}></CardImg>
                    </Col>
                    <Col className='welcome-text' sm={12} lg={5} md={6}>
                        <p className='field-purple'><p className='welcome-text1'>به اَپلیکیشن ساز خوش آمدید</p></p>
                        <p className='welcome-text2'>اینجا میتونی بدون دانش برنامه نویسی اَپلیکیشن خودت رو با کلی امکانات به سادگی و فقط با چند کلیک  درست کنی ! </p>
                        <Row className='welcome-buttons'>
                            <Col className='create-app-button'><Button><Link to='/appsaz' className='nolinkdecoration' >ساخت اَپلیکیشن</Link></Button></Col>
                            <Col className='prices-button'><Button><Link to='/prices' className='nolinkdecoration' >تعرفه ها</Link></Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='sec2-hr'><hr></hr></Row>
                <Row className='counters align-self-center d-flex justify-content-center'>
                    <Counter counter={counter} />
                </Row>
                <Row className='sec2-hr'><hr></hr></Row>
                <Row className='option-sec'>
                    <p className='option-title'> <Emoji emoji='&#128525;'/> امکانات</p>
                    <Row className='options'>
                        <Options/>
                    </Row>
                </Row>
            </Container>
        );
    }
}


export default Landing;