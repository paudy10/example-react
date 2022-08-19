import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/price.css';
import { getprice } from '../services/getdata';
class price extends React.Component {
    state = {
        Price: [],
        DataisLoaded: false

    }

    async componentDidMount() {
        await getprice()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Price: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, Price } = this.state;
        if (!DataisLoaded) return <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
        </div>;

        return (
            <React.Fragment>
                <p className='main-color m-4'>تعرفه ها</p>
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