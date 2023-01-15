import React from 'react';
import { getapp } from '../services/getdata';
// import { Container, Row } from 'reactstrap';
import Loading from './Loading';

class UserApp extends React.Component {
    state = {
        apps: [],
        DataisLoaded: false,
        title: '',
        creator: '',
        Users: [],
        appsazdata: []

    }

    async componentDidMount() {
        let name = window.location.href.split("/").pop()
        await getapp(name)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    apps: json,
                    DataisLoaded: true
                });
            })

    }

    render() {

        const appname = window.location.href.split("/").pop();

        const { DataisLoaded, apps } = this.state;
        if (!DataisLoaded) return <React.Fragment>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
            </div>

            <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='loadingBg'><Loading type='balls' color='#39ce0c' /></div>
            </div>
        </React.Fragment>;
        if(apps === "no app"){
            return <p>اَپلیکیشنی با این آدرس یافت نشد</p>
        }
        return (<div>
            <div>
                <p>{apps.plan}</p>
                <p>{apps.username}</p>
                <p>{apps.email}</p>
                <p>{apps.createdAt}</p>
                <p>{appname}</p>
            
            </div>
        </div >
        )
    }
};

export default UserApp;
