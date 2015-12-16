var totalBill = document.getElementById('amount');
var button = document.getElementById('calculate');
var percent = document.getElementById('percent');

// calculate.addEventListener('input', function(){
//   var value = totalBill.value.split('$');
//   value = noSymbol(value);
//   var tip = percentCalc(value, percent.value);
//   document.getElementById('tip').innerHTML = 'You should tip $' + tip;
// });

totalBill.addEventListener('input', function(){
  var value = totalBill.value.split('$');
  value = noSymbol(value);
  var tip = percentCalc(value, percent.value);
  document.getElementById('tip').innerHTML = 'You should tip $' + tip;
})

percent.addEventListener('change', function(){
  var value = totalBill.value.split('$');
  value = noSymbol(value);
  var tip = percentCalc(value, percent.value);
  document.getElementById('tip').innerHTML = 'You should tip $' + tip;
})
