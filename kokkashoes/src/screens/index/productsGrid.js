import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

import {LanguageContext} from '../../components/languageContext';

class ProductsGrid extends Component {
	render() {
    var products = this.props.products.slice(0, 4);
		return (
            <LanguageContext.Consumer>
			{(context) => (
        <div className="midroll">
          {products.map((product, index) =>{
            var images = JSON.parse(product.images)
            return (
            <div key={"container-"+index} className="container">
                  <Link key={'img-link-'+index} to={(context.en ? '/en':'/el')+"/product/"+product.slug+'/'} className="product-front-img"><img  key={'img-'+index} src={'http://kokkashoes.tk/images/shoes/'+product.product_code+'/'+images[0][0]} alt={"Εικονα για το προιον "+product.name_gr} title={product.name_gr}/></Link>
                <div key={'product-name-'+index} className="product-name">
                  <Link key={'img-link-'+index} to={(context.en ? '/en':'/el')+"/product/"+product.slug+'/'} className="product-link"><h1 key={'product-h1-'+index}>{this.props.en ? product.name_en : product.name_gr}</h1></Link>
                  <p key={'product-code-p-'+index}><span  key={'product-code-span-'+index}>{this.props.en ? 'Product Code' : 'Κωδικός'}:</span> {product.product_code}</p>
                  <h3 key={'product-price-'+index}>20.99 ‎€</h3>
                </div>
          </div>
          )})
          }
        </div>)}
        </LanguageContext.Consumer>
		);
	}
}

export default ProductsGrid;
