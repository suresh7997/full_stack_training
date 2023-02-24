function pal(){
    let p=787;
    let y=p
    let s=0;
while(y>0)
{
temp=y%10;
s=s*10+temp;
y=Math.floor(y/10);

}
if(s==p){
    console.log("it is a palindrome number");
}
else{
    console.log("it is not a palindrome number")
}
}
pal()