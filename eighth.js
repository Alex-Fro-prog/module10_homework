let myMap = new Map();
myMap.set('весна', 'март');
myMap.set('лето', 'июнь');
myMap.set('осень', 'сентябрь');
myMap.set('зима', 'декабрь');

for (let entry of myMap) {
  console.log('Ключ - ' + entry[0] + ', ' + 'Значение - ' + entry[1]);
}