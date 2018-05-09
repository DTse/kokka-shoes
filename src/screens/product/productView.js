import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import '../../App.css';

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
			product: [],
			images: [],
			colors_en: [],
			colors_gr: [],
			sizes: []
		}
		this.changeImage = this.changeImage.bind(this);
	}

	componentDidMount(){
		const slug = (this.props.match.url).match(/^\/+.*\/(.*)$/);
        axios.get('http://cms.kokkashoes.tk/api/products/'+slug[1]).then((result)=>{
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

	changeImage = (imageUrl)=>{
		this.setState({imageSrc: imageUrl})
	}

	scrollThumbs = (scrollElement) => {
		scrollElement.scrollIntoView(false, {behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		var { product, colors_en, colors_gr, images, sizes } = this.state;
		return (
			!this.state.isLoading && <div className="main-wrapper site-scroll" style={{backgroundColor: 'transparent', position: "initial"}}>
				<Helmet 
					title= {`${product.name_gr}`}
					meta={[
					{"name": product.name_gr, "content": product.description_gr},
					{property: "og:type", content: "product"},
					{property: "og:title", content: product.name_gr},
					{property: "og:image", content: `http://cms.kokkashoes.tk/images/shoes/${product.product_code}/${images[0][0]}`},
					{property: "og:url", content: `http://kokkashoes.tk/product/${product.slug}`}
					]}
					/>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
                <div className="product">
					<div className="product-photo">
						<div className="sideWrapper">
							{images.length !== 0 && <div className="product-image-side" ref={(el)=>{this.divWidth = el;}}>
								{images.map((image, index)=>{return <img 
																				key={'side-image-'+index} 
																				alt={"Εικονα για το προιον "+product.name_gr}
																				title={product.name_gr}
																				onClick={()=>{this.changeImage(image)}} 
																				src={`http://cms.kokkashoes.tk/images/shoes/${product.product_code}/${image}`} 
																			/>})}
								{/* <img onClick={()=>{this.changeImage(sampleShoe)}} src={sampleShoe} ref={(el)=>{this.firstElement = el ;}}/>
								<img onClick={()=>{this.changeImage(sampleShoe1)}} src={sampleShoe1} />
								<img onClick={()=>{this.changeImage(sampleShoe2)}} src={sampleShoe2} />
								<img onClick={()=>{this.changeImage(sampleShoe2)}} src={sampleShoe} ref={(el)=>{this.lastElement = el ;}} /> */}
							</div>}
							{images.length > 3 && <div className="scrollWrapper">
								<span onClick={()=>{this.scrollThumbs(this.lastElement)}} className="scrollSpan"><i className="fas fa-angle-down"></i></span>
								<span onClick={()=>{this.scrollThumbs(this.firstElement)}} className="scrollSpan"><i className="fas fa-angle-up"></i></span>
							</div>}
						</div>
						<div className="product-image-main"> 
							<img 
								alt={"Εικονα για το προιον "+product.name_gr}
								title={product.name_gr}
								src={`http://cms.kokkashoes.tk/images/shoes/${product.product_code}/${this.state.imageSrc}`} />
						</div> 
					</div>
					<div className="product-info">
						<div className="product-name product-page"><h1>{product.name_gr}</h1></div>
						<div className="product-code">Κωδικός: {product.product_code}</div>
						<div className="product-heights">
							{product.height !== null && <span>Ύψος Σόλας: {product.height}εκ.</span>}
							{product.fiapa_height !== null && <span>Ύψος Τακουνιού: {product.fiapa_height}εκ.</span>}<br/>
							{product.takouni_height !== null && <span>Ύψος Φιάπας: {product.takouni_height}εκ.</span>}
						</div>
						<div className="product-colors">Χρώμα:</div>
                            <div className="product-colors"><span><select>
                                {colors_gr.map((color, index)=>{
									if(index === 0) return <option key={'color'+index} autoFocus >{color}</option>
									else return <option key={'color'+index}>{color}</option>
								})
								}
                            </select></span>
                        </div>
						<div className="product-sizes-title"><span>Μεγέθη:</span></div>
						<div className="product-sizes">{sizes.map((size, index)=>{return <span key={'size'+index} className="size" >{size}</span>})}</div>
						<div className="product-description">{product.description_gr}</div>
						<div className="product-social">
							{/* <a href="#">
								<i className="fab fa-instagram" />
								<p>Instagram</p>
							</a> */}
							<FacebookShareButton
								url={`http://kokkashoes.tk/product/${product.slug}`}
								quote={product.description_gr}
								>
								<i className="fab fa-facebook-f" />
								<p>Facebook</p>
							</FacebookShareButton>
							<PinterestShareButton
								url={`http://kokkashoes.tk/product/${product.slug}`}
								media={`http://cms.kokkashoes.tk/images/shoes/${product.product_code}/${images[0][0]}`}
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
