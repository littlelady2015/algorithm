#include <iostream>
#include <algorithm>
using namespace std;
bool duplicate(int numbers[],int length, int* duplication){
    //边界判断
    if(numbers == nullptr || length == 0) return false;

    for(int i= 0; i< length ;i++) {
        //范围判断
        if (numbers[i] < 0 || numbers[i] > length)
            return false;
    }
    for(int i= 0; i< length; i++){
    //算法
      while(numbers[i] != i)
      {
          if(numbers[i] == numbers[numbers[i]]){
              *duplication = numbers[i];
              return true;
          }
          int temp;
          temp = numbers[i];
          numbers[i]= numbers[numbers[i]];
          numbers[numbers[i]] = temp;
      }
    }
    return false;
}
//测试代码
bool contains(int array[], int length, int number)
{
    for(int i = 0; i < length; ++i)
    {
        if(array[i] == number)
            return true;
    }

    return false;
}
void test(char* testName, int numbers[], int lengthNumbers, int expected[], int expectedExpected, bool validArgument)
{
    printf("%s begins: ", testName);

    int duplication;
    bool validInput = duplicate(numbers, lengthNumbers, &duplication);

    if(validArgument == validInput)
    {
        if(validArgument)
        {
            if(contains(expected, expectedExpected, duplication))
                printf("Passed.\n");
            else
                printf("FAILED.\n");
        }
        else
            printf("Passed.\n");
    }
    else
        printf("FAILED.\n");
}
void test1()
{
    int numbers[] = { 2, 1, 3, 1, 4 };
    int duplications[] = { 1 };
    test("Test1", numbers, sizeof(numbers) / sizeof(int), duplications, sizeof(duplications) / sizeof(int), true);
}
int main() {
    test1();
    getchar();
    getchar();
    return 0;
}