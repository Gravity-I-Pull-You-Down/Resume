// let re = /\d/g;
let re = /^[a-zA-Z]+$/;
let valid =0;
// let EmailValidation =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let EmailValidation = /\S+@\S+\.\S+/;
let EmailValidation = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z0-9]{2,8})(.[a-zA-z0-9]{2,8})?$/;
function validateFirstName(){
    let firstName = document.getElementById('form').elements[0].value;
    if(!re.test(firstName)){
        document.getElementById('FirstName').style.backgroundColor = "#ed4337";
        return 0;
    }
    else{
        // alert("First name can't have numbers");
        document.getElementById('FirstName').style.backgroundColor = "white";

    }
}
function validateLastName(){
    let lastName = document.getElementById('form').elements[1].value;
    if(!re.test(lastName)){
        document.getElementById('LastName').style.backgroundColor = "#ed4337";
        return 0;
    }
    else{
        // alert("First name can't have numbers");
        document.getElementById('form').elements[1].style.backgroundColor = "white";

    }
}
function validateEmail(){
    let Email = document.getElementById('form').elements[2].value;
    if(!EmailValidation.test(Email)){
        document.getElementById('form').elements[2].style.backgroundColor = "#ed4337";
        return 0;
    }
    else{
        // alert("First name can't have numbers");
        document.getElementById('form').elements[2].style.backgroundColor = "white";

    }
}
function SendMail(params){
    let lastName = document.getElementById('form').elements[1].value;
    let firstName = document.getElementById('form').elements[0].value + " " +lastName;
    let Email = document.getElementById('form').elements[2].value;
    let details = document.getElementById('form').elements[4].value;
    let Messege = Email +" Says "+document.getElementById('form').elements[3].value + " \n"+ details;


    if(!EmailValidation.test(Email)){
        alert("Invalid Email");
    }
    if(firstName.length >0 && lastName.length >0 && Email.length >0 && Messege.length >0) {
        // alert(firstName + " " + lastName + " " + Messege + " " + Email + " " + details);
        console.log(firstName + " " + lastName + " " + Messege + " " + Email + " " + details);

        let tempparams = {
            from_name: firstName,
            to_name: "Vivek Sharma",
            message: Messege
        }
        try {
            emailjs.send('service_ikw0zqw', 'template_ym89jdt', tempparams).then(function (res) {
                console.log("succeeded", res.status);
            });
            alert( Messege);
        } catch (e) {
            console.log(e);
            alert("Something went wrong");
        }
    }
    else {
        alert("All fields with * are required");
    }
}
