import React, { Component, useEffect } from 'react';
import { Col, Row, Container, CardImg, Button } from 'reactstrap';
import image from '../images/plant1.jpg';
import '../css/landing.css';
import 'react-toastify/dist/ReactToastify.css';
import getCounter from '../services/counter'
import Counter from './counter';
import { Link } from "react-router-dom";
import Options from './options';
import Emoji from './Emoji';

class Landing extends Component {
    state = {}

    componentDidMount() {
        localStorage.setItem('State', 'Landing')
    }
    render() {

        const counter = getCounter();
        return (
            <Container>

                <Row className='welcome-sec'>
                    <Col className='welcome-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} sm={12} lg={7} md={6}>
                        <img className='image-fluid' alt='plant' src={image} height={500}
                            width='500vw !important'></img>
                    </Col>
                    <Col className='welcome-text mt-5' sm={12} lg={5} md={6}>
                        <p className='field-purple'><p className='welcome-text1'>به عطار خونه خوش آمدید</p></p>
                        <p className='welcome-text2'>اینجا میتونی با چند کلیک ساده بهترین داروی درمان خودت رو پیدا کنی  ! </p>
                        <Row className='welcome-buttons'>
                            <Col className='create-app-button'><Button><Link to='/shop' className='nolinkdecoration1' >فروشگاه آنلاین</Link></Button></Col>
                            <Col className='prices-button'><Button><Link to='/prices' className='nolinkdecoration1' >تعرفه ها</Link></Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='sec2-hr'><hr></hr></Row>
                <Row className='counters align-self-center d-flex justify-content-center'>
                    <Counter counter={counter} />
                </Row>
                <Row className='sec2-hr'><hr></hr></Row>
                <Row className='option-sec'>
                    <p className='option-title'> <Emoji emoji='&#128525;' /> امکانات</p>
                    <Row className='options'>
                        <Options />
                    </Row>
                </Row>
                <Row className='sec2-hr'><hr></hr></Row>
                <Row className='option-sec'>
                    <p className='option-title'> <Emoji emoji='&#127917;' /> تبلیغات</p>
                    <Row className='options'>
                        <Col lg={6} sm={12}>
                            <img src='https://daramad98.ir/wp-content/uploads/a8.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                        </Col>
                        <Col lg={6} sm={12}>
                            <img src='https://mohtavanice.ir/wp-content/uploads/2022/07/Faraso-970%C3%97250.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                        </Col>
                    </Row>
                </Row>
            </Container>
        );
    }
}


export default Landing;