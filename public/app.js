'use strict';

function run(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCk9uz2j3CrOqPaRQacmIKEKxF0JaGV0xs",
    authDomain: "hello-ppm.firebaseapp.com",
    databaseURL: "https://hello-ppm.firebaseio.com",
    storageBucket: "hello-ppm.appspot.com",
    messagingSenderId: "595677741726"
  };
  firebase.initializeApp(config);
};

function config($routeProvider){
  $routeProvider.when('/login', {
    template: '<inbox mails="$resolve.mails"></inbox>',
    resolve: {mails: function(Mails) { return Mails.fetch(); }}
  });
};

angular.module('ppm', ['ppm.components'])
.run(run)
.config(config);