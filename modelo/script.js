
function calcular () {
    var nn1 = window.document.getElementById ('n1')
    var tab = window.document.getElementById ('seltab')

    if (nn1.value.length ==0) {
        window.alert ( ` Digite um número`)


    } else {
        var nnn1 = Number (nn1.value)
        var c= 1
        tab.innerHTML =''  // Toda vez que for mostrar a tabuada ele limpa o campo.
        while (c <=10) {
            var item = window.document.createElement('option')
            item.text = `${nnn1} x ${c} = ${nnn1*c}`
            tab.appendChild (item)
            c++
        }

    }
    

}

