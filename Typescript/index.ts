type heroi = {
    name: string,
    vulgo: string
};

function printObjeto(pessoa: heroi) {
    console.log("teste",pessoa)
}

printObjeto({
    name: "bruce wayne",
    vulgo: "batman"
})