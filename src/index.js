import "./styles.css";
import { loadHome } from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
    const home = document.querySelector("#home-tab");
    const menu = document.querySelector("#menu-tab");
    const about = document.querySelector("#about-tab");

    console.log("DOM loaded");

    home.addEventListener("click" = () => {
        loadHome();
    });
    menu.addEventListener("click" = () => {
        loadMenu();
    });
    about.addEventListener("click" = () => {
        loadAbout();
    });
});
