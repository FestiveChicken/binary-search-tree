class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
class Tree {
  constructor(array) {
    this.root = this.buildTree(this.sortArray(array));
    prettyPrint(this.root);
  }
  
  sortArray(array) {
      const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);
      return sortedUniqueArray;
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }
  
    const mid = Math.floor(array.length / 2);
    const rootNode = new Node(array[mid]);
  
    rootNode.left = this.buildTree(array.slice(0, mid));
    rootNode.right = this.buildTree(array.slice(mid + 1));
  
    return rootNode;
  }
    
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } 
      else {
        current = current.right;
      }
    }

    if (data < parent.data) {
      parent.left = newNode;
    } 
    else if (data > parent.data) {
      parent.right = newNode;
    }
    else if (data == parent.data) {
      return prettyPrint(this.root)
    }
    prettyPrint(this.root)
  }

  delete(data) {
    let parent = this.root;
    //if data is equal to the root node 
    if (parent.data === data) {
      let current = parent.right;
      while (current.left !== null) {
        parent = current;
        current = current.left;
      }
      parent.left = null;
      current.left = this.root.left;
      current.right = this.root.right;
      this.root = current;
      prettyPrint(this.root);
    }

    if (parent.data < data) {
      let current = parent.right;
      while (current != data) {
        if (current.left === null) {
          
        }
        parent = current
        current = current.left
        
      }
    }

    if (parent.data > data) {
      let current = parent.left;
    }
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

//Initial tree for testing
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
