import "./styles/main.scss";
import mapPin from "./images/map-pin.svg";

function initGoogleMap() {
    var mapElement = document.getElementById("js-google-map");
    if (mapElement === null) {
        throw Error("Target div for map doesn't exist.");
    }

    var position = {
        lat: 37.812700,
        lng: -122.273364,
    };

    var mapParams = {
        center: position,
        zoom: 12,
    };

    var map = new google.maps.Map(mapElement, mapParams);

    var markerParams = {
        position,
        map,
        icon: mapPin
    };

    var marker = new google.maps.Marker(markerParams);
}

window.initGoogleMap = initGoogleMap;
