import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { MenuLinks } from '../../components/menuLinks';
import '../../App.css';

import axios from 'axios';

import ReactGA from 'react-ga';

import root from 'window-or-global';

import Footer from '../../components/footer';
import Header from '../../components/header';
import KokkaLoader from '../../components/kokkaLoader';

import {LanguageContext} from '../../components/languageContext';


class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
            products: [], 
            last_page: null,
            page: 1,
			isLoading: false,
            isTop: true,
			windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0),
            isOpen: false,
            productPagination:[]
        }; 
    }
    targetElement = null;
    
    showTargetElement = () => {
      disableBodyScroll(this.targetElement);
    };
    
    hideTargetElement = () => {
      enableBodyScroll(this.targetElement);
    }
    
    componentWillUnmount() {
      clearAllBodyScrollLocks();
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

    async componentWillReceiveProps(nextProps, nextState){
        ReactGA.pageview(this.props.match.url);
        await this.setState({isLoading: true});
        this.showTargetElement();
        root.scrollTo(0, 0);
        const slug = this.props.match.params.categorySlug;
        setTimeout(async()=>{await axios.get(slug === null || slug === undefined ? 'https://cms.kokkashoes.com/api/products' : 'https://cms.kokkashoes.com/api/products/category/'+slug).then((result)=>{
            this.setState({products: result.data.data, last_page: result.data.last_page, isLoading: false, page: 1})
            this.hideTargetElement();
        });}, 2500)
    }

    componentDidMount(){
        ReactGA.pageview(this.props.match.url);
        root.scrollTo(0, 0);         
        root.addEventListener('resize', this.handleResize.bind(this));
        this.targetElement = document.querySelector('#root');
		const slug = this.props.match.params.categorySlug;
        axios.get(slug === null || slug === undefined ? 'https://cms.kokkashoes.com/api/products' : 'https://cms.kokkashoes.com/api/products/category/'+slug).then((result)=>{
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
                    ele.style.display = 'none'
                    }, 3000)
                     
				}
			});
        });
        axios.get('https://cms.kokkashoes.com/api/product/pagination/all').then((result)=>{
            this.setState({productPagination: result.data})
        });
    }


    nextPage = async() =>{
        await this.setState({isLoading: true});
        this.showTargetElement();
        root.scrollTo(0, 0);
        const slug = this.props.match.params.categorySlug;
        setTimeout(async()=>{await axios.get(slug === null || slug === undefined ? `https://cms.kokkashoes.com/api/products?page=${this.state.page+1}` : `https://cms.kokkashoes.com/api/products/category/${slug}?page=${this.state.page+1}`).then((result)=>{
            this.setState({products: result.data.data, page: this.state.page+1, isLoading: false,})
            this.hideTargetElement();
        });}, 2500)
    }

    prevPage = async() =>{
        await this.setState({isLoading: true});
        this.showTargetElement();
        root.scrollTo(0, 0);
        const slug = this.props.match.params.categorySlug;
        setTimeout(async()=>{await axios.get(slug === null || slug === undefined ? `https://cms.kokkashoes.com/api/products?page=${this.state.page-1}` : `https://cms.kokkashoes.com/api/products/category/${slug}?page=${this.state.page-1}`).then((result)=>{
            this.setState({products: result.data.data, page: this.state.page-1, isLoading: false,})
            this.hideTargetElement();
        });}, 2500)
    }

	render() {
        const categories =
        {
            'all' : {el: 'Όλα', en: 'All'},
            'boots-n-booties': {el: 'Μπότες & Μποτάκια', en: 'Boots & Booties'},
            'flat-sandals': {el: 'Σανδάλια', en: 'Flat Sandals'},
            'flats': {el: 'Flats', en: 'Flats'},
            'platforms-n-heeled-sandals': {el: 'Πλατφόρμες & Πέδιλα', en: 'Platforms & Heeled Sandals'},
            'mens-sandals': {el: 'Ανδρικά Σανδάλια', en: 'Mens Sandals'},
        };
        const metaDescriptions =
        {
            'all' : {el: 'Χειροποιήτα παπουτσία απο καστόρι, δέρμα και άλλα υλικά με άνετο πάτο για καθημερινό, ξεκούραστο περπάτημα.', en: 'Handmade shoes from suede, leather and other materials with comfortable bottom for everyday, relaxing walking.'},
            'boots-n-booties': {el: 'Μπότες απο δέρμα καστόρι με ανατομικό πάτο και αντιολισθητικη σόλα.', en: 'Boots made of suede leather with anatomic bottom and anti-slip sole.'},
            'flat-sandals': {el: 'Δερμάτινα σανδάλια σε καλοκαιρινά χρώματα για καθημερινό, ξεκούραστο περπάτημα.', en: 'Leather sandals in summer colors for everyday, relaxing walking.'},
            'flats': {el: 'Δερμάτινα flats με μαλακό πάτο για καθημερινό, ξεκούραστο περπάτημα.', en: 'Leather flats with soft bottom for daily, relaxing walking.'},
            'platforms-n-heeled-sandals': {el: 'Δερμάτινες πλατφόρμες με ανατομικό πάτο που αναδεικνύουν την κομψότητα.', en: 'Leather platforms with anatomic bottom that highlight elegance.'},
            'mens-sandals': {el: 'Ανδρικά σανδάλια απο δέρμα με ελαφριά σόλα απο ειδικό υλικό.', en: "Men's leather sandals with lightweight sole made of special material."},
        };
        const metaImages =
        {
            'all' : 'https://kokkashoes.com/images/shoes/7556/bordeaux-leather-boots-7556-1.jpg',
            'boots-n-booties': 'https://kokkashoes.com/images/shoes/7556/bordeaux-leather-boots-7556-1.jpg',
            'flat-sandals': 'https://kokkashoes.com/images/shoes/NT122/blackcopper-leather-sandals-nt122-1.jpg',
            'flats': 'https://kokkashoes.com/images/shoes/400/black-leather-flats-400-1.jpg',
            'platforms-n-heeled-sandals': 'https://kokkashoes.com/images/shoes/6722/coral-leather-platforms-6722-1.jpg',
            'mens-sandals': 'https://kokkashoes.com/images/shoes/13/tampa-leather-sandals-13-1.jpg',
        };
        let richData = this.state.products.slice(0, 16);
        const url = this.props.match.params.categorySlug;
        var {products, last_page} = this.state;
		return (
            <LanguageContext.Consumer>
			{(context) => (  
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial' }}>
                <Helmet
                    title={`${url === null || url === undefined ? context.en ? 'Catalog' : 'Κατάλογος' : context.en ? categories[url].en : categories[url].el} | KOKKA SHOES`}
                    meta={[
                        { name: "description", content: context.en ? metaDescriptions[url ===null || url ===undefined ? 'all':url].en : metaDescriptions[url ===null || url ===undefined ? 'all':url].el },
                        { property: "og:description", content: context.en ? metaDescriptions[url ===null || url ===undefined ? 'all':url].en : metaDescriptions[url ===null || url ===undefined ? 'all':url].el },
                        { property: "og:type", content: "product.group" },
                        { property: "og:title", content: `${url === null || url === undefined ? context.en ? 'Catalog' : 'Κατάλογος' : context.en ? categories[url].en : categories[url].el} | KOKKA SHOES`},
                        { property: "og:image", content: metaImages[url ===null || url ===undefined ? 'all':url] },
                        { property: "og:url", content: `https://kokkashoes.com/${context.en ? 'en' : 'el'}/catalog/${url}` },
                        { property: "og:site_name", content: "KOKKA SHOES" },
                        { property: "og:locale", content: context.en ? "en_US" : "el_GR" },
                        { name: "twitter:card", content: "summary" },
                        { name: "twitter:url", content:`https://kokkashoes.com/${context.en ? 'en' : 'el'}/catalog/${url}` },
                        { name: "twitter:title", content: `${url === null || url === undefined ? context.en ? 'Catalog' : 'Κατάλογος' : context.en ? categories[url].en : categories[url].el} | KOKKA SHOES` },
                        { name: "twitter:description", content: context.en ? metaDescriptions[url ===null || url ===undefined ? 'all':url].en : metaDescriptions[url ===null || url ===undefined ? 'all':url].el },
                        { name: "twitter:image", content: metaImages[url ===null || url ===undefined ? 'all':url] },
                        { itemprop: "name", content: `${url === null || url === undefined ? context.en ? 'Catalog' : 'Κατάλογος' : context.en ? categories[url].en : categories[url].el} | KOKKA SHOES` },
                        { itemprop: "description", content: context.en ? metaDescriptions[url ===null || url ===undefined ? 'all':url].en : metaDescriptions[url ===null || url ===undefined ? 'all':url].el},
                        { itemprop: "image", content: metaImages[url ===null || url ===undefined ? 'all':url]}
                    ]}
                >
                    <script type="application/ld+json">
                        {`{
                        "@context":"http://schema.org",
                        "@type":"ItemList",
                        "itemListElement":[
                            ${richData.map((item, index)=>{
                            return `
                            {
                                "@type":"ListItem",
                                "position":${index+1},
                                "url":"https://kokkashoes.com/${context.en ? 'en':'el'}/${item.slug}"
                            }`
                        })}
                        ]
                        }`}
                    </script>
                </Helmet>
				<div className="header" style={{ zIndex: 99}}><span style={{zIndex: 99, width: '100%', backgroundColor: 'black'}}><Header  menuOpen={this.menuOpen.bind(this)} isOpen={this.state.isOpen}/></span>
                {this.state.windowWidth <= 1100 && <div className={`side-menu ${this.state.isTop ? '' : 'scroll'}`} style={!this.state.isOpen ? {WebkitTransform: 'translateY(-410px)', MsTransform: 'translateY(-410px)', transform: 'translateY(-410px)'}: null}>
                    <MenuLinks />
                </div>}
                </div>
				<div className="catalog-menu" style={ this.state.isLoading ? {transform: 'translateY(-110px)'} : {transform: 'translateY(0px)'} }>
                    <ul style={{fontFamily: `'GFS Didot', serif`}}>
						<li> 
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog`} style={{borderBottom: url === null || url === undefined ?'#212121c7 2px solid' : 'unset'}}>{context.en ? 'All' : 'Όλα'}</Link>
						</li>
						<li>
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog/flat-sandals`} style={{borderBottom: url === 'flat-sandals'?'#212121c7 2px solid' : 'unset'}}>{context.en ? 'Flat Sandals' : 'Σανδάλια'}</Link>
						</li>
						<li>
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog/platforms-n-heeled-sandals`} style={{borderBottom: url === 'platforms-n-heeled-sandals'?'#212121c7 2px solid' : 'unset'}}>{context.en ? 'Platforms & Heeled Sandals' : 'Πλατφόρμες & Πέδιλα'}</Link>
						</li>
						<li>
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog/flats`} style={{borderBottom: url === 'flats'?'#212121c7 2px solid' : 'unset'}}>Flats</Link>
						</li>
						<li>
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog/mens-sandals`} style={{borderBottom: url === 'mens-sandals'?'#212121c7 2px solid' : 'unset'}}>{context.en ? `Men's Sandals` : 'Ανδρικά Σανδάλια'}</Link>
						</li>
						<li>
                            <Link to={`/${context.en ? 'en' : 'el'}/catalog/boots-n-booties`} style={{borderBottom: url === 'boots-n-booties'?'#212121c7 2px solid' : 'unset'}}>{context.en ? 'Boots & Booties' : 'Μπότες & Μποτάκια'}</Link>
						</li>
					</ul>
                </div>
                <KokkaLoader isLoading={this.state.isLoading}/>
				<div className="category-main">
                    <div className="category-title" style={{marginLeft: 0}}><span>{url === null || url === undefined ? context.en ? categories['all'].en : categories['all'].el : context.en ? categories[`${url}`].en : categories[`${url}`].el}</span></div>
                        <div className="products-grid">
                            {products.map((product, index) =>{
                                var images = JSON.parse(product.images);
                                return (
                                <div key={"container-"+index} className="container">
                                    <Link key={'img-link-img-'+index} to={{pathname:`/${context.en ? 'en' : 'el'}/product/${product.slug}`, state:{productPagination: this.state.productPagination}}} className="product-front-img"><img  key={'img-'+index} src={'https://kokkashoes.com/images/shoes/'+product.product_code+'/'+images[0][0]} alt={"Εικονα για το προιον "+product.name_gr} title={product.name_gr}/></Link>
                                    <div key={'product-name-'+index} className="product-name">
                                    <Link key={'img-link-'+index} to={{pathname:`/${context.en ? 'en' : 'el'}/product/${product.slug}`, state:{productPagination: this.state.productPagination}}} className="product-link"><h1 key={'product-h1-'+index}>{context.en ? product.name_en : product.name_gr}</h1></Link>
                                        <p key={'product-code-p-'+index}><span  key={'product-code-span-'+index}>{context.en ? 'Product Code' : 'Κωδικός'}:</span> {product.product_code}</p>
                                        {/* <h3 key={'product-price-'+index}>{product.price} ‎€</h3> */}
                                    </div>
                                </div>
                            )})
                            }
                        </div>
                        {last_page >1 && <div className="category-pagination">
                            <ul>
                                {this.state.page !== 1 && <li onClick={this.prevPage}><i className="fas fa-arrow-left"/> {context.en ? 'Previous' : 'Προηγόυμενο'}</li>}{this.state.page !== this.state.last_page && <li onClick={this.nextPage}>{context.en ? 'Next' : 'Επόμενο'} <i className="fas fa-arrow-right"/></li>}
                            </ul>
                        </div>}
                    </div>
				<div style={{marginTop: 30}}><Footer /></div>
            </div>)}
            </LanguageContext.Consumer>
		);
	}
}

export default Catalog;
