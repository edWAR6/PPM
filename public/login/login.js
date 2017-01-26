function loginController($firebaseAuth){
  const ref = firebase.database().ref();
  this.authentication = $firebaseAuth();
  this.email = '';
  this.password = '';

  this.signIn = function(){
    this.authentication.$signInWithEmailAndPassword(this.email, this.password).then(function(firebaseUser){
      console.log("Signed in as:", firebaseUser.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
};

angular.module('ppm.components')
.component('loginComponent', {    
    controller: loginController,
    templateUrl: 'login/login.html'
});