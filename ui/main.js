window.onload=()=> {
document.getElementById("toggleNav").addEventListener("click", ()=>{
    const show = document.querySelector(".header-nav ul");
    show.classList.toggle("open");
});
}