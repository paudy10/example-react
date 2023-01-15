import React from 'react';
import { Col, Container, Row, Table, Button } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify'
import { getblog } from '../../../services/getdata';
import config from '../../../config.json';
import '../../../css/user.css';
import Loading from '../../Loading';
class BlogList extends React.Component {
    state = {
        Blogs: [],
        DataisLoaded: false
    }

    async componentDidMount() {
        await getblog()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Blogs: json,
                    DataisLoaded: true
                });
            })
    }

    async deleteUser(id) {
        await axios.post(`${config.baseUrl}${config.api_delblog}`, {
            "id": id
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

        const { DataisLoaded, Blogs } = this.state;
        const user = this.props.user;
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

        const thisBlog = Blogs.map((blog) => {
            if (blog.author === user.id) {
                return (
                    <tr key={blog.email} className='userItem' >
                        <td>
                            <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <p style={{ marginTop: '2vh' }}>{blog.id}</p>
                            </div>
                        </td>
                        <td>
                            <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <p style={{ marginTop: '2vh' }}>{blog.title}</p>
                            </div>
                        </td>
                        <td>
                            <Button id={blog.id} onClick={() => this.deleteUser(blog.id)} className='deleteUserBtn' style={{ width: '18%', marginRight: '41%', fontSize: '13px', paddingTop: '10px', marginTop: '0.8vh' }}><i className='fa fa-trash'></i></Button>
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
                        <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>لیست بلاگ ها</p>
                    </Col>
                </Row>
                <hr style={{ width: '60%', color: '#ccc', marginTop: '0', marginRight: '20%' }} />
                <Row>
                    <p className='help1text'><span className='crc '></span> لیست بلاگ هایی که شما نویسنده آن بوده اید  !</p>
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
                                        آیدی
                                    </th>
                                    <th style={{ textAlign: 'center' }}>
                                        عنوان
                                    </th>
                                    <th style={{ textAlign: 'center' }}>
                                        حذف بلاگ
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {thisBlog}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={1}></Col>




                </Row>
            </Container>
        )
    }
}
export default BlogList;