const navigationBar = () => {
	const burger = document.querySelector("#burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.4s ease forwards ${index / 8 + 0.2}s`;
			}
		});
	});

	burger.addEventListener("click", () => {
		burger.classList.toggle("toggleClass");

		if (nav.style.display === "flex") {
			nav.style.display = "none";
		} else {
			nav.style.display = "flex";
		}
	});
}

navigationBar();