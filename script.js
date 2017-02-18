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

    $scope.createPuzzle();
});
