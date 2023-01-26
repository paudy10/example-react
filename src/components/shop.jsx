import React from 'react';
import { Link, Navigate, useNavigate, useNavigationType } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../css/shop.css';
import Loading from './Loading';
import { getblog } from '../services/getdata';
import { toast } from 'react-toastify';
import config from '../config.json';
import jwt_decode from 'jwt-decode'
import axios from 'axios';

class shop extends React.Component {
    state = {
        shop: [],
        DataisLoaded: false

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
        await new Promise(r => setTimeout(r, 2000));
        this.setState({ DataisLoaded: true })
        localStorage.setItem('State', 'Online Shop')

        await getblog()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    shop: json,
                    DataisLoaded: true
                });
            })
    }

    render() {

        const { DataisLoaded, shop } = this.state;
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
                <p className='main-color m-4'>جدید ترین محصولات</p>
                <Container>
                    <Row style={{ display: 'flex', justifyContent: 'center !important', alignItems: 'center !important' }}>
                        {shop.map(shop => (
                            < Col sm={12} lg={4} md={6}>
                                <div onClick={this.cart.bind(this, shop.id)} style={{ cursor: "pointer", width: '30px', height: '30px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '100%', float: 'left', top: '10px', left: '10%', boxShadow: '0px 0px 3px 1px #ccc' }}><span className='fa fa-shopping-basket' style={{ color: 'green' }}></span></div>

                                <Link className='shop-div' key={shop.id} to={`/shop/${shop.id}`} >

                                    <div className='shop-bg'>

                                        <img src={shop.img} alt={shop.alt} width={250} className='image-fluid'></img>
                                        <p className='shop-title'>{shop.title}</p>
                                        <p className='shop-desc' style={{ textAlign: 'justify' }}>{shop.desc}</p>
                                        <p className='shop-price' style={{ textAlign: 'center', color: 'white' }}>{shop.price}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}



                    </Row>
                    <div style={{ position: 'fixed', bottom: '10px', left: '10px', width: '300px' , height:'80px' }}>
                        <img id='this' onClick={() => document.getElementById("this").style.display = 'none'} src='https://www.tarhina.com/wp-content/uploads/2017/06/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%A8%D9%86%D8%B1-%D9%87%D9%86%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3.gif' width={'100%'} height='100%' style={{ borderRadius: '10px' }} />
                    </div>
                </Container>
            </React.Fragment >
        )
    }
};

export default shop;












