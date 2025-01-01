let introductionVisible = false;

const hideElement = (element) => {
	document.querySelector(element).style.display = 'none';
}
const showElement = (element) => {
	document.querySelector(element).style.display = 'block';
}

function clickBusinessCard() {
	hideElement('.business-card')
	showElement('.introduction')
}

function clickIntroduction() {
	hideElement('.introduction')
	showElement('.business-card')
}
