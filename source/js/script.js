'use strict'

var goods = document.querySelector('.goods__container')
var inputDisabled = document.querySelector('.good-item__input:disabled');
var inputChecked = document.querySelector('.good-item__input:checked');


if (inputDisabled) {
	var parent = inputDisabled.parentNode;
	var textDefault = parent.querySelector('.good-item__subtitle--default');
	var textDisabled = parent.querySelector('.good-item__subtitle--disabled');
	
	textDisabled.classList.remove('hidden');
	textDefault.classList.add('hidden');
}

var getChecked = function() {
	if (inputChecked) {
		var parent = inputChecked.parentNode;
		var textDefault = parent.querySelector('.good-item__subtitle--default');
		var textSelected = parent.querySelector('.good-item__subtitle--selected');

		textDefault.classList.add('hidden');
		textSelected.classList.remove('hidden');
	}
}();

goods.addEventListener('change', function () {
	var parent = event.target.parentNode;
	var textDefault = parent.querySelector('.good-item__subtitle--default');
	var textSelected = parent.querySelector('.good-item__subtitle--selected');

	textDefault.classList.toggle('hidden');
	textSelected.classList.toggle('hidden');
})

