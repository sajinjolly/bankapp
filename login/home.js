usern=localStorage.getItem('username')
h1.innerHTML='Welcome ${usern}'

function logout(){
    localStorage.removeItem('username')
    window.location="login.html"

    // remove item 
    // storage remove cheyen
}