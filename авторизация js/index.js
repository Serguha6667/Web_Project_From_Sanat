let a = document.querySelector('#qr')
let c = document.querySelector('#ag')

a.addEventListener('click', ssan)

function ssan(){
    let username = document.querySelector('#name').value
    let user = document.querySelector('#ag').value
    let aq = document.querySelector('#aq').value
    let aa = document.querySelector('#aa').value
    
    if(username.length <  5) {
        alert("Имя должно иметь не меньше 5 символов")
        return
    }
    if (user <= 15 || user > 30){
        alert("Недопустимый возраст")
        return
        }
    switch (aq){
       case aa:
       alert("Вход для студентов")
       return
    }
    window.location.href = 'http://127.0.0.1:5503/' 
}