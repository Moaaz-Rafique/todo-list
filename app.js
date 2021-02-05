function setPost() {
    var inp = document.getElementById("inj")
    var main = document.getElementById("main")
    var div = document.createElement("div")
    if (inp.value === "") {
        return
    }
    main.appendChild(div)
    var todoText = document.createElement("input")
    todoText.setAttribute("class","todoTxt")
    var flag = true;
    todoText.disabled = flag;
    var closeButton = document.createElement("button")
    var editButton = document.createElement("button")
    closeButton.setAttribute("class", "btn")
    editButton.setAttribute("class", "btn")
    editButton.innerHTML = "Edit"

    closeButton.onclick = function () {
        div.remove()
    }

    closeButton.innerHTML = "Delete"
    div.appendChild(todoText)
    div.setAttribute("class", 'card')    
    editButton.onclick = function () {
        if (flag) {
            editButton.innerHTML = "Update"
            flag = false
            todoText.disabled = flag  
            todoText.focus()        
        }
        else{
            editButton.innerHTML = "Edit"
            flag = true
            todoText.disabled = flag            
        }

    }
    div.appendChild(closeButton)
    div.appendChild(editButton)
    todoText.value=inp.value

}
function delAll() {
    var main = document.getElementById("main")
    main.innerHTML = ""
}
