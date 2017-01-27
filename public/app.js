'use strict';

function run($rootScope, $transitions, $state){
  const config = {
    apiKey: "AIzaSyCk9uz2j3CrOqPaRQacmIKEKxF0JaGV0xs",
    authDomain: "hello-ppm.firebaseapp.com",
    databaseURL: "https://hello-ppm.firebaseio.com",
    storageBucket: "hello-ppm.appspot.com",
    messagingSenderId: "595677741726"
  };
  firebase.initializeApp(config);
  
  $transitions.onError({}, ($transition$) => {
    var toState = $transition$.to().name;
    $state.go("login");
  });
};

function config($stateProvider, $urlRouterProvider){
  const states = [
    {
      name: 'home',
      url: '/',
      component: 'homeComponent',
      resolve: {
        "user": ($auth) => {          
          return $auth.$requireSignIn();
        }
      }
    },
    {
      name: 'login',
      url: '/login',
      component: 'loginComponent'
    },
    {
      name: 'militants',
      url: '/militants',
      component: 'militantsComponent',
      resolve: {
        "user": ($auth) => {          
          return $auth.$requireSignIn();
        }
      }
    }
  ];

  $urlRouterProvider.when('', '/');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
  $urlRouterProvider.otherwise('/');
};

function auth($firebaseAuth) {
  return $firebaseAuth();
};

angular.module('ppm', ['ui.router', 'ngRoute', 'angularCSS', 'firebase', 'ppm.components'])
.run(run)
.config(config)
.factory('$auth', auth);