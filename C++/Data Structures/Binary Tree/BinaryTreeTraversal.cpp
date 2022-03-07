#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *left, *right;
};

Node* newNode(int data)
{
    Node* temp = new Node;
    temp->data = data;
    temp->left = temp->right = NULL;
    return temp;
}

void printPostorder(struct Node* node)
{
    if(node==NULL)
        return;

    printPostorder(node->left);
    printPostorder(node->right);
    cout<<node->data<<" ";
}

void printInOrder(struct Node* node)
{
    if(node==NULL)
        return;
    printInOrder(node->left);
    cout<<node->data<<" ";
    printInOrder(node->right);
}

void printPreOrder(struct Node* node)
{
    if(node==NULL)
        return;
    cout<<node->data<<" ";
    printInOrder(node->left);
    printInOrder(node->right);
}

int main()
{
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    cout << "\nPreorder traversal of binary tree is \n";
    printPreOrder(root);

    cout << "\nPostorder traversal of binary tree is \n";
    printPostorder(root);
    
    cout << "\nPreorder traversal of binary tree is \n";
    printInOrder(root);

    return 0;
}