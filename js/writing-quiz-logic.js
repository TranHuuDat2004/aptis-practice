document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const checkAnswersBtn = document.getElementById('check-answers-btn');
    const resultMessage = document.getElementById('result-message');

    // Xáo trộn câu hỏi để mỗi lần làm bài đều khác nhau
    const shuffledQuestions = writingQuizData.sort(() => Math.random() - 0.5);

    // Hiển thị tất cả câu hỏi
    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-card writing-question';
        questionElement.dataset.questionIndex = index;

        let optionsHTML = '';
        // Xáo trộn các lựa chọn đáp án
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            optionsHTML += `
                <label class="radio-label">
                    <input type="radio" name="question-${index}" value="${option}">
                    <span>${option}</span>
                </label>
            `;
        });

        questionElement.innerHTML = `
            <p class="question-title">${index + 1}. (${q.category}) ${q.question}</p>
            <div class="options-container">
                ${optionsHTML}
            </div>
            <div class="feedback-answer" style="display: none;"></div>
        `;
        quizContainer.appendChild(questionElement);
    });

    checkAnswersBtn.addEventListener('click', function() {
        const questionCards = quizContainer.querySelectorAll('.writing-question');
        let correctCount = 0;
        
        questionCards.forEach(card => {
            const questionIndex = parseInt(card.dataset.questionIndex);
            const questionData = shuffledQuestions[questionIndex]; // Lấy dữ liệu từ mảng đã xáo trộn
            const selectedRadio = card.querySelector(`input[name="question-${questionIndex}"]:checked`);
            const feedbackDiv = card.querySelector('.feedback-answer');
            
            card.classList.remove('correct', 'incorrect');
            feedbackDiv.style.display = 'block';

            if (selectedRadio) {
                if (selectedRadio.value === questionData.answer) {
                    card.classList.add('correct');
                    feedbackDiv.textContent = 'Chính xác!';
                    correctCount++;
                } else {
                    card.classList.add('incorrect');
                    feedbackDiv.innerHTML = `Sai rồi! Đáp án đúng là: <strong>${questionData.answer}</strong>`;
                }
            } else {
                card.classList.add('incorrect');
                feedbackDiv.innerHTML = `Bạn chưa chọn đáp án. Đáp án đúng là: <strong>${questionData.answer}</strong>`;
            }
        });
        
        resultMessage.innerHTML = `Bạn đã trả lời đúng <strong>${correctCount}/${questionCards.length}</strong> câu.`;
    });
});
