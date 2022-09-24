function displayNum(n) {
    result.value+=n
}
function allClear(){
    result.value=""
}
function evalExpr(){
    // expr=result.value
    // out=eval(expr)
    // result.value=out
    result.value=eval(result.value)
}
function backspace(){
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
    // slice last element kalayan vndi
}