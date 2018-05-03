import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sampleShoe from '../../images/1132.jpg';

import '../../App.css';

import Footer from '../../components/footer';
import Header from '../../components/header';

class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
 
	render() {
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent',opacity: '0.85', position: 'initial' }}>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
				<div className="catalog-menu">
                    <ul style={{fontFamily: `'GFS Didot', serif`}}>
						<li>
                            <Link to="/catalog/boots-n-booties">Μπότες & Μποτάκια</Link>
						</li>
						<li>
                            <Link to="/catalog/sandals">Σανδάλια</Link>
						</li>
						<li>
                            <Link to="/catalog/flats">Flats</Link>
						</li>
						<li>
                            <Link to="/catalog/heeled-sandals">Πέδιλα</Link>
						</li>
						<li>
                            <Link to="/catalog/mens-sandals">Ανδρικά Σανδάλια</Link>
						</li>
						<li>
                            <Link to="/catalog/platforms">Πλατφόρμες</Link>
						</li>
					</ul>
				</div>
				<div className="catalog-main">
                    <div className="category-title"><span>Μποτες & Μποτακια</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/catalog/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/boots-n-booties" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"></i></Link></div>
                    </div>
				<div className="catalog-main">
                    <div className="category-title"><span>Σανδάλια</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/sandals" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"/></Link></div>
                    </div>
				<div className="catalog-main">
                    <div className="category-title"><span>Flats</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/flats" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"/></Link></div>
                    </div>
				<div className="catalog-main">
                    <div className="category-title"><span>Πέδιλα</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/heeled-sandals" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"/></Link></div>
                    </div>
				<div className="catalog-main">
                    <div className="category-title"><span>Ανδρικά Σανδάλια</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/mens-sandals" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"/></Link></div>
                    </div>
				<div className="catalog-main">
                    <div className="category-title"><span>Πλατφόρμες</span></div>
                        <div className="products-grid">
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                            <div className="product-preview">
                                <div className="container">
                                    <img src={sampleShoe} />
                                        <div className="middle">
                                        <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                        </div>
                                        <div className="product-name">
                                            <p>Test</p>
                                            <p><span>Κωδικός:</span> 19492</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-more"><Link to="/catalog/platforms" className="category-link">Δείτε Περισσότερα<i className="fas fa-arrow-right"/></Link></div>
                    </div>
				<div style={{marginTop: 30}}><Footer /></div>
			</div>
		);
	}
}

export default Catalog;
