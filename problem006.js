function divisible()
{
  var podzielony = true;
    for (var i=0; i < arguments.length; i++) 
    {
      if (arguments[0]%arguments[i]!=0)
      {podzielony = false;}
    }
  return podzielony;
}
