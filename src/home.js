import yodaImg from "../assets/yoda.jpg";
import { createElement } from "./index.js";

export const loadHome = (content) => {
    const homePage = createElement("div", {
        class: "home",
        children: [
            createElement("div", {
                class: "subtitle",
                text: "Home",
            }),
            createElement("div", {
                class: "home-text",
                text: "The best restaurant, this is. Pay me, you should. Target all fire on that battle cruiser! Steal sausages, I do in my freetime.",
            }),
            createElement("img", {
                class: "yoda-img",
                attrs: { src: yodaImg, alt: "yoda" },
            }),
        ],
    });

    content.appendChild(homePage);
};
