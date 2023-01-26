import React, { Component } from 'react';
import { Col} from 'reactstrap';
import '../css/landing.css';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';

class Counter extends Component {
    state = {
        counter_user : 0,
        counter_project : 0
    }
    componentDidMount(){
        const counter = this.props.counter;
        const users = counter[0];
        const project = counter[1];
        this.setState({counter_user:users});
        this.setState({counter_project:project});
    }
    render() {
        return (
            <React.Fragment>
                <Col><div className='counter'>
                    <i className='fa fa-users'></i>
                    <p className='counter-users'> کاربران </p>
                    <p className='user-count' id='user-count' ><CountUp duration={2.75} delay={0.2} end={this.state.counter_user} /></p>
                </div></Col>
                <Col><div className='counter'>
                    <i className='fa fa-tasks'></i>
                    <p className='counter-project'> محصولات</p>
                    <p className='project-count' id='project-count'><CountUp duration={1.75} delay={0.2} end={this.state.counter_project} /></p>
                </div></Col>
            </React.Fragment>
        );
    }
}

export default Counter;