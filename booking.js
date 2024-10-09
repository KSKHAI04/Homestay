//booking.js  - Javascript code to calculate billed price
//AUTHOR: TAN JIN YUAN

function calculate(pricePN){
  if(pricePN.selectedIndex == 0){
    alert("Please select a room...");
    document.getElementById('step2').style.display = "none"; //Hide the delivery and member
    //Reset all input forms after it.
    document.getElementById("delivery").checked = false;
    document.getElementById("code").value = "";

    var bill = document.getElementsByClassName("bill");
      for(var i = 0; i < bill.length; i++){
        bill[i].value = "" ;
      }
    //None selected
  }
  else{
    let day1 = document.getElementById('datein').value;
    let day2 = document.getElementById('dateout').value;        
    let date1 = new Date(day1);
    let date2 = new Date(day2);
    //alert("You check in at " + date1);
    //alert("You check out at " + date2);

    //Calculate number of days between
    var DayCount =  parseFloat( Math.abs(date2-date1) / (1000*60*60*24));

    //alert("Your per night price is RM" + pricePN.value + ". You stay for " + DayCount + " days.");
    
    var total = DayCount * pricePN.value;
    var tax = total * 0.06;
    var grandTotal = total + tax;
    var fixTax = tax.toFixed(2);
    var fixGTotal = grandTotal.toFixed(2);

    document.getElementById('discount').value = "0.00";
    document.getElementById('deliveryBox').value = "0.00";
    document.getElementById('net').value = total + ".00";
    document.getElementById('tax').value = fixTax;
    document.getElementById('priceCall').value = fixGTotal;
    //Display delivery and member check box
    document.getElementById('step2').style.display = "block";

  }
}

function calculate2(){
  var subTotal = parseFloat(document.getElementById("net").value);
  var discount = parseFloat(document.getElementById("discount").value);

  var temp = (subTotal * 0.06);
  var tax = temp.toFixed(2);
  temp = subTotal + parseFloat(tax) - discount;
  var grandTotal = temp.toFixed(2);
  
  document.getElementById("tax").value = tax;
  document.getElementById("priceCall").value = grandTotal;
  
}

function discount(){ 
  var subtotal = parseFloat(document.getElementById('priceCall').value);
  var code = document.getElementById('code').value;
  var discount =  parseFloat(document.getElementById('discount').value);  
  /*if(chkValid.length == 0 ){
    alert('Please fill in your booking details before applying code.');
    return;
  }*/
  if(code.length == 0){
    alert('Please enter a valid code.'); 
    return;
  }
  else if(discount != 0.00){
    alert('Discount is already applied. ');
    return;
  }
  if(code === "12358000"){
    alert("Congratulations! You will get a discount for registration as member.")
    var rebate = subtotal * 0.9;
    document.getElementById("priceCall").value = (rebate).toFixed(2);  

    //Set discount value
    let rebateAmt = subtotal - rebate;
    document.getElementById("discount").value = rebateAmt.toFixed(2);

  }
  else{
    alert("Invalid code entered.")
  }

}

function delivery(chkBox) {
  var deltext = document.getElementById("delText");
  var delivery = document.getElementById("deliveryBox");
  var total = parseFloat(document.getElementById("net").value);
  var code = document.getElementById('code').value;

if (chkBox.checked) {
  deltext.style.display = "block";

  // Check if a valid member code is entered
if (code === "12358000") {
  delivery.value = "0.00"; // Member booking, set delivery fee to RM0
  deltext.innerHTML = "Members will not be charged of delivery"; // Update the span text
} else {
  delivery.value = "15.00"; // Non-member booking, set delivery fee to RM15
}

total = (total + parseFloat(delivery.value)).toFixed(2);
document.getElementById('net').value = total;
calculate2();
} else {
deltext.style.display = "none";
delivery.value = "0.00"; // Reset delivery fee to RM0 when unchecked
total = (total - 15.00).toFixed(2);
document.getElementById('net').value = total;
calculate2();
 }
}



function test(){
  //document.getElementById
}

function checkRoom(dateoutValid){
  var bill = document.getElementsByClassName("bill");
    for(var i = 0; i < bill.length; i++){
      bill[i].value = "" ;
    }

  if(!dateoutValid.value){
    document.getElementById('room').disabled = true;
    document.getElementById('room').selectedIndex = "0";
    //Reset all input forms after it.
    document.getElementById("delivery").checked = false;
    document.getElementById("code").value = "";
    document.getElementById("step2").style.display = "none";
  }
  else{
    document.getElementById('room').disabled = false;
  }

}
 

function confirmBooking() {
    var chkout = document.getElementById('checkout');

    if(chkout.checkValidity()){
        if (confirm("Are you sure you want to confirm this booking?")) {
            var name = document.getElementById('myText').value;
            alert(name + ", your booking has been successfully made. You may receive your booking receipt via email within 1 minute.");
            window.print();
            document.getElementById('checkout').submit();
        }
    }
    else{
        alert("Booking Failed! Please Check your Info. \n(Remember to agree to Service Regulation and Privacy Policy)");
    }

}


// Function to cancel the booking
    function cancelBooking() {
    if (confirm("Are you sure you want to cancel this booking?")) {
        // Reset the form and reload the page
        document.getElementById('checkout').reset();
        window.location.reload();
        window.location.href = "tpl_ourrooms.html";
    }
}