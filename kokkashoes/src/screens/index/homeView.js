import React, { Component } from 'react';
import '../../App.css';
import { Helmet } from 'react-helmet';

import { pwaMetas, linkPwaMetas } from '../../pwaMetas';

//Main Screen Components
import ProductsGrid from '../index/productsGrid';
import MainCarousel from '../index/mainCarousel';
import MidBanners from '../index/midBanners';
import MidImage from '../index/midImage';

import Footer from '../../components/footer';

class Home extends Component {
	render() {
		const metas = [ ...pwaMetas ];
		const links = [ ...linkPwaMetas ];
		return (
			<div style={{ height: '100%', width: '100vw' }}>
				<Helmet meta={metas} link={links} />
				<MainCarousel />
				<MidBanners />
				<MidImage />
				<ProductsGrid />
				<Footer />
			</div>
		);
	}
}

export default Home;
