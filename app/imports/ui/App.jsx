import React, { Component } from 'react';
import MapForm from './MapForm.jsx';
import GMap from './GMap';
import FindRoutes from '../util/FindRoutes.js'

var directionsService,
			directionsDisplay,
			DirectionsRenderer,
			routeBoxer,
			placesService

export default class MapControl extends React.Component {
 	constructor(props){
		super(props);
		this.state = {
			originId: '',
			destinationId: '',
			radius: 1,
			search: '',
			map: {},
			travelMode: google.maps.TravelMode.DRIVING
		}
	}
	handleFormSubmit(input){
		console.log("handleFormSubmit");
		this.setState({
					originId: input.originId,
					destinationId: input.destinationId,
					radius: input.radius,
					search: input.search
				});
	}
	handleMapRender(map){
		console.log("handle map render");
		this.setState({
			map:map
		})
	}
	render() {
		return (
			<div className="MapControl">
				<h1>Search</h1>
				<MapForm
					onFormSubmit={this.handleFormSubmit.bind(this)}
					map={this.state.map}
				/>
				<GMap
					setMapState={this.handleMapRender.bind(this)}
				/>
			</div>
		);
	}
}
