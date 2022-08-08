function activateTab(event) {
	// Create the tab content ID by altering the incoming tab link ID
	// input: "tab-link-1"  =>  output: "tab1"
	const id = `tab${event.target.id.split("-")[2]}`;

	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i += 1) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tab-link" and remove the class "active"
	const tablinks = document.getElementsByClassName("tab-link");
	for (let i = 0; i < tablinks.length; i += 1) {
		tablinks[i].classList.remove("active");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	const activeTab = document.getElementById(id);
	activeTab.style.display = "block";
	activeTab.classList.add("active");
}

export default activateTab;
