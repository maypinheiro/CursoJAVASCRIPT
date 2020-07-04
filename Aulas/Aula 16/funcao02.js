function soma (n1, n2,n3) {
    return n1 + n2 -n3
}
console.log (soma (4,6,))

/*/////////////////////////////////
cRIAMOS A FUNÇÃO SOMAR E COLOCAMOS 3 PARAMETROS
PEDIMOS PARA RETORNAR OS VALORES 
 NA PARTE DE FOR DO LAÇO FOI FEITA O PEDIDO DE ESCRITA NA TELA
  CHAMANOS A FUNÇÃO E PASSAMOS OS PARAMENTROS 
  - PODEMOS ATRIBUIR O VALOR 0 PARA CADA PARAMETRO, POIS SE PEDIRMOS PARA SOMAR  
  FALATANDO UM NUMERO EX: 2 +4 ME RETORNARIA nAN pois ficou faltando um paramentro
  para não retornar NaN Atribuimos o valor 0 ao lado do parametro formal;
*******   envez de *********
  function soma (n1, n2,n3) {
    return n1 + n2 -n3
}
console.log (soma (4,6,))
 NaN

*********** podemos fazer ************
ex :  function soma (n1=0, n2=0,n3=0) {
    return n1 + n2 -n3
}
console.log (soma (4,6,))
10
 
*/