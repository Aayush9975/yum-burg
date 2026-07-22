
const name= document.getElementById("name");
const age= document.getElementById("age");
const mobileNumber=document.getElementById("mobileNumber");
const submitButton=document.getElementById("submitButton");
const results=document.getElementById("results");

function submitForm() {

    if(name.value !== "" && mobileNumber.value !=="" && age.value !==""){
        results.style.display="block";
              document.getElementById("results").style.color="Green"
        document.getElementById("results").innerHTML="Thanks";
  

    }
    else{
results.style.display="block";
        results.innerHTML="Please Fill all the details"
    
    document.getElementById("results").style.color="red"
    }


}


