
var pa=0;
var ir=0;
var tn=0;
var Emi=0;
var tp=0;
var ti=0;

function EstimateReducingInterestLoan()
{
     pa=parseInt(document.getElementById("principalAmount").value);
     ir=parseInt(document.getElementById("interestRate").value);
     tn=parseInt(document.getElementById("tenure").value);      
      
	  calculateEMI();
      totalPayment();
      totalInterest();
      EstimateFixedInterestLoan();
    
}

function EstimateFixedInterestLoan()
{
    /* Fill with required javascript code here  */
    var til = pa*(ir/100)*(tn/12);
    document.getElementById("tInterestFixed").innerHTML = til.toFixed(2); /*Assign total Interest value here*/
    
     /* Fill with required javascript code here  */
     var tpl= pa+til;
    document.getElementById("tPaymentFixed").innerHTML = tpl.toFixed(2); /*Assign total payment value here*/
    
     /* Fill with required javascript code here  */
     var Emil=tpl/tn;
    document.getElementById("EMIFixed").innerHTML = Emil.toFixed(2); /*Assign emi  value here*/
    
    
}

function calculateEMI(){
    /* Fill with required javascript code here  */
    var r=(ir/100)/12;
     Emi=pa*r*(Math.pow((1+r),tn)/(Math.pow((1+r),tn)-1));
    document.getElementById("EMI").innerHTML = Emi.toFixed(2);/*Assign emi value here*/
   
}

function totalPayment(){
	
	/* Fill with required javascript code here  */
	
	tp=Emi*tn;
    document.getElementById("tPayment").innerHTML = tp.toFixed(2); /*Assign total payment value here*/
}

function totalInterest(){
	
/* Fill with required javascript code here  */
    ti=tp-pa;
    document.getElementById("tInterest").innerHTML = ti.toFixed(2); /*Assign total Interest value here*/
}


