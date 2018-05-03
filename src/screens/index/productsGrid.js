import React, { Component } from 'react';
import { Link } from "react-router-dom";
import sampleShoe from '../../images/1132.jpg';
import '../../App.css';


class ProductsGrid extends Component {
	render() {
		return (
        <div className="midroll">
          <div className="container">
          <img src={sampleShoe} />
            <div className="middle">
               <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
            </div>
            <div className="product-name">
              <h1>Test</h1>
              <p><span>Κωδικός:</span> 19492</p>
              <h3>20.99 ‎€</h3>
            </div>
          </div>
          <div className="container">
          <img src={sampleShoe} />
            <div className="middle">
               <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
            </div>
            <div className="product-name">
              <h1>Test</h1>
              <p><span>Κωδικός:</span> 19492</p>
              <h3>20.99 ‎€</h3>
            </div>
          </div>
          <div className="container">
          <img src={sampleShoe} />
            <div className="middle">
               <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
            </div>
            <div className="product-name">
              <h1>Test</h1>
              <p><span>Κωδικός:</span> 19492</p>
              <h3>20.99 ‎€</h3>
            </div>
          </div>
          <div className="container">
          <img src={sampleShoe} />
            <div className="middle">
               <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
            </div>
            <div className="product-name">
              <h1>Test</h1>
              <p><span>Κωδικός:</span> 19492</p>
              <h3>20.99 ‎€</h3>
            </div>
          </div>
          
        </div>
		);
	}
}

export default ProductsGrid;
