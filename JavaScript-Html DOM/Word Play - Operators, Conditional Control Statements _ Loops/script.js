function wordPlay(number)
{
   var num=parseInt(number);
   if(num>50)
   {
       return("Range is High");
   }
   else if (num<1)
   {
    return("Not Valid");
   }
   else{
       var str="";
       for(var i=1;i<=num;i++)
       {
           if(i%5===0 && i%3===0)
           {
               str=str+" Jump";
           }
           else if(i%3===0)
           {
               str=str+" Tap";
           }
           else if(i%5===0)
           {
               str=str+" Clap";
           }
           else
           {
               str=str+" "+i;
           }
       }
       return str;
       
   }
   
}
