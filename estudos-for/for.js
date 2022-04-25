//for classico
for (var i = 0; i < 3; i++) {
    console.log(i);
}

// for in
var obj = {
    nome: 'João',
    sobrenome: 'Silva'
};

const arr =  ['item1', 'item2', 'item3']

for (var atributo in obj) {
    console.log(atributo);
}

for (var index in arr) {
    console.log(arr[index]);
}

//for of
var array = [0, 1, 2, 3];

for (var valor of array) {
    console.log(valor);
}
