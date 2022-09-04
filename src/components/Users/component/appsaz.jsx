import React from 'react';
import { Col, Container, Row, Table, Button, Input } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify'
import { getapps } from '../../../services/getdata';
import config from '../../../config.json';
import '../../../css/user.css';
import Loading from '../../Loading';
class AppSaz extends React.Component {
    state = {
        apps: [],
        DataisLoaded: false,
        title: ''
    }

    async componentDidMount() {
        await getapps()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    apps: json,
                    DataisLoaded: true
                });
            })
    }

    async deleteApp(title) {
        await axios.post(`${config.baseUrl}${config.api_delapps}`, {
            "title": title
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

    preventDefault(e) {
        e.preventDefault();
    }
    async createApp() {
        const user = this.props.user;
        const title = document.getElementById('appName').value
        var btn = document.getElementById('createApp')
        alert(title)
        var btn2 = document.getElementById('loading-button')
        btn.classList.add('dnone')
        btn2.classList.remove('dnone')
        if (title.length > 3) {
            await axios.post(`${config.baseUrl}${config.api_createapps}`, {
                "title": title,
                "creator": user.email
            })
                .then(res => ((toast.success(res.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }),
                    btn2.classList.add('dnone'),
                    btn.classList.remove('dnone')))
                )
                .catch(err => ((toast.error(err.response.data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }),
                    btn2.classList.add('dnone'),
                    btn.classList.remove('dnone')))
                )
        }
        else {
            toast.error('نام اَپ باید بیشتر از 3 حرف باشد !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            btn2.classList.add('dnone')
            btn.classList.remove('dnone')

        }

    }

    render() {
        const { DataisLoaded, apps } = this.state;
        const user = this.props.user;
        if (!DataisLoaded) return <Container>
            <Row>
                <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
                </div>
            </Row>
            <Row>
                <div className='mt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='loadingBg'><Loading type='balls' color='#8e0ec9' /></div>
                </div>
            </Row>
        </Container>;
        var appexist = false;
        const thisApp = apps.map((App) => {

            if (App.creator === user.email) {
                appexist = true;
                return (
                    <tr key={App._id} className='AppItem' >
                        <td>
                            <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <p style={{ marginTop: '2vh' }}>{App.title}</p>
                            </div>
                        </td>
                        <td>
                            <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <p style={{ marginTop: '2vh' }}>{App.creator}</p>
                            </div>
                        </td>
                        <td>
                            <Button id={App.title} onClick={() => this.deleteApp(App.title)} className='deleteUserBtn' style={{ width: '18%', marginRight: '41%', fontSize: '13px', paddingTop: '10px', marginTop: '0.8vh' }}><i className='fa fa-trash'></i></Button>
                        </td>
                    </tr>
                )
            }
            else {
                return ''
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
                        {(() => {
                            if (appexist) {
                                return (<Table

                                    hover
                                    responsive
                                    striped
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>
                                                عنوان
                                            </th>
                                            <th style={{ textAlign: 'center' }}>
                                                سازنده
                                            </th>
                                            <th style={{ textAlign: 'center' }}>
                                                حذف اَپ
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {thisApp}
                                    </tbody>
                                </Table>)
                            }
                            else {
                                return (
                                    <Container>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <Input type="text" style={{ margin: '20px 0px', width: '90%', marginRight: '5%' }} name="text" id="appName" placeholder="عنوان اَپ : " />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Button id="createApp" onClick={() => this.createApp()} style={{ backgroundImage: 'var(--gradient-color)', border: 'none', width: '30%', marginRight: '35%', marginTop: '5px', marginBottom: '10px' }}>ثبت اَپ</Button>
                                            <Button className='dnone' id='loading-button' onClick={this.preventDefault} style={{ backgroundColor: 'gray', height: '5.5vh' , textAlign:'center',width: '30%', marginRight: '35%', marginTop: '5px', marginBottom: '10px' , alignItems:'center' , justifyContent:'center' }} ><Loading className='dflex' style={{textAlign:'center'}} type={'spin'} width={25} /></Button>
                                        </Row>
                                    </Container>
                                )
                            }
                        })()}

                    </Col>
                    <Col sm={1}></Col>




                </Row>
            </Container>
        )
    }
}
export default AppSaz;