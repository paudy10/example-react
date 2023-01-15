import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { getuserapp } from '../../../services/getdata';
import '../../../css/user.css';
import Loading from '../../Loading';
import Applist from './applist';
import CreateApp from './createapp'
class AppSaz extends React.Component {
    state = {
        apps: [],
        DataisLoaded: false,
        title: ''
    }

    async componentDidMount() {
        let user = this.props.user;

        await getuserapp(user.email)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    apps: json,
                    DataisLoaded: true
                });
            })
    }


    preventDefault(e) {
        e.preventDefault();
    }


    render() {
        const { DataisLoaded, apps } = this.state;
        var appexist = false;
        const user = this.props.user;
        if (!DataisLoaded) {
            return (<Container>
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
            </Container>);
        }
        apps.map((App) => {
            if(App.title !== null){
                appexist = true;
                return appexist
            }else {
                return appexist
            }
        })
        return (
            <Container>
                <Row>
                    <Col>
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>اَپلیکیشن</p>
                    </Col>
                </Row>
                <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                <Row>
                    <Col style={{ color: 'var(--main-color)' }}>
                        <p style={{ marginRight: '20px', fontSize: '0.9rem' }}><span className='crc'></span>نام اَپ را بدون فاصله وارد کنید !</p>
                        <p style={{ marginRight: '20px', fontSize: '0.9rem' }}><span className='crc'></span>این نام به عنوان آدرس اَپلیکیشن شما خواهد بود !</p>
                    </Col>
                </Row>
                <Row >
                    <Col sm={1}></Col>
                    <Col className='tableStyle' sm={10}>
                        {appexist ? <Applist user={user} Apps={apps} /> : <CreateApp user={user} />}
                    </Col>
                    <Col sm={1}></Col>




                </Row>
            </Container>
        )
    }
}
export default AppSaz;