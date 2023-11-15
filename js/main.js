const hamburger_menu_btn = document.querySelector(".hamburger_menu_btn");
const nav_list = document.querySelector(".nav_list");
const close_btn = document.querySelector(".close_btn");


window.addEventListener("resize", () => {
    if (innerWidth > 768) {
        hamburger_menu_btn.classList.remove("hamburger_menu_btn_active");
        nav_list.classList.remove("nav_list_active");
    }
});

hamburger_menu_btn.addEventListener("click", () => {
    hamburger_menu_btn.classList.add("hamburger_menu_btn_active");
    nav_list.classList.add("nav_list_active");
});

close_btn.addEventListener("click", () => {
    nav_list.classList.remove("nav_list_active");
});