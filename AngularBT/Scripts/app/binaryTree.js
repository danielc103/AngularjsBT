

(function () {
    'use strict';

    //controller for angularjs
    var myApp = angular.module('myApp', []);
    myApp.controller('btController', ['$scope', '$http', btController]);

    //controller fucntion
    function btController($scope, $http) {
   
       
        //node constructor 
        $scope.treeNode = function (val) {
            this.value = val;
            this.left = null;
            this.right = null;
        };

        //constructor
        $scope.binaryTree = function() {
            this._root = null;
        };

        //insert function for bt
        $scope.insert = function (val) {
            
              
            //declare and set root 
            var root = this.root;

            //if there is not a root, now there is
            if (root == null) {
                this.root = new $scope.treeNode(val);
                return 0;
            }

            //our current node and the insert node
            var currentNode = root;
            var insertNode = new $scope.treeNode(val);

            
            //while loop for inserting node
            //while the current node isn't null
            while (currentNode) {

                //if the current node value is greater than the value being inserted, store in left child
                if (currentNode.value > val) {
                    if (currentNode.left == null) {
                        currentNode.left = insertNode;
                        console.log($scope.printValues());
                        return 1;
                    } else {
                        currentNode = currentNode.left;
                    }
                    //else store in right child
                }

                else if (currentNode.value < val) {
                    if (currentNode.right == null) {
                        currentNode.right = insertNode;
                        console.log($scope.printValues());
                        return 1;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    return console.log('its in the tree');
                }
            }

        };


        //boolean find the value in tree
        $scope.findValue = function(val, currentNode) {
          
            //set current node
          // $scope.currentNode = this.root;
            if (currentNode === void 0) currentNode = this.root;
            //if empty return false
            if (val == null) {
                console.log('false null');
                return false;
            }

            if (val === currentNode.value) return true;
            if (val < currentNode.value) {
                console.log('true');
                return currentNode.left ? this.findValue(val, currentNode.left) : false;
            } else {
                console.log('true');
                return currentNode.right ? this.findValue(val, currentNode.right) : false;
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


        $scope.printValues = function() {
            $scope.innerValues = function(node) {
                return node ? $scope.innerValues(node.left).concat(node.value, $scope.innerValues(node.right)) : [];
            };
            return $scope.innerValues(this.root);
        };

        $scope.bst = $scope.binaryTree();

        //connect to WEB API
    }


})();