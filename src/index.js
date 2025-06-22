import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

export function createElement(tag, options = {}) {
    const el = document.createElement(tag);

    if (options.class) {
        el.classList.add(
            ...(Array.isArray(options.class) ? options.class : [options.class]),
        );
    }

    if (options.attrs) {
        for (const [key, value] of Object.entries(options.attrs)) {
            el.setAttribute(key, value);
        }
    }

    if (options.text) {
        el.textContent = options.text;
    }

    if (options.children) {
        options.children.forEach((child) => {
            el.appendChild(
                typeof child === "string"
                    ? document.createTextNode(child)
                    : child,
            );
        });
    }

    return el;
}

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
    loadHome(content);

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
