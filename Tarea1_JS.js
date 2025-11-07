// ["""
// Descripción:
// Este archivo contiene 15 funciones básicas en Python para practicar lógica y programación.
// El objetivo es que los alumnos las traduzcan a JavaScript, entendiendo los conceptos
// de variables, concatenación, estructuras de control, arreglos (listas), y funciones.
// """

// def saludar_usuario(nombre: str) -> None:
//     """
//     Imprime un saludo personalizado.
//     Ejemplo de concatenación y salida por consola.
//     """
//     print("Hola, " + nombre + "! Bienvenido al curso de programación.")
function saludar_usuario(nombre){
    return("Hola, "+nombre+" Bienvenida al curso de programación.")
}
console.log(saludar_usuario("Shakira"))

// def repetir_texto(texto: str, veces: int) -> str:
//     """
//     Devuelve una cadena repetida 'veces' veces, separada por espacios.
//     Ejemplo de concatenación y multiplicación de strings.
//     """
//     return (texto + " ") * veces

function repetir_texto(texto, veces){
    let acum=""
    for (let i=0; i<veces;i++) //Igual a Java - llaves solo necesarias con más de una líena de código 
        acum= acum + texto+" "
    return acum
}
console.log(repetir_texto("Vaca", 3))

// def invertir_palabra(palabra: str) -> str:
//     """
//     Invierte una palabra usando slicing.
//     """
//     return palabra[::-1]
function invertir_palabra(palabra){
    let acum=""
    for(i=palabra.length-1;i>=0;i--)
        acum=acum+palabra.slice(i,i+1);
    return acum
}
let palabra="Rupatrupa"
console.log(invertir_palabra(palabra))


// def contar_vocales(texto: str) -> int:
//     """
//     Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
//     Ejemplo de bucles y condicionales.
//     """
//     contador = 0
//     for letra in texto.lower():
//         if letra in "aeiou":
//             contador += 1
//     return contador
function contar_vocales(texto){
    let contador=0;
    for (let i=0;i<texto.length;i++){
        if(texto[i]=="a"|| texto[i]=="e"||texto[i]=="i"||texto[i]=="o"||texto[i]=="u")
            contador++;
    }
    return contador
}
console.log(contar_vocales("Impala"))

// def mayusculas_y_minusculas(texto: str) -> tuple[str, str]:
//     """
//     Devuelve el texto en mayúsculas y minúsculas.
//     Ejemplo de métodos de string.
//     """
//     return texto.upper(), texto.lower()
function mayusculas_y_minusculas(texto){
    let mayusculas= texto.toUpperCase();
    let minusculas= texto.toLowerCase();
    return [mayusculas ,minusculas];
}
let pa="ErENTxun";
console.log(mayusculas_y_minusculas(pa));


// def promedio_lista(numeros: list[float]) -> float:
//     """
//     Calcula el promedio de una lista de números.
//     Ejemplo de sumas y longitud de listas.
//     """
//     if len(numeros) == 0:
//         return 0
//     return sum(numeros) / len(numeros)
function promedio_lista(numeros){
    let suma=0
    let res=0
    if(numeros.length==0)
        return res;
    else{
        for (let i=0; i<numeros.length; i++)
            suma=suma+numeros[i];
        if(suma==0)
            return res;
        else{
            res=suma/numeros.length;
            return res;
        }
    }
}
let num=[1, 3, -8 , 1, 0, 230 , 5, 7, 8, 3,6]
console.log(num)
console.log(promedio_lista(num))

// def maximo_y_minimo(numeros: list[int]) -> tuple[int, int]:
//     """
//     Devuelve el valor máximo y mínimo de una lista.
//     Ejemplo de uso de funciones integradas.
//     """
//     return max(numeros), min(numeros)
function maximo_y_minimo(listaNum){
    if(listaNum.length==0)
        return 0;
    else{
        let maximo=listaNum[0];
        let minimo=listaNum[0];
        for(let i=1;i<listaNum.length;i++){
            if(listaNum[i]<minimo)
                minimo=listaNum[i];
            if(listaNum[i]>maximo)
                maximo=listaNum[i];
        }
        return [maximo, minimo];
    }
}

