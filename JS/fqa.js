const fqas = [...document.querySelectorAll(".question")];
// question--active

fqas.forEach((question) => {
	question.addEventListener("click", () => {
		question.classList.toggle("question--active");
	});
});
