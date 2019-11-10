// Variables y objetos globales.
var mapa = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	var longitud = -56.8909129;
	var latitud = -24.0061407;
	var zoom = 6;

	mapa =  L.map('mapa').setView([latitud, longitud], zoom);

	mapa.scrollWheelZoom.disable();

	// Humanitarian style.
	L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
	}).addTo(mapa);
}