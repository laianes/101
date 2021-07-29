const notaPrimeiroSemestre = 2 
const notaSegundoSemestre = Math.random() * 10

const mediaFinal = (notaPrimeiroSemestre + notaSegundoSemestre) / 2 

if (mediaFinal < 5){
  console.log('Infelizmente você foi reprovado com a média: ' + mediaFinal)
} else {
  console.log('Parabéns você foi aprovado com a média: ' + mediaFinal)
}
