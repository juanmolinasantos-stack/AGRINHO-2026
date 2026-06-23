function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

function calcularImpacto() {
    const area = parseFloat(document.getElementById('area').value) || 100;
    const co2 = Math.round(area * 42);
    const agua = Math.round(area * 8500);

    document.getElementById('resultado').innerHTML = `
        <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 12px;">
            <h4>Impacto em ${area} hectares:</h4>
            <p><strong>-${co2} toneladas</strong> de CO₂ evitadas/ano</p>
            <p><strong>${agua.toLocaleString()} litros</strong> de água economizados/ano</p>
        </div>
    `;
}

let perguntaAtual = 0;
const quizData = [
    {
        pergunta: "Qual é a principal vantagem da agricultura de precisão?",
        opcoes: ["Mais agrotóxicos", "Otimizar recursos", "Aumentar desmatamento", "Reduzir produtividade"],
        correta: 1
    },
    {
        pergunta: "O que é agricultura regenerativa?",
        opcoes: ["Monocultura intensiva", "Recuperar solo e biodiversidade", "Uso excessivo de água", "Eliminar árvores"],
        correta: 1
    }
];

function carregarQuiz() {
    const q = quizData[perguntaAtual];
    document.getElementById('pergunta').textContent = q.pergunta;
    let html = '';
    q.opcoes.forEach((op, i) => {
        html += `<button onclick="responder(${i})" class="opcao-btn">${op}</button>`;
    });
    document.getElementById('opcoes').innerHTML = html;
    document.getElementById('quiz-result').classList.add('hidden');
}

function responder(indice) {
    const correta = quizData[perguntaAtual].correta;
    const result = document.getElementById('quiz-result');
    result.classList.remove('hidden');
    result.innerHTML = indice === correta 
        ? `<p class="correct">✅ Parabéns! Resposta correta!</p>` 
        : `<p class="wrong">❌ Resposta incorreta.</p>`;
    
    setTimeout(() => {
        perguntaAtual = (perguntaAtual + 1) % quizData.length;
        carregarQuiz();
    }, 2500);
}

function enviarMensagem(e) {
    e.preventDefault();
    alert("✅ Mensagem enviada com sucesso! Obrigado por apoiar a agricultura sustentável.");
    e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    carregarQuiz();
    calcularImpacto();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
