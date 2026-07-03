const perguntas = [
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Agente chegou cedo.", "A gente chegou cedo."],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Mas", "Mais"],
    correta: 0
  },
  {
    pergunta: "Complete a frase: Eu _____ feliz.",
    alternativas: ["estou", "estouu"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está escrita corretamente?",
    alternativas: ["Exceção", "Eseção"],
    correta: 0
  },
  {
    pergunta: "Qual é o plural de pão?",
    alternativas: ["Pãos", "Pães"],
    correta: 1
  },
  {
    pergunta: "Qual é o plural de papel?",
    alternativas: ["Papéis", "Papeis"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Com certeza.", "Concerteza."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Asterisco", "Asterístico"],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Há dois anos.", "A dois anos."],
    correta: 0
  },
  {
    pergunta: "Qual verbo está correto?",
    alternativas: ["Eu trouxe.", "Eu trousse."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Berinjela", "Beringela"],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Mau humor", "Mal humor"],
    correta: 0
  },
  {
    pergunta: "Complete: Ele _____ cedo.",
    alternativas: ["chegou", "chego"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Privilégio", "Previlégio"],
    correta: 0
  },
  {
    pergunta: "Qual é o antônimo de 'alto'?",
    alternativas: ["Baixo", "Grande"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Exagero", "Ezagero"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Eu vi ela.", "Eu a vi."],
    correta: 1
  },
  {
    pergunta: "Qual é o plural de 'cão'?",
    alternativas: ["Cãos", "Cães"],
    correta: 1
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Através", "Atravéz"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Exceção", "Excessão"],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Porque", "Por que"],
    correta: 1
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Beneficente", "Beneficiente"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Faz cinco anos.", "Fazem cinco anos."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Receber", "Reseber"],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta?",
    alternativas: ["Sessão", "Seção"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Enxergar", "Enchergar"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Ansioso", "Ancioso"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Trouxe o livro.", "Truxe o livro."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Hospedagem", "Ospedagem"],
    correta: 0
  },
  {
    pergunta: "Qual é o feminino de 'ator'?",
    alternativas: ["Atriz", "Atora"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Conosco", "Com nós"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Eu fiz o trabalho.", "Eu fizemos o trabalho."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Manteiga", "Mantega"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Lâmpada", "Lampada"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Ônibus", "Onibus"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Ele veio ontem.", "Ele vinheram ontem."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Cabeleireiro", "Cabelereiro"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Paralisação", "Paralização"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Eles disseram a verdade.", "Eles falaram mentira."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Pesquisa", "Pesquiza"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Beleza", "Belesa"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Natureza", "Naturezaa"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Problema", "Poblema"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Importante", "Inportante"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Necessário", "Necessario"],
    correta: 0
  },
  {
    pergunta: "Qual frase está correta?",
    alternativas: ["Nós estudamos.", "Nós estudo."],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Experiência", "Esperiência"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Família", "Familia"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["História", "Historia"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Lógico", "Logico"],
    correta: 0
  },
  {
    pergunta: "Qual palavra está correta?",
    alternativas: ["Difícil", "Dificil"],
    correta: 0
  }
];
let indice = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const pontuacao = document.getElementById("pontuacao");
const barra = document.getElementById("barra");

function atualizarBarra() {
    if (barra) {
        barra.style.width = ((indice / perguntas.length) * 100) + "%";
    }
}

function mostrarPergunta() {
    if (indice >= perguntas.length) {
        pergunta.innerHTML = "🎉 Parabéns! Você terminou o quiz!";
        alternativas.innerHTML = `<h3>Sua pontuação: ${pontos}/${perguntas.length}</h3>`;
        atualizarBarra();
        return;
    }

    const atual = perguntas[indice];
    pergunta.textContent = atual.pergunta;
    alternativas.innerHTML = "";

    atual.alternativas.forEach((texto, i) => {
        const botao = document.createElement("button");
        botao.textContent = texto;

        botao.onclick = () => responder(i);

        alternativas.appendChild(botao);
    });

    pontuacao.textContent = pontos + " pontos";
    atualizarBarra();
}

function responder(escolha) {
    if (escolha === perguntas[indice].correta) {
        pontos++;
    }

    indice++;
    mostrarPergunta();
}

mostrarPergunta();
