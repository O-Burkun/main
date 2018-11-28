function triangleArea(a, b, c) 
{
var p = (a+b+c)/2;
if(a>0 && b>0 && c>0 && p>0 && P>0)
{return -1;}
 if((p-a < 0) || (p-b < 0) || (p-c < 0))
{return -1;}
else 
{
var P = Math.sqrt(p*(p-a)*(p-b)*(p-c));
return P.toFixed(2);
}
}
