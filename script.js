
  //count number of li in our list
   var x = document.getElementById("item").childElementCount;
   document.getElementById("task").innerHTML = "there are "+ x +" tasks to do" ;
   function addItem(){
     if(document.getElementById("newTodo").value.length != 0){
     var input=document.getElementById("newTodo");
     let ul = document.getElementById("item");
     var li = document.createElement("li");

     ul.appendChild(li);
     var button1 = document.createElement("button");
     var button2 = document.createElement("button");
     button1.innerHTML = "<div>Delete</div>";
     button1.setAttribute("id", "btn1");
     button1.onclick=function(){deleteOne(this);};
     button2.innerHTML = "<div>undone</div>";
     button2.setAttribute("id", "btn2");
     button2.onclick=function(){isDone(this);};
     li.innerHTML="<p>"+input.value+"</p>";
     li.appendChild(button1);
     li.appendChild(button2);
     var x = document.getElementById("item").childElementCount;
     document.getElementById("task").innerHTML = "there are "+ x +" tasks to do" ;
   }
   }
   function deleteAll(){
     var ul = document.getElementById("item");
     ul.innerHTML = "";
     var x = document.getElementById("item").childElementCount;
     document.getElementById("task").innerHTML = "there are "+ x +" tasks to do" ;
   }
   function deleteOne(elem){
    // var m=document.getElementById("btn1").li;
    // m.remove();
    elem.parentNode.remove(elem);
    var x = document.getElementById("item").childElementCount;
    document.getElementById("task").innerHTML = "there are "+ x +" tasks to do" ;
   }
   function isDone(elem){
       if(elem.innerHTML=="done"){
         elem.innerHTML="undone";
       }
       else{
         elem.innerHTML="done";
       }
   }
