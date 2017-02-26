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

        $scope.randomizeImgPositions();
    };

    $scope.randomizeImgPositions = function() {
        var numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9]

        for (var  i = numbers.length; i > 0 ; i--) {
            var random = numbers.splice(Math.floor(Math.random() * (i)), 1)[0];
            $scope.imgPcs[i - 1].position = random;
        }
    }


    $scope.init = function() {
        var imagediv = document.getElementsByClassName("puzzle");
        var imgarray = new Array("image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg");
        var spot = Math.floor(Math.random()*imgarray.length);
        for(var i=0;i<imagediv.length;i++){
            imagediv[i].style.backgroundImage="url(" + imgarray[spot] + ")";

        }

        $scope.onDropComplete = function(data, event) {
            console.log(data, event, this);
        }

        $scope.createPuzzle();
    };

})
