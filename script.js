// Banco de dados do Quiz - Perguntas sobre Deepfakes e Desinformação
const perguntasQuiz = [
    {
        enunciado: "Cenário 1: Você recebe um vídeo de um influenciador famoso recomendando um investimento imperdível. Porém, a voz dele está um pouco robótica e há pequenos borrões ao redor da boca dele. O que você faz?",
        alternativas: [
            "Acredito imediatamente e clico no link, pois conheço o influenciador.",
            "Desconfio de deepfake, não clico em nada e procuro o perfil oficial dele para checar se o vídeo é real.",
            "Compartilho com meus amigos para que eles também vejam a oportunidade."
        ],
        correta: 1,
        explicacao: "Análise Defensiva: Parabéns! Movimentos labiais estranhos e vozes artificiais são sinais clássicos de clonagem digital por IA usada em golpes financeiros."
    },
    {
        enunciado: "Cenário 2: Uma foto impressionante sobre um acontecimento mundial está viralizando, mas as pessoas na imagem têm 6 dedos em uma das mãos e o texto de uma placa ao fundo está todo deformado. Qual a conclusão?",
        alternativas: [
            "A foto é real, apenas foi tirada em um ângulo ruim.",
            "A foto foi gerada por uma Inteligência Artificial, já que IAs ainda falham em detalhes complexos como mãos e textos.",
            "A foto é verdadeira porque já tem milhares de curtidas e compartilhamentos."
        ],
        correta: 1,
        explicacao: "Análise Defensiva: Exato! Ferramentas de geração de imagem por IA frequentemente cometem erros de anatomia (como dentes e dedos extras) e distorcem fundos texturizados."
    },
    {
        enunciado: "Cenário 3: Qual é a melhor estratégia para não ser enganado por notícias falsas (fake news) e desinformação no dia a dia?",
        alternativas: [
            "Ler apenas as manchetes que aparecem nas minhas redes sociais.",
            "Confiar em qualquer informação, desde que tenha sido enviada por um parente no WhatsApp.",
            "Sempre checar a notícia em portais confiáveis e usar agências de checagem de fatos antes de compartilhar."
        ],
        correta: 2,
        explicacao: "Análise Defensiva: Perfeito! O hábito de cruzar informações e verificar as fontes é a sua maior defesa contra a manipulação na internet."
    }
];

// Variáveis de controle do estado do jogo
let indicePerguntaAtual = 0;
let pontuacaoUsuario = 0;

// Seleção dos elementos do HTML (DOM)
const elementoEnunciado = document.getElementById("question-text");
const containerAlternativas = document.getElementById("options-box");
const painelFeedback = document.getElementById("feedback-box");
const botaoProxima = document.getElementById("btn-next");
const containerJogo = document.getElementById("game-container");
const containerResultados = document.getElementById("results-container");
const textoPontuacaoFinal = document.getElementById("score-text");

// Função para iniciar ou reiniciar o simulador
function iniciarSimulador() {
    indicePerguntaAtual = 0;
    pontuacaoUsuario = 0;
    containerResultados.style.display = "none";
    containerJogo.style.display = "block";
    carregarPergunta();
}

// Função para renderizar a pergunta atual na tela
function carregarPergunta() {
    limparEstadoAnterior();
    
    let dadosPergunta = perguntasQuiz[indicePerguntaAtual];
    elementoEnunciado.innerText = dadosPergunta.enunciado;

    // Cria os botões das alternativas dinamicamente com as classes do Style CC
    dadosPergunta.alternativas.forEach((textoOpcao, indice) => {
        const botao = document.createElement("button");
        botao.innerText = textoOpcao;
        botao.classList.add("cc-button-option");
        botao.onclick = () => verificarResposta(botao, indice);
        containerAlternativas.appendChild(botao);
    });
}

// Limpa os estados visuais do cenário anterior
function limparEstadoAnterior() {
    painelFeedback.style.display = "none";
    botaoProxima.style.display = "none";
    containerAlternativas.innerHTML = "";
}

// Valida a escolha do usuário
function verificarResposta(botaoSelecionado, indiceEscolhido) {
    let dadosPergunta = perguntasQuiz[indicePerguntaAtual];
    const todosOsBotoes = containerAlternativas.querySelectorAll(".cc-button-option");
    
    // Desativa todos os botões para impedir múltiplos cliques
    todosOsBotoes.forEach(btn => btn.disabled = true);

    if (indiceEscolhido === dadosPergunta.correta) {
        // Resposta Correta
        botaoSelecionado.classList.add("correct-answer");
        painelFeedback.style.background = "rgba(0, 230, 118, 0.1)";
        painelFeedback.style.border = "1px solid #00e676";
        painelFeedback.style.color = "#00e676";
        painelFeedback.innerText = `✓ ${dadosPergunta.explicacao}`;
        pontuacaoUsuario++;
    } else {
        // Resposta Incorreta
        botaoSelecionado.classList.add("wrong-answer");
        todosOsBotoes[dadosPergunta.correta].classList.add("correct-answer");
        painelFeedback.style.background = "rgba(255, 23, 68, 0.1)";
        painelFeedback.style.border = "1px solid #ff1744";
        painelFeedback.style.color = "#ff1744";
        painelFeedback.innerText = "✕ Alerta: Essa ação colocaria sua segurança em risco. Veja a resposta correta destacada em verde.";
    }

    painelFeedback.style.display = "block";
    botaoProxima.style.display = "block";
}

// Avança para o próximo estágio ou encerra o quiz
function goToNext() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        mostrarResultadoFinal();
    }
}

// Exibe a tela final de pontuação
function mostrarResultadoFinal() {
    containerJogo.style.display = "none";
    containerResultados.style.display = "block";
    textoPontuacaoFinal.innerText = `Nível de escudo digital: Você neutralizou ${pontuacaoUsuario} de ${perguntasQuiz.length} ameaças cibernéticas.`;
}

// Reseta o jogo quando o usuário clica em "Tentar Novamente"
function restartSimulation() {
    iniciarSimulador();
}

// Inicializa o script automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", iniciarSimulador);
