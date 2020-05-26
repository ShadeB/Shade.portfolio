const btnClicked = () => {
	let navToggle = document.querySelector('.nav-button');

	const navActive = () => {
		let navLinks = document.querySelector('.nav__links');
		navLinks.classList.toggle('active');
		navToggle.classList.toggle('nav-clicked');
	};

	navToggle.addEventListener('click', navActive);
};

btnClicked();
