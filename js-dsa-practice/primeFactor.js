function primeFactors(n)
{
    while(n%2==0){
        console.log(2);
        n/=2;
    }

    for(i=3;i*i<n;i+=2)
    {
        while(n%i==0)
        {
            console.log(i);
            n/=i;
        }
    }
    if(n>2)
    console.log(n);
}
function multipleOfSix(n)
{
    let quotient=Math.floor(n/6);
    let factor = n%6==1?quotient:quotient+1;
    console.log(`6x${factor}${n%6==1?'+1':'-1'}`);
}
primeFactors(305)
multipleOfSix(305)