const tabBtn1 = document.querySelector(".tab_btn1");
const tabBtn2 = document.querySelector(".tab_btn2");
const tabBtn3 = document.querySelector(".tab_btn3");
const tabBtn4 = document.querySelector(".tab_btn4");

tabBtn1.addEventListener("click", ()=>{
    document.querySelector("span").textContent = "";
    document.querySelector("span").textContent = "First";
})
tabBtn2.addEventListener("click", ()=>{
    document.querySelector("span").textContent = "";
    document.querySelector("span").textContent = "Second";
})
tabBtn3.addEventListener("click", ()=>{
    document.querySelector("span").textContent = "";
    document.querySelector("span").textContent = "Third";
})
tabBtn4.addEventListener("click", ()=>{
    document.querySelector("span").textContent = "";
    document.querySelector("span").textContent = "Fourth";
})