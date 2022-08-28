export function addButton(text) {
	const button = document.createElement("button");
	button.textContent = text;
	button.className = "button";
	document.body.prepend(button);
}