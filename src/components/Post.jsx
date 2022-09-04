/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../css/post.css';
import { getblog } from '../services/getdata';
import Loading from './Loading';
class Post extends React.Component {
    state = {
        post: [],
        DataisLoaded: false,
        id: 0,
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
    }

    render() {
        const { DataisLoaded, post, id } = this.state;
        if (!DataisLoaded) return <React.Fragment>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
            </div>

            <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='loadingBg'><Loading type='balls' color='#8e0ec9' /></div>
            </div>
        </React.Fragment>;

        const thispost = post.map((post) => {

            if (post.id == id) {
                return (
                    < Col sm={12} lg={4} md={6}>
                        <div className='post-div' key={post.id} to={`/post/${post.id}`} >
                            <div className='post-bg'>
                                <img src={post.img} alt={post.alt} width={250} className='image-fluid'></img>
                                <p className='post-title'>{post.title}</p>
                                <p className='post-desc'>{post.desc}</p>
                            </div>
                        </div>
                    </Col>
                )
            }
            else {
                return '';
            }
        });
        return (
            <React.Fragment>
                <Row>
                    <Col><p style={{ float: 'right' }} className='main-color m-4'>پست</p></Col>
                    <Col><Link to='/blog' style={{ float: 'left' }} className='main-color m-4 p-to-back'><i className='fa fa-arrow-left to-back'></i></Link></Col>
                </Row>

                <Container>
                    <Row>
                        {thispost}
                    </Row>
                </Container>
            </React.Fragment >
        )
    }




};

export default Post;
