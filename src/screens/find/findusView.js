import React, { Component } from 'react';

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import '../../App.css';

import Footer from '../../components/footer';
import Header from '../../components/header';

class FindUs extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial'}}>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
				<div className="find-us-image">
					<h1 className="find-us-title">Επικοινωνία</h1>
				</div>
				<div className="find-us-body">
					<div className="find-us-factory">
						<div className="find-us-factory-description">
							<h1>Eταιρεία </h1>
							Χειμάρας 39, Πειραιάς <br />
                            T.K.: 18543<br />
							Ελλάδα<br />
							Τηλ.: +30 210 4206263<br />
							Fax: +30 210 4203833<br />
							E-Mail: kokkashoes@outlook.com<br />
						</div>
						<MyMapComponent lat={37.9586335} lng={23.646613}/>
					</div>
					<div className="find-us-seperator" />
					<div className="find-us-store">
						<div className="find-us-store-description">
							<h1>Κατάστημα</h1>
							Αδριανού 114, Αθήνα <br />
                            T.K.: 10558<br />
							Ελλάδα<br />
							Τηλ.: +30 210 3224460
						</div>
						<MyMapComponent  lat={37.9733551} lng={23.7295532}/>
					</div>
				</div>
				<div className="find-us-image-end" />
				<Footer />
			</div>
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