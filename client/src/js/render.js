import createNavMenu from "./components/navMenu";
import createPage1 from "./pages/page1";
import createPage2 from "./pages/page2";
import createPage3 from "./pages/page3";
import createPage4 from "./pages/page4";

function renderApp() {
	const navMenu = createNavMenu();
	const page1 = createPage1();
	const page2 = createPage2();
	const page3 = createPage3();
	const page4 = createPage4();
	// final content append
	const contentEl = document.getElementById("content");
	contentEl.append(navMenu, page1, page2, page3, page4);
}
export default renderApp;
