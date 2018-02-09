'use strict';

(function () {
	var goods = document.querySelector('.goods__container');
	var inputs = document.querySelectorAll('.good-item__input');

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

	var addListener = function(elem) {
		var idElement = elem.id;
		var labelChecked = document.querySelector('.good-item__label[for=' + idElement + ']');
		var content = document.querySelector('.good-item__label[for=' + idElement + '] ~ .good-item__content');

		var handler = function () {
			content.classList.add('good-item__content--hover');
			labelChecked.removeEventListener('mouseout', handler);
		};

		labelChecked.addEventListener('mouseout', handler);
	}

	Array.prototype.forEach.call(inputs, function (item) {
		if (item.checked) {
			getInputSelect(item);
		}
		if (item.disabled) {
			getInputDisable(item);
		}
	});


	goods.addEventListener('change', function (event) {
		getInputSelect(event.target);
		addListener(event.target);
	});
})();
