var max = -1;
var sum = 0;
var deepestLeavesSum = function (root) {
  max = maxDepth(root);
  calculateSum(root, 1);
  return sum;
}

var maxDepth = function(node)  
{  
    if (node == null)  
        return 0;  
    else
    {  
        let left = maxDepth(node.left);  
        let right = maxDepth(node.right);  
        if (left > right)  
            return(left + 1);  
        else return(right + 1);  
    }  
}  
var calculateSum = function(node, level){
    if(node == null)
        return null;
    if(level > max){
        sum = node.val;
    }else if(level == max){
        sum += node.val;
    }
    calculateSum(node.left, level +1);
    calculateSum(node.right, level +1);
    
};

console.log(deepestLeavesSum([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]));