import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';

import '../../App.css';
import { MenuLinks } from '../../components/menuLinks';

import root from 'window-or-global';

import ReactGA from 'react-ga';

import axios from 'axios';

import {
	FacebookShareButton,
	PinterestShareButton,
} from 'react-share';

import Footer from '../../components/footer';
import Header from '../../components/header';


class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imageSrc: '',
			sideWidth: 100,
			isLoading: true,
			isTop: true,
			windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0),
			isOpen: false,
			product: [],
			images: [],
			colors_en: [],
			colors_gr: [],
			sizes: [],
			index: 3,
			category: [],
			productIndex: 0,
			productPagination: []
		}
		this.changeImage = this.changeImage.bind(this);
		this.scrollThumbs = this.scrollThumbs.bind(this);
	}

	componentWillUnmount() {
		root.removeEventListener('resize', this.handleResize.bind(this));
		const ele = document.getElementById('kokka-loading')
		if (ele !== undefined) {
			ele.classList.toggle('remove')
			// add to DOM
			ele.style.display = 'flex'
		}
	}

	handleResize() {
		this.setState({ windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0) });
	}

	componentDidMount() {
		ReactGA.pageview(this.props.match.url);
		root.addEventListener('resize', this.handleResize.bind(this));
		const slug = this.props.match.params.productSlug
		axios.get('https://cms.kokkashoes.com/api/products/' + slug).then(async (result) => {
			this.getCategory(result.data[0].id);
			var { productPagination } = this.props.location.state || {};

			if (productPagination === undefined) {
				await axios.get('https://cms.kokkashoes.com/api/product/pagination/all').then((result) => {
					productPagination = result.data;
				})
			}
			this.setState({
				product: result.data[0],
				colors_en: JSON.parse(result.data[0].colors_en),
				colors_gr: JSON.parse(result.data[0].colors_gr),
				images: JSON.parse(result.data[0].images),
				sizes: JSON.parse(result.data[0].sizes),
				imageSrc: JSON.parse(result.data[0].images)[0][0],
				isLoading: false,
				productIndex: productPagination.findIndex(product => { return product.id === result.data[0].id }),
				productPagination: productPagination
			}, () => {
				const ele = document.getElementById('kokka-loading')
				if (ele !== undefined) {
					// fade out
					setTimeout(() => {
						ele.classList.add('remove')

						// remove from DOM
						ele.style.display = 'none'
					}, 3000)

				}
			});
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.productSlug !== prevProps.match.params.productSlug) {
			const slug = this.props.match.params.productSlug
			axios.get('https://cms.kokkashoes.com/api/products/' + slug).then((result) => {
				this.getCategory(result.data[0].id);

				this.setState({
					product: result.data[0],
					colors_en: JSON.parse(result.data[0].colors_en),
					colors_gr: JSON.parse(result.data[0].colors_gr),
					images: JSON.parse(result.data[0].images),
					sizes: JSON.parse(result.data[0].sizes),
					imageSrc: JSON.parse(result.data[0].images)[0][0],
					isLoading: false,
					productIndex: this.state.productPagination.findIndex(product => { return product.id === result.data[0].id }),
				});
			});
		}
	}

	getCategory = async (id) => {
		var category_slug = await axios.get(`https://cms.kokkashoes.com/api/product/category/${id}`);
		category_slug = category_slug.data[0];
		this.setState({ category: category_slug });
	}

	componentWillMount() {
		document.addEventListener('scroll', () => {
			const isTop = root.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
			var range = 200;
			var scrollTop = root.scrollY;
			var height = root.innerHeight;
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

	changeImage = (imageUrl) => {
		this.setState({ imageSrc: imageUrl })
	}

	scrollThumbs = (i) => {
		var sideImages = null;
        this.state.images.forEach(color => { sideImages += color.length });
		this.setState({ index: i <= 3 ? 3 : i > sideImages-1 ? 3 : i });
		this.refs[i <= 3 ? 0: sideImages === 4 ? 3 : i > sideImages-1 ? 0  : i].scrollIntoView({ block: 'end', behavior: 'smooth' });
	}
	scrollThumbsSelect = (i) => {
        var scroll = null;
        if (this.state.images.length > 1 && i > 0) {
            for(var image=0;image < i;image++){
                scroll += this.state.images[image].length
            }
        }
        else{
            scroll = 0;
        }
		this.refs[scroll].scrollIntoView({ block: 'end', behavior: 'smooth' });
	}

	menuOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		var { product, colors_en, colors_gr, images, sizes, category, productIndex, productPagination } = this.state;
		var { en } = this.props;
		var colors = en ? colors_en : colors_gr
		var sideImages = null;
		var refValue = 0;
		images.forEach(color => { sideImages += color.length })
		return (
			!this.state.isLoading && <div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: "initial" }}>
				<Helmet
					title={`${en ? product.name_en : product.name_gr} | KOKKA SHOES`}
					meta={[
						{ name: "description", content: en ? product.description_en : product.description_gr },
						{ property: "og:description", content: en ? product.description_en : product.description_gr },
						{ property: "og:type", content: "product" },
						{ property: "og:title", content: en ? product.name_en : product.name_gr },
						{ property: "og:image", content: `https://kokkashoes.com/images/shoes/${product.product_code}/${images[0][0]}` },
						{ property: "og:url", content: `https://kokkashoes.com/${en ? 'en' : 'el'}/product/${product.slug}` },
						{ property: "og:site_name", content: "KOKKA SHOES" },
						{ property: "og:locale", content: en ? "en_US" : "el_GR" },
						{ name: "twitter:card", content: "summary" },
						{ name: "twitter:url", content: `https://kokkashoes.com/${en ? 'en' : 'el'}/product/${product.slug}` },
						{ name: "twitter:title", content: `${en ? product.name_en : product.name_gr} | KOKKA SHOES` },
						{ name: "twitter:description", content: en ? product.description_en : product.description_gr },
						{ name: "twitter:image", content: `https://kokkashoes.com/images/shoes/${product.product_code}/${images[0][0]}` },
                        { itemprop: "name", content: `${en ? product.name_en : product.name_gr} | KOKKA SHOES` },
                        { itemprop: "description", content: en ? product.description_en : product.description_gr},
                        { itemprop: "image", content: `https://kokkashoes.com/images/shoes/${product.product_code}/${images[0][0]}`}
					]}
				>
					<script type="application/ld+json">
						{`{
						"@context": "http://schema.org/",
						"@type": "Product",
						"name": "${en ? product.name_en : product.name_gr}",
						"image": [
							${images.map((color)=>{return color.map((image)=>{return `"https://kokkashoes.com/images/shoes/${product.product_code}/${image},"\n`}) })}
						],
						"description": "${en ? product.description_en : product.description_gr}",
						"sku": "${product.product_code}",
						"brand": {
							"@type": "Thing",
							"name": "KOKKA SHOES"
						}
						}`}
					</script>
				</Helmet>
				<div className="header" style={{ zIndex: 99 }}><span style={{ zIndex: 99, width: '100%', backgroundColor: 'black' }}><Header menuOpen={this.menuOpen.bind(this)} isOpen={this.state.isOpen} /></span>
					{this.state.windowWidth <= 1100 && <div className={`side-menu ${this.state.isTop ? '' : 'scroll'}`} style={!this.state.isOpen ? { WebkitTransform: 'translateY(-410px)', MsTransform: 'translateY(-410px)', transform: 'translateY(-410px)' } : null}>
						<MenuLinks />
					</div>}

				</div><div className="breadcrumbs"><Link to={en ? '/en' : '/el'}>{en ? 'Home' : 'Αρχική'}</Link><span>{'>'}</span><Link to={en ? '/en/catalog' : '/el/catalog'}>{en ? 'Catalog' : 'Κατάλογος'}</Link><span>{'>'}</span><Link to={`${en ? '/en' : '/el'}/catalog/${category.slug}`}>{en ? category.name_en : category.name_gr}</Link></div>
				<div className="product">
					{productIndex > 0 ? <Link to={{ pathname: `/${en ? 'en' : 'el'}/product/${productPagination[this.state.productIndex - 1].slug}`, state: { productPagination: productPagination } }} className="productScrollLeft"><i className="fas fa-arrow-left"></i></Link> : <span className="productScrollLeft disabled"><i className="fas fa-arrow-left"></i></span>}
					{productIndex < (productPagination.length-1) ? <Link to={{ pathname: `/${en ? 'en' : 'el'}/product/${productPagination[this.state.productIndex + 1].slug}`, state: { productPagination: productPagination } }} className="productScrollRight"><i className="fas fa-arrow-right"></i></Link>:<span className="productScrollRight disabled"><i className="fas fa-arrow-right"></i></span>}
					<div className="product-photo">
						<div className="sideWrapper">
							{images.length !== 0 && <div className="product-image-side" ref={(el) => { this.divWidth = el; }}>
								{images.map((imageColor, indexColor) => {
									return imageColor.map((image, index) => {
										refValue++;
										return <img ref={refValue-1}
											key={'side-image-' + index}
											alt={en ? "Image for product" + product.name_en : "Εικονα για το προιον " + product.name_gr}
											title={en ? product.name_en : product.name_gr}
											onClick={() => { this.changeImage(image) }}
											src={`https://kokkashoes.com/images/shoes/${product.product_code}/${image}`}
										/>
									})
								})}
							</div>}
							{root.innerWidth<991 && sideImages > 3 && sideImages !== null &&<span onClick={() => { this.scrollThumbs(this.state.index - 1) }} className="scrollSpanUp"><i className="fas fa-angle-up"></i></span>}
							{root.innerWidth<991 && sideImages > 3 && sideImages !== null &&<span onClick={() => { this.scrollThumbs(this.state.index + 1) }} className="scrollSpanDown"><i className="fas fa-angle-down"></i></span>}
							{root.innerWidth>990 && sideImages > 3 && sideImages !== null && <div className="scrollWrapper">
								<span onClick={() => { this.scrollThumbs(this.state.index - 1) }} className="scrollSpan"><i className="fas fa-angle-up"></i></span>
								<span onClick={() => { this.scrollThumbs(this.state.index + 1) }} className="scrollSpan"><i className="fas fa-angle-down"></i></span>
							</div>}
						</div>
						<div className="product-image-main">
                            <ReactImageZoom 
                                width={338}
                                zoomWidth={338}
                                offset={{vertical: 0, horizontal: root.innerWidth < 721 ? -338 : 10}}
								alt={en ? "Image for product" + product.name_en : "Εικονα για το προιον " + product.name_gr}
								title={en ? product.name_en : product.name_gr}
								img={`https://kokkashoes.com/images/shoes/${product.product_code}/${this.state.imageSrc}`} />
						</div>
					</div>
					<div className="product-info">
						<div className="product-name product-page"><h1>{en ? product.name_en : product.name_gr}</h1></div>
						{/* <div className="product-price">{en ? 'Price' : 'Τιμή'}: {product.price}€</div> */}
						<div className="product-code">{en ? 'Product Code' : 'Κωδικός'}: {product.product_code}</div>
						<div className="product-heights">
							{product.height !== null && <span>{en ? 'Sole Height' : 'Ύψος Σόλας'}: {parseFloat(product.height)} cm</span>}
							{product.takouni_height !== null && <span>{en ? 'Heel Height' : 'Ύψος Τακουνιού'}: {parseFloat(product.takouni_height)} cm</span>}<br />
							{product.fiapa_height !== null && <span>{en ? 'Fiapa Height' : 'Ύψος Φιάπας'}: {parseFloat(product.fiapa_height)} cm</span>}
						</div>
						<div className="product-colors">{en ? 'Color' : 'Χρώμα'}:</div>
						<div className="product-colors">
							<span>
								<select onChange={(event) => { this.changeImage(images[event.target.value][0]); this.scrollThumbsSelect(event.target.value) }}>
									{colors.map((color, index) => {
										if (index === 0) return <option key={'color' + index} value={index} autoFocus >{color}</option>
										else return <option key={'color' + index} value={index}>{color}</option>
									})}
								</select>
							</span>
						</div>
						<div className="product-sizes-title"><span>{en ? 'Sizes' : 'Μεγέθη'}:</span></div>
						<div className="product-sizes">{sizes.map((size, index) => { return <span key={'size' + index} className="size" >{size}</span> })}</div>
						<div className="product-description">{en ? product.description_en : product.description_gr}</div>
						<div className="product-social">
							{/* <a href="#">
								<i className="fab fa-instagram" />
								<p>Instagram</p>
							</a> */}
							<FacebookShareButton
								url={`https://kokkashoes.com/${en ? 'en' : 'el'}product/${product.slug}`}
								quote={en ? product.description_en : product.description_gr}>
								<i className="fab fa-facebook-f" />
								<p>Facebook</p>
							</FacebookShareButton>
							<PinterestShareButton
								url={`https://kokkashoes.com/${en ? 'en' : 'el'}product/${product.slug}`}
								media={`https://kokkashoes.com/images/shoes/${product.product_code}/${images[0][0]}`}
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
