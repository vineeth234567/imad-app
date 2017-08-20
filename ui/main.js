var button=document.getElementById('counter');
button.onclick=function(){
    //CREATE A REQUEST TO THE COUNTER END POINT
    var request=new XMLhttpRequest();
    // capturing and storinng the response in a variable
    request.onreadystatechange=function(){
        if(request.onreadystate===XMLhttpRequest.DONE){
            //TAKE SOME ACTION
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHtml=counter.toString();
            }
        }
    };
    request.open('GET','http://kvenkatvineeth.imad.hasura-app.io/counter', true);
    request.send(null);
} ;
 //submit name
 var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit-btn');
submit.onclick=function(){
    
var names=['name1','names2','names3'];
var list='';
for(var i=0;i<names.length;i++){
    list+='<li>'+names[i]+'</li>';
 
}
   var ul=document.getElementById('namelist');
    ul.innerhtml=list;
    
};