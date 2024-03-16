const email = $('#email')
const erroremail = $('#erroremail')
const username = $('#username')
const errorusername = $('#errorusername')
const password = $('#password')
const errorpassword = $('#errorpassword')
const confirmpassword = $('#confirmPassword')
const confirmerrorpassword = $('#errorconfirmPassword')
const emailpattern = /^[a-zA-Z0-9._-]+@northeastern\.edu$/
const usernamepattern = /^[a-zA-Z0-9_]{3,20}$/
const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
const minlen = 5
const maxlen = 40

let emailvalidition = false
let usernamevalidition = false
let pwdvalidition = false
let cpwdValidation = false

const validate = (inputField, errorField, pattern, minlen, maxlen, msg) => {
    if(inputField.val() === ''){
        errorField.text('Please fill the values').addClass('text-error');
        return false;
    }else if(!inputField.val().match(pattern)){
        errorField.text(msg).addClass('text-error');
        return false;
    }else if(inputField.val().length < minlen){
        errorField.text('Length should be more than ${min}').addClass('text-error');
        return false;
    }else if(inputField.val().length > maxlen){
        errorField.text('Length should be less than ${max}').addClass('text-error');
        return false;
    }else{
        errorField.text('').removeClass('text-error');
        return true;
    }
};

$(document).ready(() => {
    email.on("change", () => {
        emailvalidition = validate(email, erroremail, emailpattern, minlen, maxlen, "Please use northeastern email - xxx@northeastern.edu");
    });

    username.on("change", ()=>{
        usernamevalidition = validate(username, errorusername, usernamepattern, minlen, maxlen, "Please enter a valid username");
    })

    password.on("change", ()=>{
        pwdvalidition = validate(password, errorpassword, passwordpattern, minlen, maxlen, "password should contain at least one lowercase letter, one uppercase letter, one digit, and is between 6 and 20 characters in length");
    })

    confirmpassword.on("change", ()=>{
        if(password.val() !== confirmpassword.val()){
            confirmerrorpassword.text('Passwords do not match').addClass('text-error');
            cpwdValidation = false;
        }
        else{
            confirmerrorpassword.text('').removeClass('text-error');
            cpwdValidation = true;
        }
    })

    $('input').on('change', ()=>{
        if(emailvalidition  && usernamevalidition && pwdvalidition && cpwdValidation){
            $("#submitBtn").removeAttr('disabled');
        }
        else{
            $("#submitBtn").prop("disabled", true);
        }
    })

    $('#loginForm').on('submit', ()=>{
        
        event.preventDefault();

        window.location.href = "calc.html";

        var user = $('#username').val();
        localStorage.setItem("user", user);

        $('#loginForm').reset();
    });

});
