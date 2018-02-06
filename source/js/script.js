'use strict'

var goods = document.querySelector('.goods__container')
var input = document.querySelectorAll('.good-item__input');

var getInputSelect = function(elem) {
	var parent = elem.parentNode;
	var textSelected = parent.querySelector('.good-item__subtitle--selected');
	var textDefault = parent.querySelector('.good-item__subtitle--default');
	
	textDefault.classList.toggle('hidden');
	textSelected.classList.toggle('hidden');
	
}

var getInputDisable = function (elem) {
	var parent = elem.parentNode;
	var textDisabled = parent.querySelector('.good-item__subtitle--disabled');
	var textDefault = parent.querySelector('.good-item__subtitle--default');

	textDefault.classList.toggle('hidden');
	textDisabled.classList.toggle('hidden');

}

input.forEach(function (item) {
	if (item.checked) {
		getInputSelect(item);
	} else if (item.disabled) {
		getInputDisable(item);
	}
});


goods.addEventListener('change', function () {
	getInputSelect(event.target);
});



