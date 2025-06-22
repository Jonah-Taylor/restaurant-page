import { createElement } from "./index.js";
export const loadAbout = (content) => {
    const aboutPage = createElement("div", {
        class: "about",
        children: [
            createElement("div", {
                class: "subtitle",
                text: "About Us",
            }),
            createElement("div", {
                class: "about-text",
                text: "Conjure, against all the evil that Hell can; produce, all the wickedness that mankind can; send unto them, only Yoda, we will...",
            }),
        ],
    });

    content.appendChild(aboutPage);
};
