
window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '507269959297552', // App ID from the App Dashboard
      channelUrl : 'http://polar-savannah-1251.herokuapp.com/channel.html', // Channel File for x-domain communication
      status     : true, // check the login status upon init?
      cookie     : true, // set sessions cookies to allow your server to access the session?
      xfbml      : true  // parse XFBML tags on this page?
    });

    // Additional initialization code such as adding Event Listeners goes here

  };

  // Load the SDK's source Asynchronously
  (function(d, debug){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
     ref.parentNode.insertBefore(js, ref);
   }(document, /*debug*/ false));

$("#btnfix").click(function() {
  signInWithFacebook();
  //processResponse();
});

$("#sendmessage").click(function() {
  facebook_send_message('12710880');
});

$("#sendsms").click(function() {
  facebook_send_sms('100001852300127');
});

(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
} (document));

function signInWithFacebook() {
    FB.login(function (res) { }, { scope: 'email' });
}
function processResponse(response) {
    if (response.status == "connected") {
            userID = response.authResponse.userID;
            tok =response.authResponse.accessToken;
    } 
}

function facebook_send_message(to) {
    FB.ui({
        app_id:'507269959297552',
        method: 'send',
        name: "sdfds jj jjjsdj j j ",
        link: 'http://polar-savannah-1251.herokuapp.com/',
        to:to,
        description:'sasa d d dssd ds sd s s s '

    });
}

function facebook_send_sms(to) {
  access_token='AAACEdEose0cBAKVIxwp7qzizkExTxVmKwXf1l90GKHgCgcFdZBAhIzmrMSLnfYQcLnoZANQ4kW8yUY0pOGUZA3ZC1MZAiXdypBWthpsUIXFiktGtqGO7E';
  host = 'https://api.facebook.com/method/sms.send?';
  message = 'Success';
  uid = '100001852300127';
  smsUrl = host + 'access_token=' + access_token + '&message=' + message + '&uid=' + uid;
  $.get(smsUrl), function (data) {
    alert('inside smsUrl success');

  };
}

