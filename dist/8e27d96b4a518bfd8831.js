import "./css/style.scss";
import domCreate from "./js/helpers/domCreate";

const navEl = domCreate("nav", ["nav"]);
const tabLink1 = domCreate("a", ["tab-link"], { id: "tab-link-1", href: "#" });
const tabLink2 = domCreate("a", ["tab-link"], { id: "tab-link-2", href: "#" });
const tabLink3 = domCreate("a", ["tab-link"], { id: "tab-link-3", href: "#" });
const tabLink4 = domCreate("a", ["tab-link"], { id: "tab-link-4", href: "#" });
navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);

const contentEl = document.getElementById("content");
contentEl.appendChild(navEl);
