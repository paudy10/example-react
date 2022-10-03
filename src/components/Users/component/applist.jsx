
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import config from '../../../config.json';
import { toast } from 'react-toastify'
const Applist = (props) => {

    const navigate = useNavigate()

    const settingApp = (title) => {
        navigate(`/setting/app/${title}`)
    }
    const deleteApp = async (title) => {

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
            })
            )
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

    const App = props.Apps
    const user = props.user
    return (
        <Table

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
                    <th style={{ textAlign: 'center' }}>
                        تنظیمات اَپ
                    </th>

                </tr>
            </thead>
            <tbody>
                {App.map((App) => {
                    if (App.creator === user.email) {
                        return (<tr key={App._id} className='AppItem' >
                            <td>
                                <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link to={`/app/${App.title}`} style={{ marginTop: '2vh' }}>{App.title}</Link>
                                </div>
                            </td>
                            <td>
                                <div className='nolinkdecoration' style={{ color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <p style={{ marginTop: '2vh' }}>{App.creator}</p>
                                </div>
                            </td>
                            <td>
                                <Button id={App.title} onClick={() => deleteApp(App.title)} className='deleteUserBtn' style={{ width: '18%', marginRight: '41%', fontSize: '13px', paddingTop: '10px', marginTop: '0.8vh' }}><i className='fa fa-trash'></i></Button>
                            </td>
                            <td>
                                <Button id={`${App.title}_setting`} onClick={() => settingApp(App.title)} className='settingApp' style={{ width: '18%', marginRight: '41%', fontSize: '13px', paddingTop: '10px', marginTop: '0.8vh' }}><i className='fa fa-cog'></i></Button>
                            </td>
                        </tr>)
                    }
                    else {
                        return ''
                    }
                })}
            </tbody>
        </Table>
    )
}

export default Applist;
