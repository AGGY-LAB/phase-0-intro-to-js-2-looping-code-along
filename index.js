//Code your solutions in this file

const writeCards= function(names,eventName){
    let newArray=[];
    for (let i=0 ; i<names.length ; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray

}
// writeCards(["Agnes","Munee","Staus"],"thank you")
console.log(writeCards(["Agnes","Munee","Staus"],"surprise"));

const countDown = function(n){
    while(n>=0){
        console.log(n--)
    }

}
countDown(10);