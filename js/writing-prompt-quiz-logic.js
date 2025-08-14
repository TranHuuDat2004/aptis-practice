document.addEventListener('DOMContentLoaded', function() {
    const selectionScreen = document.getElementById('selection-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const promptSelectionGrid = document.getElementById('prompt-selection-grid');
    const backToSelectionBtn = document.getElementById('back-to-selection-btn');

    // --- PHẦN 1: TẠO DANH SÁCH CHỌN ĐỀ BÀI ---
    
    writingPrompts.forEach(promptData => {
        const promptButton = document.createElement('div');
        promptButton.className = 'part-card'; // Tận dụng style có sẵn
        promptButton.style.cursor = 'pointer';
        promptButton.innerHTML = `<h3>${promptData.title}</h3>`;
        promptButton.addEventListener('click', () => {
            renderQuizForPrompt(promptData);
        });
        promptSelectionGrid.appendChild(promptButton);
    });

    // --- PHẦN 2: LOGIC HIỂN THỊ VÀ LÀM BÀI ---

    function renderQuizForPrompt(promptData) {
        // Ẩn màn hình chọn, hiện màn hình làm bài
        selectionScreen.style.display = 'none';
        quizScreen.style.display = 'block';

        const promptContainer = document.getElementById('prompt-container');
        const quizContainer = document.getElementById('quiz-container');
        const checkAnswersBtn = document.getElementById('check-answers-btn');
        const resultMessage = document.getElementById('result-message');

        // Reset nội dung cũ
        quizContainer.innerHTML = '';
        resultMessage.innerHTML = '';
        
        // Hiển thị đề bài
        promptContainer.innerHTML = promptData.prompt;
        
        // Lấy câu hỏi của đề bài đã chọn
        const questions = promptData.questions;

        // Hiển thị các câu hỏi trắc nghiệm
        questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-card writing-question';
            questionElement.dataset.questionIndex = index;
            let optionsHTML = '';
            const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
            shuffledOptions.forEach(option => {
                optionsHTML += `<label class="radio-label"><input type="radio" name="question-${index}" value="${option}"><span>${option}</span></label>`;
            });
            questionElement.innerHTML = `<p class="question-title">${index + 1}. ${q.question}</p><div class="options-container">${optionsHTML}</div><div class="feedback-answer" style="display: none;"></div>`;
            quizContainer.appendChild(questionElement);
        });

        // Xóa event listener cũ để tránh lỗi lặp lại
        const newCheckBtn = checkAnswersBtn.cloneNode(true);
        checkAnswersBtn.parentNode.replaceChild(newCheckBtn, checkAnswersBtn);

        // Logic kiểm tra đáp án
        newCheckBtn.addEventListener('click', function() {
            const questionCards = quizContainer.querySelectorAll('.writing-question');
            let correctCount = 0;
            questionCards.forEach(card => {
                const questionIndex = parseInt(card.dataset.questionIndex);
                const questionData = questions[questionIndex];
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
            
            if (correctCount === questions.length) {
                resultMessage.innerHTML = `🎉 Tuyệt vời! Bạn đã hiểu đúng và đủ tất cả các yêu cầu của đề bài. Giờ thì bắt đầu viết thôi!`;
                resultMessage.style.color = '#28a745';
            } else {
                resultMessage.innerHTML = `Bạn đã hiểu đúng <strong>${correctCount}/${questions.length}</strong> yêu cầu. Hãy xem lại những câu sai để đảm bảo không bị lạc đề nhé!`;
                resultMessage.style.color = '#dc3545';
            }
        });
    }

    // Nút quay lại
    backToSelectionBtn.addEventListener('click', () => {
        quizScreen.style.display = 'none';
        selectionScreen.style.display = 'block';
    });
});