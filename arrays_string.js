let arr=[1,2,'r','i','sfs']
let a=arr.join('-')
console.log(a)

let ar1=[1,2,3,4,5,6,7,8,9]
console.log(ar1.slice(4,5))
//first n last positon=4,5

console.log(ar1.splice(4,5))
//cut n gives array after 5
//first position , length=4,5
console.log(ar1)//remainfg array before 4
///////////////////////////////////////////////////////////////////////////
let str='akandaalkng'
console.log(str.indexOf('a'))
console.log(str.indexOf('a',5))
console.log(str.substr(3))
console.log(str.substr(3,5))
//5 characters from 3
console.log(str.substring(3))
console.log(str.substring(3,5))
console.log(str.slice(4,5))
console.log(str.substring(-5,-3))
console.log(str.slice(-5,-3))
//substring dontt support negative values 
console.log(str.split('a'))//removes a 
let url="https//rishikesh.yadav.com/12334/?asbdjk"
console.log(url.split('?'));
console.log('?'[1])
//do the last with separate varible gives the index 1 elemt of aplited array i.e asbdjk