import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sampleShoe from '../../images/1132.jpg';

import '../../App.css';

import axios from 'axios';

import Footer from '../../components/footer';
import Header from '../../components/header';



class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
            products: [], 
            last_page: null,
            page: 1,
			isLoading: false
		}; 
    }

    componentDidMount(){
		const slug = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        axios.get(slug === null || slug[1] === undefined ? 'http://cms.kokkashoes.tk/api/products' : 'http://cms.kokkashoes.tk/api/products/category'+slug[1]).then((result)=>{
            this.setState({
                products: result.data.data,
                last_page: result.data.last_page, 
				isLoading: false
			},()=>{
                const ele = document.getElementById('kokka-loading')
                if(ele != undefined){
                    // fade out
                    setTimeout(() => {
                        ele.classList.add('remove')
                    
                    // remove from DOM
                    ele.outerHTML = ''
                    }, 3000)
				}
			});

        })
    }

    componentDidUpdate(){
        //const slug = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        axios.get('http://cms.kokkashoes.tk/api/products?page='+this.state.page).then((result)=>{
            this.setState({products: result.data.data})
        });
    }

    nextPage =()=>{
        this.setState({page: this.state.page+1}); 
    }

	render() {
        const categories =
        {
            'all' : 'Όλα',
            'boots-n-booties': 'Μπότες & Μποτάκια',
            'sandals': 'Σανδάλια',
            'flats': 'Flats',
            'heeled-sandals': 'Πέδιλα',
            'mens-sandals': 'Ανδρικά Σανδάλια',
            'platforms': 'Πλατφόρμες',
        };
        const url = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        var {images, products, last_page} = this.state;
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial' }}>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
				<div className="catalog-menu">
                    <ul style={{fontFamily: `'GFS Didot', serif`}}>
						<li> 
                            <Link to="/catalog" style={{borderBottom: this.props.match.url === '/catalog'?'#212121c7 2px solid' : 'unset'}}>Όλα</Link>
						</li>
						<li>
                            <Link to="/catalog/boots-n-booties" style={{borderBottom: this.props.match.url === '/catalog/boots-n-booties'?'#212121c7 2px solid' : 'unset'}}>Μπότες & Μποτάκια</Link>
						</li>
						<li>
                            <Link to="/catalog/sandals" style={{borderBottom: this.props.match.url === '/catalog/sandals'?'#212121c7 2px solid' : 'unset'}}>Σανδάλια</Link>
						</li>
						<li>
                            <Link to="/catalog/flats" style={{borderBottom: this.props.match.url === '/catalog/flats'?'#212121c7 2px solid' : 'unset'}}>Flats</Link>
						</li>
						<li>
                            <Link to="/catalog/heeled-sandals" style={{borderBottom: this.props.match.url === '/catalog/heeled-sandals'?'#212121c7 2px solid' : 'unset'}}>Πέδιλα</Link>
						</li>
						<li>
                            <Link to="/catalog/mens-sandals" style={{borderBottom: this.props.match.url === '/catalog/mens-sandals'?'#212121c7 2px solid' : 'unset'}}>Ανδρικά Σανδάλια</Link>
						</li>
						<li>
                            <Link to="/catalog/platforms" style={{borderBottom: this.props.match.url === '/catalog/platforms'?'#212121c7 2px solid' : 'unset'}}>Πλατφόρμες</Link>
						</li>
					</ul>
				</div>
				<div className="category-main">
                    <div className="category-title" style={{marginLeft: 0}}><span>{ url == '' || url == null ? categories['all']: categories[`${url[1]}`]}</span></div>
                        <div className="products-grid">
                            {products.map((product, index) =>{
                                var images = JSON.parse(product.images)
                                return (
                                <div key={"container-"+index} className="container">
                                    <Link key={'img-link-'+index} to={"/product/"+product.slug} className="product-front-img"><img  key={'img-'+index} src={'http://cms.kokkashoes.tk/images/shoes/'+product.product_code+'/'+images[0][0]} /></Link>
                                    <div key={'product-name-'+index} className="product-name">
                                    <h1 key={'product-h1-'+index}>{product.name_gr}</h1>
                                    <p key={'product-code-p-'+index}><span  key={'product-code-span-'+index}>Κωδικός:</span> {product.product_code}</p>
                                    <h3 key={'product-price-'+index}>{product.price} ‎€</h3>
                                    </div>
                                </div>
                            )})
                            }
                        </div>
                        {last_page >1 && <div className="category-pagination">
                            <ul>
                                <li onClick={this.nextPage}><i className="fas fa-arrow-left"/> Προηγόυμενο</li><li>Επόμενο <i className="fas fa-arrow-right"/></li>
                            </ul>
                        </div>}
                    </div>
				<div style={{marginTop: 30}}><Footer /></div>
			</div>
		);
	}
}

export default Catalog;
