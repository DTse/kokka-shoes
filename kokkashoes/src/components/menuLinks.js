import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';

export const MenuLinks = () => {
	return (
		<ul style={{ fontFamily: `'GFS Didot', serif` }}>
			<li>
				<Link to="/">Αρχική</Link>
			</li>
			<li>
				<Link to="/catalog">Κατάλογος</Link>
			</li>
			<li>
				<Link to="/about-us">Ποίοι είμαστε</Link>
			</li>
			<li>
				<Link to="/company">Επικοινωνία</Link>
			</li>
		</ul>
	);
};
