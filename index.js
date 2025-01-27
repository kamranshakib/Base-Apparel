const imageMain = document.getElementById('imageMain')

function changeImage(){
    if(window.innerWidth<=600){
       imageMain.src = './images/hero-mobile.jpg'
    }
    else{
         imageMain.src = './images/hero-desktop.jpg'
    }
}
window.addEventListener('resize',changeImage);
changeImage()