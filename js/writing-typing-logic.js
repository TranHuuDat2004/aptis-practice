document.addEventListener('DOMContentLoaded', function() {
    const promptElement = document.getElementById('prompt-to-type');
    const inputElement = document.getElementById('typing-input');
    const feedbackElement = document.getElementById('typing-feedback');
    const nextButton = document.getElementById('next-sentence-btn');
    const categorySelect = document.getElementById('category-select');

    let currentSentence = '';
    let sentencePool = [];
    let masterSentenceList = [];
    let autoNextTimeout;

    // === HÀM ĐÃ ĐƯỢC SỬA LỖI LOGIC ===
    function loadSentencesForCategory() {
        const selectedCategory = categorySelect.value;
        masterSentenceList = [];

        if (selectedCategory === 'all') {
            Object.values(writingTypingData.informal).forEach(arr => masterSentenceList.push(...arr));
            Object.values(writingTypingData.formal).forEach(arr => masterSentenceList.push(...arr));
            masterSentenceList.push(...writingTypingData.part1_answers.short_responses);
        } else if (selectedCategory === 'part1_answers_short_responses') {
            // Xử lý riêng cho trường hợp "Câu trả lời mẫu"
            masterSentenceList = [...writingTypingData.part1_answers.short_responses];
        } else {
            // Xử lý cho các trường hợp còn lại (formal, informal)
            const [type, category] = selectedCategory.split('_'); 
            if (writingTypingData[type] && writingTypingData[type][category]) {
                masterSentenceList = [...writingTypingData[type][category]];
            }
        }
        
        sentencePool = [...masterSentenceList].sort(() => Math.random() - 0.5);
    }
    
    function startNewRound() {
        clearTimeout(autoNextTimeout);
        if (sentencePool.length === 0) {
            promptElement.innerHTML = `🎉<br>Tuyệt vời! Bạn đã hoàn thành tất cả các câu trong nhóm này.`;
            feedbackElement.textContent = 'Hãy chọn một nhóm khác hoặc bắt đầu lại nhóm này.';
            inputElement.value = '';
            inputElement.disabled = true;
            nextButton.textContent = "Luyện tập lại nhóm này";
            sentencePool = [...masterSentenceList].sort(() => Math.random() - 0.5);
            return;
        }

        currentSentence = sentencePool.shift();
        
        promptElement.innerHTML = '';
        currentSentence.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            promptElement.appendChild(span);
        });

        inputElement.value = '';
        inputElement.disabled = false;
        inputElement.focus();
        feedbackElement.textContent = '';
        nextButton.textContent = "Câu tiếp theo";
    }

    function checkTyping() {
        const promptChars = promptElement.querySelectorAll('span');
        const inputChars = inputElement.value.split('');
        let allCorrect = true;

        promptChars.forEach((charSpan, index) => {
            const promptChar = charSpan.textContent;
            const inputChar = inputChars[index];
            const isApostropheMatch = (promptChar === "'" || promptChar === "’") && (inputChar === "'" || inputChar === "’");
            if (inputChar == null) {
                charSpan.classList.remove('correct', 'incorrect');
                allCorrect = false;
            } else if (inputChar === promptChar || isApostropheMatch) {
                charSpan.classList.add('correct');
                charSpan.classList.remove('incorrect');
            } else {
                charSpan.classList.add('incorrect');
                charSpan.classList.remove('correct');
                allCorrect = false;
            }
        });

        if (allCorrect && inputChars.length === currentSentence.length) {
            feedbackElement.textContent = 'Chính xác! Tự động chuyển sau 2 giây...';
            feedbackElement.className = 'feedback-correct';
            inputElement.disabled = true;
            autoNextTimeout = setTimeout(startNewRound, 2000); 
        } else {
            feedbackElement.textContent = '';
        }
    }

    nextButton.addEventListener('click', startNewRound);
    inputElement.addEventListener('input', checkTyping);

    categorySelect.addEventListener('change', () => {
        loadSentencesForCategory();
        startNewRound();
    });

    // Khởi tạo ban đầu
    loadSentencesForCategory();
    startNewRound();
});