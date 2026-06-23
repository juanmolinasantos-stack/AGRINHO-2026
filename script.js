function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('show');
}

// Calculadora
function calcularImpacto() {
    const area = parseFloat(document.getElementById('area').value) || 100;
    const co2 = (area * 42).toFixed(0);
    const agua = (area * 8500).toLocaleString('pt-BR');

    document.getElementById('resultado').innerHTML = `
        <p><strong>${area} hectares</strong></p>
        <p>− ${co2} toneladas de CO₂ evitadas/ano</p>
        <p>${agua} litros de água economizados/ano</p>
    `;
}

// Quiz
let currentQuestion = 0;
const quizData = [
    {
        question: "Qual a principal vantagem da agricultura de precisão?",
        options: ["Mais agrotóxicos", "Otimizar recursos", "Aumentar desmatamento", "Reduzir produção"],
        answer: 1
    }
];

function loadQuiz() {
    const q = quizData[currentQuestion];
    document.getElementById('pergunta').textContent = q.question;
    
    let optionsHTML = '';
    q.options.forEach((opt, index) => {
        optionsHTML += `<button onclick="answerQuiz(${index})">${opt}</button>`;
    });
    document.getElementById('opcoes').innerHTML = optionsHTML;
    document.getElementById('quiz-result').innerHTML = '';
}

function answerQuiz(selected) {
    const correct = quizData[currentQuestion].answer;
    const result = document.getElementById('quiz-result');
    
    if (selected === correct) {
        result.innerHTML = `<p class="correct">✅ Resposta Correta!</p>`;
    } else {
        result.innerHTML = `<p class="wrong">❌ Resposta Incorreta</p>`;
    }
}

// Form
function enviarMensagem(e) {
    e.preventDefault();
    alert("✅ Mensagem enviada com sucesso! Obrigado por apoiar a agricultura sustentável.");
    e.target.reset();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    calcularImpacto();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
