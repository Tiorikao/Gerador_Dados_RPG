function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    const diceIcon = document.getElementById('dice-icon');
    
    // Adiciona a animação de rotação
    diceIcon.classList.add('animate');
    
    // Remove a animação após 1 segundo
    setTimeout(() => {
        diceIcon.classList.remove('animate');
    }, 600);  // Tempo da animação

    document.getElementById('result-text').innerText = `Resultado: ${result}`;
}