function noSymbol(array){
  if(array.length === 2){
    return array[1];
  }else if(array.length === 1){
    return array[0];
  }
}

function percentCalc(total, percent){
  percent = percent / 100;
  return (total * percent).toFixed(2);
}
