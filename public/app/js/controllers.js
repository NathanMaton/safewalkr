'use strict'; 

/* Controllers */


function MyCtrl1($scope, $http, $route, $routeParams, $location) {
  var user_lat;
  var user_lon;
  var map;
  if(typeof(Storage)!=="undefined")
  {
  // Yes! localStorage and sessionStorage support!
  // Some code.....
  }
  else
  {
  // Sorry! No web storage support..
  }

  
  var infowindow = new google.maps.InfoWindow();
  console.log(infowindow);
  //improved marker event closing (but it doesn't work as written below)
  //google.maps.event.addListener(map, 'click', function() {
    //infowindow.close();
  //});
  
  function geocode( address , cb)
  {
    //takes in an address and turns it into a geocoded position
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { address : address }, function( results, status ) 
    {
      var position = results[0].geometry.location;
      return cb(position);
    });
  };
  window.geocode = geocode;

  function setMapAddressLatLon(position)
  {    
    var options = {
      zoom: 15,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map( document.getElementById( 'map' ), options );
  };

  function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }

  function showPosition(position)
  {
    user_lat = position.coords.latitude;
    user_lon = position.coords.longitude;
    position = new google.maps.LatLng(user_lat, user_lon),
    setMapAddressLatLon(position);
    
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        clickable: true,
        cursor: "Current Location Cursor",
        title:"Current Location"
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('title');
      infowindow.open(map, marker);
    });
  }

  $scope.findWalkr = function() {
    //window.location.href = '';
    //reload map with markers for values and friends
    var pos2 = geocode(document.getElementById('toloc').value, function(pos2){
      setMapAddressLatLon(pos2);
      var marker = new google.maps.Marker({
      position: pos2,
      clickable: true,
      map: map,
      cursor: "Current Location Cursor",
      title:"Current Location"
      });
      var data = {
        'FromLat' : 'testlat',
        'FromLon' : 'testlong',
        'ToLon' :  'testtolong',
        'MeetingTime' : 'testmeetingtime',
        'UserID' : 'testid'
      }
     // $.post('http://54.243.159.110/requests/post', data, function(data) {
      //  alert('post worked');
      //});
    });
    
  };
  
  $scope.testdata = [
    'a', //fibbonacci series
    'b',
    'c',
    'd'
  ];

  getLocation();
};
MyCtrl1.$inject = ['$scope', '$http', '$route', '$routeParams', '$location'];


function MyCtrl2($scope, $http, $route, $routeParams, $location) {
  
  
  $scope.postRequest = function (){
    var fromloc = document.getElementById('fromloc').value;
    var toloc = document.getElementById('toloc').value;
    var meettime = document.getElementById('time').value;
    var post_data = {};

    if (fromloc && toloc && meettime){  
        post_data['FromLoc'] = fromloc;
        post_data['ToLoc'] = fromloc;
        post_data['MeetingTime'] = fromloc;
        post_data['UserID'] = 'Admin';
    }
    else{
      alert('please fill out all fields');
    }
  }
    $.post('/requests', post_data, function(data) {
        console.log('inside success func');
        window.location = '#/respond/admin';
      });
  //the object is FromLoc, ToLoc, MeetingTime, UserID
};
MyCtrl2.$inject = ['$scope', '$http', '$route', '$routeParams', '$location'];
