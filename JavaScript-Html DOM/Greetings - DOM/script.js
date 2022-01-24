function display(){
    
    var sn=document.getElementById("sname").value;
    var cr=document.getElementById("course").value;
    if(sn.length>0)
        {
            document.getElementById("greet").innerHTML="<p>Hi,"+sn+". You have successfully registered for the "+cr+" course.</p>";
        }
    else
        {
            document.getElementById("greet").innerHTML="<p>Name cannot be empty</p>";
        }
        
}