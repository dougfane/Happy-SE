const map = L.map('mapid').setView([-10.9684256,-37.0833271], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-10.9684256,-37.0833271]).addTo(map)
    .bindPopup('Você está aqui.')
    .openPopup();