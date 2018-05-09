import React, { Component } from 'react';
import '../App.css';

class KokkaLoader extends Component {
  constructor(props){
    super(props)
  }


	render() {
		return (
            <div className="kokka-loading" id="kokka-loading">
                <h1>KOKKA <span>SHOES</span></h1>
            </div>
        )
    }
}

export default KokkaLoader