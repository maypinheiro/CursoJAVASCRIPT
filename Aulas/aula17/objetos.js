let amigo = {
    nome: 'jose',
    peso:'85',
    sexo:'M',
    engordar (p=0) {
        this.peso += p
}

}

amigo.engordar ()
console.log  (`${amigo.nome} pesa  ${amigo.peso} kg`)
// verificar o pq esta adicionando o 1 no final.