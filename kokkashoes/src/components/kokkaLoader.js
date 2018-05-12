import React, { Component } from 'react';
import '../App.css';

class KokkaLoader extends Component {
	render() {
		return (
            <div className={this.props.isLoading ? "kokka-loading-comp" : "kokka-loading-comp remove"} id="kokka-loading-comp">
                <h1>KOKKA <span>SHOES</span></h1>
            </div>
        )
    }
}

export default KokkaLoader