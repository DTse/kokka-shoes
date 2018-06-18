import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import ReactGA from 'react-ga';

import { pwaMetas, linkPwaMetas } from './pwaMetas';

import MainIMG from './images/main.jpg'

import {LanguageContext} from './components/languageContext';
// import KokkaLoader from './components/kokkaLoader';

// import Home from './screens/index/homeView';
// import Product from './screens/product/productView';
// import About from './screens/about/aboutView';
// import FindUs from './screens/find/findusView';
// import Catalog from './screens/catalog/catalogView';

import ScrollToTop from './components/scrollTop';

import loadable from 'loadable-components'; 

const Home = loadable(() => import(/* webpackChunkName: "home" */ './screens/index/homeView'))

const Product = loadable(() => import(/* webpackChunkName: "product" */ './screens/product/productView'))

const About = loadable(() => import(/* webpackChunkName: "about" */ './screens/about/aboutView'))

const FindUs = loadable(() => import(/* webpackChunkName: "findus" */ './screens/find/findusView'))

const Catalog = loadable(() => import(/* webpackChunkName: "catalog" */ './screens/catalog/catalogView'))

class App extends Component { 
    componentDidMount(){
        ReactGA.initialize('UA-120917593-1',{
            gaOptions:{
                'anonymizeIp': true
            }
        });
    }
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
                        [...metas, 
                            {name: "description", content: context.en ? description_en : description_gr},
                        { name: "og:site_name", content: "KOKKA SHOES"},
                        { name: "fb:page_id", content: "331599730532902"},
                        { name: "subject", content: context.en ? "Leather shoes handcrafted in Greece" : "Χειροποίητα δερμάτινα παπούτσια κατασκευασμένα στην Ελλάδα" },
                        { name: "copyright", content: "KOKKA SHOES"}, 
                        { name: "language", content: context.en ? "en_US" : "el_GR"},
                        { name: "robots", content: "index,follow" },
                        { name: "Classification", content: "Business"},
                        { name: "author", content: "KOKKA SHOES, kokkashoes@outlook.com"},
                        { name: "designer", content: context.en ? "Dimitris Tsetsonis" : "Δημήτρης Τσετσώνης"},
                        { name: "copyright", content: "KOKKA SHOES 2018"},
                        { property: "og:description", content: context.en ? description_en : description_gr},
                        { property: "og:type", content: "business.business"},
                        { property: "og:title", content: `${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES`},
                        { property: "og:image", content: `https://kokkashoes.com${MainIMG}`},
                        { property: "og:url", content: `https://kokkashoes.com/${context.en ? 'en' : 'el'}`},
                        { property: "og:site_name", content: "KOKKA SHOES"},
                        { property: "og:locale", content: context.en ? "en_US" : "el_GR"},
                        { property: "business:contact_data:street_address", content: context.en ? 'Andrianou 114' : 'Αδριανού 114'},
                        { property: "business:contact_data:locality"    , content: context.en ? 'Athens' : 'Αθήνα' },
                        { property: "business:contact_data:postal_code" , content: "10558" },
                        { property: "business:contact_data:country_name", content: context.en ? 'Greece' : 'Ελλάδα' },
                        { property: "place:location:latitude"           , content: "37.9733551" }, 
                        { property: "place:location:longitude"          , content: "23.7295532" },  
                        {name: "twitter:card", content: "summary"},
                        {name: "twitter:url", content: `https://kokkashoes.com/${context.en ? 'en' : 'el'}`},
                        {name: "twitter:title", content: `${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES`},
                        {name: "twitter:description", content: context.en ? description_en : description_gr},
                        {name: "twitter:image", content: `https://kokkashoes.com${MainIMG}`},
                        { itemprop: "name", content: `${context.en ? 'Home' : 'Αρχική'} | KOKKA SHOES` },
                        { itemprop: "description", content: context.en ? description_en : description_gr},
                        { itemprop: "image", content: `https://kokkashoes.com${MainIMG}`}]
                        }
                            link={links}>
                            <script type="application/ld+json">{`
                                {
                                    "@context": "http://schema.org",
                                    "@type": "LocalBusiness",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Athens",
                                        "addressRegion": "GR",
                                        "postalCode":"10558",
                                        "streetAddress": "Andrianou 114, Athens"
                                    },
                                    "contactPoint": [
                                        { "@type": "ContactPoint",
                                          "telephone": "+30-210-4206263",
                                          "contactType": "${context.en ? 'Παραγγελείες':'Orders'}"
                                        }
                                      ]
                                    "description": "${context.en ? description_en : description_gr}",
                                    "name": "KOKKA SHOES",
                                    "image": "https://kokkashoes.com${MainIMG}",
                                    "telephone": "+30-210-3224460",
                                    "openingHours": "Mo,Tu,We,Th,Fr 09:00-21:00",
                                    "@id": "https://kokkashoes.com/${context.en ? 'en':'el'}/",
                                    "url": "https://kokkashoes.com/${context.en ? 'en':'el'}/",
                                    "inLanguage": "${context.en? 'en': 'el'}",
                                    "geo": {
                                        "@type": "GeoCoordinates",
                                        "latitude": "37.9733551",
                                        "longitude": "23.7295532"
                                    },
                                    "sameAs" : [ 
                                        "https://instagram.com/kokkashoes",
                                        "https://www.facebook.com/kokkashoes/",
                                        "https://www.pinterest.com/kokkashoes/"
                                    ]
                                }
                            `}</script>
                            </Helmet>
					<Switch>
						<Route exact path='/:lang' component={Home} />
						<Route exact path='/:lang/catalog' component={Catalog} />
						<Route path="/:lang/catalog/:categorySlug" component={Catalog} />
						<Route exact path="/:lang/product/:productSlug" render={(props)=><Product {...props} en={context.en}/>} />
						<Route exact path="/:lang/about-us" component={About} />
						<Route exact path="/:lang/company" component={FindUs} />
						<Route path="*" render={() => <Redirect to={context.en ? '/en' : '/el'} />} />
					</Switch>
				</div>)}
				</LanguageContext.Consumer>
			</ScrollToTop>
		);
	}
}

export default App;
