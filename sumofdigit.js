function sumofdigit(){
    let sum=0;
    let n=123;
    while(n!=0)
    {
        rev=n%10;
        sum=sum+rev;
        n=Math.floor(n/10);
    }
    console.log(sum)

}
sumofdigit()