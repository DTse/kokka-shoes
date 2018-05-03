import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<div className="footer">
					<div className="column-1">
						<p>Σχετικά με μας</p>
						<p>
						Κύριο μέλημά μας είναι η σταθερή ποιότητα των υλικών για τη δημιουργία άνετων και ανθεκτικών παπουτσιών που ανταποκρίνονται στις ανάγκες των καταναλωτών.
						</p>
						<p>Phone: +30 210 210 2105</p>
						<p>EMail: kokkashoes@outlook.com</p>
					</div>
					<div className="column-2">
						<p>Βρείτε μας στα social</p>
						<a href="http://instagram.com/kokkashoes">
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
						<p>Κατηγορίες</p>
                        <ul className="categories-footer-list" style={{fontFamily: `'GFS Didot', serif`}}>
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
				</div>
			</div>
		);
	}
}
