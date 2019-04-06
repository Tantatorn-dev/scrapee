var GoogleMapsLoader = require("google-maps");

GoogleMapsLoader.KEY = "AIzaSyCJCDkJmywl1Z23uMFQGo844x0Vrkk57h0";
GoogleMapsLoader.LIBRARIES = ["drawing"];
GoogleMapsLoader.VERSION = "weekly";

export default GoogleMapsLoader;

import MarkerClusterer from "./markerclusterer";
import createGeolocationMarker from "./geolocationmarker";

export { MarkerClusterer, createGeolocationMarker };
