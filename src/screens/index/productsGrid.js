import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import LazyLoad from 'react-lazyload';

import {LanguageContext} from '../../components/languageContext';

class ProductsGrid extends Component {
	render() {
		return (
            <LanguageContext.Consumer>
			{(context) => (
        <div className="midroll">
          <div className="container">
            <LazyLoad height={200} offset={100}><Link to={(context.en ? '/en':'/el')+"/product/leather-heeled-sandals-5420"} className="product-front-img"><img src={'https://kokkashoes.com/images/shoes/5420/beige-leather-heeled-sandals-5420-1.jpg'} alt={"Εικονα για το προιον "+this.props.en ? 'Leather Heeled Sandals' : 'Δερμάτινα Πέδιλα'} title={this.props.en ? 'Leather Heeled Sandals' : 'Δερμάτινα Πέδιλα'}/></Link></LazyLoad>
              <div className="product-name">
                <Link to={(context.en ? '/en':'/el')+"/product/leather-heeled-sandals-5420"} className="product-link"><h1 >{this.props.en ? 'Leather Heeled Sandals' : 'Δερμάτινα Πέδιλα'}</h1></Link>
                <p><span>{this.props.en ? 'Product Code' : 'Κωδικός'}:</span> 5420</p>
                {/* <h3 key={'product-price-'+index}>20.99 ‎€</h3> */}
              </div>
          </div>
          <div className="container">
            <LazyLoad height={200} offset={100}><Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-2830"} className="product-front-img"><img src={'https://kokkashoes.com/images/shoes/2830/natural-leather-sandals-2830-1.jpg'} alt={"Εικονα για το προιον "+this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'} title={this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'}/></Link></LazyLoad>
              <div className="product-name">
                <Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-2830"} className="product-link"><h1 >{this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'}</h1></Link>
                <p><span>{this.props.en ? 'Product Code' : 'Κωδικός'}:</span> 2830</p>
                {/* <h3 key={'product-price-'+index}>20.99 ‎€</h3> */}
              </div>
          </div>
          <div className="container">
            <LazyLoad height={200} offset={100}><Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-NT108"} className="product-front-img"><img src={'https://kokkashoes.com/images/shoes/NT108/mat-leather-sandals-NT108-1.jpg'} alt={"Εικονα για το προιον "+this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'} title={this.props.en ? 'Leather Sandals' : 'Δερμάτινα Πέδιλα'}/></Link></LazyLoad>
              <div className="product-name">
                <Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-NT108"} className="product-link"><h1 >{this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'}</h1></Link>
                <p><span>{this.props.en ? 'Product Code' : 'Κωδικός'}:</span> NT108</p>
                {/* <h3 key={'product-price-'+index}>20.99 ‎€</h3> */}
              </div>
          </div>
          <div className="container">
            <LazyLoad height={200} offset={100}><Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-N113"} className="product-front-img"><img src={'https://kokkashoes.com/images/shoes/N113/black-multi-leather-sandals-n113-1.jpg'} alt={"Εικονα για το προιον "+this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'} title={this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'}/></Link></LazyLoad>
              <div className="product-name">
                <Link to={(context.en ? '/en':'/el')+"/product/leather-sandals-N113"} className="product-link"><h1 >{this.props.en ? 'Leather Sandals' : 'Δερμάτινα Σανδάλια'}</h1></Link>
                <p><span>{this.props.en ? 'Product Code' : 'Κωδικός'}:</span> N113</p>
                {/* <h3 key={'product-price-'+index}>20.99 ‎€</h3> */}
              </div>
          </div>
        </div>
      )}
        </LanguageContext.Consumer>
		);
	}
}

export default ProductsGrid;
