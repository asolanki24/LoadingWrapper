import React, { Component } from 'react';

const LoadingWrapper = (OriginalComponent) => {
    class WrappedComponent extends Component {
        constructor() {
            super();
            this.state = {
                loader: 'Loading'
            }
        }
        render() {
            return (
                <div>
                    <img src="" ></img>
                    <OriginalComponent loader={this.state.loader} />
                </div>
            )
        }
    }
    return WrappedComponent;
}

export default LoadingWrapper;