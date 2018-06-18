import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import {LanguageContext} from './languageContext';

export default class Footer extends Component {
	render() {
		return (
			<LanguageContext.Consumer>
			{(context) => (
			<div className="footer-wrapper">
				<div className="footer">
					<div className="column-1">
						<p>{context.en ? 'About us' : 'Σχετικά με μας'}</p>
						{/* <p>
							{context.en ?
						'Our main concern is the constant quality of materials for the creation of comfortable and durable shoes that meet the needs of our consumers':
						'Κύριο μέλημά μας είναι η σταθερή ποιότητα των υλικών για τη δημιουργία άνετων και ανθεκτικών παπουτσιών που ανταποκρίνονται στις ανάγκες των καταναλωτών.'}
						</p> */}
						<p className="info">{context.en ? 'Cheimaras 39, Piraeus' : 'Χειμάρας 39, Πειραιάς'}</p>
						<p className="info">{context.en ? 'Phone: +30 210 4206263' : 'Τηλέφωνο: +30 210 4206263'}</p>
						<p className="info">Fax: +30 210 4203833</p>
						<p className="info">Email: kokkashoes@outlook.com</p>
					</div>
					<div className="column-2">
						<p>{context.en ? 'Our socials' : 'Βρείτε μας στα social'}</p>
						<a href="https://instagram.com/kokkashoes">
							<i className="fab fa-instagram" />
							<p>Instagram</p>
						</a>
						<a href="https://www.facebook.com/kokkashoes/">
							<i className="fab fa-facebook-f" />
							<p>Facebook</p>
						</a>
						<a href="https://www.pinterest.com/kokkashoes/">
							<i className="fab fa-pinterest-p" />
							<p>Pinterest</p>
						</a>
					</div>
					<div className="column-3">
						<p>{context.en ? 'Categories' : 'Κατηγορίες'}</p>
                        <ul className="categories-footer-list" style={{fontFamily: `'GFS Didot', serif`}}>
                            <li>
							{context.en ?
                                <Link to="/en/catalog/boots-n-booties">Boots & Booties</Link>:
                                <Link to="/el/catalog/boots-n-booties">Μπότες & Μποτάκια</Link>
							}
                            </li>
                            <li>
								{context.en ?
                                <Link to="/en/catalog/flat-sandals">Flat Sandals</Link>:
                                <Link to="/el/catalog/flat-sandals">Σανδάλια</Link>
								}
                            </li>
                            <li>
								{context.en ?
                                <Link to="/en/catalog/flats">Flats</Link>:
                                <Link to="/el/catalog/flats">Flats</Link>
								}
                            </li>
                            <li>
								{context.en ?
                                <Link to="/en/catalog/platforms-n-heeled-sandals">Platforms & Heeled Sandals</Link>:
                                <Link to="/el/catalog/platforms-n-heeled-sandals">Πλατφόρμες & Πέδιλα</Link>
								}
                            </li>
                            <li>
								{context.en ?
                                <Link to="/en/catalog/mens-sandals">Men's Sandals</Link>:
                                <Link to="/el/catalog/mens-sandals">Ανδρικά Σανδάλια</Link>
								}
                            </li>
					    </ul>
					</div>
				</div>
			</div>)}
			</LanguageContext.Consumer>
		);
	}
}
