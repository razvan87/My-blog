function Articles(){
    this.models = [];
}

Articles.prototype.getArticles = function(){
    var that = this;
    return $.ajax({
            url:"https://curs-web-razvanbran.c9users.io/curs22-23-24-PHP-api/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                       var article = new Article(resp[i]);
                       that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
    });
}

Articles.prototype.delete = function(articleId){
    //Do AJAX request to URL: https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/delete?id=+articleId"
    //Method POST
    
}

Articles.prototype.add = function(){
    //Do AJAX request to URL: https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/add"
    //Method POST
    
        var title = $("#title");
        var content = $("#content");
        $.ajax({
            url:"https://curs-web-razvanbran.c9users.io/curs22-23-24-PHP-api/articles/add",
            data:{
                title:title,
                content:content,
                
            },
            type:"POST",
            success:function(){
                console.log("Bravo");
                //window.location.href("https://curs-web-razvanbran.c9users.io/curs22-23-24-PHP-api/articleadmin.html")
            },
            error:function(){
                console.log("Error, adding an article");
            }
        })
        
        
    //      $(".js-save-article-btn").on("click",function(){
    //     var title = $("[name='title']").val();
    //     var content = $("[name='content']").val();
        
    //     var data = {
    //         title:title,
    //         content:content,
            
    //     }
        
    //     var dataStr = JSON.stringify(data);
    //     var req = new XMLHttpRequest();
    //     req.open("POST","https://curs-web-razvanbran.c9users.io/curs22-23-24-PHP-api/articles/add");
    //     req.addEventListener("load",onCommentAdded);
        
    //     req.send(dataStr);
        
    //     function onCommentAdded(){
    //     console.log("MErge");
    // }
    // });
    
}
