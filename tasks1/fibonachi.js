// fibonachi is the sum of the 2 previous numbers
// 1,2,3,4,5,6,7,8
//f(n) = f(n-1) +f(n-2)
function fibonachi(n){
if (n <=0){
    return 0
}if (n <=2){
    return 1
}
return  fibonachi(n-1)+fibonachi(n-2)
}
console.log(fibonachi((6)))