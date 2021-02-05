function setPost(){
    var inp = document.getElementById("inj")
    var main = document.getElementById("main")
    var div= document.createElement("div")
   if(inp.value===""){
       return
   }
    main.appendChild(div)
    var h2= document.createElement("h2")
    var closeButton= document.createElement("button")
    var editButton= document.createElement("button")
    closeButton.setAttribute("class","btn")
    editButton.setAttribute("class","btn")
    editButton.innerHTML="Edit"
    
    closeButton.onclick=function(){
        div.remove()
    }
    
    closeButton.innerHTML="Delete"
    div.appendChild(h2)
    
    div.setAttribute("class",'card')
    var h2Text= document.createTextNode(inp.value)
    editButton.onclick=function(){   
        var newtxt=prompt("Enter your edit")
        if(newtxt!=""){
            
        h2.removeChild(h2Text)       
        h2Text= document.createTextNode(newtxt)
        h2.appendChild(h2Text)
        }
    }    
    div.appendChild(closeButton)
    div.appendChild(editButton)
    h2.appendChild(h2Text)
   
}
function delAll(){
    var main = document.getElementById("main")
    main.innerHTML=""
}