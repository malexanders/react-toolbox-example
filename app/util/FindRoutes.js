import React, { Component } from 'react';


export default class FindRoutes{

	constructor(config) {
		this.originPlaceId = config.originPlaceId;
		this.destinationPlaceId = config.destinationPlaceId;
		this.directionsDisplay = config.directionsDisplay;
		this.directionsService = config.directionsService;
		this.travelMode = config.travel_mode;
		this.response;
	}

	grabFirstRoute() {
		return this.response.routes[0].overview_path; // first route from directions service response
	}

	execute(){
		console.log(this);
		if (!this.originPlaceId || !this.destinationPlaceId) {
			return;
		}
		var me = this;
		var p1 = new Promise(function(resolve, reject) {
			me.directionsService.route({
				origin: {'placeId': me.originPlaceId},
				destination: {'placeId': me.destinationPlaceId},
				travelMode: me.travelMode
			}, function(response, status){
				if (status === google.maps.DirectionsStatus.OK) {
					me.response = response;
					me.directionsDisplay.setDirections(response);
					resolve(response);
				} else {
					window.alert('Directions config failed due to ' + status);
				}
			});
		});
		return p1
	}
}
