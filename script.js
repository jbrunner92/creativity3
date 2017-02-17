
window.onload=function(){  
    var imagediv = document.getElementsByClassName("puzzle");
    var imgarray = new Array("image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg");
    var spot =Math.floor(Math.random()* imgarray.length);
    for(var i=0;i<imagediv.length;i++){
        imagediv[i].style.backgroundImage="url(" + imgarray[spot] + ")";
    }
}  
