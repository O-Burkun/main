function stringRotate(a, b)
{ 
if (b<0 || isNaN(b))
{
const c = "";
return c;
}
else 
{var s =a.substring(b)+a.substring(0,b);}
return s;
}
