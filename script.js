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
  }
];

let indice = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const pontuacao = document.getElementById("pontuacao");
const barra = document.getElementById("barra");

function atualizarBarra() {
    barra.style.width = (pontos / perguntas.length) * 100 + "%";
}

function mostrarPergunta() {
    if (indice >= perguntas.length) {
        pergunta.innerHTML = "🎉 Você terminou!";
        alternativas.innerHTML =
            `<h3>Sua pontuação: ${pontos}/${perguntas.length}</h3>`;
        return;
    }

    pergunta.textContent = perguntas[indice].pergunta;
    alternativas.innerHTML = "";

    perguntas[indice].alternativas.forEach((texto, i) => {
        const botao = document.createElement("button");
        botao.textContent = texto;
        botao.style.display = "block";
        botao.style.margin = "10px auto";
        botao.style.padding = "12px";
        botao.style.width = "80%";

        botao.onclick = () => responder(i);

        alternativas.appendChild(botao);
    });
}

function responder(escolha) {
    if (escolha === perguntas[indice].correta) {
        pontos += 2;
    }

    pontuacao.textContent = pontos + " pontos";
    atualizarBarra();

    indice++;
    mostrarPergunta();
}

mostrarPergunta();
