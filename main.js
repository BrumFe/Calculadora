'use strict'

let stringNumberOne = "",
    stringNumberTwo = "",
    stringOperator = "",
    stringVerifyDotTrueOrFalse = false;

function getElements(){
    if(stringNumberOne != "" && stringNumberTwo == ""){
        return false;
    }
    if(stringNumberOne != "" || stringNumberTwo != ""){
        let result = callOperations(stringNumberOne, stringNumberTwo, stringOperator);
        writeOnDisplay(result);
        stringVerifyDotTrueOrFalse = true;
        return true;
    }
    return false;
}

function callOperations(number_one,number_two,operator){
    let resultOperation;
    switch(operator){
        case '+': 
            resultOperation = doSum(number_one,number_two);
        break;

        case '-': 
           resultOperation = doSubtraction(number_one,number_two);
        break;

        case '/': 
           resultOperation = doDivision(number_one,number_two);
        break;

        case '*': 
           resultOperation = doMultiplication(number_one,number_two);
        break;
    }
    stringOperator = "";
    stringNumberTwo = "";
    stringNumberOne = resultOperation;

    return resultOperation;
}

function getNumber(number){
    if(stringOperator == ""){
        stringNumberOne = stringNumberOne + number; 
        document.getElementById("caixa-de-texto").value = stringNumberOne;
    }else{
        stringNumberTwo = stringNumberTwo + number; 
        document.getElementById("caixa-de-texto").value = stringNumberTwo;
    }
    return null;
}

function getOperator(operator){
    stringVerifyDotTrueOrFalse = false;
    if(stringNumberOne.length != 0){
        stringOperator = operator;
        return null;
    }else if(operator == "-"){
        stringNumberOne += operator;
        return null;
    }
    return null;
}

function doSum(number_one, number_two){
    let  resultSum = parseFloat(number_one) + parseFloat(number_two);
    return resultSum;
}

function doSubtraction(number_one, number_two){
    let resultSubtraction = parseFloat((number_one - number_two).toFixed(2));
    return resultSubtraction;
}

function doDivision(number_one, number_two){
    if (number_two == "0"){
        alert("Can't divid by 0!");
        clearInput();
        return "0";
    }
    let resultDivision = parseFloat(number_one / number_two);
    return resultDivision;
}

function doMultiplication(number_one, number_two){
    let resultMutiplication = parseFloat(number_one * number_two);
    return resultMutiplication;
}

function verifyAndGetDot(stringDot){
    if(stringVerifyDotTrueOrFalse == false){
        getNumber(stringDot);
        stringVerifyDotTrueOrFalse = true;
        return null;
    }
} 

function writeOnDisplay(result){
    document.getElementById("caixa-de-texto").value = result;
}

function clearInput(){
    document.getElementById("caixa-de-texto").value = "";
    stringNumberTwo = "";
    stringNumberOne = "";
    stringOperator = "";
    stringVerifyDotTrueOrFalse = false;
}








