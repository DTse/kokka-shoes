import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';

import { MenuLinks } from './menuLinks';

export default class Header extends Component {
	constructor(props){
		super(props) 
		
		this.state={
            isTop: true,
			windowWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
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
    
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }
          
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    } 

    handleResize() {
        this.setState({windowWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)});
	} 
	

	render() {
		return (
            <header className="App-header" style={{height: this.state.isTop ? '110px' : '70px', transition: 'all 0.8s' }}>
				<div className="logo" style={{fontFamily: `'Ropa Sans', sans-serif`, letterSpacing: '.05em', fontSize: this.state.isTop ? '2.5em' : '1.5em', transition: 'all 0.8s'}}><Link to="/">KOKKA <span style={{fontSize: '0.6em'}}>SHOES</span></Link></div>
				{this.state.windowWidth >= 1100 ? <div className="full-menu">
					<MenuLinks />
				</div> : 
			<div className="menuContainer noSelect" onClick={this.props.menuOpen}>
                <div className={this.props.isOpen ? "bar1 change" : "bar1"}/>
                <div className={this.props.isOpen ? "bar2 change" : "bar2"}/>
                <div className={this.props.isOpen ? "bar3 change" : "bar3"}/>
		  </div>}
			</header>
		);
	}
}
