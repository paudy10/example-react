import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../css/blog.css';
import Loading from './Loading';
// import { getblog } from '../services/getdata';

class Blog extends React.Component {
    state = {
        blog: [{"_id":"630755580bbeb213822d09ab","id":1,"title":"بلاگ 1","desc":"متن بلاگ 1","createdAt":"2022-08-25T09:44:44.343Z","author":"62ff5e9070c2a62a5d72f4a4","img":"http://dummyimage.com/340x210","alt":"عکس 1","__v":0},{"_id":"630755880bbeb213822d09b1","id":2,"title":"بلاگ 2","desc":"متن بلاگ 2","createdAt":"2022-08-25T09:44:44.343Z","author":"62ff5e9070c2a62a5d72f4a4","img":"http://dummyimage.com/340x210","alt":"عکس 2","__v":0}],
        DataisLoaded: true

    }


    render() {
        const { DataisLoaded, blog } = this.state;
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
                <p className='main-color m-4'>جدید ترین مطالب بلاگ</p>
                <Container>
                    <Row>
                        {blog.map(blog => (
                            < Col sm={12} lg={4} md={6}>
                                <Link className='blog-div' key={blog.id} to={`/blog/${blog.id}`} >
                                    <div className='blog-bg'>
                                        <img src={blog.img} alt={blog.alt} width={250} className='image-fluid'></img>
                                        <p className='blog-title'>{blog.title}</p>
                                        <p className='blog-desc'>{blog.desc}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}



                    </Row>
                </Container>
            </React.Fragment >
        )
    }
};

export default Blog;
