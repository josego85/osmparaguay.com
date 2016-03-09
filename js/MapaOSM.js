// Variables y Objetos globales.
var v_mapa = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	var v_longitud = -56.8909129;
	var v_latitud = -24.0061407;
	var v_zoom = 6;

	v_mapa =  L.map('mapa').setView([v_latitud, v_longitud], v_zoom);

	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
	}).addTo(v_mapa);
}
