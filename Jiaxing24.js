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

// Load the GeoJSON line file
fetch('https://JohnasonY.github.io/GEG212Jiaxing/Jiaxing_daytimeRoute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });

// Add a marker to the map for New York City
var shakespeareGarden = L.marker([40.77975447485025, -73.96988340219168]).addTo(map);

// Add a popup to the marker
shakespeareGarden.bindPopup(`
    <b>Shakespear Garden</b><br>Impressive garden in Central Park<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/ShakespeareGarden.jpg" style="width: 100px; height: auto;">
`).openPopup();


// Add a marker to the map for New York City
var turtlePond = L.marker([40.779590240437635, -73.9680347900087]).addTo(map);

// Add a popup to the marker
turtlePond.bindPopup(`
    <b>Turtle Pond</b><br>Be careful! Turtles inside!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/turtlePond.jpg" style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var MetropolitanMuseum = L.marker([40.779502442913945, -73.9632226876956]).addTo(map);

// Add a popup to the marker
MetropolitanMuseum.bindPopup(`
    <b>The Metropolitan Museum of Art</b><br>Go visit! Free for NYS resident!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/MetropolitanMuseum.jpg" style="width: 100px; height: auto;">
`).openPopup();


// Add a marker to the map for New York City
var DelacorteTheater = L.marker([40.780288455109165, -73.96879867224547]).addTo(map);

// Add a popup to the marker
DelacorteTheater.bindPopup(`
    <b>Delacorte Theater</b><br>Free summertime performances of Shakespeare!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/DelacorteTheater.jpg" style="width: 100px; height: auto;">
`).openPopup();




// Load the GeoJSON line file
fetch('https://JohnasonY.github.io/GEG212Jiaxing/Jiaxing_eveningRoute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'red', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// Add a marker to the map for New York City
var BrooklynBridgeParkBasketballCourts = L.marker([40.69947203247762, -73.99875104097964]).addTo(map);

// Add a popup to the marker
BrooklynBridgeParkBasketballCourts.bindPopup(`
    <b>Brooklyn Bridge Park Basketball Courts</b><br>Meet your friends with basketball!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/BrooklynBridgeParkBasketballCourts.jpg" style="width: 100px; height: auto;">
`).openPopup();


// Add a marker to the map for New York City
var BrooklynBridgePark = L.marker([40.70228846153691, -73.99643326731356]).addTo(map);

// Add a popup to the marker
BrooklynBridgePark.bindPopup(`
    <b>Brooklyn Bridge Park</b><br>Wonderful view to enjoy evening Brooklyn bridge!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/BrooklynBridgePark.jpg" style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var Pier3Plaza = L.marker([40.69805460525363, -73.99968349015637]).addTo(map);

// Add a popup to the marker
Pier3Plaza.bindPopup(`
    <b>Pier 3 Plaza</b><br>A large lawn for Walking your dog after dinner!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/Pier3Plaza.jpg" style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var Pier4Beach = L.marker([40.69664531693869, -73.99933055409025]).addTo(map);

// Add a popup to the marker
Pier4Beach.bindPopup(`
    <b>Pier 4 Beach</b><br>A good place for sea-hunting in the afternoon!<br>
    <img src="https://JohnasonY.github.io/GEG212Jiaxing/images/Pier4Beach.jpg" style="width: 100px; height: auto;">
`).openPopup();


// Load the GeoJSON polygon file
fetch('https://JohnasonY.github.io/GEG212Jiaxing/eveningRouteFootprints.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// Load the GeoJSON polygon file
fetch('https://JohnasonY.github.io/GEG212Jiaxing/daytimeRouteFootprints.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});


