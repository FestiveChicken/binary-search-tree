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
  
    rootNode.right = this.buildTree(array.slice(0, mid));
    rootNode.left = this.buildTree(array.slice(mid + 1));
  
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
      if (data > current.data) {
        current = current.left;
      } 
      else {
        current = current.right;
      }
    }

    if (data > parent.data) {
      parent.left = newNode;
    } 
    else if (data < parent.data) {
      parent.right = newNode;
    }
    else if (data == parent.data) {
      return prettyPrint(this.root);
    }
    prettyPrint(this.root);
  }

  delete(userInput, current = this.root, parent = null) {
    if (current === undefined) {
      console.log('Value not found');
      return prettyPrint(this.root);
    }
    //Case 1: Current Node is Equal to User Input
    if (userInput == current.data) {
      //Case 1: Node has no children
      if (current.right == null && current.left == null) {
        //Checks if current is to the right or left of parent node
        if (current.data == parent.right.data) {
          parent.right = null;
          return prettyPrint(this.root);
        }
        else {
          parent.left = null;
          return prettyPrint(this.root);
        }
      }
      //Case 3: Node has both children
      else if (current.right != null && current.left != null) {
        let replacement = current.right;
        if (replacement.left != null) {
          while (replacement.left != null) {
            parent = replacement;
            replacement = replacement.left;
          }
          current.data = replacement.data;
          parent.left = null;
          return prettyPrint(this.root);
        }
        current.data = replacement.data;
        current.right = null;
        return prettyPrint(this.root);

      }
      //Case 2: Node has one child
      else {
        //Checks to see if the child node is to the right
        if (current.right != null) {
          //Checks if current is to the right or left of parent node
          if (current.data == parent.right.data) {
            parent.right = current.right;
            return prettyPrint(this.root);
          }
          else {
            parent.left = current.right;
            return prettyPrint(this.root);
          }
        }
        //Checks to see if the child node is to the left
        else {
          //Checks if current is to the right or left of parent node
          if (current.data == parent.right.data) {
            parent.right = current.left;
            return prettyPrint(this.root);
          }
          else {
            parent.left = current.left;
            return prettyPrint(this.root);
          }
        }
      }

    }
    //Case 2: Current Node is Greater than User Input
    if (userInput < current.data) {
      if (current.right === null) {
        console.log('Value does not exist');
        return;
      }
      parent = current
      this.delete(userInput, current.right, parent);
    }
    //Case 3: Current Node is Less than User Input
    if (userInput > current.data) {
      if (current.left === null) {
        console.log('Value does not exist');
        return;
      }
      parent = current;
      this.delete(userInput, current.left, parent);
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
}

//Initial tree for testing
const tree = new Tree([1, 7, 4, 6, 23, 8, 9, 4, 3, 5, 7, 9, 67, 50, 30, 20, 40, 32, 34, 36])
