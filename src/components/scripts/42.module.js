export function addButton() {
	const button = document.createElement("button");
	button.textContent = "Ответ на главный вопрос всей жизни";
	button.className = "button";
	document.body.prepend(button);
}

export function addPic(url) {
	const imgHTML = document.createElement("img");
	imgHTML.className = "pic";
	imgHTML.src = url;
	document.body.prepend(imgHTML);
}