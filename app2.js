var db = firebase.database().ref('/user/')

const getData = () =>{

    var email = document.getElementById('email')
    var pass = document.getElementById('password')
    var loginSuccessful=false
    db.on('value', function (data) {
            for (var key in data.val()) {
                var user = data.val()[key];
                user.key = key;
         console.log(user)
                 console.log(user.email)

                    if(user.email==email.value && user.password == pass.value ){
                            window.location = 'todo.html?'+key
                            loginSuccessful=true
                            break

                }else if(email.value == ''){
                    alert('Plz enter email')
                    break
                }
                else if(pass.value == ''){
                    alert('Plz enter password')
                    break
                }
            }
            if(!loginSuccessful){
                alert('Plz enter coreect email & password')
            }

        })

}

const clicked = () =>{
    if(event.keyCode == 13){
        document.getElementById('loginBtn').click()
    }
}
