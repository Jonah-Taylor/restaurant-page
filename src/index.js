import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

function deleteChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const home = document.querySelector("#home-tab");
    const menu = document.querySelector("#menu-tab");
    const about = document.querySelector("#about-tab");

    const content = document.querySelector("#content");

    let currentTab = "home";

    console.log("DOM loaded");
    loadHome();

    home.addEventListener("click", () => {
        if (currentTab !== "home") {
            deleteChildren(content);
            loadHome(content);
            currentTab = "home";
        }
    });
    menu.addEventListener("click", () => {
        if (currentTab !== "menu") {
            deleteChildren(content);
            loadMenu(content);
            currentTab = "menu";
        }
    });
    about.addEventListener("click", () => {
        if (currentTab !== "about") {
            deleteChildren(content);
            loadAbout(content);
            currentTab = "about";
        }
    });
});
