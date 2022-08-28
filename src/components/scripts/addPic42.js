export function addPic(url) {
	const imgHTML = document.createElement("img");
	imgHTML.className = "pic";
	imgHTML.src = url;
	document.body.prepend(imgHTML);
}