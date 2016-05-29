import React, { Component } from 'react';
import MapForm from './MapForm.jsx';
import GMap from './GMap';
import FindRoutes from '../util/FindRoutes.js';
import style from './style';

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

	componentDidMount() {

	}

	handleFormSubmit(input){
		console.log("handleFormSubmit");
		this.setState({
			originId: input.originId,
			destinationId: input.destinationId,
			radius: input.radius,
			search: input.search
		});
		var route = new FindRoutes({
			originPlaceId: input.originId,
			destinationPlaceId: input.destinationId,
			directionsDisplay: directionsDisplay,
			directionsService: directionsService,
			travel_mode: google.maps.TravelMode.DRIVING,
			search: input.search
		});
		route.execute();

	}
	handleMapRender(map){
		console.log("handle map render");
		this.setState({
			map:map
		})
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);
		directionsService = new google.maps.DirectionsService();
	}
	render() {
		return (
			<div className={style.mapControl}>
				<MapForm className={style.calculateRoute}
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
