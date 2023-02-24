function maxMin(){
    let s=[9,10,7,8];
    var max=s[0];
    var min=s[0];
    for(i=0;i<s.length;i++){
        if(s[i]>max){
            max=s[i];
            console.log(max,"it is max no");
        }
        if(s[i]<min){
            min=s[i];
            console.log(min,"it is min number")
        }
    }
}
maxMin()