class Node {
    constructor (data = null, left = null, right =  null) {
        data = this.data
        left = this.left
        right = this.right
        console.log(this)
    }
}

class Tree {
    constructor (root = null) {
        root = this.root
    } 
}

const buildTree = (array) => {
    //Sorting array
    array.sort((a, b) => a - b)
    array = array.filter((item, index) => array.indexOf(item) === index)
    //Calculate middle and make it a tree node
    middle = Math.round(array.length/2)
    if (array.length == 1) {
        const middleNode = new Node(middle)
        return middle
    }
    leftArray = array.slice(0, array.length/2)
    rightArray = array.slice(array.length/2, array.length)
    new Node(middle, buildTree(leftArray, buildTree(rightArray)))    
    return middle
}