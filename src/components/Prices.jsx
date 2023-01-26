import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/price.css';
// import { getprice } from '../services/getdata';
import Loading from './Loading';
class price extends React.Component {
    state = {
        Price: [{ "_id": "62ff5e4c70c2a62a5d72f49b", "id": 3, "title": "تعرفه برنزی", "option": "این تعرفه شامل اپشن های", "price": 77000, "__v": 0 }, { "_id": "62ff5e5670c2a62a5d72f49e", "id": 2, "title": "تعرفه تقره ای", "option": "این تعرفه شامل اپشن های", "price": 100000, "__v": 0 }, { "_id": "62ff5e5b70c2a62a5d72f4a1", "id": 1, "title": "تعرفه طلایی", "option": "این تعرفه شامل اپشن های", "price": 123000, "__v": 0 }],
        DataisLoaded: false

    }


    async componentDidMount() {
        await new Promise(r => setTimeout(r, 2000));
        this.setState({ DataisLoaded: true })
        localStorage.setItem('State','Prices')
    }
    render() {
        const { DataisLoaded, Price } = this.state;
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
                <p className='main-color m-4'>تعرفه ها</p>
                <p style={{fontSize:"13px" , marginTop:'0vh' , marginRight:'2vw'}} className='main-color'>تعرفه ی سایت برای انجام مشاوره با مشاورین و تخفیف رو گیاهان دارویی</p>
                <p style={{fontSize:"13px" , marginTop:'0vh' , marginRight:'2vw'}} className='main-color mb-3'>پس از خریداری اشتراک بخش مشاوره در پنل شما فعال خواهد شد</p>
                <Container>
                    <Row>

                        {Price.map(p => (
                            < Col sm={12} lg={4} md={6} key={p.id}  >
                                <div className='price-div'>
                                    <div className={(() => {
                                        switch (p.id) {
                                            case 1:
                                                return 'gold-bg'
                                            case 2:
                                                return 'silver-bg'
                                            case 3:
                                                return 'bronz-bg'
                                            default:
                                                return 'bronz-bg'
                                        }
                                    })()}>
                                        <p className='price-title'>{p.title}</p>
                                        <p className='price-desc'>{p.option}</p>
                                        <Row>
                                            <Col>
                                                <Button className='price-button'>خرید</Button>
                                            </Col>
                                            <Col>
                                                <p className='price-price'>{p.price}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        ))}



                    </Row>
                </Container>
            </React.Fragment >
        )
    }
};

export default price;