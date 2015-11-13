

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


        //boolean find the value in tree
        $scope.findValue = function(val, node) {

            //set current node
            var currentNode = this.root;

            //if empty return false
            if (node == null)
                return false;

            //recursive in order search (left)
            if (val < currentNode.value) {
                if (currentNode.left) {
                    return this.findValue(val, currentNode.left);
                } else {
                    return false;
                }

                //recursvie in order search (right)
            } else if (val > currentNode.value) {
                if (currentNode.right) {
                    return this.findValue(val, currentNode.right);
                } else {
                    return false;
                }
                //must be equal to root value 
            } else {
                return true;
            }

        };


        //inorder traversal, stores in array
        $scope.inOrder = function(node) {

            var array = [];
            inOrder(node.left);
            array.push(node.value);
            inOrder(node.right);

            return array;

        };

        //reverse 
        $scope.RinOrder = function (node) {

            var array = [];
            RinOrder(node.right);
            array.push(node.value);
            RinOrder(node.left);

            return array;

        };



        //connect to WEB API
    }


})();