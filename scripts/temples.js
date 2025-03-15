document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified : " + document.lastModified;

const menuIcon = document.getElementById("menuIcon");
let menuList = document.getElementById("menuList");

menuIcon.addEventListener("click", function () {
    menuList.className.toggle("active");
});