var map;
function initialize(){
    var mapOptions={
        zoom:12,
        center:new google.maps.LatLng(48.858437,2.294494)
    };
    map=new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
}
google.maps.event.addDomListener(window,'load',initialize);