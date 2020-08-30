 var x=10;
function myfunc(){
    var x=50; 
    x+=1;
    console.log("line6out :"+ x);//51
    if (true){
        var x=30;
        x+=1;
        console.log("line9out :"+ x )//31
    }
    console.log("line11out : "+ x)//31

 }
 myfunc();
 console.log("line15out : "+ x);//10

 //31 output of bth line 9 n 11
 //this show that func scope is applied to var x
 //not block scope
 //means x vale will be same in function scope(area)
 //so in JS "let" has block scope
 //"var" has func scope
    
 