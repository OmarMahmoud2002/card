var imgItems=Array.from(document.getElementsByClassName('img-item'));
var showPaneer=document.querySelector('.panner')
var imgPanner=document.querySelector(".panner-item")
var curruntIndex=0;
var nextPhoto=document.getElementById('next')
var prevPhoto=document.getElementById('prev')
var exit=document.getElementById('xx')

for(var i=0;i<imgItems.length;i++){
    imgItems[i].addEventListener('click',function(e){
        curruntIndex=imgItems.indexOf(e.target);
        var srcImg=e.target.getAttribute('src')
        showPaneer.classList.remove('d-none')
        imgPanner.style.backgroundImage=`url(${srcImg})`
    })
}

function nextItem(){
    curruntIndex++;
    if(curruntIndex==imgItems.length){
        curruntIndex=0
    }
    var imgSrc=imgItems[curruntIndex].getAttribute('src');
    imgPanner.style.backgroundImage=`url(${imgSrc})`

}
nextPhoto.addEventListener('click',nextItem)

function prevItem(){
    curruntIndex--;
    if(curruntIndex==-1){
        curruntIndex=imgItems.length -1
    }
    var imgSrc=imgItems[curruntIndex].getAttribute('src');
    imgPanner.style.backgroundImage=`url(${imgSrc})`

}
prevPhoto.addEventListener('click',prevItem)

function close(){
        showPaneer.classList.add('d-none')


    }

exit.addEventListener('click',close)

document.addEventListener('keydown',function(e){
    if(e.key=="ArrowRight"){
        nextItem()
    }
    else if(e.key=="ArrowLeft"){
        prevItem()
    }
    else if(e.key=="Escape"){
        close()
    }
})


