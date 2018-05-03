import React, { Component } from 'react';

import '../../App.css';

import Footer from '../../components/footer';
import Header from '../../components/header';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="main-wrapper site-scroll" style={{ backgroundColor: 'transparent', position: 'initial' }}>
				<div className="header" style={{ zIndex: 99}}><Header /></div>
				<div className="about-us-image">
					<h1 className="about-us-title">Ποίοι είμαστε</h1>
				</div>
				<div className="about-us-story">
				Η εταιρεία KOKKAshoes δραστηριοποιείται στο χώρο κατασκευής υποδημάτων από το 1977 και η εμπειρία μας είναι το βασικό μας κριτήριο όταν φτιάχνουμε κομψά και άνετα παπούτσια για τους πελάτες μας.
				Έχοντας μεγάλες προσδοκίες όσον αφορά την πορεία μας στο χώρο, δημιουργήσαμε μια μονάδα παραγωγής εξοπλισμένη με σύγχρονα μηχανήματα και με προσωπικό που διαθέτει την ανάλογη τεχνογνωσία και εμπειρία.
				Σε συνεργασία με καταξιωμένους στο χώρο σχεδιαστές και με τον απαραίτητο εξοπλισμό, προχωράμε παραπέρα αναζητώντας εμπνευσμένα σχέδια, κατατάσσοντας το σχεδιαστήριό μας ένα από τα δυνατά κομμάτια της εταιρείας.
				Στην πορεία όλων αυτών των χρόνων η προσπάθειά μας έχει βρει ανταπόκριση από τον κόσμο και διαθέτοντας ενα μεγάλο δίκτυο συνεργατών σε όλη την Ελλάδα, την Κύπρο και άλλες χώρες στοχεύουμε σε αύξηση του μεριδίου μας στην αγορά υποδήματος.
				</div>
				<Footer />
			</div>
		);
	}
}

export default About;
