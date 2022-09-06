import domCreate from "../helpers/domCreate";
import checkmark from "../../assets/check-bold.png";
import rejectMark from "../../assets/close-octagon.png";
import clock from "../../assets/clock-outline.png";

function createPage1() {
	const page1 = domCreate("div", ["tabcontent"], { id: "tab1" });
	const header1 = domCreate("h3", ["tab-header"]);
	header1.textContent = "Request Queue";

	const text1 = domCreate("p");
	text1.textContent = "display below the current list of requested songs";

	const queueDiv = domCreate("div", [], { id: "queueDiv" });

	const ULel = domCreate("ul", [], { id: "queueList" });
	const listEl1 = domCreate("li", ["queue-list-item"], { id: "list-item-1" });
	listEl1.textContent = "Song title / Artist";

	const statusImg1 = domCreate("img", [], {
		id: "statusImg1",
		src: checkmark,
	});
	const statusDiv1 = domCreate("div", ["queue-status"], { id: "queueStatus1" });
	statusDiv1.appendChild(statusImg1);
	listEl1.appendChild(statusDiv1);

	const listEl2 = domCreate("li", ["queue-list-item"], { id: "list-item-2" });
	listEl2.textContent = "Song title / Artist";

	const statusImg2 = domCreate("img", [], {
		id: "statusImg2",
		src: rejectMark,
	});
	const statusDiv2 = domCreate("div", ["queue-status"], { id: "queueStatus2" });
	statusDiv2.appendChild(statusImg2);
	listEl2.appendChild(statusDiv2);

	const listEl3 = domCreate("li", ["queue-list-item"], { id: "list-item-3" });
	listEl3.textContent = "Song title / Artist";

	const statusImg3 = domCreate("img", [], {
		id: "statusImg3",
		src: clock,
	});
	const statusDiv3 = domCreate("div", ["queue-status"], { id: "queueStatus3" });
	statusDiv3.appendChild(statusImg3);
	listEl3.appendChild(statusDiv3);

	const listEl4 = domCreate("li", ["queue-list-item"], { id: "list-item-4" });
	listEl4.textContent = "Song title / Artist";

	ULel.append(listEl1, listEl2, listEl3, listEl4);
	queueDiv.appendChild(ULel);

	page1.append(header1, text1, queueDiv);
	return page1;
}

export default createPage1;
