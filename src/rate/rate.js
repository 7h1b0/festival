const searchParams = new URLSearchParams(window.location.search);
const currency = searchParams.get('currency');

if (document.getElementById('currency')) {
  document.getElementById('currency').value = currency;
  document.getElementById('festivalName').value = searchParams.get('name');
  document.getElementById('value').insertAdjacentHTML('afterbegin', currency);
}
