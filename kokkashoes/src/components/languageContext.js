import React, { Component } from 'react';

// Create new context
export const LanguageContext = React.createContext();

// Then create a Provider Component
export default class LanguageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { en: false };
	}

	componentDidMount() {
		var url = window.location.href.match(/\/el/);
		this.setState({
			en: url === null ? true : false
		});
	}

	changeLanguage = () => {
		this.setState({
			en: !this.state.en
		});
	};

	render() {
		return (
			<LanguageContext.Provider
				value={{
					en: this.state.en,
					changeLanguage: this.changeLanguage
				}}>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}
