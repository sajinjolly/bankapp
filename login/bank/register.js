function registerhere(){
    window.location='register.html '
}
function register(){
    //fetch datas
    username=unameid.value
    accnum=acnumid.value
    pin=psid.value
    balance=2000
    //cerate object
    acdetails={username,accnum,pin,balance}
    //key
    if(accnum in localStorage){
        alert("ac already exist")
   window.location='index.html'
    }
    else{
    localStorage.setItem(accnum,JSON.stringify(acdetails))
    alert("registeration successfull")
window.location='index.html'
}
}
function login(){
    //fetch
    accnum=acid.value
    pin=pid.value

    if(accnum in localStorage){
acdetails=JSON.parse(localStorage.getItem(accnum))
if(pin==acdetails.pin){
    alert('login sucessfull')
    window.location='home.html'
}
else{
    alert("Pin doesn't match")
}
    }
    else{
        alert("ac no registered")
        window.localStorage='register.html'
    }
}
//api