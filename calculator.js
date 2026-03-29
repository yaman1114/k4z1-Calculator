function divide(a, b) {
    if (b === 0){
        console.log("Invalid input : Number cant be divided by zero ");
        return null;
    }
    return a / b;
}

//test 
console.log(divide(10,2));