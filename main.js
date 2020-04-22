

//scrivo numeri da 1 a 100

var numeri = i

for ( var i = 1; i <= 100; i++ )
{
    //se il numero è divisibile per 5 e 3 scrivi FizzBuzz
    if ( i%3 === 0 && i%5 === 0 )
    {
      console.log("FizzBuzz");
  }

  //altrimenti se è divisibile solo per 3
  else if ( i%3 === 0 )
  {
    console.log("Fizz");
  }

  //altrimenti se è divisibile solo per 5
  else if ( i%5 === 0 )
  {
    console.log("Buzz");
  }
  else
  {
    console.log(i);
  }
}
