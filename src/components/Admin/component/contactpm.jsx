import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getpm } from '../../../services/getdata';
import UserContact from './common/userContactDiv';
import Loading from '../../Loading';
import '../../../css/contactpm.css';
class contactpm extends React.Component {
    state = {
        pm: [],
        DataisLoaded: false

    }

    async componentDidMount() {
        await getpm()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    pm: json,
                    DataisLoaded: true
                });
            })

    }

    render() {
        const { DataisLoaded, pm } = this.state;
        if (!DataisLoaded) return <Container>
            <Row>
                <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
                </div>
            </Row>
            <Row>
                <div className='mt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='loadingBg'><Loading type='balls' color='#39ce0c' /></div>
                </div>
            </Row>
        </Container>;
        return (
            <Container>
                <Row>
                    <Col>
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>پیام کاربران</p>
                    </Col>
                </Row>
                <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                <div>
                    {pm.map(pm => {
                        return (
                            <Container>
                                <UserContact pm={pm} />
                            </Container>
                        )
                    })}
                </div>
            </Container>
        )
    }
}
export default contactpm;