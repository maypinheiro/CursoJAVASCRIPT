

// eu quero que ele vai do 1 n1 ate n2 pulando de n3

function calcular () {

    var numb1 = window.document.getElementById ("n1") 
    var numb2 =window.document.getElementById("n2") 
    var numb3 =window.document.getElementById("n3")
    var res= window.document.getElementById ("res")
    
    if (numb1.value.length ==0 || numb2.value.length ==0 || numb3.value==0) {
            alert (`ERRO! Complete todos os CAMPOS`)

    }
    else {
            res.innerHTML= "Contando ..."
            var nn1 = Number (numb1.value)
            var nn2 =Number (numb2.value)
            var nn3= Number (numb3.value)

            for (var c = nn1; c <= nn2; c= c + nn3) { 
                res.innerHTML += `${c} `

            }

    } 

}
