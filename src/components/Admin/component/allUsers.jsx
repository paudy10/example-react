import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getusers } from '../../../services/getdata';
import '../../../css/user.css';
import Loading from '../../Loading';
class AllUsers extends React.Component {
    state = {
        Users: [],
        DataisLoaded: false

    }

    async componentDidMount() {
        await getusers()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Users: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, Users } = this.state;
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
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>لیست کاربران</p>
                    </Col>
                </Row>
                <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                <Row>
                    <p className='help1text'><span className='crc '></span> با کلیک بر روی نام کاربر مورد نظر خود , وارد پروفایل کاربر می شوید !</p>
                </Row>
                <Row >
                    <Col sm={1}></Col>
                    <Col className='tableStyle' sm={10}>
                        <Table

                            hover
                            responsive
                            striped
                        >
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>
                                        نام
                                    </th>
                                    <th style={{ textAlign: 'center' }}>
                                        ایمیل
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((user) => {
                                    return (


                                        <tr key={user.email} className='userItem' >
                                            <td>
                                                <Link className='nolinkdecoration' style={{ color: 'black' }} to={`/admin/user/${user.email}`}>
                                                    {user.username}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link className='nolinkdecoration' style={{ color: 'black' }} to={`/admin/user/${user.email}`}>
                                                    {user.email}
                                                </Link>
                                            </td>
                                        </tr>


                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={1}></Col>




                </Row>
            </Container>
        )
    }
}
export default AllUsers;