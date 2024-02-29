// identifique o erro e corrija o código a baixo

// O erro foi que não estava retornando nada, precisava armazenar o valor e depois printar na tela

function verificarMaiorIdade(idade) {
    let verIdade = idade < 18 ? 'Maior de idade' : 'Menor de idade';

    console.log(verIdade);

}

verificarMaiorIdade(20);


//// Complete o código. Faça com que a variável array tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {

    // let arr = [1, 2, 3, 6, 7, 9]
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(arr)
}

orderArray();

/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
    let pessoa = {
        nome: "jhon doe",
        idade: "30",
        cidade: "New York",
    };

    const novaPessoa = { ...pessoa };

    delete novaPessoa.idade;

    console.log(novaPessoa);
}

meusDados();

// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ["cachorro", "gato", "abelha", "rato", "leão", "galinha"];

    return {
        ordemAlfabetica: animais.sort().join(", "), // Ordena e junta os elementos em uma string
        primeiro: animais[0], // Retorna o primeiro elemento
        ultimo: animais[animais.length - 1], // Retorna o último elemento
        tamanhoDaLista: animais.length, // Retorna o tamanho do array
    };
}

const infoAnimais = manipulaArray();

console.log("Ordem alfabética:", infoAnimais.ordemAlfabetica);
console.log("Primeiro animal:", infoAnimais.primeiro);
console.log("Último animal:", infoAnimais.ultimo);
console.log("Tamanho da lista:", infoAnimais.tamanhoDaLista);