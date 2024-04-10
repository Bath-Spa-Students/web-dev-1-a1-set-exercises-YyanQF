// Get the elements from the DOM
const litersInput = document.getElementById('liters');
const priceInput = document.getElementById('price');
const calculateButton = document.getElementById('calculate');
const totalParagraph = document.getElementById('total');

calculateButton.addEventListener('click', () => {
const liters = parseFloat(litersInput.value);
const pricePerLiter = parseFloat(priceInput.value);
if (isNaN(liters) || isNaN(pricePerLiter)) {
    alert('Please enter valid numbers in the input fields.');
    return;
}
  const totalPrice = liters * pricePerLiter;
totalParagraph.textContent = `Total price: $${totalPrice.toFixed(2)}`;
});