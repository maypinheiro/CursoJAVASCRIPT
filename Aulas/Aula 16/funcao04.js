function fatorial (n) {
    let fat = 1
    for (c=n; c>1; c--) {
        fat*= c
    }
    return fat
}
 console.log(fatorial(5))
 
//  Calcular o fatorial de um número
// 5! 5x4x3x2x1 =120