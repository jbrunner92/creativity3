var app = angular.module('app', ['ngDraggable']);

app.controller('puzzleCtrl', function puzzleController($scope) {
    $scope.imgs = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

    $scope.createPuzzle = function() {
        $scope.img = $scope.imgs[Math.floor(Math.random()* $scope.imgs.length)];

        var i = 1;
        $('.puzzle').each(function () {
            $(this).attr('position', i);
            $(this).css('backgroundImage', "url(" + $scope.img + ")");
            i++;
        });
    };

    $scope.randomizeImgPositions = function() {
        //code to randomly rearrange the <img>'s so their position='i' is not the same as their div parent
    }

    //Some code to be able to drag and drop...

    $scope.createPuzzle();
    $scope.randomizeImgPositions();
});
