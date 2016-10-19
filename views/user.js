/* global $ */ 
$(window).ready(function(){
    $(".js-login-btn").on("click",login);
   
   function login () {
    var user = new User();
    var email = $("[name='email-value']").val();
    var password = $("[name='password']").val();
    var userLogin = User.login(email, password); 
    
    user.login().done( window.location.href = "https://curs-web-razvanbran/curs27-blog-start-up/pages/articles.html")
   } 
   
   
   // mai treuie o functie care sa listeze articolele
});