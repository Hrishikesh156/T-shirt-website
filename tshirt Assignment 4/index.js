var Tagline = document.forms.form1.tagline.value;
var Email = document.forms.form1.email.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
// var tag = new String(tagname)
// var taglen = () =>{
//     if(tag.length <= "15") return true
//     else return false
// }
var regName = /\d+$/g; 

function validate(event){  
    var Tagline = document.forms.form1.tagline.value;
    var Email = document.forms.form1.email.value;
    var phone = document.forms.form1.phone.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;

if(Tagline == ""){
   

    window.alert("Please enter your tagline properly.");
    console.log(Tagline)
  
    return false;
}

if ((Email == "" || !regEmail.test(Email))) {
    
    window.alert("Please enter a valid e-mail address.");
    
    
    return false;
}
if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
   
    return false;
}

event.preventDefault();
console.log("valid")
 
var receipt = document.getElementById('receipt')
 receipt.style.display = "block"; 

 var id = Math.random().toString(16).slice(2);
 var uniq = id + (new Date()).getTime();
 var jesreyType = document.querySelector('input[name="jersey"]:checked').value;
 var quantity = document.getElementById('jerseys').value;
 var size = document.getElementById('size').value;
 var ORderDate = new Date()
 {
    var total_cost;
    if(jesreyType==="home"){
        total_cost = 90*quantity;
    }
    else if(jesreyType==="Away(golden)"){
        total_cost = 95*quantity;
    }
    else if(jesreyType==="Away(black)"){
        total_cost = 99*quantity;
    }
 }
 document.getElementById("orderid").innerHTML = `Order ID : ${uniq}`
 document.getElementById("jerseyType").innerHTML = `Jersey Type : ${jesreyType}`
 document.getElementById("Quantity").innerHTML = `Quantity : ${quantity}`
 document.getElementById("Size").innerHTML = `Size : ${size}`
 document.getElementById("cost").innerHTML = `Total :$ ${total_cost}`
 document.getElementById("date").innerHTML = `Order Date : ${ORderDate}`
// return true;
   
}

