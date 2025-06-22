import Sausage from "./../assets/sausage.jpg";
import Stick from "./../assets/stick.jpg";
import Soup from "./../assets/soup.jpg";

import { createElement } from "./index.js";

export const loadMenu = (content) => {
    const menuPage = createElement("div", {
        class: "menu",
        children: [
            createElement("div", {
                class: "subtitle",
                text: "Menu",
            }),
            createElement("div", {
                class: "menu-option",
                text: "Luke's Sausage --- 4 Worms",
            }),
            createElement("img", {
                class: "menu-img",
                attrs: { src: Sausage, alt: "Sausage" },
            }),
            createElement("div", {
                class: "menu-option",
                text: "Swamp Stick --- 1000 Worms",
            }),
            createElement("img", {
                class: "menu-img",
                attrs: { src: Stick, alt: "Stick" },
            }),
            createElement("div", {
                class: "menu-option",
                text: "Slime Soup --- FREE",
            }),
            createElement("img", {
                class: "menu-img",
                attrs: { src: Soup, alt: "Soup" },
            }),
        ],
    });

    content.appendChild(menuPage);
};
