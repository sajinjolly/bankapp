//fetch
//asynchronous
//promise (class is used)  true(reslove) or false(reject)

// then() (used for output)


pro=new Promise((reslove,reject)=>{
    lotNum=7
    pricenum=Math.floor(Math.random()*10)
    if(lotNum==pricenum){
        reslove("you won lottery")
    }
    else if(lotNum!=pricenum){
        reject("better luck next time")
    }

})
pro.then(msg=>console.log(msg)).catch(err=>console.log(err))

