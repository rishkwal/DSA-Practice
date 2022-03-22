#include <iostream>
using namespace std;

//iterative
int reverseArray(int arr[], int length)
{
    int reversedArr[length];

    for (int i = 0; i < length; i++)
    {
        reversedArr[i] = arr[length - i - 1];
    }
    for (int i = 0; i < length; i++)
    {
        cout << reversedArr[i] << " ";
    }
    return 0;
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int length = sizeof(arr) / sizeof(int);
    reverseArray(arr, length);
    return 0;
}