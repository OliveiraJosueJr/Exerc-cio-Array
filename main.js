const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Ana',
    nota: 8,
    turma: '1B'
  },
  {
    nome: 'Pedro',
    nota: 7,
    turma: '1B'
  },
  {
    nome: 'Lucas',
    nota: 4,
    turma: '1B'
  }
]

// function alunosAprovados(arr, media) {
//   let aprovados = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].nota >= media) {
//       aprovados.push(arr[i].nome)
//     }
//   }

//   return aprovados
// }

//*** CÓDIGO UTILIZANDO OBJECT DESTRUCTURING ***//

function alunosAprovados(arr, media) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]

    if (nota >= media) {
      aprovados.push(nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))
