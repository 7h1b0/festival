const searchParams = new URLSearchParams(window.location.search);
const currency = searchParams.get('currency');
const festivalName = searchParams.get('name');

const currencyField = document.getElementById('currency');
const valueLabel = document.getElementById('value');
const nameField = document.getElementById('festivalName');

currencyField.value = currency;
nameField.value = festivalName;

valueLabel.insertAdjacentHTML('afterbegin', currency);
