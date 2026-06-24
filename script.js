// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de chamada para ação
    const botaoAprender = document.querySelector('.btn');

    // Adiciona um evento de clique
    botaoAprender.addEventListener('click', function(event) {
        // Exemplo de interação: exibe uma mensagem de boas-vindas ao guia
        console.log("O usuário deseja aprender a se proteger!");
    });
});
