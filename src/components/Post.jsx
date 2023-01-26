/* eslint-disable eqeqeq */
import { flexbox } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/post.css';
import { getblog } from '../services/getdata';
import Loading from './Loading';
import axios from 'axios';
import config from '../config.json';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
class Post extends React.Component {
    state = {
        post: [],
        DataisLoaded: false,
        id: 0,
    }

    cart(idd) {
        const token = localStorage.getItem('token')
        let UserId;
        if (token != null) {
            var decoded = jwt_decode(token);
            UserId = decoded.details.id
        }
        else {
            window.location.replace('/login')
        }
        this.state.shop.map((id) => {
            if (id.id === idd) {
                let title = id.title
                let userId = UserId
                let proId = idd
                let price = id.price
                axios.post(`${config.baseUrl}${config.api_setcart}`, {
                    "userId": userId,
                    "proId": proId,
                    "title": title,
                    "price": price
                })
                    .then((res) => toast.success(res.data.msg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    }))
                    .catch((err) => toast.error(err.response.data.msg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    }))
            }
        })

    }

    async componentDidMount() {
        const url = window.location.href;
        const id = url.split('/').pop();
        await getblog()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    post: json,
                    DataisLoaded: true,
                    id
                });
            })
        localStorage.setItem('State', 'Check Product')

    }

    render() {
        const { DataisLoaded, post, id } = this.state;
        if (!DataisLoaded) return <React.Fragment>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
            </div>

            <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='loadingBg'><Loading type='balls' color='#39ce0c' /></div>
            </div>
        </React.Fragment>;

        const thispost = post.map((post) => {

            if (post.id == id) {
                return (
                    < Col sm={12} lg={4} md={6}>
                        <div className='post-div' key={post.id} to={`/shop/${post.id}`} >
                            <div className='post-bg'>
                                <img src={post.img} alt={post.alt} width={250} className='image-fluid'></img>
                                <p className='post-title'>{post.title}</p>
                                <p className='post-desc'>{post.desc}<br />قیمت : <span className='shop-price'>{post.price}</span></p>
                                <Button className='mb-3' color='success' onClick={() => this.cart.bind(this, post.id)}>اضافه کردن به سبد خرید</Button>
                            </div>
                        </div>
                    </Col>
                )
            }
            else {
                return '';
            }
        });
        let Rand1 = Math.floor(Math.random() * post.length) + 1;
        let Rand2 = Math.floor(Math.random() * post.length) + 1;
        let Rand3 = Math.floor(Math.random() * post.length) + 1;

        const suggestpost1 = post.map((shop) => {
            if (shop.id == Rand1) {
                return (

                    <Link className='shop-div' key={shop.id} to={`/shop/${shop.id}`} >

                        <div className='shop-bg'>

                            <img src={shop.img} alt={shop.alt} width={250} className='image-fluid'></img>
                            <p className='shop-title'>{shop.title}</p>
                            <p className='shop-desc' style={{ textAlign: 'justify' }}>{shop.desc}</p>
                            <p className='shop-price' style={{ textAlign: 'center', color: 'white' }}>{shop.price}</p>
                        </div>
                    </Link>
                )
            } else {
                return '';
            }
        }); const suggestpost2 = post.map((shop) => {
            if (shop.id == Rand2) {
                return (

                    <Link className='shop-div' key={shop.id} to={`/shop/${shop.id}`} >

                        <div className='shop-bg'>

                            <img src={shop.img} alt={shop.alt} width={250} className='image-fluid'></img>
                            <p className='shop-title'>{shop.title}</p>
                            <p className='shop-desc' style={{ textAlign: 'justify' }}>{shop.desc}</p>
                            <p className='shop-price' style={{ textAlign: 'center', color: 'white' }}>{shop.price}</p>
                        </div>
                    </Link>
                )
            } else {
                return '';
            }
        });
        const suggestpost3 = post.map((shop) => {
            if (shop.id == Rand3) {
                return (

                    <Link className='shop-div' key={shop.id} to={`/shop/${shop.id}`} >

                        <div className='shop-bg'>

                            <img src={shop.img} alt={shop.alt} width={250} className='image-fluid'></img>
                            <p className='shop-title'>{shop.title}</p>
                            <p className='shop-desc' style={{ textAlign: 'justify' }}>{shop.desc}</p>
                            <p className='shop-price' style={{ textAlign: 'center', color: 'white' }}>{shop.price}</p>
                        </div>
                    </Link>
                )
            } else {
                return '';
            }
        });
        return (
            <React.Fragment>
                <Row>
                    <Col><p style={{ float: 'right' }} className='main-color m-4'>محصول</p></Col>
                    <Col><Link to='/shop' style={{ float: 'left' }} className='main-color m-4 p-to-back'><i className='fa fa-arrow-left to-back'></i></Link></Col>
                </Row>

                <Container>
                    <Row>
                        {thispost}
                    </Row>
                </Container>
                <Row id='this' className='mb-4' onClick={() => document.getElementById('this').style.display = 'none'}>
                    <Col lg={2} sm={12}>
                    </Col><Col lg={8} sm={12}>
                        <img src='https://daramad98.ir/wp-content/uploads/a8.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                    </Col>
                    <Col lg={2} sm={12}>
                    </Col>
                </Row>
                <Row>
                    <p>محصولات مشابه</p>
                    <Row style={{
                        display: 'flexbox',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <Col style={{ display: 'contents' }} sm={12} lg={4} md={6}>{suggestpost1}</Col>
                        <Col style={{ display: 'contents' }} sm={12} lg={4} md={6}>{suggestpost2}</Col>
                        <Col style={{ display: 'contents' }} sm={12} lg={4} md={6}>{suggestpost3}</Col>
                    </Row>
                </Row>

            </React.Fragment >
        )
    }




};

export default Post;
