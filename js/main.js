let burgerTwo = document.getElementById('burgerTwo');
if(burgerTwo) {
	let menuBlock = document.getElementById('menuBlock');
	let closeTwo = document.getElementById('closeTwo');

	burgerTwo.onclick = function() {
		menuBlock.style.right = '0';
	}

	closeTwo.onclick = function() {
		menuBlock.style.right = '-1000px';
	}
}