import React, { Component } from 'react';

import '../../App.css';
import { MenuLinks } from '../../components/menuLinks';

import {LanguageContext} from '../../components/languageContext';

import root from 'window-or-global';

import ReactGA from 'react-ga';

import { Helmet } from "react-helmet";

import Footer from '../../components/footer';
import Header from '../../components/header';

import AboutImg from '../../images/about-us.jpg';

class About extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isTop: true,
			windowWidth: Math.max(document.documentElement.clientWidth, root.innerWidth || 0),
			isOpen: false
		};
	}
		
	componentDidMount() {
        ReactGA.pageview(this.props.match.url);
        root.addEventListener('resize', this.handleResize.bind(this));
        const ele = document.getElementById('kokka-loading')
        if(ele !== undefined){
            // fade out
            setTimeout(() => {
                ele.classList.add('remove') 
                    
                // remove from DOM
                ele.style.display = 'none'
            }, 3000)
                     
		}
	}
				  
	componentWillUnmount() {
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

	render() {
        return (
			<LanguageContext.Consumer>
			{(context) => (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial' }}>
            <Helmet
                    title={`${context.en ? 'About us' : 'Ποίοι είμαστε'} | KOKKA SHOES`}
                    meta={[
                        { name: "description", content: context.en ? 'Our company, KOKKAshoes, has been involved in the footwear industry since 1977 and our experience is our main criterion when it comes to making elegant and comfortable shoes for our customers.' : 'Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.' },
                        { property: "og:description", content: context.en ? 'Our company, KOKKAshoes, has been involved in the footwear industry since 1977 and our experience is our main criterion when it comes to making elegant and comfortable shoes for our customers.' : 'Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.' },
                        { property: "og:type", content: "business.business" },
                        { property: "og:title", content: `${context.en ? 'About us' : 'Ποίοι είμαστε'} | KOKKA SHOES`},
                        { property: "og:image", content: 'https://kokkashoes.com'+AboutImg },
                        { property: "og:url", content: `https://kokkashoes.com/${context.en ? 'en' : 'el'}/about-us` },
                        { name: "twitter:card", content: "summary" },
                        { name: "twitter:url", content:`https://kokkashoes.com/${context.en ? 'en' : 'el'}/about-us` },
                        { name: "twitter:title", content: `${context.en ? 'About us' : 'Ποίοι είμαστε'} | KOKKA SHOES` },
                        { name: "twitter:description", content: context.en ? 'Our company, KOKKAshoes, has been involved in the footwear industry since 1977 and our experience is our main criterion when it comes to making elegant and comfortable shoes for our customers.' : 'Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.' },
                        { name: "twitter:image", content: 'https://kokkashoes.com'+AboutImg },
                        { itemprop: "name", content: `${context.en ? 'About us' : 'Ποίοι είμαστε'} | KOKKA SHOES` },
                        { itemprop: "description", content: context.en ? 'Our company, KOKKAshoes, has been involved in the footwear industry since 1977 and our experience is our main criterion when it comes to making elegant and comfortable shoes for our customers.' : 'Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.'},
                        { itemprop: "image", content: 'https://kokkashoes.com'+AboutImg}
                    ]}
                />
				<div className="header" style={{ zIndex: 99}}><span style={{zIndex: 99, width: '100%', backgroundColor: 'black'}}><Header  menuOpen={this.menuOpen.bind(this)} isOpen={this.state.isOpen}/></span>
                {this.state.windowWidth <= 1100 && <div className={`side-menu ${this.state.isTop ? '' : 'scroll'}`} style={!this.state.isOpen ? {WebkitTransform: 'translateY(-410px)', MsTransform: 'translateY(-410px)', transform: 'translateY(-410px)'}: null}>
                    <MenuLinks />
                </div>}
                </div>
				<div className="about-us-image">
					<h1 className="about-us-title">{context.en ? 'About us' : 'Ποίοι είμαστε'}</h1>
				</div>
				<div className="about-us-story"> 
				{context.en ? 
				`Our company, KOKKAshoes, has been involved in the footwear industry since 1977 and our experience is our main criterion when it comes to making elegant and comfortable shoes for our customers. 
				Having high expectations for our work and progress, we created a workshop fully equipped with state-of-the-art machinery and manned with our carefully chosen experienced personnel whom we share our expertise with.
				Our collaborations with acknowledged designers of the field combined with acquiring the proper equipment that fulfills our needs has taken us a step further seeking inspiring designs, thus making our designing department one of the strongest points of our company.
				Our efforts throughout all these years have met with recognition by the public and, more especially, our customers which forced us to do more, to produce more, to broaden our collaborative network in all of Greece, expand in Cyprus and other countries and aim to an increase of our share in the footwear market.
				Our main priority is to provide high material quality every time we begin to make a pair of comfortable, durable shoes which will meet and satisfy consumers’ needs.` : 
				`Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.
				Έχοντας μεγάλες προσδοκίες όσον αφορά την πορεία μας στο χώρο, δημιουργήσαμε μια μονάδα παραγωγής εξοπλισμένη με σύγχρονα μηχανήματα και με προσωπικό που διαθέτει την ανάλογη τεχνογνωσία και εμπειρία.
				Σε συνεργασία με καταξιωμένους στο χώρο σχεδιαστές και με τον απαραίτητο εξοπλισμό, προχωράμε παραπέρα αναζητώντας εμπνευσμένα σχέδια, κατατάσσοντας το σχεδιαστήριό μας ένα από τα δυνατά κομμάτια της εταιρείας.
				Στην πορεία όλων αυτών των χρόνων η προσπάθειά μας έχει βρει ανταπόκριση από τον κόσμο και διαθέτοντας ενα μεγάλο δίκτυο συνεργατών σε όλη την Ελλάδα, την Κύπρο και άλλες χώρες στοχεύουμε σε αύξηση του μεριδίου μας στην αγορά υποδήματος.`}
				</div>
				<Footer />
			</div>)}
			</LanguageContext.Consumer>
		);
	}
}

export default About;
