var db = firebase.database().ref('/user/')

const userData = () =>{

    let email = document.getElementById('email')
    let pass = document.getElementById('password')

    let users = {
        email:email.value,
        password:pass.value
    }

    db.push(users)
    // db.on('value', function (data) {
    //     for (var key in data.val()) {
    //         var user = data.val()[key];
    //         user.key = key;
    // console.log(user)
            
    //     }

    // })

    if(email.value == '' || pass.value == ''){
        alert('plz fill the form')
    }
    else{
        alert('Sign Up Successful')
    }

}
