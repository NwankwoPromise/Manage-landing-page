const iconText=document.querySelector('.icon-text')
console.log(iconText)
const scrollDown = document.querySelector('.scroll-down')





setTimeout(function(){
    iconText.classList.remove('hidden-text')
}, 1000)

setTimeout(function(){
    scrollDown.style.visibility = "visible"
    
}, 3500)

