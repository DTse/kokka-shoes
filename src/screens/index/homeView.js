import React, { Component } from 'react';
import '../../App.css';

// import axios from 'axios';

import ReactGA from 'react-ga';

import {LanguageContext} from '../../components/languageContext';

//Main Screen Components
import ProductsGrid from '../index/productsGrid';
import MainCarousel from '../index/mainCarousel';
import MidBanners from '../index/midBanners';
//import MidImage from '../index/midImage';

import Footer from '../../components/footer';

class Home extends Component {
    constructor(props){
        super(props)
        
        this.state = {
          //products: [],
          isLoading: true
        };
      }
    
    componentDidMount(){
        ReactGA.pageview(this.props.match.url);
        // axios.get('https://cms.kokkashoes.com/api/products').then((result)=>{
        //     this.setState({products: result.data.data, isLoading: false},()=>{
            this.setState({isLoading: false})
                const ele = document.getElementById('kokka-loading')
                if(ele){
                    // fade out
                    ele.classList.add('remove')
                    setTimeout(() => {
                    // remove from DOM
                    ele.style.display = 'none'
                    }, 3000)
                }
        //     });

        // })
    }

    componentWillUnmount(){
        const ele = document.getElementById('kokka-loading')
        if(ele !== undefined){
            ele.classList.toggle('remove') 
            // add to DOM
            ele.style.display = 'flex'
        }
    }
	render() {
		return (
            <LanguageContext.Consumer>
			{(context) => (
			!this.state.isLoading && <div style={{ height: '100%', width: '100vw' }}>
                <MainCarousel />
				<MidBanners en={context.en}/>
                <div className="home-divider" />
				<ProductsGrid en={context.en}/>
				<Footer />
			</div>)}
            </LanguageContext.Consumer>
		);
	}
}

export default Home;
