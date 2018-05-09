import React, { Component } from 'react';
import { Link } from "react-router-dom";
import sampleShoe from '../../images/1132.jpg';
import '../../App.css';

class ProductsGrid extends Component {
  constructor(props){
    super(props)
  }


	render() {
    var products = this.props.products.slice(0, 4);
		return (
        <div className="midroll">
          {products.map((product, index) =>{
            var images = JSON.parse(product.images)
            return (
            <div key={"container-"+index} className="container">
                  <Link key={'img-link-'+index} to={"/product/"+product.slug} className="product-front-img"><img  key={'img-'+index} src={'http://cms.kokkashoes.tk/images/shoes/'+product.product_code+'/'+images[0][0]} /></Link>
                <div key={'product-name-'+index} className="product-name">
                  <h1 key={'product-h1-'+index}>{product.name_gr}</h1>
                  <p key={'product-code-p-'+index}><span  key={'product-code-span-'+index}>Κωδικός:</span> {product.product_code}</p>
                  <h3 key={'product-price-'+index}>20.99 ‎€</h3>
                </div>
          </div>
          )})
          }
        </div>
		);
	}
}

export default ProductsGrid;
