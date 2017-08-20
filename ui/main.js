var button=document.getElementById('counter');
button.onclick=function(){
    //CREATE A REQUEST TO THE COUNTER END POINT
    var request=new XMLhttprequest();
    // capturing and storinng the response in a variable
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHtml=counter.toString();
            }
        }
    };
    request.open('GET','http://kvenkatvineeth.imad.hasura-app.io/counter', true);
    request.send(null);
} ;