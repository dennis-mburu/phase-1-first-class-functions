function receivesAFunction (callback){
    callback()
}

// function square(number){
//     return function() {number * number};
// }

function logger(){
    return function secondLogger (){
        console.log ("A special key logger")
    }
}
function returnsANamedFunction() {return logger()}


function returnsAnAnonymousFunction(){
    return function () {
        console.log('This is a logger')
    }
}