import React, { Component, PropTypes } from 'react';
import InputAutocomplete from '../util/InputAutocomplete.js';
import Input from 'react-toolbox/lib/input';
// import InputTest from './inputs.jsx';


// import keydown from 'react-keydown'
// import InputTest from '../components/inputTest.jsx'

// @keydown
export default class MapForm extends React.Component {

	constructor(){
		// What does super keyword do?
		super()
		this.state = {
			autocomplete: new InputAutocomplete(),
			radius: ''

		}
	}
	componentDidMount() {
		console.log('MapForm mount');
		this.originInputElement = document.getElementById('from');
		this.destinationInputElement = document.getElementById('to');
	}
	componentDidUpdate() {
		console.log("MapForm updated");
		// Find out how to listen for a change in a specific prop
		// triggerInputAutocomplete based on that.
		// right now I think this function is getting called to frequently
		// triggerInputAutocomplete needs to wait for this.props.map to be set.
		this.triggerInputAutocomplete();
	}

	// componentWillReceiveProps( { keydown } ) {
	// 	if ( keydown.event ) {
	// 		// inspect the keydown event and decide what to do
	// 		console.log( keydown.event.which );
	// 		if(keydown.event.which === 13){
	// 			$('#mapFormSubmit').trigger('click');
	// 		}
	// 	}
	// }

	triggerInputAutocomplete(){
		this.state.autocomplete.run(this.originInputElement, this.destinationInputElement, this.props.map);
	}

	handleChange(name, value){
      this.setState({
		   [name]: value
	   });
    };

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.autocomplete);
		this.props.onFormSubmit({
			originId: this.state.autocomplete.originPlaceId,
			destinationId: this.state.autocomplete.destinationPlaceId,
			radius: this.refs.radius.value,
			search: this.refs.search.value
		});
		google.maps.event.clearInstanceListeners(this.originInputElement);
		google.maps.event.clearInstanceListeners(this.destinationInputElement);
		this.triggerInputAutocomplete();
	}

	render() {
		return (
			<form 	id="calculateRoute"
					name="calculate-route"
					className="calculateRoute"
					onSubmit={this.handleSubmit.bind(this)}>


				


			<input id="mapFormSubmit" type="submit" value="Submit" />
				<input type="reset" value="Reset" />
			</form>
		);
	}
}

// export default keydown( MapForm );
