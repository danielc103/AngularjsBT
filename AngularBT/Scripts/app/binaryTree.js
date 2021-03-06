﻿

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
            $scope.r = this.root;

            
            
            //if there is not a root, now there is
            if ($scope.r == null) {
                this.root = new $scope.treeNode(val);
                $scope.inserted = true;
                $scope.add();
                return 0;
            }

            //our current node and the insert node
          $scope.currentNode = $scope.r;
           
            $scope.insertNode = new $scope.treeNode(val);
            $scope.inserted = false;
            
            //while loop for inserting node
            //while the current node isn't null
            while ($scope.currentNode) {

                //if the current node value is greater than the value being inserted, store in left child
                if ($scope.currentNode.value > Number(val)) {
                    if ($scope.currentNode.left == null) {
                        $scope.currentNode.left = $scope.insertNode;
                        $scope.inserted = true;
                        $scope.add();
                        console.log($scope.printValues());
                        console.log($scope.RprintValues());
                        break;
                    } else {
                        $scope.currentNode = $scope.currentNode.left;
                    }
                    //else store in right child
                }

                else if ($scope.currentNode.value < Number(val)) {
                    if ($scope.currentNode.right == null) {
                        $scope.currentNode.right = $scope.insertNode;
                        $scope.inserted = true;
                        $scope.add();
                        console.log($scope.printValues());
                        console.log($scope.RprintValues());
                       break;
                    } else {
                        $scope.currentNode = $scope.currentNode.right;
                    }
                } else {
                    $scope.inserted = false;
                    console.log('its in the tree');
                    break;
                }
            }

        };


        //boolean find the value in tree
        $scope.findValue = function(val) {
            $scope.found = false;
            $scope.current = this.root;

            while (!$scope.found && $scope.current) {
                if (Number(val) < $scope.current.value) {
                    $scope.current = $scope.current.left;
                }else if (Number(val) > $scope.current.value) {
                    $scope.current = $scope.current.right;
                } else {
                    $scope.found = true;
                }
            }
            return console.log($scope.found);

        };



        $scope.printValues = function() {
            $scope.innerValues = function(node) {
                return node ? $scope.innerValues(node.left).concat(node.value, $scope.innerValues(node.right)) : [];
            };
           
            return $scope.innerValues(this.root);
        };

        $scope.RprintValues = function () {
            $scope.innerValues = function (node) {
                return node ? $scope.innerValues(node.right).concat(node.value, $scope.innerValues(node.left)) : [];
            };
            return $scope.innerValues(this.root);
        };


        $scope.ancestors = function (val) {

            $scope.found = false;
            $scope.current = this.root;

            while (!$scope.found && $scope.current) {
                if (Number(val) < $scope.current.value) {
                    $scope.current = $scope.current.left;
                } else if (Number(val) > $scope.current.value) {
                    $scope.current = $scope.current.right;
                } else {
                    $scope.found = true;
                }
            }
           

        };


        $scope.bst = $scope.binaryTree();
        //$scope.newTree = JSON.stringify($scope.bst);
        

        //get all
        $http.get('/api/bt/').success(function(data) {
            $scope.trees = data;
        }).error(function() {
            $scope.error = "error loading";
        });

        //connect to WEB API
        $scope.add = function() {
            $http.post('/api/bt/', this.newTree).success(function(data) {
                alert("added");
                $scope.trees.push(data);
            }).error(function(data) {
                $scope.error = "can't add tree";
            });
        };


    }


})();