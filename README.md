# digito-verificador-js
Formulario para calcular el dígito verificador del RUC (Registro Único del Contribuyente) en Paraguay.

Para calcular el primer dígito se multiplica cada dígito del número por 2, luego por 3, luego por 4, y así sucesivamente, de derecha a izquierda (del dígito menos significativo al más significativo) hasta llegar al primer dígito del número.
La suma de esta multiplicación se divide por 11. El resto de la división (módulo 11) se resta de la base (11) y el resultado es el dígito verificador. 
Para calcular el siguiente número, el número anterior se trata como parte del número y se sigue el mismo proceso.

Para utilizar el formulario sólo escriba el numero de cédula y presione "Calcular dígito verificador", la página le devolverá el resultado.

![Captura2](https://github.com/blaszorrilla/digito-verificador-js/assets/37028794/53432783-3fe6-4239-9844-69c9bdd3bbca)



