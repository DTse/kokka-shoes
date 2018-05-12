import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import axios from 'axios';

import Footer from '../../components/footer';
import Header from '../../components/header';
import KokkaLoader from '../../components/kokkaLoader';


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

    async componentWillReceiveProps(nextProps, nextState){
        await this.setState({isLoading: true});
        window.scrollTo(0, 0);
        const slug = (nextProps.match.url).match(/^\/+.*\/(.*)$/);
        setTimeout(async()=>{await axios.get(slug === null || slug[1] === undefined ? 'http://cms.kokkashoes.tk/api/products' : 'http://cms.kokkashoes.tk/api/products/category/'+slug[1]).then((result)=>{
            this.setState({products: result.data.data, last_page: result.data.last_page, isLoading: false, page: 1})
        });}, 2500)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
		const slug = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        axios.get(slug === null || slug[1] === undefined ? 'http://cms.kokkashoes.tk/api/products' : 'http://cms.kokkashoes.tk/api/products/category/'+slug[1]).then((result)=>{
            this.setState({
                products: result.data.data,
                last_page: result.data.last_page, 
				isLoading: false
			},()=>{
                const ele = document.getElementById('kokka-loading')
                if(ele !== undefined){
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


    nextPage = async() =>{
        await this.setState({isLoading: true});
        window.scrollTo(0, 0);
        setTimeout(async()=>{await axios.get('http://cms.kokkashoes.tk/api/products?page='+(this.state.page+1)).then((result)=>{
             this.setState({products: result.data.data, page: this.state.page+1, isLoading: false})
         });}, 2500)
    }
    prevPage = async() =>{
        await this.setState({isLoading: true});
        window.scrollTo(0, 0);
        setTimeout(async()=>{await axios.get('http://cms.kokkashoes.tk/api/products?page='+(this.state.page-1)).then(async(result)=>{
            await this.setState({products: result.data.data, page: this.state.page-1, isLoading: false})
         });}, 2500)
    }

	render() {
        const categories =
        {
            'all' : 'Όλα',
            'boots-n-booties': 'Μπότες & Μποτάκια',
            'flat-sandals': 'Σανδάλια',
            'flats': 'Flats',
            'platforms-n-heeled-sandals': 'Πλατφόρμες & Πέδιλα',
            'mens-sandals': 'Ανδρικά Σανδάλια',
        };
        const url = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        var {products, last_page} = this.state;
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial' }}>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
				<div className="catalog-menu" style={ this.state.isLoading ? {transform: 'translateY(-110px)'} : {transform: 'translateY(0px)'} }>
                    <ul style={{fontFamily: `'GFS Didot', serif`}}>
						<li> 
                            <Link to="/catalog" style={{borderBottom: this.props.match.url === '/catalog'?'#212121c7 2px solid' : 'unset'}}>Όλα</Link>
						</li>
						<li>
                            <Link to="/catalog/boots-n-booties" style={{borderBottom: this.props.match.url === '/catalog/boots-n-booties'?'#212121c7 2px solid' : 'unset'}}>Μπότες & Μποτάκια</Link>
						</li>
						<li>
                            <Link to="/catalog/flat-sandals" style={{borderBottom: this.props.match.url === '/catalog/flat-sandals'?'#212121c7 2px solid' : 'unset'}}>Σανδάλια</Link>
						</li>
						<li>
                            <Link to="/catalog/flats" style={{borderBottom: this.props.match.url === '/catalog/flats'?'#212121c7 2px solid' : 'unset'}}>Flats</Link>
						</li>
						<li>
                            <Link to="/catalog/platforms-n-heeled-sandals" style={{borderBottom: this.props.match.url === '/catalog/platforms-n-heeled-sandals'?'#212121c7 2px solid' : 'unset'}}>Πλατφόρμες & Πέδιλα</Link>
						</li>
						<li>
                            <Link to="/catalog/mens-sandals" style={{borderBottom: this.props.match.url === '/catalog/mens-sandals'?'#212121c7 2px solid' : 'unset'}}>Ανδρικά Σανδάλια</Link>
						</li>
					</ul>
                </div>
                <KokkaLoader isLoading={this.state.isLoading}/>
				<div className="category-main">
                    <div className="category-title" style={{marginLeft: 0}}><span>{ url === '' || url === null ? categories['all']: categories[`${url[1]}`]}</span></div>
                        <div className="products-grid">
                            {products.map((product, index) =>{
                                var images = JSON.parse(product.images);
                                return (
                                <div key={"container-"+index} className="container">
                                    <Link key={'img-link-img-'+index} to={"/product/"+product.slug} className="product-front-img"><img  key={'img-'+index} src={'http://kokkashoes.tk/images/shoes/'+product.product_code+'/'+images[0][0]} alt={"Εικονα για το προιον "+product.name_gr} title={product.name_gr}/></Link>
                                    <div key={'product-name-'+index} className="product-name">
                                    <Link key={'img-link-'+index} to={"/product/"+product.slug} className="product-link"><h1 key={'product-h1-'+index}>{product.name_gr}</h1></Link>
                                        <p key={'product-code-p-'+index}><span  key={'product-code-span-'+index}>Κωδικός:</span> {product.product_code}</p>
                                        <h3 key={'product-price-'+index}>{product.price} ‎€</h3>
                                    </div>
                                </div>
                            )})
                            }
                        </div>
                        {last_page >1 && <div className="category-pagination">
                            <ul>
                                {this.state.page !== 1 && <li onClick={this.prevPage}><i className="fas fa-arrow-left"/> Προηγόυμενο</li>}{this.state.page !== this.state.last_page && <li onClick={this.nextPage}>Επόμενο <i className="fas fa-arrow-right"/></li>}
                            </ul>
                        </div>}
                    </div>
				<div style={{marginTop: 30}}><Footer /></div>
			</div>
		);
	}
}

export default Catalog;
