import domCreate from "../helpers/domCreate";
import checkmark from "../../assets/check-bold.png";
import rejectMark from "../../assets/close-octagon.png";
import clock from "../../assets/clock-outline.png";

function createPage1() {
	const page1 = domCreate("div", ["tabcontent"], { id: "tab1" });
	const header1 = domCreate("h3", ["tab-header"]);
	header1.textContent = "Request Queue";
	// sub header
	const text1 = domCreate("p", ["tab-sub-header"]);
	text1.textContent = "display below the current list of requested songs";
	// text1.textContent +=
	// 	" *A request never guarantees a play - we'll do our best!";

	const queueDiv = domCreate("div", [], { id: "queueDiv" });

	const ULel = domCreate("ul", [], { id: "queueList" });
	// list item 1
	const listEl1 = domCreate("li", ["queue-list-item"], { id: "list-item-1" });
	const songInfoDiv1 = domCreate("div", ["song-info"]);
	const title1 = domCreate("div", ["song-title"], { id: "title1" });
	title1.textContent = "Song title";
	const artist1 = domCreate("div", ["song-artist"], { id: "artist1" });
	artist1.textContent = "Artist";
	songInfoDiv1.append(title1, artist1);
	listEl1.appendChild(songInfoDiv1);

	const statusImg1 = domCreate("img", [], {
		id: "statusImg1",
		src: checkmark,
	});
	const statusDiv1 = domCreate("div", ["queue-status"], { id: "queueStatus1" });
	statusDiv1.appendChild(statusImg1);
	listEl1.appendChild(statusDiv1);
	// list item 2
	const listEl2 = domCreate("li", ["queue-list-item"], { id: "list-item-2" });
	const songInfoDiv2 = domCreate("div", ["song-info"]);
	const title2 = domCreate("div", ["song-title"], { id: "title2" });
	title2.textContent = "Song title";
	const artist2 = domCreate("div", ["song-artist"], { id: "artist2" });
	artist2.textContent = "Artist";
	songInfoDiv2.append(title2, artist2);
	listEl2.appendChild(songInfoDiv2);

	const statusImg2 = domCreate("img", [], {
		id: "statusImg2",
		src: rejectMark,
	});
	const statusDiv2 = domCreate("div", ["queue-status"], { id: "queueStatus2" });
	statusDiv2.appendChild(statusImg2);
	listEl2.appendChild(statusDiv2);
	// list item 3
	const listEl3 = domCreate("li", ["queue-list-item"], { id: "list-item-3" });
	const songInfoDiv3 = domCreate("div", ["song-info"]);
	const title3 = domCreate("div", ["song-title"], { id: "title3" });
	title3.textContent = "Song title";
	const artist3 = domCreate("div", ["song-artist"], { id: "artist3" });
	artist3.textContent = "Artist";
	songInfoDiv3.append(title3, artist3);
	listEl3.appendChild(songInfoDiv3);

	const statusImg3 = domCreate("img", [], {
		id: "statusImg3",
		src: clock,
	});
	const statusDiv3 = domCreate("div", ["queue-status"], { id: "queueStatus3" });
	statusDiv3.appendChild(statusImg3);
	listEl3.appendChild(statusDiv3);
	// list item 4
	const listEl4 = domCreate("li", ["queue-list-item"], { id: "list-item-4" });
	const songInfoDiv4 = domCreate("div", ["song-info"]);
	const title4 = domCreate("div", ["song-title"], { id: "title4" });
	title4.textContent = "Song title";
	const artist4 = domCreate("div", ["song-artist"], { id: "artist4" });
	artist4.textContent = "Artist";
	songInfoDiv4.append(title4, artist4);
	listEl4.appendChild(songInfoDiv4);

	ULel.append(listEl1, listEl2, listEl3, listEl4);
	queueDiv.appendChild(ULel);

	page1.append(header1, text1, queueDiv);
	return page1;
}

export default createPage1;
