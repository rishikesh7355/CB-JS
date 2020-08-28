//  "== "is cllled equality operator and it typecast 
//every value of left to the right and viceverse
 // ' === ' is called strict equality operator 
 // it sees both sides of same type

 1 == '1' //true
 1==='1'//false
 console.log(1 + '1'==11) //true
 console.log("11"-1 == 1)//false string-no.= NaN not no.
 console.log([]=="")//true
 console.log([]==0)//true
 console.log(0=="")//true
 //empty ""string can be typecat to 0
 //empty [] can be typecat to ""
 console.log({}+[])//0
 console.log([]+{})//obj obj
 console.log(1)
 console.log(+1)
 //+ operator converts left n right into same type
 //object can be cob=nverted to string not viceversa
 
 //mdn=mozila development network equality article