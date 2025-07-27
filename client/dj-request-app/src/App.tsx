// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import SiteWrapper from "./components/SiteWrapper.tsx";
import RequestQueueItem from "./components/RequestQueueItem.tsx";
import "./App.css";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<SiteWrapper>
				{/* Site Title */}
				<div className="content">
					<h1>Request Queue</h1>
					<div className="request-queue-container">
						<div className="request-queue-tabs">
							<div>Current</div>
							<div>Past</div>
						</div>

						<div className="request-queue">
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
							<RequestQueueItem />
						</div>
					</div>

					<button className="request-button">Make Request</button>
				</div>
			</SiteWrapper>
		</>
	);
}

export default App;
