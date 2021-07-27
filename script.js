const color1 = 'red'; 
const color2 = 'orange'; 
const color3 = 'yellow'; 
const color4 = 'green'; 
const color5 = 'blue'; 
const color6= 'indigo'; 
const color7 = 'violet'; 


/* console.log(color2); */ 

/* Эти значения никак не связаны между собой и поэтому лучше их сохранять в общей структуре, для таких случаев и придуманы массивы, создается он сдедущим образом*/ 

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 

/* теперь мы можем обращаться к элементу массива указывая райнбов колорс и в квадратных скобках указываем порядковый номер элемента начиная с нуля   */ 

console.log(rainbowColors[0]); 
console.log('The sky is' + ' ' + rainbowColors[5]+ '.'); 

/* также мы можем считывать не только элемент массива но и добавлять новый элемент массива или менять уже существующий */ 

 rainbowColors [5] = 'dark blue'; 
 rainbowColors [8] = 'indigo'; 
 console.log(rainbowColors); 

 /* Мы можем создать массив при помощи просто указания пустого массива  */ 

// const stringNumbers = []; 
// stringNumbers[0] = 'zero'; 
// stringNumbers[1] = 'one'; 
// stringNumbers[2] = 'two'; 


const stringNumbers = new Array
('zero', 'one','two'); 

 console.log(stringNumbers); 

// Lets create an array numbers 

const numbers = [34,5,32,67]; 
console.log(numbers); 

const anyItems = [4, true, new Date(), 'something']; 
console.log(anyItems);