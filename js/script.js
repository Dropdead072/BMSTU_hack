const inputTotalFlatSquare = document.querySelector('#total-flat-square'),
	inputLivingFlatSquare = document.querySelector('#living-flat-square'),
	inputKitchenSquare = document.querySelector('#kitchen-square'),
	inputDictanceKm = document.querySelector('#distance-km'),
	inputDictanceMin = document.querySelector('#distance-min'),
	inputPrice = document.querySelector('#price'),
	buttonCheckPrice = document.querySelector('#check-price'),
	checkboxMetro = document.querySelector('.switch1'),
	checkboxFloor = document.querySelector('.switch2'),
	checkboxBrick = document.querySelector('.switch3');
	

buttonCheckPrice.addEventListener('click', () => {
	inputPrice.value = (-28.15 + +checkboxMetro.checked*9.85 + +checkboxFloor.checked*7.58 + +checkboxBrick.checked*7.06 + +inputTotalFlatSquare.value*1.58 + +inputLivingFlatSquare.value*1.01 + +inputKitchenSquare.value*2.32 - +inputDictanceKm.value*2.91 - +inputDictanceMin.value*1.28).toFixed(2);
});