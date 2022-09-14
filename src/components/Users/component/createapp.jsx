
import { Button, Input, Row, Col, Container } from 'reactstrap';
import axios from 'axios';
import config from '../../../config.json';
import {toast} from 'react-toastify';

const Createapp = (props) => {
 
    
    const createAppfunc = async() => {
        const user = props.user;
        const title = document.getElementById('appName').value
        const email = user.email
        document.getElementById('createApp').innerHTML = 'درحال ساخت اَپ ...';


        if (title.length > 3) {
            await axios.post(`${config.baseUrl}${config.api_createapps}`, {
                "title": title,
                "creator": email
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
                    document.getElementById('createApp').innerHTML = 'ساخت اَپ'

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
                        document.getElementById('createApp').innerHTML = 'ساخت اَپ'
                    ))
                    )))
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
            document.getElementById('createApp').innerHTML = 'ساخت اَپ'

        }

    }

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
                <Button id="createApp" onClick={createAppfunc} style={{ backgroundImage: 'var(--gradient-color)', border: 'none', width: '30%', marginRight: '35%', marginTop: '5px', marginBottom: '10px' }}>ثبت اَپ</Button>
            </Row>
        </Container>
    )
}

export default Createapp;
