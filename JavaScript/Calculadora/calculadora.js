function calculadora() {
    const operacao = Number(prompt("Escolha uma operação: \n 1- Soma (+) \n 2- Subtração (-) \n 3- Divisão (/)"))

    if (!operacao || operacao >= 4) {
        alert("Opção inválida!")
        calculadora();
    }

    let n1 = Number(prompt("Digite o primeiro número: "));
    let n2 = Number(prompt("Digite o segundo número: "));
    let resultado;

    if (!n1 || !n2) {
        alert("Parâmetros inválidos!")
        calculadora();
    }

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }

    function divisao() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt("Deseja fazer outra operação?\n 1- Sim \n 2-Não");
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert("Até logo!")
        } else {
            alert("Opção inválida!")
            novaOperacao();
        }

    }

    // if (operacao == 1) {
    //     soma();
    // } else if (operacao == 2) {
    //     subtracao();
    // } else if (operacao == 3) {
    //     divisao();
    // }

    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            divisao();
    }
}

calculadora();