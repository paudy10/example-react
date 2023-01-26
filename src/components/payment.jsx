import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Input } from 'reactstrap';
import '../css/shop.css';
import Loading from './Loading';
import { getcart } from '../services/getdata';
import { toast } from 'react-toastify';
import config from '../config.json';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class payment extends React.Component {
    state = {
        cart: [],
        DataisLoaded: false

    }

    async componentDidMount() {
        await new Promise(r => setTimeout(r, 2000));
        this.setState({ DataisLoaded: true })
        localStorage.setItem('State', 'Cart')

        await getcart()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    cart: json,
                    DataisLoaded: true
                });
            })
    }


    render() {

        const { DataisLoaded, cart } = this.state; const token = localStorage.getItem('token')
        let UserId;
        if (token != null) {
            var decoded = jwt_decode(token);
            UserId = decoded.details.id
        }
        let x = 0;
        cart.map((pro) => {
            if (pro.userId == UserId) {
                return (
                    x = x + parseInt(pro.price)
                )
            }
        });

        if (!DataisLoaded) return <React.Fragment>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
            </div>

            <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='loadingBg'><Loading type='balls' color='#39ce0c' /></div>
            </div>
        </React.Fragment>;


        return (
            <React.Fragment>
                <p className='main-color m-4'>نهاییی کردن خرید</p>
                <Container style={{display:'flex' , alignItems:'center' , flexWrap:'wrap' , flexDirection:'column' , alignContent:'center'}}>
                    <Row>
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>مشخصات خود را کامل کنید !</p>
                        <div>
                            <Input className='m-4' type='text' placeholder='آدرس'/>
                            <Input className='m-4' type="number" placeholder='کد پستی'/>
                        </div>
                    </Row>
                    <hr />
                    <Row style={{textAlign:'center'}}>
                        مبلغ نهایی قابل پرداخت : {x} تومان
                    </Row>

                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to={'/cart2'} style={{ textAlign: 'center', width: '200px' }}><Button className='mt-4' style={{ backgroundColor: 'green', textAlign: 'center', width: '200px' }}>تایید و پرداخت</Button></Link>
                    </Row>

                    <div style={{ position: 'fixed', bottom: '10px', left: '10px', width: '300px' , height:'80px' }}>
                        <img id='this' onClick={() => document.getElementById("this").style.display = 'none'} src='https://parsitarh.com/wp-content/uploads/2017/09/jainjas-banner-design.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                    </div>
                </Container>
            </React.Fragment >
        )
    }
};

export default payment;












