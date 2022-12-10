function multiplier (a,b){
    let c = 0;
    let i = 1 ; 
    while (i <= a){
        c = c + b ;
        i = i + 1;
    }

    return c ;
}
console.log("respuesta 1")
console.log(multiplier(6,6));


const numbers = [1,2,3,4,5,99,6,7,8];

var bigger = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > bigger){
        bigger = numbers[index];
    }
}
console.log("respuesta 2")
console.log(bigger);

const alldates = [undefined, null, 40, 'horse', 30, 'house', null, 'tree', false, 0 , 0.1 , 'undefined'];


function somedates(array){ 
    var newArray = [];
    for(var index = 0; index < array.length; index++){
        if(typeof(array[index]) === 'string' || typeof(array[index]) === 'number' && array[index] != 0){
            newArray.push(array[index])
        }
    }
    
    return newArray;
}

console.log("respuesta 3 ")
console.log(somedates(alldates));



function flatter(array){
    var flattened = array.flat();
    return flattened;
}

const arr = [[1,2], [[3,4]], [5]];

console.log("respuesta 4")
console.log(flatter(arr));



let words = "dog cat dog cat dog cat dog cat dog";

function truncateStr(str){ // saca punto y comas de un string, convierte todo a minuscula, y saca tildes.
    var minuscula = str.toLowerCase()
    var string = minuscula.replace(/,/g, "");
    var newStr = string.replace(/\./g, '');
    var newString = newStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return newString;
}

function masRepetido(string){ //Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.
    var newString = this.truncateStr(string);
    var array = newString.split(" ");
    var obj = {}
    array.forEach(function(s){  // pone en el objeto la key: es cada palabra, y valor: es el numero de repeticion
        obj[s] = (obj[s] || 0) + 1;
      });
    
    var masRepeticiones = Math.max(...(Object.values(obj)))  // obtiene el valor mas alto
    var stringRepetido = Object.keys(obj).find(key => obj[key] === masRepeticiones)  //obtiene la key del valor mas alto
    var newObj = {}
    newObj[stringRepetido] = masRepeticiones; // armo el nuevo objeto con el string y el numero de repeticiones que tiene que retornar
    
    return newObj
}

console.log("respuesta 5 ")
console.log(masRepetido(words));

let palindromo = "Amó la paloma";

let nopalindromo = "hola";

function esPalindromo(string){ //Verificar si un string es un palíndromo.
    var str = this.truncateStr(string);
    var newStr = str.replace(/ /g, "")
    if(string.length === 1 || string.length === 0){
        return 'Si es un palindromo'
    }
    else if(newStr[0] === newStr[newStr.length-1]){
        var primer = newStr.slice(1)
        var ultimo = primer.slice(0, -1)
        return this.esPalindromo(ultimo)
        
    }
    else
    return 'No es un palidromo'
    
}

console.log("respuesta 6 ")
console.log(esPalindromo(nopalindromo));
