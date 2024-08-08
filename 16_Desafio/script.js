const answers = {
    area: '',
    linguagem: '',
    modelo: '',
    local: ''
};

function submitAnswer(currentQuestionId, nextQuestionId) {
    const currentQuestion = document.getElementById(currentQuestionId);
    const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');

    if (selectedOption) {
        const answerKey = currentQuestion.querySelector('input[type="radio"]').name;
        answers[answerKey] = selectedOption.value;

        // Hide current question and show next question
        currentQuestion.style.display = 'none';

        if (nextQuestionId === 'summary') {
            showSummary();
        } else {
            document.getElementById(nextQuestionId).style.display = 'block';
        }
    } else {
        alert('Por favor, selecione uma opção antes de enviar.');
    }
}

function showSummary() {
    const resultText = `
        Você deseja seguir a carreira de <strong>${answers.area}</strong>,
        utilizando a linguagem <strong>${answers.linguagem}</strong>,
        com o modelo de trabalho <strong>${answers.modelo}</strong>,
        trabalhando no <strong>${answers.local}</strong>.
    `;
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('summary').style.display = 'block';
}
