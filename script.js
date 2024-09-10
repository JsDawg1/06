const share = document.querySelector(".share");
const socialmedia = document.querySelector(".socialmedia");
const face = document.querySelector(".face");
const x = document.querySelector(".x");
const pin = document.querySelector(".pin");


share.addEventListener("mouseenter", ()=>{
    socialmedia.style.display = "flex"
})
share.addEventListener("mouseleave", ()=>{
     socialmedia.style.display = ""
})

face.addEventListener("click", ()=>{
    window.open("https://www.facebook.com", "_blank");
})
x.addEventListener("click", ()=>{
    window.open("https://www.x.com", "_blank")
})
pin.addEventListener("click", ()=>{
    window.open("https://www.pinterest.com", "_blank")
})
