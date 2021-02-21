var db = firebase.database().ref('/posts/');
getAllPosts()
function setPost() {
    var inp = document.getElementById("inj")
    var inpText = inp.value
    addPostToList(addToDataBase(inpText),inpText)
    
}
function addPostToList(id,inpText) {
    var main = document.getElementById("main")
    var div = document.createElement("div")
    div.setAttribute("id",id)
    if (inpText === "") {
        return
    }
    main.appendChild(div)
    var todoText = document.createElement("input")
    todoText.setAttribute("class", "todoTxt")
    var flag = true;
    todoText.disabled = flag;
    var closeButton = document.createElement("button")
    var editButton = document.createElement("button")
    closeButton.setAttribute("class", "btn")
    editButton.setAttribute("class", "btn")
    editButton.innerHTML = "Edit"

    closeButton.onclick = function () {
        div.remove()
        db.child(id).remove()
    }

    closeButton.innerHTML = "Delete"
    div.appendChild(todoText)
    div.setAttribute("class", 'card')
    var prev = ""
    editButton.onclick = function () {
        if (flag) {
            prev = todoText.value
            editButton.innerHTML = "Update"
            flag = false
            todoText.disabled = flag
            todoText.focus()
        }
        else {
            if (todoText.value === "") {
                todoText.value = prev
            }
            editButton.innerHTML = "Edit"
            db.child(id).set({postData: todoText.value})
            flag = true
            todoText.disabled = flag
        }

    }
    div.appendChild(closeButton)
    div.appendChild(editButton)
    todoText.value = inpText

}
function delAll() {
    var main = document.getElementById("main")
    main.innerHTML = ""
    db.remove()
}
function addToDataBase(inpText){
    return (db.push({
        postData: inpText
    }).key)

}
function getAllPosts(){
    firebase.database().ref('/posts/').once('value',function(data){
        for(var d in data.val()){
            addPostToList(d,data.val()[d].postData)
        }
 })
}