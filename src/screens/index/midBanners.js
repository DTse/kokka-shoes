import React, { Component } from 'react';
import '../../App.css';
import root from 'window-or-global';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';

export default class MidBanners extends Component {
	render() {
        if(root.innerWidth< 881){
            return ( 
                <div className="preroll">
                    <LazyLoad height={200} offset={100}><Link className="category-img1" to={`/${this.props.en ? 'en' : 'el'}/catalog/flat-sandals`}></Link></LazyLoad>
                    <LazyLoad height={200} offset={100}><Link className="category-img2" to={`/${this.props.en ? 'en' : 'el'}/catalog/flat-sandals`}></Link></LazyLoad>
                    <LazyLoad height={200} offset={100}><Link className="category-img3" to={`/${this.props.en ? 'en' : 'el'}/catalog/platforms-n-heeled-sandals`}></Link></LazyLoad>
                    <LazyLoad height={200} offset={100}><Link className="category-img4" to={`/${this.props.en ? 'en' : 'el'}/catalog/platforms-n-heeled-sandals`}></Link></LazyLoad>
                </div>
            )
         }
         else {
            return (
             <div className="preroll">
                <div className="top-block" >
                    <div className="left-block">
                        <LazyLoad height={200} offset={100}><Link className="category-img1" to={`/${this.props.en ? 'en' : 'el'}/catalog/flat-sandals`}></Link></LazyLoad>
                        <LazyLoad height={200} offset={100}><Link className="category-img2" to={`/${this.props.en ? 'en' : 'el'}/catalog/flat-sandals`}></Link></LazyLoad>
                    </div>
                    <LazyLoad height={200} offset={100}><Link className="category-img3"to={`/${this.props.en ? 'en' : 'el'}/catalog/platforms-n-heeled-sandals`}></Link></LazyLoad>
                </div>
                <LazyLoad height={200} offset={100}><Link className="category-img4"to={`/${this.props.en ? 'en' : 'el'}/catalog/platforms-n-heeled-sandals`}></Link></LazyLoad>
            </div>
            )
         }
	}
}