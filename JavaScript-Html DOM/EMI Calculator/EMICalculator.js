
function calculateEMI(){
    var pa = document. getElementById("principalAmount").value;
    var ir = document. getElementById("interestRate").value;
    var tn = document. getElementById("tenure").value;
    var r=(ir/100)/12;
    EMI=pa*r*(Math.pow((1+r),tn)/(Math.pow((1+r),tn)-1));
    document.getElementById("result").innerHTML="EMI is Rs."+EMI.toFixed(2);
    return false;
}