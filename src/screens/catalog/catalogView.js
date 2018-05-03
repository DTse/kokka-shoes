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
        console.log(url)
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent',opacity: '0.85', position: 'initial' }}>
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
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                            <div className="container">
                            <img src={sampleShoe} />
                                <div className="middle">
                                <Link to="/product" className="product-front-img"><div className="text">Check out!</div></Link>
                                </div>
                                <div className="product-name">
                                <h1>Test</h1>
                                <p><span>Κωδικός:</span> 19492</p>
                                <h3>20.99 ‎€</h3>
                                </div>
                            </div>
                        </div>
                        <div className="category-pagination">
                            <ul>
                                <li><i className="fas fa-arrow-left"/> Προηγόυμενο</li>
                                <li>Επόμενο <i className="fas fa-arrow-right"/></li>
                            </ul>
                        </div>
                    </div>
				<div style={{marginTop: 30}}><Footer /></div>
			</div>
		);
	}
}

export default Catalog;
