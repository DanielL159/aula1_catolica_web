let num = [5,8,9,3]

console.log(`nosso vetor e ${num}`);

/*num.length*///no js length e um atributo
/*num.sort()*///ordena o vetor 
console.log(`nosso vetor e ${num}`);
num.sort();

for(let pos in num){  
    console.log(num[pos]);
}

var possicao = num.indexOf(9);
console.log(`\n ${possicao}`)