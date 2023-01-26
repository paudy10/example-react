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

class cart extends React.Component {
    state = {
        cart: [],
        DataisLoaded: false

    }
    changefee() {

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

    async deleteCart(userId, proId) {
        await axios.post(`${config.baseUrl}${config.api_delCart}`, {
            "userId": userId,
            "proId": proId
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

        const { DataisLoaded, cart } = this.state; const token = localStorage.getItem('token')
        let UserId;
        if (token != null) {
            var decoded = jwt_decode(token);
            UserId = decoded.details.id
        }
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
                <p className='main-color m-4'>سبد خرید</p>
                <Container>
                    <Row>
                        <Col>
                            <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>لیست سبد</p>
                        </Col>
                    </Row>
                    <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                    <Row>
                        <p className='help1text'><span className='crc '></span> </p>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Col className='tableStyle'>
                            <Table

                                hover
                                responsive
                                striped
                            >
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>
                                            نام محصول
                                        </th>
                                        <th style={{ textAlign: 'center' }}>
                                            قیمت
                                        </th>
                                        <th style={{ textAlign: 'center' }}>
                                            تعداد
                                        </th>
                                        <th style={{ textAlign: 'center' }}>
                                            حذف
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((pro) => {
                                        if (pro.userId == UserId) {
                                            return (


                                                <tr key={pro.userId} className='cartItem' >
                                                    <td>
                                                        {pro.title}
                                                    </td>
                                                    <td>
                                                        {pro.price}
                                                    </td>
                                                    <td>
                                                        <Input type='number' width={'100px'} placeholder='تعداد' min={1} id='tedad' defaultValue={1} onKeyUp={() => this.finalFee} onChange={() => this.finalFee} />
                                                    </td>

                                                    <td>
                                                        <Button id={pro.id} onClick={() => this.deleteCart(pro.userId, pro.proId)} className='deleteUserBtn' style={{ width: '18%', marginRight: '41%', fontSize: '13px', paddingTop: '10px', marginTop: '0.8vh' }}><i className='fa fa-trash'></i></Button>
                                                    </td>
                                                </tr>


                                            )
                                        }
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to={'/payment'} style={{ textAlign: 'center', width: '200px' }}><Button className='mt-4' style={{ backgroundColor: 'green', textAlign: 'center', width: '200px' }}>تایید سفارش</Button></Link>
                    </Row>
                    <div style={{ position: 'fixed', bottom: '10px', left: '10px', width: '300px' , height:'80px' }}>
                        <img id='this' onClick={() => document.getElementById("this").style.display = 'none'} src='https://www.kadreno.com/wp-content/uploads/2019/01/740-190.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                    </div>
                </Container>
            </React.Fragment >
        )
    }
};

export default cart;












