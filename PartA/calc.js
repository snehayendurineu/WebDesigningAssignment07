const usernameField = $('#username')
const username = localStorage.getItem("user");
const number1 = $('#number1')
const number2 = $('#number2')
const errornumber1 = $('#errornumber1')
const errornumber2 = $('#errornumber2')
const addBtn = $('#addBtn')
const subBtn = $('#subBtn')
const mulBtn = $('#mulBtn')
const divBtn = $('#divBtn')
const res =  $('#result')
let validn1 = false
let validn2 = false

$(document).ready(function () {
    usernameField.text(username);

    if(!validn1 || !validn2){
        res.val("");
    }
    number1.on("change", () => {
        if(number1.val() === ''){
            errornumber1.text('Please fill the values').addClass('text-error');
            validn1 = false;
        }else if(!$.isNumeric(number1.val())){
            errornumber1.text('Please enter only numbers').addClass('text-error');
            validn1 = false;
        }else if(!isFinite(number1.val())){
            errornumber1.text('Please enter only finite numbers').addClass('text-error');
            validn1 = false;
        }else{
            errornumber1.text('').removeClass('text-error');
            validn1 = true;
        }
        res.val("");
    });

    number2.on("change", () => {
        if(number2.val() === ''){
            errornumber2.text('Please fill the values').addClass('text-error');
            validn2 = false;
        }else if(!$.isNumeric(number2.val())){
            errornumber2.text('Please enter only numbers').addClass('text-error');
            validn2 = false;
        }else if(!isFinite(number2.val())){
            errornumber2.text('Please enter only finite numbers').addClass('text-error');
            validn2 = false;
        }else{
            errornumber2.text('').removeClass('text-error');
            validn2 = true;
        }
        res.val("");
    });


    const calculate = (n1, n2, op) => {
        switch (op) {
            case "+":
                return n1 + n2;
            case "-":
                return n1 - n2;
            case "*":
                return n1 * n2;
            case "/":
                if (n2 === 0) {
                    return "Division not allowed, number 2 cannot be zero";
                }
                return n1 / n2;
            default:
                return "Invalid operation";
        }
    };

    addBtn.click(function(){
        if(validn2 && validn1){
            event.preventDefault();
            let result = calculate(parseFloat(number1.val()), parseFloat(number2.val()), "+");
            res.val(result);
        }else{
            event.preventDefault();
            if(number1.val() === ''){
                errornumber1.text('Please fill the values').addClass('text-error');
            }
            if(number2.val() === ''){
                errornumber2.text('Please fill the values').addClass('text-error');
            }
        }
    })

    subBtn.click(function(){
        if(validn2 && validn1){
            event.preventDefault();
            let result = calculate(parseFloat(number1.val()), parseFloat(number2.val()), "-");
            res.val(result);
        }else{
            event.preventDefault();
            if(number1.val() === ''){
                errornumber1.text('Please fill the values').addClass('text-error');
            }
            if(number2.val() === ''){
                errornumber2.text('Please fill the values').addClass('text-error');
            }
        }
        
    })

    mulBtn.click(function(){
        if(validn2 && validn1){
            event.preventDefault();
            let result = calculate(parseFloat(number1.val()), parseFloat(number2.val()), "*");
            res.val(result);
        }else{
            event.preventDefault();
            if(number1.val() === ''){
                errornumber1.text('Please fill the values').addClass('text-error');
            }
            if(number2.val() === ''){
                errornumber2.text('Please fill the values').addClass('text-error');
            }
        }
    })

    divBtn.click(function(){
        if(validn2 && validn1){
            event.preventDefault();
            let result = calculate(parseFloat(number1.val()), parseFloat(number2.val()), "/");
            res.val(result);
        }else{
            event.preventDefault();
            if(number1.val() === ''){
                errornumber1.text('Please fill the values').addClass('text-error');
            }
            if(number2.val() === ''){
                errornumber2.text('Please fill the values').addClass('text-error');
            }
        }
    })

})
