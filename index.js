const iconText=document.querySelector('.icon-text')
console.log(iconText)
const scrollDown = document.querySelector('.scroll-down')


// function slide() {
//     page.style.transform = `translateY(${translate}%)`
// }

console.log(scrollDown)
setTimeout(function(){
    iconText.classList.remove('hidden-text')
}, 1000)

setTimeout(function(){
    scrollDown.style.visibility = "visible"
    
}, 3500)

// setTimeout(function slide() {
//     translate = -50
//     // page.style.transform = `translateY(${translate}%)`
//     mainPage.style.transform = `translateY(${translate}%)`
// }, 5000)
// setTimeout(function removePage() {
//     page.style.dis
// }, 8000)
