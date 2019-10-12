#include <iostream>
#include <stack>

using namespace std;

class Solution {
public:
    int calculate(string s) {
        static const int state_begin = 0;
        static const int number_state = 1;
        static const int operation_state = 2;
        stack<int> number_stack;
        stack<char> operation_stack;
        int number = 0;
        int state = state_begin;
        int compute_flag = 0;
        for(int i = 0; i < s.length(); i++) {
            if(s[i] == ' ') continue;
            switch(state) {
                case state_begin:
                    if(s[i] >= '0' && s[i] <= '9') state = number_state;
                    else {
                        state = operation_state;
                    }
                    i--; break;
                case number_state:
                    if(s[i] >= '0' && s[i] <= '9') number = number*10 + s[i] - '0';
                    else {
                        number_stack.push(s[i]);
                        if(compute_flag == 1) {
                            compute(number_stack,operation_stack);
                        }
                        number = 0;
                        i--;
                        state = operation_state;
                    }
                    break;
                case operation_state:
                    if(s[i] >= '0' && s[i] <= '9') state = number_state; i--;
                    if(s[i] == '+' || s[i] == '-') {
                        operation_stack.push(s[i]);
                        compute_flag = 1;
                    }
                    else if(s[i] == '(') compute_flag = 0;
                    else if(s[i] == ')') compute_flag = 1;
                    break;
            }
        }
        if(number != 0) {
            number_stack.push(number);
            compute(number_stack, operation_stack);
        }
        if(number == 0 && number_stack.empty()) {
            return 0;
        }
        return number_stack.top();

    }

private:
    void compute(stack<int> &number_stack, stack<char> &operation_stack){
        if(number_stack.size() < 2) return;
        int num1 = number_stack.top();
        number_stack.pop();
        int num2 = number_stack.top();
        number_stack.pop();
        if(operation_stack.top() == '+') number_stack.push(num1+num2);
        else if(operation_stack.top() == '+') number_stack.push(num1+num2);
        operation_stack.pop();
    }
};

int main() {
    Solution s;
    char a = s.calculate("1 + 1");
    cout<<a ;
}

