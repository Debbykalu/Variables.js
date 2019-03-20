/*Var can be globally access while Const and Let cannot be access globally.
Var is a functioning scope while Const and Let is a block-scoped.
Let and Var works the same way when used in a function block.
Var variables can be redeclared or reassigned but Let variables cannot be redeclared in the same scope, Const variables cannot be reassign.
Variables defined with const behave like let variables, except they cannot be reassigned.
Declaring a variable with const is similar to let when it comes to Block Scope.
const variables must be assigned a value when they are declared.*/


//VAR examples
var livelogo = "clarity"

function livingTheLife(){
    var livelogo = "lifehood"
    console.log(livelogo)
}

livingTheLife()


