import React from 'react';
import { Link } from 'react-router-dom';

import {LanguageContext} from './languageContext';

import '../App.css';

export const MenuLinks = () => {
    var url = (window.location.pathname).slice(3);
	return (
		<LanguageContext.Consumer>
			{(context) => (
				<ul style={{ fontFamily: `'GFS Didot', serif` }}>
					<li>
						{context.en ?
                            <Link to="/en">Home</Link>:
                            <Link to="/el">Αρχική</Link>
                        }
					</li>
					<li>
                        {context.en ?
                            <Link to="/en/catalog">Catalog</Link>:
                            <Link to="/el/catalog">Κατάλογος</Link>
                        }
					</li>
					<li>
						{context.en ?
                            <Link to="/en/about-us">About us</Link>:
                            <Link to="/el/about-us">Ποίοι είμαστε</Link>
                        }
					</li>
                    <li>
                        {context.en ?
                            <Link to="/en/company">Contact us</Link>:
                            <Link to="/el/company">Επικοινωνία</Link>
                        }
					</li>
					<li>
                    {context.en ?
                            <Link onClick={context.changeLanguage} to={`/el${url}`}>Ελληνικά</Link>:
                            <Link onClick={context.changeLanguage} to={`/en${url}`}>English</Link>}
					</li>
				</ul>)}
		</LanguageContext.Consumer>
	);
};
