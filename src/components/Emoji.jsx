import { Component } from 'react';

class Emoji extends Component {
    state = {
        emoji: ''
    }
    componentDidMount() {
        const emoji = this.props.emoji;
        this.setState({ emoji });
    }
    render() {
        return (
            `${this.state.emoji}`
        );
    }
}

export default Emoji;