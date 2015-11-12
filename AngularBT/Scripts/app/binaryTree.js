

(function () {

    //controller for angularjs
    var myApp = angular.module('myApp', []);
    myApp.controller('btController', ['$scope', '$http', btController]);

    //controller fucntion
    function btController($scope, $http) {
   
        
        //node constructor 
        $scope.node = function (val) {
            this.value = val;
            this.left = null;
            this.right = null;
        };

        //constructor
        $scope.binaryTree = function() {
            this._root = null;
        };

        //insert function for bt
        $scope.binaryTree.insert = function (val) {

            //declare and set root 
            var root = this.root;

            //if there is not a root, now there is
            if (root == null) {
                this.root = new node(val);
                return;
            }

            //our current node and the insert node
            var currentNode = root;
            var insertNode = new node(val);

            //while loop for inserting node
            //while the current node isn't null
            while (currentNode) {

                //if the current node value is greater than the value being inserted, store in left child
                if (currentNode.value > val) {

                    if (currentNode.value == null) {
                        currentNode.left = insertNode;
                        return;
                    } else {
                        currentNode = currentNode.left;
                    }
                    //else store in right child
                } 

                else if (currentNode.value < val) {

                    if (currentNode.right == null) {
                        currentNode.right = insertNode;
                        return;
                    } else {
                        currentNode = currentNode.right;
                    }
               } else {
                    //it was found in the tree
                }
            }


        };


        //minimum value for node on tree
        //if orginized correctly just find left most node and return
        $scope.minValue = function(node) {
            if (node == null)
                return 0;

            if (node.left) {
                return minValue(node.left);
            }
            return node.value;

        };


        //maximum value for node on tree
        //if originzied correctly just find the right most node and return
        $scope.maxValue = function(node) {
                if (node == null)
                    return 0;

                if (node.right) {
                    return minValue(node.right);
                }
                return node.value;
        };


        //bfs

        //dfs

        //need to find ancestors, both ways

        //connect to WEB API
    }


})();