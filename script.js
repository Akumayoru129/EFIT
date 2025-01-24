function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('result');

    let score = 0;
    const totalQuestions = 2;

    const answers = form.elements;

    if (answers.q1.value === 'correct') score++;
    if (answers.q2.value === 'correct') score++;

    result.textContent = `You got ${score}/${totalQuestions} correct. Keep going!`;
}
