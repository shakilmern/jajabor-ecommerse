const shopbtn1 = document.querySelector(".shop-btn-1");
shopbtn1.addEventListener("click",function(){
    console.log(window.location.href)
    console.log("navigating to shop.html")
    window.location.href="http://127.0.0.1:5500/shop.html";
})
// const shopbtn2 = document.querySelector(".shop-btn-2");
// shopbtn1.addEventListener("click",function(){
//     console.log(window.location.href)
//     console.log("navigating to shop.html")
//     window.location.href="http://127.0.0.1:5500/shop.html";
// })
// const shopbtn2 = document.querySelector(".shop-btn-3");
// shopbtn1.addEventListener("click",function(){
//     console.log(window.location.href)
//     console.log("navigating to shop.html")
//     window.location.href="http://127.0.0.1:5500/shop.html";
// })



const firstSlid = document.getElementById("first-slide");
const secondSlid = document.querySelector("#second-slide");
const thirdSlid = document.getElementById("third-slide");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
firstSlid.style.display = "flex";
secondSlid.style.display = "none";
thirdSlid.style.display = "none";
previousBtn.addEventListener("click",function(){
    const isfirstSlidActive = getComputedStyle(firstSlid).display == "flex";
    const issecondSlidActive = getComputedStyle(secondSlid).display == "flex";
    const isthirdSlidActive = getComputedStyle(thirdSlid).display == "flex";
    console.log(isfirstSlidActive,issecondSlidActive,isthirdSlidActive)
    console.log(isfirstSlidActive)
    if(isfirstSlidActive){
        firstSlid.style.display = "none";
        secondSlid.style.display = "none";
        thirdSlid.style.display = "flex";
    }else if (isthirdSlidActive){
        thirdSlid.style.display = "none";
        secondSlid.style.display = "flex";
        firstSlid.style.display = "none";
    }else if (issecondSlidActive){
        secondSlid.style.display = "none";
        firstSlid.style.display = "flex";
        thirdSlid.style.display = "none";
    }
});

nextBtn.addEventListener("click", function () {
    if (getComputedStyle(firstSlid).display == "flex") {
        firstSlid.style.display = "none";
        thirdSlid.style.display = "none";
        secondSlid.style.display = "flex";
    } else if (getComputedStyle(secondSlid).display == "flex") {
        secondSlid.style.display = "none";
        firstSlid.style.display = "none";
        thirdSlid.style.display = "flex";
    } else if (getComputedStyle(thirdSlid).display == "flex") {
        secondSlid.style.display = "none";
        thirdSlid.style.display = "none";
        firstSlid.style.display = "flex";
    }
});
