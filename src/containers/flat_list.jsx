import React, { Component } from 'react';

import Flat from '../components/flat';

class FlatList extends Component {
	
	// TEMP CODE TO INTEGRATE HTML
	static defaultProps = {
	  flats: [{
		"name": Charmy Loft,
		"imageURL": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
		"price": 123,
		"priceCurrency": "USD"
		}]
	}

	render() {
		return (
			<div className="flat-list col-sm-7">
				{this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}		
			</div>
		);
	}
}

export default FlatList;
