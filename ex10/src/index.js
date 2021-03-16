function logicalOrder(num){
    if(num < 50){
        return "Less then 50"
    } else if(num < 100){
        return "Less then 100"
    } else {
        return "greater then or equal to a 100"
    }  
}

console.log(logicalOrder(28));
console.log(logicalOrder(60));
console.log(logicalOrder(110));

module.exports = logicalOrder;