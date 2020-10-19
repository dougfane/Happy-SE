// create map
const map = L.map('mapid').setView([-10.9684256,-37.0833271], 14);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`Oratório de Bebé
<a href='orphanage.html?id=1'class='choose-orphanages'>
    <img src='./public/images/arrow-white.svg'>
</a>`)

//create and add marker
L.marker([-10.9684256,-37.0833271], {icon})
    .addTo(map)
    .bindPopup(popup);