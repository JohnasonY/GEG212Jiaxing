// Initialize Leaflet map
var map = L.map('nymap').setView([40.60122432391314, -74.14976230455841], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.58159752539692, -74.16488220269812]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello New York City!</b><br>This is a GameStop store.").openPopup();
