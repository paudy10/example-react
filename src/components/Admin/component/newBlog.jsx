
import React from 'react';
import { Col, Container, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import config from '../../../config.json';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const NewBlog = () => {

    const navigate = useNavigate()
    let id, title, desc, img, alt, author;
    const user = useSelector(state => state.userDetail)

    const onChangeInput = () => {
        id = document.getElementById('idBlog').value;
        title = document.getElementById('titleBlog').value;
        desc = document.getElementById('descBlog').value;
        img = document.getElementById('imgBlog').value;

        alt = document.getElementById('altBlog').value;
    }

    const onSubmitForm = async (e) => {
        id = document.getElementById('idBlog').value;
        title = document.getElementById('titleBlog').value;
        desc = document.getElementById('descBlog').value;
        img = document.getElementById('imgBlog').value;
        alt = document.getElementById('altBlog').value;
        author = user.id;
        e.preventDefault();
        console.log(id, title, desc, img, alt, author)
        await axios.post(`${config.baseUrl}${config.api_setblog}`, {
            "id": id,
            "title": title,
            "desc": desc,
            "img": img,
            "alt": alt,
            "author": author
        })
            .then((res) => toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }), navigate('/admin/newblog'))
            .catch(err => toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }))

    };


    return (
        <Container>
            <Row>
                <Col>
                    <p style={{ textAlign: 'center' }}>پست جدید</p>

                </Col>
            </Row>
            <Container className='contact-bg'>
                <Row className='contact-form'>
                    <Form>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="titleBlog" placeholder="عنوان :" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="tel" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="idBlog" placeholder="آیدی بلاگ :" />
                        </FormGroup>
                        <FormGroup>
                            <Input onKeyDown={onChangeInput} onChange={onChangeInput}
                                id="descBlog"
                                name="text"
                                type="textarea"
                                placeholder='متن بلاگ خود را وارد کنید !'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="imgBlog" placeholder="لینک عکس :" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="altBlog" placeholder="توضیح کلمه ای عکس :" />
                        </FormGroup>
                        <Button onClick={onSubmitForm} id='send-pm-button' >ذخیره</Button>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default NewBlog;