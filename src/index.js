import "./styles/main.scss";
import mapPin from "./images/map-pin.svg";

function initGoogleMap() {
    var mapElement = document.getElementById("js-google-map");
    if (mapElement === null) {
        throw Error("Target div for map doesn't exist.");
    }

    var position = {
        lat: 37.830856,
        lng: -122.2493,
    };

    var mapParams = {
        center: position,
        zoom: 13,
    };

    var map = new google.maps.Map(mapElement, mapParams);

    var markerParams = {
        position: position,
        map: map,
        icon: mapPin
    };

    var marker = new google.maps.Marker(markerParams);
}

window.initGoogleMap = initGoogleMap;
