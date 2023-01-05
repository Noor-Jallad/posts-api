var httpRequest=new XMLHttpRequest();
httpRequest.open("get","https://jsonplaceholder.typicode.com/posts");
httpRequest.send();
var posts=[];
httpRequest.addEventListener("readystatechange",function(){
    if(httpRequest.readyState==4){
posts=JSON.parse(httpRequest.response);
    }
    displayData();
}  
);

function displayData()
{
    var data=``;
    for(var i=0;i<posts.length;i++)
    {
        data+=`
        <div class="col-md-3">
        <div class="post">
            <h2>${posts[i].title}</h2>
            <p>${posts[i].body}</p>
        </div>
    </div>
        `
    }
    document.getElementById("postsRow").innerHTML=data;
}    

