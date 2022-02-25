#include <iostream>
using namespace std;

void fibo(int n){
    int a = 0;
    int b = 1;
    for(int i=0;i<n;i++){
        cout<<a<<" ";
        i++;
        if(i<n)
            cout<<b<<" ";
        a+=b;
        b+=a;
    }
}

int main(){
    int n;
    cin>>n;
    fibo(n);
    return 0;
}