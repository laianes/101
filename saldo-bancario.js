const saldoBancario = 900.00;
const saque = 350.00;
const saldoRestante = parseFloat(saldoBancario - saque);

if (saldoBancario >= saque) {
  console.log(`🚀 Saldo restante: `, saldoRestante);
} else {
  console.log('Saldo negativo: ' + saldoRestante + '!')
}

