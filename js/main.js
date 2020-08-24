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

// mob menu

let mobBurger = document.getElementById('mobBurger');
if(mobBurger) {
	let mobMenu = document.getElementById('mobMenu');

	mobBurger.onclick = function() {
		mobMenu.style.display = 'flex';
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#mobMenu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
      });

