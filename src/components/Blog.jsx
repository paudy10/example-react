import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import '../css/blog.css';
import {getblog} from '../services/getdata';
class Blog extends React.Component {
    state = {
        blog: [],
        DataisLoaded: false

    }

    async componentDidMount() {
        await getblog()
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    blog: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, blog } = this.state;
        if (!DataisLoaded) return <div className='mt-5' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
        </div>;

        return (
            <React.Fragment>
                <p className='main-color m-4'>جدید ترین مطالب بلاگ</p>
                <Container>
                    <Row>

                        {blog.map(blog => (
                            < Col sm={12} lg={4} md={6}>
                                <Link className='blog-div' key={blog.id}  to={`/blog/${blog.id}`} >
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
