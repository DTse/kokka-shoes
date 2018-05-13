import React, { Component } from 'react';
import '../../App.css';

import axios from 'axios';

//Main Screen Components
import ProductsGrid from '../index/productsGrid';
import MainCarousel from '../index/mainCarousel';
import MidBanners from '../index/midBanners';
import MidImage from '../index/midImage';

import Footer from '../../components/footer';

class Home extends Component {
    constructor(props){
        super(props)
        
        this.state = {
          products: [],
          isLoading: true
        };
      }
    
    componentDidMount(){
        axios.get('http://cms.kokkashoes.tk/api/products').then((result)=>{
            console.log(result.data.data);
            this.setState({products: result.data.data, isLoading: false},()=>{
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
	render() {
		return (
			!this.state.isLoading && <div style={{ height: '100%', width: '100vw' }}>
				<MainCarousel />
				<MidBanners />
				<MidImage />
				<ProductsGrid products={this.state.products}/>
				<Footer />
			</div>
		);
	}
}

export default Home;