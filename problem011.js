function deepFindAndCount(a, b) 
{
  var l = 0;
  var x = 0;
do{
  x = a.shift();
    if(Array.isArray(x)==true)
    {
      for(var i = 0 ; i<x.length ; i++)
      {
        if (x[i] == b) 
        {l++;}
      }
    }
    else if(x == b) 
    {l++;}
  }while(x!=undefined);
  return l;
}
