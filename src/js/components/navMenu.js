import domCreate from "../helpers/domCreate";

function activateTab(event) {
	// Create the tab content ID by altering the incoming tab link ID
	// input: "tab-link-1"  =>  output: "tab1"
	const id = `tab${event.target.id.split("-")[2]}`;
	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i += 1) {
		tabcontent[i].style.display = "none";
		tabcontent[i].classList.remove("active");
	}

	// Get all elements with class="tab-link" and remove the class "active"
	const tablinks = document.getElementsByClassName("tab-link");
	for (let i = 0; i < tablinks.length; i += 1) {
		tablinks[i].classList.remove("active");
	}
	// add "active" class to selected link
	event.target.classList.add("active");
	// Show the current tab, and add an "active" class to the button that opened the tab
	const activeTab = document.getElementById(id);
	activeTab.style.display = "block";
	activeTab.classList.add("active");
}

function createNavMenu() {
	const tabLink1 = domCreate("a", ["tab-link"], {
		id: "tab-link-1",
		href: "#",
	});
	tabLink1.textContent = "Link 1";
	const tabLink2 = domCreate("a", ["tab-link"], {
		id: "tab-link-2",
		href: "#",
	});
	tabLink2.textContent = "Requests";
	const tabLink3 = domCreate("a", ["tab-link"], {
		id: "tab-link-3",
		href: "#",
	});
	tabLink3.textContent = "Link 3";
	const tabLink4 = domCreate("a", ["tab-link"], {
		id: "tab-link-4",
		href: "#",
	});
	tabLink4.textContent = "Settings";
	// add event listener to all tab links
	tabLink1.addEventListener("click", activateTab);
	tabLink2.addEventListener("click", activateTab);
	tabLink3.addEventListener("click", activateTab);
	tabLink4.addEventListener("click", activateTab);
	// create nav menu and append
	const navEl = domCreate("nav", ["nav"]);
	navEl.append(tabLink1, tabLink2, tabLink3, tabLink4);
	return navEl;
}
export default createNavMenu;
