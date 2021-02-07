    function compute()
      {
				var principal=document.getElementById('principal').value;
				var interest=document.getElementById('rate').value;
				var year=document.getElementById('years').value;
				
        var amount=principal+(principal*interest*year);
        var result=`If you deposit ${principal},<br/> 
      at an interest rate of ${interest} %.<br/>
      You will receive an amount of ${amount},<br/>
      in the year ${year}`;
        console.log(result);
				document.getElementById('result').innerHTML =result;
      }
