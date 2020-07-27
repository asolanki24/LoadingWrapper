import React, { Component } from 'react';
import Loader from './loader/loader';

class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    queryBackEnd = () => {
        this.setState({ isLoading: true })
        const timer = setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000);
        return () => clearTimeout(timer);
    }
    render() {
        return (
            <div>

                {this.state.isLoading ? this.props.loader : ''}
                {!this.state.isLoading ? <button onClick={() => this.queryBackEnd()} >Click Here</button> : ''}
            </div>
        )
    }
}
export default Loader(GetData);