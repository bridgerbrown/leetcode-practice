/*
#1: Delete Node in a Linked List

There is a singly-linked list head and we want to delete a node node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All the values of the linked list are unique, and it is guaranteed that the given node is not the 
last node in the linked list.
Delete the given node. Note that by deleting the node, we do not mean removing it from memory. 
We mean:
The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.

Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 
after calling your function.
*/

var deleteNode = function(node){
  let nxt = node.next;
  node.val = nxt.val;
  node.next = nxt.next;
} // O(1) time, O(1) space

/*

I am used to working in Python for Linked Lists, but became familiar with the difference in syntax
and approach while doing this problem.

So this is a tricky approach to deleting the node due to the way this question is asked.
We are not given prev's to the nodes, but we can basically clone the next node then delete
its original place. By defining the nodes next as null, we remove it from the list and there's
no point in redefining its value. This also only works because we can assume that the node to be
deleted is not the last node in the list.
*/


/*
#2: Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

var removeNthFromEnd = function(head, n){
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) fast = fast.next, slow = slow.next;
  slow.next = slow.next.next;
  return head;
}; // O(n) time, O(1) space


/*
#3: Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

var reverseList = function(head){
  let prev = null;
  let cur = head;
  let nxt = null;

  while (cur){
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt; 
  }
  return prev;
} // O(n) time, O(1) space

/*
So here we want to basically run through the linked list, and redeclare each nodes cur.next
to be prev. When we return the prev linked list, we will have a reversed ll because of where the
next pointers are pointing. Its important that prev starts as null too, since the end of 
the linked list will need to be null.
*/


/*
#4: Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 
Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

var mergeTwoLists = function(list1, list2){
  let merged = new ListNode()
  let head = merged;

  while (list1 !== null && list2 !== null){
    if (list1.val < list2.val){
      merged.next = new ListNode(list1.val)
      list1 = list1.next;
    } else {
      merged.next = new ListNode(list2.val)
      list2 = list2.next;
    }
    merged = merged.next;
  }

  merged.next = list1 || list2; // For possible remaining nodes after traversing
  return head.next
} // O(n + m) time, O(1) space


/*
#5: Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true
*/

var isPalindrome = function(head){
  let slow = head, fast = head, prev, temp;
  while (fast && fast.next)
    slow = slow.next, fast = fast.next.next; // because it traverses twice as fast, finds middle
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) // reverse second half to be able to compare for palindrome
    temp = slow.next, slow.next = prev, prev = slow, slow = temp; // youre going through reversing pointers
  fast = head, slow = prev;
  while (slow)
    if (fast.val !== slow.val) return false;
    else fast = fast.next, slow = slow.next;
  return true;
}; // O(n) time, O(1) space
 
/*
Initialize two pointers, slow and fast, to the head of the linked list. Also, initialize prev and temp variables.
Use the fast pointer to iterate through the linked list. The fast pointer moves two steps at a time, while the slow pointer moves one step at a time. 
This way, when the fast pointer reaches the end of the list, the slow pointer will be at the middle node (or the middle-left node if the list has an odd length). 
This step helps us split the list into two halves.
Set prev to the current position of the slow pointer. This will help us later in reversing the second half of the linked list.
Move the slow pointer one step forward and disconnect the previous middle node from the rest of the list by setting prev.next to null. 
This splits the list into two halves: the first half is from the head to the middle node, and the second half is from the middle+1 node to the end.
Reverse the second half of the linked list. Use three pointers (prev, slow, and temp) to reverse the direction of the pointers. 
Iterate through the second half by moving slow to its next node, temp to the next of slow, and set slow.next to prev. 
This step effectively reverses the direction of the pointers in the second half.
Reset fast to the head of the linked list, and set slow to the last node of the reversed second half (which is stored in prev).
Iterate through both halves simultaneously using fast and slow pointers. Compare the values of the corresponding nodes in both halves. 
If any values are different, return false as it means the linked list is not a palindrome.
If the iteration completes without finding any differences, return true as the linked list is a palindrome.
*/

/*
#5: Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

var hasCycle = function(head){
  let fast = head;
  while (fast && fast.next){
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
}

/*

Basically, this solution works because of how a faster pointer would catch up to a slower pointer
if there's a circular linked list in it.

*/
