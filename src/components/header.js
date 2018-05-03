import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';


export default class Header extends Component {
	constructor(props){
		super(props)
		
		this.state={
			isTop: true
		};
	}

	componentWillMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
		  	
	}

	render() {
		return (
            <header className="App-header" style={{height: this.state.isTop ? '110px' : '70px', transition: 'all 0.8s'}}>
				<div className="logo" style={{fontFamily: `'Ropa Sans', sans-serif`, letterSpacing: '.05em', fontSize: this.state.isTop ? '2.5em' : '1.5em', transition: 'all 0.8s'}}><Link to="/">KOKKA <span style={{fontSize: '0.6em'}}>SHOES</span></Link></div>
				<div className="full-menu">
					<ul style={{fontFamily: `'GFS Didot', serif`}}>
						<li>
                            <Link to="/">Αρχική</Link>
						</li>
						<li>
                            <Link to="/catalog">Κατάλογος</Link>
						</li>
						<li>
                            <Link to="/about-us">Ποίοι είμαστε</Link>
						</li>
						<li>
                            <Link to="/company">Επικοινωνία</Link>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}
