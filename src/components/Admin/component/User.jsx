import React from 'react';
import { getusers } from '../../../services/getdata';

class User extends React.Component {

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

        const url = window.location.href;
        const email = url.split('/').pop();

        const { DataisLoaded, Users } = this.state;
        if (!DataisLoaded) return <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <h4 className='main-color'> لطفا چند لحظه صبر کنید ... </h4>
        </div>;

        const thisUser = Users.map((User) => {

            if (User.email === email) {
                return (
                    <p>{User.username}</p>
                )
            }
            else {
                return '';
            }
        })
        return (
            <p>{thisUser}</p>
        )
    }
};
export default User;