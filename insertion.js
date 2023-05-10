//********* */
function generacionArray(num){
    //quiero que reciba un numero entero(numero de elementos del array) y me genere un array que tenga el numero de elementos deseados
    let arreglo=[];
    for(let i = 0; i <num;i++){
        let aleatorio=Math.round(Math.random()*num);
        let repetido=false;
        let j=0;
        let limite=0;
        while(j<arreglo.length && limite< num){
            if(aleatorio==arreglo[j]){
                repetido=true;
                break;
            }
            j++;
            limite++;
         }
        if(repetido==false){
            arreglo.push(aleatorio);
        }
    }
    return arreglo;
}
let arreglo1=generacionArray(5);
console.log(arreglo1);
function insercion(arreglo){
    // algoritmo para hacer ordenamiento de meyor a manor usando insertion sort
    // 1. declaro un array de numeros en desorden
    // let arreglo=[54,53,1,7,11,19];
    // console.log(A);
    // recorro de izquierda a derecha un sub array de A
    for(let i=1; i<arreglo.length; i++){
        // voy a analizar por posicion, cuando este en la poscion "i" voy a extraer ese valor y almacenarlo en una variable temporal
        let temporal = arreglo[i];
        // creo una variable "j" que se posicione detras de "i"
        j=i-1;
        // itero de derecha a izquierda  para verificar si el valor de A[i]<A[j]
        while(j>=0 && arreglo[j]>temporal){
            // como el valor de A[j] es mayor a temporal lo muevo una posicion adelante 
            arreglo[j+1]=arreglo[j];
            // luego disminuyo j para seguir comparando con los valores a la izquierda de i
            j--;
        }
        // luego de haber hecho las comparaciones ubico a temporal en la posicion correspondiente
        arreglo[j+1]=temporal;
    }
    return arreglo;
 }
let orden= insercion(arreglo1);
console.log(orden);