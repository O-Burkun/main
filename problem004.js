function getTotalNumberOfNewYaersEveSundays(a, b) 
{
var i = 0;
const rok = new Date(1970, 0, 1);
rok.setFullYear(a);
while(rok.getFullYear()<b)
{
    if (rok.getMonth()===0 && rok.getDate()===1 && rok.getDay()===0 )
    {
     i++;
     a++;
     rok.setFullYear(a);
    }
    else 
    {
      a++;  
      rok.setFullYear(a);
    }
}
return i ;
}
