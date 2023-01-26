
import React from 'react';
import { Col, Container, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import config from '../../../config.json';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading';

const Newshop = () => {

    const navigate = useNavigate()
    let id, title, desc, img, alt, author , price;
    const user = useSelector(state => state.userDetail)

    const onChangeInput = () => {
        id = document.getElementById('idshop').value;
        title = document.getElementById('titleshop').value;
        desc = document.getElementById('descshop').value;
        img = document.getElementById('imgshop').value;

        alt = document.getElementById('altshop').value;
        price = document.getElementById('priceshop').value;
    }

    const preventDefault = (e) => {
        e.preventDefault();
    }

    const onSubmitForm = async (e) => {
        id = document.getElementById('idshop').value;
        title = document.getElementById('titleshop').value;
        desc = document.getElementById('descshop').value;
        img = document.getElementById('imgshop').value;
        alt = document.getElementById('altshop').value;
        price = document.getElementById('priceshop').value;
        var btn = document.getElementById('send-pm-button')
        var btn2 = document.getElementById('loading-button')
        btn.classList.add('dnone')
        btn2.classList.remove('dnone')
        author = user.id;
        e.preventDefault();
        // console.log(id, title, desc, img, alt, author)
        await axios.post(`${config.baseUrl}${config.api_setblog}`, {
            "id": id,
            "title": title,
            "desc": desc,
            "img": img,
            "alt": alt,
            "author": author,
            "price":price
        })
            .then((res) => toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }), navigate('/admin/newshop'),
                btn2.classList.add('dnone'),
                btn.classList.remove('dnone')
            )
            .catch((err) => toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }),
                btn2.classList.add('dnone'),
                btn.classList.remove('dnone')
            )

    };


    return (
        <Container>
            <Row>
                <Col>
                    <p style={{ textAlign: 'center' }}>محصول جدید</p>

                </Col>
            </Row>
            <Container className='contact-bg'>
                <Row className='contact-form'>
                    <Form>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="titleshop" placeholder="عنوان :" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="tel" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="idshop" placeholder="آیدی محصول :" />
                        </FormGroup>
                        <FormGroup>
                            <Input onKeyDown={onChangeInput} onChange={onChangeInput}
                                id="descshop"
                                name="text"
                                type="textarea"
                                placeholder='متن محصول خود را وارد کنید !'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="imgshop" placeholder="لینک عکس :" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="altshop" placeholder="توضیح کلمه ای عکس :" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" onKeyDown={onChangeInput} onChange={onChangeInput} name="text" id="priceshop" placeholder="قیمت :" />
                        </FormGroup>
                        <Button onClick={onSubmitForm} id='send-pm-button' >ذخیره</Button>
                        <Button className='dnone' id='loading-button' onClick={preventDefault} style={{ backgroundColor: 'gray', height: '6vh' }} ><Loading type={'spin'} width={25} /></Button>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default Newshop;