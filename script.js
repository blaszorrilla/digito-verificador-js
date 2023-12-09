 function calcularDigitoVerificador() {
    const numeroCedulaInput = document.getElementById('numeroCedula');
    const resultadoDiv = document.getElementById('resultado');

    const numeroCedula = numeroCedulaInput.value.trim();

    if (numeroCedula === '' || isNaN(numeroCedula)) {
        resultadoDiv.textContent = 'Por favor, ingrese un número de cédula válido.';
    } else {
        const digitoVerificador = Pa_Calcular_Dv_11_A(numeroCedula);
        resultadoDiv.textContent = `El dígito verificador calculado es: ${digitoVerificador}`;
    }
}

// Aquí incluir el código de la función Pa_Calcular_Dv_11_A
function Pa_Calcular_Dv_11_A(numero, baseMaxima = 11) {
    const numeroString = String(numero);
    const digitos = numeroString.split("").map(Number);

    let total = 0;
    let k = 2;

    for (let i = digitos.length - 1; i >= 0; i--) {
        if (k > baseMaxima) {
            k = 2;
        }

        total += digitos[i] * k;
        k++;
    }

    const resto = total % 11;
    const digito = resto > 1 ? 11 - resto : 0;

    return digito;
}
 function mostrarResultado() {
    const numeroCedulaInput = document.getElementById('numeroCedula');
    const resultadoDiv = document.getElementById('resultado');

    const numeroCedula = numeroCedulaInput.value.trim();

    if (numeroCedula === '' || isNaN(numeroCedula)) {
        resultadoDiv.textContent = 'Por favor, ingrese un número de cédula válido.';
    } else {
        const digitoVerificador = calcularDigitoVerificador(numeroCedula);
        resultadoDiv.textContent = `El dígito verificador calculado es: ${digitoVerificador}`;
    }
}
