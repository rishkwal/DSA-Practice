function modularExponentiation(base, exponent, prime)
{
    let value = 1;

    for(i=0;i<exponent;i++){
        value = ((value%prime)*(base%prime))%prime
    }

    console.log(value);
}

modularExponentiation(11,13,19)