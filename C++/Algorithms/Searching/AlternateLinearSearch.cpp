#include <iostream>
#include <sstream>
#include <math.h>
#include <vector>
using namespace std;

void search (vector<int> arr, int search_Element)
{
    int left = 0;
    int length = arr.size();
    int position = -1;
    int right = length-1;

    for(left=0; left<=right;)
    {

        if (arr[left]== search_Element)
        {
            position = left;
            cout << "Element found in Array at"
                << position + 1 << "Position with"
                << left + 1 << "Attempt";

            break;
        }

        if (arr[right]== search_Element)
        {
            position = right;
            cout << "Element found in Array at"
                << position + 1 << "Position with"
                << length - right << " Attempt";

            break;
        }
        left++;
        right--;
    }
    if(position == -1)
    cout<< "Not found in Array with"
    << left << " Attempt";
}

int main()
{
    vector<int> arr;
    arr.push_back(1);
    arr.push_back(2);
    arr.push_back(3);
    arr.push_back(4);
    arr.push_back(5);
    int search_element = 5;

    search(arr, search_element);
}