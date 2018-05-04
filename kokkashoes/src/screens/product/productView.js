import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import sampleShoe from '../../images/1132.jpg';
import sampleShoe1 from '../../images/1132.jpg';
import sampleShoe2 from '../../images/boots.jpg';

import '../../App.css';

import Footer from '../../components/footer';
import Header from '../../components/header';

class Product extends Component {
	constructor(props){
		super(props)
		this.state={
			imageSrc: sampleShoe,
			sideWidth: 100
		}
		this.changeImage = this.changeImage.bind(this);
	}

	changeImage = (imageUrl)=>{
		this.setState({imageSrc: imageUrl})
	}

	scrollThumbs = (scrollElement) => {
		scrollElement.scrollIntoView(false, {behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		return (
			<div className="main-wrapper site-scroll" style={{backgroundColor: 'transparent', position: "initial"}}>
				<Helmet 
					title= "Page title"
					meta={[
					{"name": "description", "content": "Description of page"},
					{property: "og:type", content: "product"},
					{property: "og:title", content: "Example title"},
					{property: "og:image", content: "http://example.com/article.jpg"},
					{property: "og:url", content: "http://example.com/example"}
					]}
					/>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
                <div className="product">
					<div className="product-photo">
						<div className="sideWrapper">
							<div className="product-image-side" ref={(el)=>{this.divWidth = el;}}>
								<img onClick={()=>{this.changeImage(sampleShoe)}} src={sampleShoe} ref={(el)=>{this.firstElement = el ;}}/>
								<img onClick={()=>{this.changeImage(sampleShoe1)}} src={sampleShoe1} />
								<img onClick={()=>{this.changeImage(sampleShoe2)}} src={sampleShoe2} />
								<img onClick={()=>{this.changeImage(sampleShoe2)}} src={sampleShoe} ref={(el)=>{this.lastElement = el ;}} />
							</div>
							<div className="scrollWrapper">
								<span onClick={()=>{this.scrollThumbs(this.lastElement)}} className="scrollSpan"><i className="fas fa-angle-down"></i></span>
								<span onClick={()=>{this.scrollThumbs(this.firstElement)}} className="scrollSpan"><i className="fas fa-angle-up"></i></span>
							</div>
						</div>
						<div className="product-image-main"> 
							<img src={this.state.imageSrc} />
						</div> 
					</div>
					<div className="product-info">
						<div className="product-name product-page"><h1>Test</h1></div>
						<div className="product-code">Κωδικός: Test</div>
						<div className="product-heights">
							Ύψος Τακουνιού: 10εκ.<br/>
							Ύψος Φιάπας: 2εκ.
						</div>
						<div className="product-colors">Χρώμα:</div>
                            <div className="product-colors"><span><select>
                                <option autoFocus value="volvo">Γκριζο</option>
                                <option value="saab">Καφε</option>
                            </select></span>
                        </div>
						<div className="product-sizes"><span>Μεγέθη:</span></div>
						<div className="product-sizes"><span className="size" >35</span><span className="size">36</span><span className="size">37</span><span className="size">38</span></div>
						<div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
						<div className="product-social">
							<a href="#">
								<i className="fab fa-instagram" />
								<p>Instagram</p>
							</a>
							<a href="#">
								<i className="fab fa-facebook-f" />
								<p>Facebook</p>
							</a>
							<a href="#">
								<i className="fab fa-pinterest-p" />
								<p>Pinterest</p>
							</a>
						</div>
					</div>
                </div>
                <Footer />
			</div>
		);
	}
}

export default Product;
