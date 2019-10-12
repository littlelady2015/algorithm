#include <iostream>
#include <queue>

using namespace std;
class MyStack {
public:
    /** Initialize your data structure here. */
    MyStack() {}
    /** Push element x onto stack. */
    void push(int x) {
        queue<int> temp_queue;
        temp_queue.push(x);
        while(!_data.empty()) {
            temp_queue.push(_data.front());
            _data.pop();
        }
        while(!temp_queue.empty()) {
            _data.push(temp_queue.front());
        }
    }

    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        int x = _data.front();
        _data.pop();
        return x;
    }

    /** Get the top element. */
    int top() {
        int x = _data.back();
        return x;
    }

    /** Returns whether the stack is empty. */
    bool empty() {
        return _data.empty();
    }

private: queue<int> _data;
};
int main() {

    MyStack* obj = new MyStack();
    obj->push(1);
    obj->push(2);
    obj->push(2);
    int param_2 = obj->pop();
    int param_3 = obj->top();
    bool param_4 = obj->empty();
}


/**
 * Your MyStack object will be instantiated and called as such:
MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */