import React, { Component } from 'react';

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {LanguageContext} from '../../components/languageContext';
import { Helmet } from "react-helmet";
import '../../App.css';
import { MenuLinks } from '../../components/menuLinks';

import root from 'window-or-global';

import ReactGA from 'react-ga';

import Footer from '../../components/footer';
import Header from '../../components/header';

import FindImg from '../../images/find-us-top.jpg';

class FindUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
			windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0),
			isOpen: false
		};
	}
		
	componentDidMount() {
        ReactGA.pageview(this.props.match.url);
        root.addEventListener('resize', this.handleResize.bind(this));
        const ele = document.getElementById('kokka-loading')
                if(ele !== undefined){
                    // fade out
                    setTimeout(() => {
                      ele.classList.add('remove') 
                    
                    // remove from DOM
                    ele.style.display = 'none'
                    }, 3000)
                     
				}
	}
				  
	componentWillUnmount() {
        root.removeEventListener('resize', this.handleResize.bind(this));
        const ele = document.getElementById('kokka-loading')
        if(ele !== undefined){
            ele.classList.toggle('remove') 
            // add to DOM
            ele.style.display = 'flex'
        }
	} 
		
	handleResize() {
		this.setState({windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0)});
    } 
    
    menuOpen =()=>{
		this.setState({isOpen: !this.state.isOpen});
	}

    render() {
        return (
			<LanguageContext.Consumer>
			{(context) => (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial'}}>
            <Helmet
                    title={`${context.en ? 'Contact us' : 'Επικοινωνία'} | KOKKA SHOES`}
                    meta={[
                        { name: "description", content: context.en ? 'Information and ways to communicate with the company as well as the KOKKA SHOES store!' : 'Πληροφορίες και τρόποι επικοινωνίας με την εταιρία αλλά και το κατάστημα KOKKA SHOES!' },
                        { property: "og:description", content: context.en ? 'Information and ways to communicate with the company as well as the KOKKA SHOES store!' : 'Πληροφορίες και τρόποι επικοινωνίας με την εταιρία αλλά και το κατάστημα KOKKA SHOES!' },
                        { property: "og:type", content: "business.business" },
                        { property: "og:title", content: `${context.en ? 'Contact us' : 'Επικοινωνία'} | KOKKA SHOES`},
                        { property: "og:image", content: 'https://kokkashoes.com'+FindImg },
                        { property: "og:url", content: `https://kokkashoes.com/${context.en ? 'en' : 'el'}/company` },
                        { name: "twitter:card", content: "summary" },
                        { name: "twitter:url", content:`https://kokkashoes.com/${context.en ? 'en' : 'el'}/company` },
                        { name: "twitter:title", content: `${context.en ? 'Contact us' : 'Επικοινωνία'} | KOKKA SHOES` },
                        { name: "twitter:description", content: context.en ? 'Information and ways to communicate with the company as well as the KOKKA SHOES store!' : 'Πληροφορίες και τρόποι επικοινωνίας με την εταιρία αλλά και το κατάστημα KOKKA SHOES!' },
                        { name: "twitter:image", content: 'https://kokkashoes.com'+FindImg },
                        { itemprop: "name", content: `${context.en ? 'Contact us' : 'Επικοινωνία'} | KOKKA SHOES` },
                        { itemprop: "description", content: context.en ? 'Information and ways to communicate with the company as well as the KOKKA SHOES store!' : 'Πληροφορίες και τρόποι επικοινωνίας με την εταιρία αλλά και το κατάστημα KOKKA SHOES!'},
                        { itemprop: "image", content: 'https://kokkashoes.com'+FindImg}
                    ]}
                />
				<div className="header" style={{ zIndex: 99}}><span style={{zIndex: 99, width: '100%', backgroundColor: 'black'}}><Header  menuOpen={this.menuOpen.bind(this)} isOpen={this.state.isOpen}/></span>
                {this.state.windowWidth <= 1100 && <div className={`side-menu ${this.state.isTop ? '' : 'scroll'}`} style={!this.state.isOpen ? {WebkitTransform: 'translateY(-410px)', MsTransform: 'translateY(-410px)', transform: 'translateY(-410px)'}: null}>
                    <MenuLinks />
                </div>}
                </div>
				<div className="find-us-image">
					<h1 className="find-us-title">{context.en ? 'Contact us' : 'Επικοινωνία'}</h1>
				</div>
				<div className="find-us-body">
					<div className="find-us-factory">
						<div className="find-us-factory-description">
							<h1>{context.en ? 'Company' : 'Eταιρεία'} </h1>
							{context.en ? 'Cheimaras 39, Piraeus' : 'Χειμάρας 39, Πειραιάς'} <br />
							{context.en ? 'Zip Code' : 'T.K.'}: 18543<br />
							{context.en ? 'Greece' : 'Ελλάδα'}<br />
							{context.en ? 'Tel.' : 'Τηλ.'}: +30 210 4206263<br />
							Fax: +30 210 4203833<br />
							E-Mail: kokkashoes@outlook.com<br />
						</div>
						<MyMapComponent lat={37.9586335} lng={23.646613}/>
					</div>
					<div className="find-us-seperator" />
					<div className="find-us-store">
						<div className="find-us-store-description">
							<h1>{context.en ? 'Shop' : 'Κατάστημα'}</h1>
							{context.en ? 'Andrianou 114, Athens' : 'Αδριανού 114, Αθήνα'} <br />
                            {context.en ? 'Zip Code' : 'T.K.'}: 10558<br />
							{context.en ? 'Greece' : 'Ελλάδα'}<br />
							{context.en ? 'Tel.' : 'Τηλ.'}: +30 210 3224460
						</div>
						<MyMapComponent  lat={37.9733551} lng={23.7295532}/>
					</div>
				</div>
				<div className="find-us-image-end" />
				<Footer />
			</div>)}
			</LanguageContext.Consumer>
		);
	}
}

const MyMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7skY8kiOGgpQq0rOHq4i2bPztv6_lAR8&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
      containerElement: <div className="find-us-map" style={{ height: `300px`, width: `100%` }} />,
      mapElement: <div style={{ height: `100%`, width: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: props.lat, lng: props.lng }}>
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  ));

export default FindUs;
