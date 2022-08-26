let x = parseInt(prompt("Ingrese Número igual o mayor que 0 y menor a 1000 para calcular"))
let elemento = document.getElementById("fizzbuzz");

if (x<0) {
    alert("Porfavor ingrese número mayor o igual a 0")
} else if(x>=1000) {
    alert("Porfavor ingrese número menor a 1000")
} else {
    while (x<=1000) {
        
        if (x%3==0 && x%5==0) {
            
            document.write("FizzBuzz" + "<br>") 
            console.log("FizzBuzz");

        }   else if (x%5==0) {
            document.write("Buzz" + "<br>")
            console.log("Buzz");

        }   else if (x%3==0) {
            document.write("Fizz" + "<br>")
            console.log("Fizz");

        }   else {
            document.write(x + "<br>")
            console.log(x);

        }
        x++
        document.write("\n")

    }
}

/*
En este trabajo hice el código del FizzBuzz donde al iniciar pedirá
el número sobre el cual comenzará a ejecutar el código repitiéndose
hasta llegar a 1000 donde lo mostrara en la consola.

Además de la consola hice pruebas para que lo escribiera en el documento.
*/