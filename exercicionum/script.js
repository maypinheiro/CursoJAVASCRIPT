let  num = document.querySelector ("input#fnum")
let lista = document.querySelector ("select#flista")
let res = document.querySelector ('div#res')
let valores = []


function isNumero (n) {
     if (Number(n)>=1 && Number(n)<=100) {
         return true
     } else {
         return false
     }

 }

function inLista(n, l) {
     if (l.indexOf(Number (n)) != -1) {
          return true 

          } else {
              return false
          }
     }


function adicionar ()  {
    if (isNumero(num.value)&& !inLista(num.value,valores)) {
        valores.push(Number(num.value)) // Numero adicionado no Vetor
        let item = document.createElement ('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild (item)
        res.innerHTML= ''

    } else {
        window.alert (` Valor invalido ou já encontrado na Lista.`)
    }
    num.value ='' // para apagar apos escrever um número
    num.focus ()  // para voltar o foco 
}

function finalizar() {
    if (valores.length ==0) {
        window.alert (`Adicione valores antes de FINALIZAR`)

        }else { 
            let tot = valores.length
            let maior =valores [0]
            let menor =valores [0]
            let soma = 0
            let media= 0
            for (let pos in valores) {
                soma += valores [pos]
                if (valores [pos] > maior) 
                    maior =valores[pos] 
                if (valores[pos]< menor )
                     menor =valores [pos]
            }
            media = soma/tot
            res.innerHTML= ''
            res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados</p>`
            res.innerHTML += ` O maior valor informado foi ${maior}`
            res.innerHTML += `<p> O menor valor Informado foi </p>`
            res.innerHTML += ` Somando todos os valores temos ${soma }`
            res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`

            
    }



}