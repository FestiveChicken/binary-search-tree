# 🌳 Binary Search Tree

A JavaScript implementation of a Binary Search Tree (BST) built to practice fundamental tree data structures, recursion, and algorithmic complexity.

## 🛠️ Features
- **Node Class** with `value`, `left`, and `right` pointers  
- **BinarySearchTree Class** supporting:
  - `insert(value)` to add nodes in correct position  
  - `find(value)` to search for a node by value  
  - `remove(value)` to delete a node while maintaining BST properties  
  - `min()` / `max()` to retrieve the smallest and largest values  
  - **Traversal Methods**:
    - `inOrder()` (left → root → right)  
    - `preOrder()` (root → left → right)  
    - `postOrder()` (left → right → root)  
- **toArray()** helper to convert traversal results into an array for inspection  
- Efficient operations with average time complexity of O(log n)

## 🧠 What I Learned
- Modeling a **recursive tree** structure with node references  
- Implementing **insert**, **search**, and **delete** operations while preserving BST invariants  
- Traversing trees using **recursive algorithms** (in-order, pre-order, post-order)  
- Handling edge cases in removal (leaf, one-child, two-child nodes)  
- Understanding time complexity trade‑offs of tree operations

## 📚 Assignment Summary
This project from The Odin Project’s JavaScript curriculum guided me to:
1. Create a `Node` class with `value`, `left`, and `right` properties.  
2. Build a `BinarySearchTree` class with methods for:
   - Inserting new values  
   - Finding existing values  
   - Removing values (including re-linking subtrees)  
   - Retrieving minimum and maximum values  
3. Implement traversal methods to explore the tree in different orders.  
4. Test your tree by inserting, searching, removing, and printing traversal arrays in the console.

---

Built with ❤️ by [FestiveChicken](https://github.com/FestiveChicken)
