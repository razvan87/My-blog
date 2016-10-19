$(window).ready(function(){
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    
    var articlesDef = articles.getArticles();
    articlesDef.done(listComments);
    
    
    function listComments(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleHtml = "<li data-article-id="+articleModels[i].id+"><h3>"+articleModels[i].title+"</h3>"+
                "<div>"+articleModels[i].content+"</div>"+
                "<div class='js-article-comments'></div>"+
                "<textarea class='comment-text'></textarea>"+
                "<button id='js-more-btn'>MORE</button>"+
                "</li>";
            articlesContainer.append(articleHtml);
        }
    }
    
});