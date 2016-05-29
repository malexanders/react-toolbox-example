import React, { Component, PropTypes } from 'react';
import InputAutocomplete from '../util/InputAutocomplete.js';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

import style from './style';


// import keydown from 'react-keydown'
// import InputTest from '../components/inputTest.jsx'

// @keydown
export default class MapForm extends React.Component {

	constructor(){
		// What does super keyword do?
		super()
		this.state = {
			autocomplete: new InputAutocomplete(),
			from: '',
			to: '',
			radius: '',
			search: ''
		}
	}
	componentDidMount() {
		console.log('MapForm mount');
		this.originInputElement = document.getElementById('from');
		this.destinationInputElement = document.getElementById('to');
		$(document).on('keypress', function(e){
			if (e.keyCode === 13){
				console.log(e.keyCode);
				$('#formSubmitButton').click();
			}
		})
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
		let newState = {}
	    newState[name] = value
	    this.setState(newState)
		this.setState({
			from: this.originInputElement.value,
			to: this.destinationInputElement.value

		})
    }

	handleKeyPress(){
		// $('#formSubmitButton').trigger('click');

		// if ( keydown.event ) {
		// 	// inspect the keydown event and decide what to do
		// 	console.log( keydown.event.which );
		// 	if(keydown.event.which === 13){
		// 		$('#mapFormSubmit').trigger('click');
		// 	}
		// }
	}



	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.autocomplete);
		this.props.onFormSubmit({
			originId: this.state.autocomplete.originPlaceId,
			destinationId: this.state.autocomplete.destinationPlaceId,
			radius: this.refs.radius.value,
			search: this.refs.search.value
		});

		// this.setState({
		// 	from: this.state.autocomplete.originPlace.formatted_address,
		// 	to: this.state.autocomplete.destinationPlace.formatted_address
		// })

		google.maps.event.clearInstanceListeners(this.originInputElement);
		google.maps.event.clearInstanceListeners(this.destinationInputElement);
		this.triggerInputAutocomplete();
	}



	handleReset(){
		this.setState({
			from: '',
			to: '',
			radius: '',
			search: ''
		})
	}

	render() {
		return (
			<form 	id="calculateRoute"
				name="calculateRoute"
				className={style.mapForm}
				onSubmit={this.handleSubmit.bind(this)}
				onReset={this.handleReset.bind(this)}>

				<Input id="from" className={style.mapFormInput} type='text' label='Origin' hint="Enter a Location" placeholder='' name='from' value={this.state.from} onChange={this.handleChange.bind(this, 'from')} onKeyPress={this.handleKeyPress()}  icon="add_location" />
				<Input id="to" className={style.mapFormInput} type='text' label='Destination' hint="Enter a Location" placeholder='' name='to' value={this.state.to} onChange={this.handleChange.bind(this, 'to')} icon="add_location" />
				<Input id="radius" className={style.mapFormInput} ref="radius" type='text' label='Radius' hint="Distance from Route" name='radius' value={this.state.radius} onChange={this.handleChange.bind(this, 'radius')} icon="all_out" />
				<Input id="search" className={style.mapFormInput} ref="search" type='text' label='Search' hint="Concise Place Description " name='search' value={this.state.search} onChange={this.handleChange.bind(this, 'search')} icon="search" />
				<div className={style.buttonContainer}>
					<Button id="formSubmitButton" className={style.submitButtom} label='Submit' onClick={this.handleSubmit.bind(this)} flat primary />
					<Button id="formSubmitButton" className={style.submitButtom} label='Reset' onClick={this.handleReset.bind(this)} flat primary />
				</div>
				{/*<Input id="mapFormSubmit" type="submit" value="Submit" />*/}
				{/*<Input type="reset" value="Reset" />*/}
			</form>
		);
	}
}

// export default keydown( MapForm );
