import React, { Component } from 'react';
import '../../App.css';

import Header from '../../components/header';

export default class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
			calc: 1
        };
	  }


	componentWillMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
			var range = 200;
			var scrollTop = window.scrollY;
			var height = window.innerHeight;
			var offset = height / 2;
			var calc = 1 - (scrollTop - offset + range) / range;
			
			if (calc > '1') {
				calc = 1;
			} else if (calc < '0') {
				calc = 0;
			}
			this.setState({ calc: calc });
		});
		  	
	}

	render() {
		return (
			<div className={this.state.isTop ? 'bgimg1' : 'bgimg1 menu-overlay'}  style={{height: this.state.isTop ? '110px' : '70px', transition: 'all 0.8s'}}>
				<div className={this.state.isTop ? 'main-wrapper' : 'main-wrapper site-scroll'} style={{}}>
					<Header />
					<p style={{
                            zIndex: -1,
							opacity: this.state.calc,
							top: this.state.calc === 0 ? '0%' : '50%',
							height: this.state.calc === 0 ? '0%' : '100%'
						}} className="App-intro">
						Handcrafted in Greece
					</p>
				</div> 
				<div className='arrow bounce' style={{opacity: this.state.isTop ? 0.7 : 0}} ><i className="fas fa-angle-double-down"></i></div>
			</div>
		);
	}
}
