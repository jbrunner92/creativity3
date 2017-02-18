var app = angular.module('app', ['ngDraggable']);

app.controller('puzzleCtrl', function puzzleController($scope) {
    $scope.imgs = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    $scope.imgPcs = [];

    for (var i = 0; i < 9; i++) {
        var pzlPc = {
            position: i + 1,
            url: ''
        };

        $scope.imgPcs.push(pzlPc);
    }

    $scope.createPuzzle = function() {
        $scope.img = $scope.imgs[Math.floor(Math.random() * $scope.imgs.length)];

        $scope.imgPcs.forEach(function(imgPc) {
            imgPc.url = $scope.img;
        });
    };

    $scope.randomizeImgPositions = function() {
        //code to randomly rearrange the <img>'s so their position='i' is not the same as their div parent
    }

    //Some code to be able to drag and drop...

    $scope.createPuzzle();
    $scope.randomizeImgPositions();
});
