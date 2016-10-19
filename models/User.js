/* global $ */
function User(options){
    // this.email = options.email;
    // this.name = options.name
    // this.id = options.id;
}

User.prototype.login = function(email, password){
    //Do an AJAX req to https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/update
    
     
    
        var ajaxUser = {
            url:"https://curs-web-razvanbran.c9users.io/curs22-23-24-PHP-api/login",
            type:"POST",
            dataType:"json",
            
            data: {
                email:email,
                password:password
            }, 
            
            success:function(resp){
              //window.currentUser = resp;
                console.log("Bravo esti logat!")
                
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            },
            complete:function(){
                console.log("AJAX Req has completed");
            }
        }
        return $.ajax(ajaxUser);
                
            
    }
