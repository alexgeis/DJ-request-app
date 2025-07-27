import { type ReactNode, useState } from "react";
import { Menu, X, Home, User, Settings, Mail } from "lucide-react";

interface SiteWrapperProps {
	children?: ReactNode; // 'children' can be optional
}

const SiteWrapper = ({ children }: SiteWrapperProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<nav className="navbar">
				<a
					href="#"
					className="logo"
				>
					DJ Requestorator
				</a>
				<button
					className="menu-toggle"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<Menu
						size={24}
						color={"#fafafa"}
					/>
				</button>
			</nav>

			<div
				className={`menu-overlay ${isOpen ? "open" : ""}`}
				onClick={closeMenu}
			></div>

			<div className={`mobile-menu ${isOpen ? "open" : ""}`}>
				<div className="menu-header">
					<span className="menu-title">Menu</span>
					<button
						className="close-button"
						onClick={closeMenu}
						aria-label="Close menu"
					>
						<X
							size={24}
							color={"#fafafa"}
						/>
					</button>
				</div>

				<div className="nav-links">
					<a
						href="#"
						className="nav-item"
						onClick={closeMenu}
					>
						<Home
							size={20}
							color={"#fafafa"}
						/>
						Home
					</a>
					<a
						href="#"
						className="nav-item"
						onClick={closeMenu}
					>
						<User
							size={20}
							color={"#fafafa"}
						/>
						About
					</a>
					<a
						href="#"
						className="nav-item"
						onClick={closeMenu}
					>
						<Settings
							size={20}
							color={"#fafafa"}
						/>
						Services
					</a>
					<a
						href="#"
						className="nav-item"
						onClick={closeMenu}
					>
						<Mail
							size={20}
							color={"#fafafa"}
						/>
						Contact
					</a>
				</div>
			</div>

			{children}
			{/* <div className="content">
				<h1>Your Main Content</h1>
				<p>
					This is where your page content would go. The navbar is fixed at the
					top and the hamburger menu slides in from the right when clicked.
				</p>
				<p>
					The navigation automatically hides on desktop screens (768px and
					above) where you'd typically want a different navigation style.
				</p>
			</div> */}
		</>
	);
};

export default SiteWrapper;
