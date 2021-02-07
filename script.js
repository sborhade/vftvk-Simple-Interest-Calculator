function compute()
{
	var principal=document.getElementById('principal').value;
	var interest=document.getElementById('rate').value;
	var year=document.getElementById('years').value;
	var d = new Date();
	 var n = d.getFullYear()+parseInt(year);
	
  if(principal<0)
    {
      alert("Please Enter Positive Amount.");
      document.getElementById("principal").focus();
      return;
    }
    if(principal==0)
    {
      alert("Please Enter  Amount.");
      document.getElementById("principal").focus();
      return;
    }
  
  var amount=parseInt(principal)*(parseInt(interest)*0.01)*parseInt(year);
        var result=`If you deposit <span class="h">${principal}</span>,<br/> 
      at an interest rate of <span class="h">${interest}</span> %.<br/>
      You will receive an amount of<span class="h"> ${amount}</span>,<br/>
      in the year <span class="h">${n}</span>`;
        console.log(result);
        
				document.getElementById('result').innerHTML =result;
      }
