//Part 2...
//booking2.js - Javascript code to set minimum of checkout day to the day after checkin
// By TAN JIN YUAN

window.onload = myFunction;
  
  function myFunction() {
    let today = new Date();
          day = today.getDate(),
          month = today.getMonth()+1, //January is 0
          year = today.getFullYear();
             if(day<10){
                  day='0'+day
              } 
            if(month<10){
                month='0'+month
            }
          var date = year+'-'+month+'-'+day;
          //document.getElementById('myText').value = date;
          document.getElementById('datein').setAttribute("min", date);
          //Set minimum date to today. 
          }
  
  
  
          document.getElementById("datein").onchange = function () {
              let dateinValid = document.getElementById('datein');
  
              var bill = document.getElementsByClassName("bill");
              for(var i = 0; i < bill.length; i++){
                bill[i].value = "" ;
              }
              //Reset all input forms after it..
              document.getElementById("delivery").checked = false;
              document.getElementById("code").value = "";
  
              if(!dateinValid.value){
                document.getElementById('dateout').disabled = true;
                document.getElementById('dateout').value = "";
                document.getElementById('room').disabled = true;
                document.getElementById('room').selectedIndex = "0";
                document.getElementById('step2').style.display = "none";
              }
              else{
                document.getElementById('dateout').disabled = false;
  
                let field = document.getElementById('datein').value;
                let tmr = new Date(field);
  
                //Find the date a day after checkin date.
                tmr.setDate(tmr.getDate() + 1);
                tDay = tmr.getDate();
                tMonth = tmr.getMonth()+1;
                tYear = tmr.getFullYear();
  
                if(tDay<10){
                    tDay='0'+ tDay;
                } 
                if(tMonth<10){
                    tMonth='0'+ tMonth;
                }
  
                var tDate = tYear + '-' + tMonth + '-' + tDay; 
                
                //alert("Tomorrow is "+tDate);
  
                var input = document.getElementById("dateout");
  
                input.setAttribute("min", tDate);
              }
          }