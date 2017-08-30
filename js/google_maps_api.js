(function () {
    "use strict";

    var zoomLinks = document.getElementsByClassName("zoom-link");

    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 0,
            lng: 0,
        },
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
    });

    var geocoder = new google.maps.Geocoder();
    var houseAddress = "1005 Cairo Dr., Corpus Christi, TX 78412";
    var myHouse = null;
    var myHouseMarker = null;
    var myHouseMarkerInfo = null;

    function setNewZoom(event) {
        event.preventDefault();
        var newZoomLevel = Number(this.getAttribute("data-zoom-level"));
        map.setZoom(newZoomLevel);
    }

    for(var i = 0; i < zoomLinks.length; i++) {
        zoomLinks[i].addEventListener("click", setNewZoom);
    }

    geocoder.geocode({address: houseAddress,}, function (results, status) {
        if(status === google.maps.GeocoderStatus.OK) {
            if (results.length > 0) {
                myHouse = new google.maps.LatLng(results[0].geometry.location.lat(),  results[0].geometry.location.lng());
                map.setCenter(myHouse);

                myHouseMarker = new google.maps.Marker({
                    position: myHouse,
                    map: map,
                    animation: google.maps.Animation.DROP,
                });

                myHouseMarker.addListener("click", function () {
                    myHouseMarkerInfo.open(map, myHouseMarker);
                });

                myHouseMarkerInfo = new google.maps.InfoWindow({
                    content: "Mom's House for Spaghetti and Meatballs",
                });

            } else {
                alert("We apologize, but we could not find any results for " + houseAddress);
            }
        } else {
            alert("Geocoding not successful - Status: " + status);
        }
    });
})();