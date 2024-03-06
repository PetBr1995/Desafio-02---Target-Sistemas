function validar() {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;

  const numero = document.getElementById("numero").value;

  while (numero > n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  if (numero == 0) {
    document.getElementById(
      "resp"
    ).textContent = `O número ${numero} faz parte da sequencia de Fibonacci`;
  } else if (numero == n3) {
    document.getElementById(
      "resp"
    ).textContent = `O número ${numero} faz parte da sequencia de Fibonacci `;
  } else {
    document.getElementById(
      "resp"
    ).textContent = `O número ${numero} não faz parte da sequencia de Fibonacci`;
  }
}
