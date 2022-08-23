import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getusers } from '../../../services/getdata';
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
        if (!DataisLoaded) return <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
        </div>;

        return (
            <Container>
                <Row>
                    <Col>
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>لیست کاربران</p>
                    </Col>
                </Row>
                <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                <Row>
                    <Table
                        bordered
                        hover
                        responsive
                        striped
                        style={{ width: '90%', marginRight: '5%' }}>
                        <thead>
                            <tr>
                                <th>
                                    نام
                                </th>
                                <th>
                                    ایمیل
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((user) => {
                                return (


                                    <tr>
                                        <td>
                                            <Link className='nolinkdecoration' style={{color : 'black'}} to={`/admin/user/${user.email}`}>
                                                {user.username}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link className='nolinkdecoration' style={{color : 'black'}} to={`/admin/user/${user.email}`}>
                                                {user.email}
                                            </Link>
                                        </td>
                                    </tr>


                                )
                            })}
                        </tbody>
                    </Table>




                </Row>
            </Container>
        )
    }
}
export default AllUsers;