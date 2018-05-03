import React, { Component } from 'react';
import { Link } from "react-router-dom";
import sampleShoe from '../../images/1132.jpg';
import '../../App.css';

export default class TopSellers extends Component {
	render() {
		return (
        <div className="postroll">
            <p>Top Sellers</p>
            <div className="top-images">
                <Link to="/product" className="top-img1"><img src={sampleShoe} /></Link>
                <Link to="/product" className="top-img2"><img src={sampleShoe} /></Link>
                <Link to="/product" className="top-img3"><img src={sampleShoe} /></Link>
                <Link to="/product" className="top-img4"><img src={sampleShoe} /></Link>
                <Link to="/product" className="top-img5"><img src={sampleShoe} /></Link>
            </div>
        </div>
		);
	}
}