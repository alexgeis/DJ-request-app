import "./css/style.scss";
import domCreate from "./js/helpers/domCreate";

const navEl = domCreate("nav", ["nav"]);
const tabLink1 = domCreate("a", ["tab-link"], { id: "tab-link-1", href: "#" });
tabLink1.textContent = "Link 1";
const tabLink2 = domCreate("a", ["tab-link"], { id: "tab-link-2", href: "#" });
tabLink2.textContent = "Link 2";
const tabLink3 = domCreate("a", ["tab-link"], { id: "tab-link-3", href: "#" });
tabLink3.textContent = "Link 3";
const tabLink4 = domCreate("a", ["tab-link"], { id: "tab-link-4", href: "#" });
tabLink4.textContent = "Link 4";
navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);

const contentEl = document.getElementById("content");
contentEl.appendChild(navEl);
