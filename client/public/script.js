let inputRus1 = document.getElementById('number-rus1');
let inputRus2 = document.getElementById('number-rus2');
let inputForeign = document.getElementById('number-foreign');

inputRus1.focus();

let rusLettersChange = ['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х'];
let engLettersChange = ['A', 'B', 'E', 'K', 'M', 'H', 'O', 'P', 'C', 'T', 'Y', 'X'];
let digitsCheck = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let engLettersFullCheck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let valueRus1 = '';
let valueRus2 = '';
let valueForeign = '';
inputRus1.value = valueRus1;
inputRus2.value = valueRus2;
inputForeign.value = valueForeign;

function changeInputRus1() {
   let value = inputRus1.value.toUpperCase().split('');
   if (value.length > 6) {
      inputRus2.focus();
      return inputRus1.value = valueRus1;
   };
   let newValue = value.map((el, index) => {
      for (let i = 0; i < rusLettersChange.length; i++) {
         if (el === rusLettersChange[i]) el = engLettersChange[i];
      }
      for (let i = 0; i < engLettersChange.length && (index == 0 || index > 3); i++) {
         if (el === engLettersChange[i]) return el;
      }
      for (let i = 0; i < digitsCheck.length && (index > 0 && index < 4); i++) {
         if (el === digitsCheck[i]) return el;
      }
   })
   valueRus1 = newValue.join('');
   inputRus1.value = valueRus1;
   if (inputRus1.value.length === 6) {
      inputRus2.focus();
   };
}
function changeInputRus2() {
   let value = inputRus2.value.split('');
   if (value.length > 3) {
      return inputRus2.value = valueRus2;
   };
   let newValue = value.map(el => {
      for (let i = 0; i < digitsCheck.length; i++) {
         if (el === digitsCheck[i]) return el;
      }
   })
   valueRus2 = newValue.join('');
   inputRus2.value = valueRus2;
}
function changeInputEng() {
   let value = inputForeign.value.toUpperCase().split('');
   if (value.length > 9) {
      return inputForeign.value = valueForeign;
   };
   let newValue = value.map(el => {
      for (let i = 0; i < engLettersFullCheck.length; i++) {
         if (el === engLettersFullCheck[i]) return el;
      }
   })
   valueForeign = newValue.join('');
   inputForeign.value = valueForeign;
}

const { russianNumbers, foreignNumbers } = data;
// тестовый вывод информации об автомобиле, без поиска
const one = russianNumbers[1];

const mainScreen = document.querySelector('main');
function checkResult(info) {
   const resultScreen = document.createElement('div');
   resultScreen.className = "resultScreen";
   resultScreen.innerHTML = `
   <h4>Результат проверки</h4>
   <div>
      <p>${info.kodReg ? info.number + ' ' + info.kodReg : info.number}</p>
      <p>${(info.brand ? `${info.brand}` : '') + ' ' + (info.model ? `${info.model}` : '')}</p>
      ${info.color ? `<p>Цвет: ${info.color.toLowerCase()}</p>` : ''}
      <p>Подъезд: ${info.entrance ? info.entrance : 'не указан'}</p>
   </div>
   <input type="button" value="Закрыть" onclick="document.querySelector('.resultScreen').remove()">
   `
   mainScreen.appendChild(resultScreen);
}

function checkInput() {
   if (inputRus1.value) {
      alert(inputRus1.value)
   } else if (inputForeign.value) {
      alert(inputForeign.value)
   } else {
      alert('Введите номер')
   }
}