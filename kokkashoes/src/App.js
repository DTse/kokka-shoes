import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import { pwaMetas, linkPwaMetas } from './pwaMetas';

import {LanguageContext} from './components/languageContext';

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
        const description_en = 'Our main concern is the constant quality of materials for the creation of comfortable and durable shoes that meet the needs of our consumers';
        const description_gr = 'Κύριο μέλημά μας είναι η σταθερή ποιότητα των υλικών για τη δημιουργία άνετων και ανθεκτικών παπουτσιών που ανταποκρίνονται στις ανάγκες των καταναλωτών.';
		return (
			<ScrollToTop>
				<LanguageContext.Consumer>
			{(context) => (<div className="App">
                    <Helmet 
                        title= {`${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES`}
                        meta={
                        [...metas, {name: "description", content: context.en ? description_en : description_gr},
                        {property: "og:description", content: context.en ? description_en : description_gr},
                        {property: "og:type", content: "website"},
                        {property: "og:title", content: `${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES`},
                        {property: "og:image", content: `http://kokkashoes.tk/static/media/main.6244eb10.jpg`},
                        {property: "og:url", content: `http://kokkashoes.tk/${context.en ? 'en' : 'el'}`},
                        {property: "fb:app_id", content:"123456789"},
                        {property: "og:site_name", content: "KOKKA SHOES"},
                        {property: "og:locale", content: context.en ? "en_US" : "el_GR"},
                        {name: "twitter:card", content: "summary"},
                        {name: "twitter:url", content: `http://kokkashoes.tk/${context.en ? 'en' : 'el'}`},
                        {name: "twitter:title", content: `${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES`},
                        {name: "twitter:description", content: context.en ? description_en : description_gr},
                        {name: "twitter:image", content: `http://kokkashoes.tk/static/media/main.6244eb10.jpg`}]
                        }
                            link={links} />
					<Switch>
						<Route exact path='/:lang/' component={Home} />
						<Route exact path='/:lang/catalog/' component={Catalog} />
						<Route path="/:lang/catalog/:categorySlug/" component={Catalog} />
						<Route exact path="/:lang/product/:productSlug/" render={(props)=><Product {...props} en={context.en}/>} />
						<Route path="/:lang/about-us/" component={About} />
						<Route path="/:lang/company/" component={FindUs} />
						<Route path="*" render={() => <Redirect to={context.en ? '/en/' : '/el/'} />} />
					</Switch>
				</div>)}
				</LanguageContext.Consumer>
			</ScrollToTop>
		);
	}
}

export default App;
