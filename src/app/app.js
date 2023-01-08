const searchParams = new URLSearchParams(window.location.search);
const currency = searchParams.get('currency');
const festivalName = searchParams.get('name');

const currencyInput = document.getElementById('currency');
const eurInput = document.getElementById('eur');

const rate =
  Number(searchParams.get('eur')) / Number(searchParams.get('value'));

const numberFormat = new Intl.NumberFormat(navigator.language, {
  style: 'decimal',
  maximumFractionDigits: 2,
});

const addlabel = (targetElement, currencySource, currencyTarget, rate) => {
  const currencyNode = document.createElement('p');
  const formatNode = document.createElement('small');
  const insert = 'afterbegin';
  currencyNode.innerText = currencySource;
  formatNode.innerText = `1 ${currencySource} = ${numberFormat.format(
    rate,
  )} ${currencyTarget}`;

  targetElement.insertAdjacentElement(insert, formatNode);
  targetElement.insertAdjacentElement(insert, currencyNode);
};

const round = (value) => Math.round(value * 100) / 100;

document.getElementById('title').innerText = festivalName;
document.getElementById('share').addEventListener('click', () => {
  if (!!navigator.share) {
    navigator.share({
      text: festivalName,
      url: window.location.toString(),
    });
  } else {
    navigator.clipboard.writeText(window.location.toString());
  }
});

currencyInput.addEventListener('input', (e) => {
  eurInput.value = round(e.target.valueAsNumber * rate);
});

eurInput.addEventListener('input', (e) => {
  currencyInput.value = round(e.target.valueAsNumber / rate);
});

addlabel(document.getElementById('source'), currency, 'EUR', rate);
addlabel(document.getElementById('target'), 'EUR', currency, 1 / rate);
