const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
	if (menu.classList.contains("hidden") && window.innerWidth < 768) {
		menu.classList.remove("hidden");
		menu.classList.add(
			"flex",
			"justify-space-between",
			"text-center",
			"bg-yellow-600",
			"w-full",
			"absolute",
			"top-16"
		);
	}
});

menu.addEventListener("click", () => {
	menu.classList.add("hidden");
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		menu.classList.add("hidden");
		menu.classList.remove(
			"flex",
			"justify-space-between",
			"text-center",
			"bg-yellow-600",
			"w-full",
			"absolute",
			"top-16"
		);
	}
});