console.log(maximo_y_minimo(num));

// def filtrar_pares(numeros: list[int]) -> list[int]:
//     """
//     Filtra y devuelve solo los números pares de una lista.
//     Ejemplo de comprensión de listas.
//     """
//     return [n for n in numeros if n % 2 == 0]
function filtrar_pares(numeros){
    let pares=[];
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]%2==0 && numeros[i]!=0) //0 no es par
            pares.push(numeros[i]);
    }
    return pares;
}
console.log(filtrar_pares(num));

// def sumar_elementos_texto(lista_textos: list[str]) -> str:
//     """
//     Une todos los elementos de una lista de cadenas en una sola frase.
//     Ejemplo de concatenación con 'join'.
//     """,
//     return " ".join(lista_textos)
function sumar_elementos_texto(letras){
    let palabra="";
    if(letras.length>0)
        palabra=letras.join(""); //igual pudimos hacer otro for y concatenar posición a posición
    return palabra;
}
let pal=["M", "O","N", "T", "E", "C","R","I", "S", "T", "O"];
console.log(sumar_elementos_texto(pal));

// def buscar_elemento(lista: list, elemento) -> bool:
//     """
//     Verifica si un elemento está dentro de una lista.
//     Ejemplo de uso del operador 'in'.
//     """
//     return elemento in lista
function buscar_elemento(lista, elemento){
    let ban=false;
    for(let i=0;i<lista.length;i++)
        if(elemento==lista[i])
            ban= true;
    return ban;
}
console.log(buscar_elemento(num,77)); //False
console.log(buscar_elemento(num,0)); //True

// def contar_palabras(frase: str) -> int:
//     """
//     Cuenta cuántas palabras hay en una frase.
//     Usa split() para separar por espacios.
//     """
//     palabras = frase.split()
//     return len(palabras)
function contar_palabras(frase){
    return frase.split(" ").length;
}
let frse="La vaca lola tiene cabeza y tiene cola";
console.log(contar_palabras(frse));


// def duplicar_elementos(lista: list[int]) -> list[int]:
//     """
//     Duplica cada número de una lista.
//     Ejemplo de transformación con comprensión de listas.
//     """
//     return [x * 2 for x in lista]
function duplicar_elementos(lista){
    let res=[];
    for(let i=0;i<lista.length;i++){
        res.push(lista[i]);
        res.push(lista[i]);
    }
    return res;
}
console.log(duplicar_elementos(num))

// def capitalizar_palabras(frase: str) -> str:
//     """
//     Convierte la primera letra de cada palabra en mayúscula.
//     Similar a 'title()'.
//     """
//     return frase.title()
function capitalizar_palabras(frase){
    let separar=frase.split(" ");
    let fraser=""
    for(let i=0; i<separar.length; i++){
        separar[i] = separar[i][0].toUpperCase() + separar[i].slice(1);
        fraser=fraser+" "+ separar[i]
    }
    return fraser;
}
console.log(capitalizar_palabras(frse));


// def mezclar_listas(lista1: list, lista2: list) -> list:
//     """
//     Combina dos listas alternando sus elementos.
//     Ejemplo de zip() y bucles.
//     """
//     combinada = []
//     for a, b in zip(lista1, lista2):
//         combinada.append(a)
//         combinada.append(b)
//     return combinada
function mezclar_listas(lis1, lis2){ //mismo tamao para que no salda undef en los i que no encuentra
    let final=[];
    for(let i=0; i<lis1.length;i++){
        final.push(lis1[i]);
        final.push(lis2[i])
    }
    return final;
}
console.log(mezclar_listas(pal,num));

// def contar_frecuencia(lista: list) -> dict:
//     """
//     Devuelve un diccionario con la frecuencia de cada elemento.
//     Ejemplo de diccionarios y conteo.
//     """
//     conteo = {}
//     for item in lista:
//         if item in conteo:
//             conteo[item] += 1
//         else:
//             conteo[item] = 1
//     return conteo]