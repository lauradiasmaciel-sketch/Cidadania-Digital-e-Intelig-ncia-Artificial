// Garante o carregamento correto do script no navegador
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de proteção do site
    const botaoAlerta = document.querySelector('.btn');

    // Executa uma ação mínima obrigatória pelo critério do trabalho
    botaoAlerta.addEventListener('click', function() {
        console.log("Alerta de Cidadania: O usuário iniciou o Guia de Proteção contra Desinformação.");
    });
    
});
