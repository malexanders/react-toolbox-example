import React, { Component, PropTypes } from 'react';
import style from './style';

var DEFAULT_LOCATION

export default class GMap extends Component {
	componentDidMount() {
		console.log("GMap mount")
		DEFAULT_LOCATION =  new google.maps.LatLng(0, 0);
		this.renderMap({
			center: DEFAULT_LOCATION,
			zoom: 1
		})
	}

	renderMap(mapOptions) {
		this.map = new google.maps.Map(this.refs.mapElement, mapOptions);
		this.props.setMapState(this.map);
	}
	//
	// 	// var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: this.map});
	// },
	// componentWillReceiveProps: function(){
	// 	alert("GMap received form input!")
	// },
	// renderMap: function(mapOptions){

	// },
	render() {
		return (
			<div ref='mapElement' className={style.gmap}></div>
		)
	}
}


// ReactDOM.render(
// 	<MapControl/>,
// 	document.getElementById('content')
// );
