function loginController($auth, $state){
  const login = this;
  login.email = '';
  login.password = '';
  login.errorMessage = '';

  login.signIn = function(){
    $auth.$signInWithEmailAndPassword(this.email, this.password).then(function(firebaseUser){
      console.log("Signed in as:", firebaseUser.uid);
      $state.go("home");
    }).catch(function(error) {
      console.error("Authentication failed:", error);
      if(error.code == 'auth/invalid-email'){
        login.errorMessage = 'Usuario o contraseña incorrecta.';
      }else{
        login.errorMessage = 'Ocurrió un error al intentar ingresar, intente de nuevo.';
      };      
      login_error.open();
    });
  };
};

angular.module('ppm.components')
.component('loginComponent', {    
    controller: loginController,
    templateUrl: 'login/login.html'
});