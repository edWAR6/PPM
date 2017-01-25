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

function config($stateProvider, $urlRouterProvider){
  const states = [
    {
      name: 'home',
      url: '/',
      component: 'homeComponent'
    },
    {
      name: 'login',
      url: '/login',
      component: 'loginComponent'
    },
    {
      name: 'militants',
      url: '/militants',
      component: 'militantsComponent'
    }
  ];

  $urlRouterProvider.when('', '/');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
  $urlRouterProvider.otherwise('/');
};

angular.module('ppm', ['ui.router', 'ngRoute', 'firebase', 'ppm.components'])
.run(run)
.config(config);