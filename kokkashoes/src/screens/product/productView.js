import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

import '../../App.css';
import { MenuLinks } from '../../components/menuLinks';

import axios from 'axios';

import {
	FacebookShareButton,
	PinterestShareButton,
  } from 'react-share';

import Footer from '../../components/footer';
import Header from '../../components/header';

class Product extends Component {
	constructor(props){
		super(props)
		this.state={
			imageSrc: '',
			sideWidth: 100,
            isLoading: true,
            isTop: true,
            windowWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
			isOpen: false,
			product: [],
			images: [],
			colors_en: [],
			colors_gr: [],
            sizes: [],
            index: 3,
            category: []
		}
        this.changeImage = this.changeImage.bind(this);
        this.scrollThumbs = this.scrollThumbs.bind(this);
    }
				  
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize.bind(this));
	} 
		
	handleResize() {
		this.setState({windowWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)});
	} 

	componentDidMount(){
        window.addEventListener('resize', this.handleResize.bind(this));
		const slug = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        axios.get('http://cms.kokkashoes.tk/api/products/'+slug[1]).then((result)=>{
            this.getCategory(result.data[0].id);
            this.setState({
				product: result.data[0], 
				colors_en: JSON.parse(result.data[0].colors_en), 
				colors_gr: JSON.parse(result.data[0].colors_gr), 
				images: JSON.parse(result.data[0].images), 
				sizes: JSON.parse(result.data[0].sizes),
				imageSrc: JSON.parse(result.data[0].images)[0][0],
				isLoading: false
			},()=>{
                const ele = document.getElementById('kokka-loading')
                if(ele){
                    // fade out
                    ele.classList.add('remove')
                    setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = ''
                    }, 3000)
				}
			});
        })
    }

    getCategory = async(id)=>{
        var category_slug = await axios.get(`http://cms.kokkashoes.tk/api/product/category/${id}`);
		category_slug = category_slug.data[0];
        this.setState({category: category_slug});
    }

    componentWillMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
			var range = 200;
			var scrollTop = window.scrollY;
			var height = window.innerHeight;
			var offset = height / 2;
			var calc = 1 - (scrollTop - offset + range) / range;
			
			if (calc > '1') {
				calc = 1;
			} else if (calc < '0') {
				calc = 0;
			}
			this.setState({ calc: calc });
		});
		  	
	} 

	changeImage = (imageUrl)=>{
		this.setState({imageSrc: imageUrl})
	}

	scrollThumbs = (i) => {
        this.setState({index:  i<=3 ? 3 : i > this.state.images.length-1 ? 3 : i});
        this.refs[ i<=3 ? 0 : i > this.state.images.length-1 ? 0 : i].scrollIntoView({block: 'end', behavior: 'smooth'});
    }
    
    menuOpen =()=>{
		this.setState({isOpen: !this.state.isOpen});
	}

	render() {
		var { product, colors_en, colors_gr, images, sizes, category } = this.state;
		var { en } = this.props;
		var colors = en ? colors_en : colors_gr
		return (
			!this.state.isLoading && <div className="main-wrapper site-scroll" style={{backgroundColor: 'transparent', position: "initial"}}>
				<Helmet 
					title= {`${en ? product.name_en : product.name_gr} | KOKKA SHOES`}
					meta={[
					{name: "description", content: en ? product.description_en : product.description_gr},
					{name: "keywords", content: `${product.name_gr}, ${product.name_en}, ${product.product_code}, ${category.name_en}, ${category.name_gr}, KOKKA SHOES, shoes`},
					{property: "og:description", content: en ? product.description_en : product.description_gr},
					{property: "og:type", content: "product"},
					{property: "og:title", content: en ? product.name_en : product.name_gr},
					{property: "og:image", content: `http://kokkashoes.tk/images/shoes/${product.product_code}/${images[0][0]}`},
                    {property: "og:url", content: `http://kokkashoes.tk/${en ? 'en' : 'el'}/product/${product.slug}`},
                    {property: "fb:app_id", content:"123456789"},
                    {property: "og:site_name", content: "KOKKA SHOES"},
                    {property: "og:locale", content: en ? "en_US" : "el_GR"},
                    {name: "twitter:card", content: "summary"},
                    {name: "twitter:url", content: `http://kokkashoes.tk/${en ? 'en' : 'el'}/product/${product.slug}`},
                    {name: "twitter:title", content: `${en ? product.name_en : product.name_gr} | KOKKA SHOES`},
                    {name: "twitter:description", content: en ? product.description_en : product.description_gr},
                    {name: "twitter:image", content: `http://kokkashoes.tk/images/shoes/${product.product_code}/${images[0][0]}`}
					]}
					/>
				<div className="header" style={{ zIndex: 99}}><span style={{zIndex: 99, width: '100%', backgroundColor: 'black'}}><Header  menuOpen={this.menuOpen.bind(this)} isOpen={this.state.isOpen}/></span>
                {this.state.windowWidth <= 1100 && <div className={`side-menu ${this.state.isTop ? '' : 'scroll'}`} style={!this.state.isOpen ? {WebkitTransform: 'translateY(-410px)', MsTransform: 'translateY(-410px)', transform: 'translateY(-410px)'}: null}>
                    <MenuLinks />
                </div>}
                
                </div><div className="breadcrumbs"><Link to={en ? '/en':'/el'}>{en ? 'Home' : 'Αρχική'}</Link><span>{'>'}</span><Link to={`${en ? '/en':'/el'}/catalog/${category.slug}`}>{en ? category.name_en : category.name_gr}</Link></div>
                <div className="product">
					<div className="product-photo">
						<div className="sideWrapper">
							{images.length !== 0 && <div className="product-image-side" ref={(el)=>{this.divWidth = el;}}>
								{images.map((imageColor)=>{
									return imageColor.map((image, index)=>{
										return <img ref={index}
																				key={'side-image-'+index} 
																				alt={en ? "Image for product"+product.name_en : "Εικονα για το προιον "+product.name_gr}
																				title={en ? product.name_en : product.name_gr}
																				onClick={()=>{this.changeImage(image)}} 
																				src={`http://kokkashoes.tk/images/shoes/${product.product_code}/${image}`} 
																			/>})
																			})}
							</div>}
							{images.length > 3 && <div className="scrollWrapper">
								<span onClick={()=>{this.scrollThumbs(this.state.index-1)}} className="scrollSpan"><i className="fas fa-angle-up"></i></span>
								<span onClick={()=>{this.scrollThumbs(this.state.index+1)}} className="scrollSpan"><i className="fas fa-angle-down"></i></span>
							</div>}
						</div>
						<div className="product-image-main"> 
							<img 
								alt={en ? "Image for product"+product.name_en : "Εικονα για το προιον "+product.name_gr}
								title={en ? product.name_en : product.name_gr}
								src={`http://kokkashoes.tk/images/shoes/${product.product_code}/${this.state.imageSrc}`} />
						</div> 
					</div>
					<div className="product-info">
						<div className="product-name product-page"><h1>{en ? product.name_en : product.name_gr}</h1></div>
						<div className="product-price">{en ? 'Price' : 'Τιμή'}: {product.price}€</div>
						<div className="product-code">{en ? 'Product Code' : 'Κωδικός'}: {product.product_code}</div>
						<div className="product-heights">
							{product.height !== null && <span>{en ? 'Sole Height' : 'Ύψος Σόλας'}: {product.height}εκ.</span>}
							{product.fiapa_height !== null && <span>{en ? 'Heel Height' : 'Ύψος Τακουνιού'}: {product.takouni_height}εκ.</span>}<br/>
							{product.takouni_height !== null && <span>{en ? 'Fiapa Height' : 'Ύψος Φιάπας'}: {product.fiapa_height}εκ.</span>}
						</div>
						<div className="product-colors">{en ? 'Color' : 'Χρώμα'}:</div>
                            <div className="product-colors"><span><select>
                                {colors.map((color, index)=>{
									if(index === 0) return <option key={'color'+index} autoFocus >{color}</option>
									else return <option key={'color'+index}>{color}</option>
								})
								}
                            </select></span>
                        </div>
						<div className="product-sizes-title"><span>{en ? 'Sizes' : 'Μεγέθη'}:</span></div>
						<div className="product-sizes">{sizes.map((size, index)=>{return <span key={'size'+index} className="size" >{size}</span>})}</div>
						<div className="product-description">{en ? product.description_en : product.description_gr}</div>
						<div className="product-social">
							{/* <a href="#">
								<i className="fab fa-instagram" />
								<p>Instagram</p>
							</a> */}
							<FacebookShareButton
								url={`http://kokkashoes.tk/${en?'en':'el'}product/${product.slug}`}
								quote={en ? product.description_en : product.description_gr}
								>
								<i className="fab fa-facebook-f" />
								<p>Facebook</p>
							</FacebookShareButton>
							<PinterestShareButton
								url={`http://kokkashoes.tk/${en ? 'en':'el'}product/${product.slug}`}
								media={`http://kokkashoes.tk/images/shoes/${product.product_code}/${images[0][0]}`}
								windowWidth={1000}
								windowHeight={730}>
								<i className="fab fa-pinterest-p" />
								<p>Pinterest</p>
							</PinterestShareButton>
						</div>
					</div>
                </div>
                <Footer />
			</div>
		);
	}
}

export default Product;
