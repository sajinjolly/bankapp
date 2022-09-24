function login(){
    user=user1.value
    localStorage.setItem('username',user)
    //two args must be string(key,value)
    //Setitem local storage data storeing
    window.location="home.html"
}