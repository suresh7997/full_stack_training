function content(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("get content from file")
            resolve("file download")
        },2000)
    })
}
function print(){
    console.log("printing file")
}
content().then(function(result){
print()
})