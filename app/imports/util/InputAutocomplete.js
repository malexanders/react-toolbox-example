export default class InputAutocomplete{
	// constructor(){
		// this.originPlace;
		// this.originPlaceId;
		// this.destinationPlace;
		// this.destinationPlaceId;
		// console.log(this);
	// }

	// getOriginPlaceId(originInputElement, map){
	// 	console.log("stuff");
	// 	var me = this;
	// 	var originAutocomplete = new google.maps.places.Autocomplete(originInputElement);
	// 	// originAutocomplete.bindTo('bounds', map);
	// 	google.maps.event.addListenerOnce(originAutocomplete, 'place_changed', function(){
	// 		var place = originAutocomplete.getPlace();
	// 		if (!place.geometry) {
	// 			window.alert("Autocomplete's returned place contains no geometry");
	// 			return;
	// 		}
	// 		// MyGlobal.zoom(map, place);
	// 		// console.log(this);
	// 		me.originPlace = place;
	// 		me.originPlaceId = place.place_id;
	// 	});
	//
	// }
	// getDestinationPlaceId(destinationInputElement, map){
	// 	var me = this;
	// 	var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInputElement);
	// 	// destinationAutocomplete.bindTo('bounds', map);
	// 	google.maps.event.addListenerOnce(destinationAutocomplete, 'place_changed', function(){
	// 	// destinationAutocomplete.addListener('place_changed', function() {
	// 		var place = destinationAutocomplete.getPlace();
	// 		if (!place.geometry) {
	// 			window.alert("Autocomplete's returned place contains no geometry");
	// 			return;
	// 		}
	// 		// If the place has a geometry, store its place ID and route if we have
	// 		// the other place ID
	// 		// MyGlobal.zoom(map, place);
	// 		me.destinationPlace = place;
	// 		me.destinationPlaceId = place.place_id;
	// 	});
	// }

	run(originInputElement, destinationInputElement, map) {
		var me = this;
		var originAutocomplete = new google.maps.places.Autocomplete(originInputElement);
		originAutocomplete.bindTo('bounds', map);
		// originAutocomplete.remove('place_changed');
		google.maps.event.addListenerOnce(originAutocomplete, 'place_changed', function(){
			var place = originAutocomplete.getPlace();
			if (!place.geometry) {
				window.alert("Autocomplete's returned place contains no geometry");
				// Success!!!
				// google.maps.event.clearInstanceListeners(originInputElement);
				return;
			}
			// MyGlobal.zoom(map, place);
			me.originPlace = place;
			me.originPlaceId = place.place_id;
			// originAutocomplete.unbindAll();
		})

		var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInputElement);

		destinationAutocomplete.bindTo('bounds', map);
		// destinationAutocomplete.addListener('place_changed', function() {
		google.maps.event.addListenerOnce(destinationAutocomplete, 'place_changed', function(){
			var place = destinationAutocomplete.getPlace();
			if (!place.geometry) {
				window.alert("Autocomplete's returned place contains no geometry");
				// Success!!!

				// google.maps.event.clearInstanceListeners(destinationInputElement);
				return;
			}
			// If the place has a geometry, store its place ID and route if we have
			// the other place ID
			// MyGlobal.zoom(map, place);
			me.destinationPlace = place;
			me.destinationPlaceId = place.place_id;
			// destinationAutocomplete.unbindAll();
		});
	}


	// run(originInputElement, destinationInputElement, map) {
	// 	var me = this;
	// 	var originAutocomplete = new google.maps.places.Autocomplete(originInputElement);
	// 	originAutocomplete.bindTo('bounds', map);
	// 	originAutocomplete.addListener('place_changed', function() {
	// 		var place = originAutocomplete.getPlace();
	// 		if (!place.geometry) {
	// 			window.alert("Autocomplete's returned place contains no geometry");
	// 			return;
	// 		}
	// 		// MyGlobal.zoom(map, place);
	// 		// console.log(this);
	// 		me.originPlace = place;
	// 		me.originPlaceId = place.place_id;
	// 	});
	//
	// 	var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInputElement);
	//
	// 	destinationAutocomplete.bindTo('bounds', map);
	// 	destinationAutocomplete.addListener('place_changed', function() {
	// 		var place = destinationAutocomplete.getPlace();
	// 		if (!place.geometry) {
	// 			window.alert("Autocomplete's returned place contains no geometry");
	// 			return;
	// 		}
	// 		// If the place has a geometry, store its place ID and route if we have
	// 		// the other place ID
	// 		// MyGlobal.zoom(map, place);
	// 		me.destinationPlace = place;
	// 		me.destinationPlaceId = place.place_id;
	// 	});
	// }
}
