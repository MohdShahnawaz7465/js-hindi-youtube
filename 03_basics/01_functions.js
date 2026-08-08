function sayMyName(){
    console.log("A");
    console.log("l");
    console.log("a");
    console.log("m");
}
//sayMyName()
function addTwoNumbers(number1,number2){
    //console.log(number1 + number2);
    let result=number1 +number2
    return result
}
const result=addTwoNumbers(4,5)
//console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
//console.log(loginUserMessage("Alam"));

console.log(loginUserMessage(""));
