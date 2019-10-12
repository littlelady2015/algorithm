#include <iostream>
//int singleNumber(int A[], int n) {
//    if(n == 0) return A[0];
//    while(n>=2) {
//        A[n-2]^=A[n-1];
//        n--;
//    }
//    printf("%d",A[0]);
//    return A[0];
//}
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) { val = x; }
};
int run(TreeNode *root) {
    if(root == NULL) return 0;
    if(root->left == NULL || root->right == NULL) return 1;
    int leftMinDep = run(root->left);
    int rightMinDep = run(root->right);
    return min(leftMinDep,rightMinDep)+1;
}
int main() {
    TreeNode *tree = new TreeNode(1);
    tree->left = new TreeNode(3);
    tree->right = new TreeNode(4);
    return run(tree);
}
