import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import { pwaMetas, linkPwaMetas } from './pwaMetas';

import Home from './screens/index/homeView';
import Product from './screens/product/productView';
import About from './screens/about/aboutView';
import FindUs from './screens/find/findusView';
import Catalog from './screens/catalog/catalogView';

import ScrollToTop from './components/scrollTop';

class App extends Component {    
	render() {
        const metas = [ ...pwaMetas ];
		const links = [ ...linkPwaMetas ];
		return (
			<ScrollToTop>
				<div className="App">
                    <Helmet meta={metas} link={links} />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/catalog" component={Catalog} />
						<Route path="/catalog/:categorySlug" component={Catalog} />
						<Route exact path="/product/:productSlug" component={Product} />
						<Route path="/about-us" component={About} />
						<Route path="/company" component={FindUs} />
						<Route path="*" render={() => <Redirect to="/" />} />
					</Switch>
				</div>
			</ScrollToTop>
		);
	}
}

export default App;
