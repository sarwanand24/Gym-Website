// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBvJf1wCCgCa7eF4kSSAwwXu2n961_4SQQ",
    authDomain: "squad-fitness-1652d.firebaseapp.com",
    projectId: "squad-fitness-1652d",
    storageBucket: "squad-fitness-1652d.appspot.com",
    messagingSenderId: "148219835572",
    appId: "1:148219835572:web:62f04e50c53f8c6c2753e1",
    measurementId: "G-Q3B7W8N2LG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import{ getDatabase, ref, set, child, get}
        from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

        const database = getDatabase();

   const name = document.getElementById("nameInp");
        const mobile = document.getElementById("mobInp");
        const address = document.getElementById("addressInp");
        const submit = document.getElementById("submit");

        function write(){

if(name.value!="" && mobile.value!="" &&  address.value!=""){

  var j = Math.random() * 100;
  j = Math.floor(j);

const db = getDatabase();
set(ref(db, "Members/"+ name.value+j),{
Name: name.value,
Address: address.value,
Mobile: mobile.value,
});

swal({
title: "Great!",
text: "You are now a member of squad fitness",
icon: "success",
button: "Next",
});

document.getElementById("flag-dtl").style.display = "block";
    document.getElementById("details").style.display = "none";

}

else{
swal({
text: "Please Fill All Fields",
});
}

}

submit.addEventListener("click", write);

    </script>

    <script>
        let button = document.querySelector("#bmi-btn");
    
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);

    
    function calculateBMI() {
    
let height = parseInt(document
            .querySelector("#height").value);
    
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#bmi-result");
    
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
    
    // If both input is valid, calculate the bmi
    else {
    
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
    
        // Dividing as per the bmi conditions
        if (bmi < 18.6) {result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
        document.getElementById("pg").style.display = "block";
        }
    
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
                document.getElementById("pg").style.display = "block";
        }
    
        else{ result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
            document.getElementById("pg").style.display = "block";
        }
    }
}
    

     const fadeElements = document.querySelectorAll(".p");
     const picslider = document.querySelectorAll(".pic");
     const picslider2 = document.querySelectorAll(".pic2");
     const picslider3 = document.querySelectorAll(".sl");
     const picslider4 = document.querySelectorAll(".sl2");
     const picslider5 = document.querySelectorAll(".sl3");
     const picslider6 = document.querySelectorAll(".dumbel-anim");
     const picslider7 = document.querySelectorAll(".sl4");
     const colorchange = document.querySelectorAll(".sl5");

     scrollAnim = () => {
        let windowHt = window.innerHeight;
        var picto = document.querySelector(".picslide1");
        var picto2 = document.querySelector(".picslide2");
        var picto3 = document.querySelector(".psec-slide");
        var picto4 = document.querySelector(".abtslide");
        var picto5 = document.querySelector(".abtslide2");
        var picto6 = document.querySelector(".dumbel-anim");
        var picto7 = document.querySelector(".abtslide3");
        var picto8 = document.querySelector(".join-now");
        fadeElements.forEach(element => {
            let elementPos = element.getBoundingClientRect().top;
            if (elementPos <= 565){
                element.classList.add("fade");
               
            }
            else{
                element.classList.remove("fade");
            }
        })

        picslider.forEach(element => {
            let elementPos2 = element.getBoundingClientRect().top;
            if (elementPos2 <= 565){
                picto.classList.add("picdown");
            }
            else{
                picto.classList.remove("picdown");
            }
        })

        picslider2.forEach(element => {
            let elementPos3 = element.getBoundingClientRect().top;
            if (elementPos3 <= 565){
                picto2.classList.add("picside");
            }
            else{
                picto2.classList.remove("picside");
            }
        })

        picslider3.forEach(element => {
            let elementPos4 = element.getBoundingClientRect().top;
            if (elementPos4 <= 565){
                picto3.classList.add("psecto");
            }
            else{
                picto3.classList.remove("psecto");
            }
        })

        picslider4.forEach(element => {
            let elementPos5 = element.getBoundingClientRect().top;
            if (elementPos5 <= 565){
                picto4.classList.add("abtside");
            }
            else{
                picto4.classList.remove("abtside");
            }
        })

        picslider5.forEach(element => {
            let elementPos6 = element.getBoundingClientRect().top;
            if (elementPos6 <= 565){
                picto5.classList.add("abtside2");
            }
            else{
                picto5.classList.remove("abtside2");
            }
        })

        picslider6.forEach(element => {
            let elementPos7 = element.getBoundingClientRect().top;
            if (elementPos7 <= 565){
                picto6.classList.add("dumbel-long");
            }
            else{
                picto6.classList.remove("dumbel-long");
            }
        })

        picslider7.forEach(element => {
            let elementPos8 = element.getBoundingClientRect().top;
            if (elementPos8 <= 565){
                picto7.classList.add("abtside3");
            }
            else{
                picto7.classList.remove("abtside3");
            }
        })

        colorchange.forEach(element => {
            let elementPos9 = element.getBoundingClientRect().top;
            if (elementPos9 <= 620){
                picto8.classList.add("join-color");
            }
            else{
                picto8.classList.remove("join-color");
            }
        })
      

     }

     document.addEventListener("DOMContentLoaded", scrollAnim);
     window.addEventListener("scroll", scrollAnim);

     document.getElementById("scroll-top").addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
   })

   document.getElementById("l1").addEventListener("click", function(){
    window.scrollTo({ top:0, behavior: 'smooth' });
   })

   document.getElementById("l2").addEventListener("click", function(){
    window.scrollTo({ top: 900, behavior: 'smooth' });
   })


    document.getElementById("l3").addEventListener("click", function(){
    window.scrollTo({ top: 1300, behavior: 'smooth' });
   })

   document.getElementById("l4").addEventListener("click", function(){
    window.scrollTo({ top: 3000, behavior: 'smooth' });
   })

   document.getElementById("l5").addEventListener("click", function(){
    window.scrollTo({ top: 3400, behavior: 'smooth' });
   })

   window.onload = function(){
    window.scrollTo({ top:0, behavior: 'smooth' });
   }

   document.getElementById("join-btn").addEventListener("click", function(){
    window.scrollTo({ top:0, behavior: 'smooth' });
    document.getElementById("flag-dtl").style.display = "none";
    document.getElementById("details").style.display = "block";
   })
        </script>

    <script>
        var myIndex = 0;
        carousel();
        function carousel() {
    var i;
    var x = document.getElementsByClassName("quotes");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 10000); // Change quote every 4 seconds
    }
