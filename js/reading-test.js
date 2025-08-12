document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer-display'), questionTitle = document.getElementById('question-title'), questionInstruction = document.getElementById('question-instruction'), questionContent = document.getElementById('question-content'), nextBtn = document.getElementById('next-btn'), backBtn = document.getElementById('back-btn'), submitBtn = document.getElementById('submit-btn'), testScreen = document.getElementById('test-screen'), resultsScreen = document.getElementById('results-screen'), resultsSummary = document.getElementById('results-summary'), totalScoreDisplay = document.getElementById('total-score-display'), reviewBtn = document.getElementById('review-btn'), testFooter = document.getElementById('test-footer'), mainContainer = document.getElementById('main-container'), reviewPage = document.getElementById('review-page');

    // === HỆ SỐ ĐIỂM THÔ MỚI DỰA TRÊN ĐỘ KHÓ ===
    const SCORE_WEIGHTS = [1, 1.5, 1.5, 2, 2]; // Part 1: 1đ, Part 2&3: 1.5đ, Part 4&5: 2đ

    const availableTestKeys = Object.keys(allReadingTests);
    const randomTestKey = availableTestKeys[Math.floor(Math.random() * availableTestKeys.length)];
    const testData = allReadingTests[randomTestKey];

    let currentQuestionIndex = 0, timerInterval, userAnswers = {}, testResults = {};

    function startTimer(duration) { let timer = duration; timerInterval = setInterval(() => { timerDisplay.textContent = `${Math.floor(timer/60).toString().padStart(2,'0')}:${(timer%60).toString().padStart(2,'0')}`; if (--timer < 0) { clearInterval(timerInterval); submitTest(); }}, 1000); }

    function displayQuestion(index) {
        const q = testData[index];
        questionTitle.textContent = q.title; questionInstruction.textContent = q.instruction; questionContent.innerHTML = '';
        if (q.type === 'gap-fill') renderGapFill(q);
        else if (q.type === 'sentence-ordering') renderSentenceOrdering(q);
        else if (q.type === 'opinion-matching') renderOpinionMatching(q);
        else if (q.type === 'heading-matching') renderHeadingMatching(q);
        updateFooter(index);
    }

    function updateFooter(index) {
        backBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
        const isLastQuestion = index === testData.length - 1;
        nextBtn.style.display = isLastQuestion ? 'none' : 'block';
        submitBtn.style.display = isLastQuestion ? 'block' : 'none';
    }

    function saveCurrentAnswers() {
        const q = testData[currentQuestionIndex];
        const answers = [];
        if (q.type === 'gap-fill' || q.type === 'opinion-matching' || q.type === 'heading-matching') {
            questionContent.querySelectorAll('select').forEach(select => answers.push(select.value));
        } else if (q.type === 'sentence-ordering') {
            questionContent.querySelectorAll('.drop-zone').forEach(zone => {
                answers.push(zone.children.length > 0 ? zone.children[0].textContent : '');
            });
        }
        userAnswers[currentQuestionIndex] = answers;
    }

    // === HÀM SUBMIT VÀ TÍNH ĐIỂM ĐÃ ĐƯỢC CẬP NHẬT ===
    function submitTest() {
        saveCurrentAnswers(); clearInterval(timerInterval);
        let totalRawScore = 0;
        let maxRawScore = 0;
        testResults.partScores = [];

        testData.forEach((q, i) => {
            const correctAnswers = q.content.answer;
            const studentAnswers = userAnswers[i] || [];
            const weight = SCORE_WEIGHTS[i];
            let correctCount = 0;
            correctAnswers.forEach((ans, j) => {
                if (studentAnswers[j] && studentAnswers[j].toString() === ans.toString()) correctCount++;
            });

            const partMaxRawScore = correctAnswers.length * weight;
            const partUserRawScore = correctCount * weight;
            
            totalRawScore += partUserRawScore;
            maxRawScore += partMaxRawScore;

            testResults.partScores.push({ 
                user: partUserRawScore, 
                max: partMaxRawScore,
                correctCount: correctCount,
                totalQuestions: correctAnswers.length
            });
        });

        // Quy đổi điểm thô ra thang điểm 50
        const finalScaledScore = Math.round((totalRawScore / maxRawScore) * 50);

        testResults.totalScore = finalScaledScore;
        testResults.maxScore = 50;
        testResults.grade = getGrade(finalScaledScore, 50);

        // Hiển thị kết quả tóm tắt ban đầu
        let summaryHTML = '<h2>Results Summary</h2>';
        testResults.partScores.forEach((ps, i) => {
            summaryHTML += `<p><b>Part ${i + 1}:</b> ${ps.correctCount} / ${ps.totalQuestions} correct</p>`;
        });
        resultsSummary.innerHTML = summaryHTML;
        totalScoreDisplay.innerHTML = `Total Score: ${finalScaledScore} / 50`;
        
        testScreen.style.display = 'none'; 
        resultsScreen.style.display = 'block'; 
        document.querySelector('.test-footer').style.display = 'none';
    }

    function getGrade(score, total) {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return 'C1'; // Thường C1 yêu cầu điểm cao
        if (percentage >= 70) return 'B2';
        if (percentage >= 50) return 'B1';
        if (percentage >= 30) return 'A2';
        return 'A1';
    }

    function renderReviewPage() {
        testScreen.style.display = 'none';
        testFooter.style.display = 'none';
        mainContainer.style.backgroundColor = '#fff';
        mainContainer.style.border = 'none';

        document.getElementById('review-total-score').textContent = `Total Score: ${testResults.totalScore} / ${testResults.maxScore}`;
        document.getElementById('review-grade').textContent = `Your grade: ${testResults.grade}`;
        
        const pagination = document.getElementById('review-pagination');
        pagination.innerHTML = '';
        testData.forEach((q, i) => {
            const btn = document.createElement('button');
            btn.textContent = i + 1;
            btn.dataset.index = i;
            if (i === 0) btn.classList.add('active');
            btn.addEventListener('click', () => {
                pagination.querySelector('.active').classList.remove('active');
                btn.classList.add('active');
                displayReviewForPart(i);
            });
            pagination.appendChild(btn);
        });
        
        reviewPage.style.display = 'block';
        displayReviewForPart(0);
    }

    function displayReviewForPart(index) {
        const q = testData[index];
        const studentAnswers = userAnswers[index] || [];
        const correctAnswers = q.content.answer;
        const partScores = testResults.partScores[index];
        const reviewContent = document.getElementById('review-content');

        // === ĐIỂM SỐ ĐÃ ĐƯỢC LÀM TRÒN KHI HIỂN THỊ ===
    reviewContent.innerHTML = `
        <h3>Question ${index + 1} of 5</h3>
        <p class="part-score">Your score: ${Math.round(partScores.user)} / ${Math.round(partScores.max)}</p>
    `;
        
        let reviewHTML = '<table class="review-table">';
        if (q.type === 'gap-fill') {
            reviewHTML += '<thead><tr><th>Your Answer</th><th>Correct Answer</th></tr></thead><tbody>';
            q.content.items.forEach((item, i) => {
                const ua = studentAnswers[i] || '(not answered)'; const ca = correctAnswers[i]; const isCorrect = ua === ca;
                reviewHTML += `<tr><td>${item.prefix} <span class="${isCorrect ? 'review-answer-correct' : 'review-answer-incorrect'}">${ua}</span> ${item.suffix || ''}</td><td>${item.prefix} <span class="review-answer-correct">${ca}</span> ${item.suffix || ''}</td></tr>`;
            });
            reviewHTML += '</tbody></table>';
        } else if (q.type === 'sentence-ordering') {
             reviewHTML += '<thead><tr><th>Your Answer</th><th>Correct Answer</th></tr></thead><tbody>';
            correctAnswers.forEach((ca, i) => {
                const ua = studentAnswers[i] || '(empty)'; const isCorrect = ua === ca;
                reviewHTML += `<tr><td><span class="${isCorrect ? 'review-answer-correct' : 'review-answer-incorrect'}">${i+1}. ${ua}</span></td><td><span class="review-answer-correct">${i+1}. ${ca}</span></td></tr>`;
            });
            reviewHTML += '</tbody></table>';
        } else if (q.type === 'opinion-matching') {
            reviewContent.innerHTML += `<div class="opinion-matching-container">${q.content.opinions.map(op => `<div class="opinion-item"><b>${op.person}:</b> ${op.text}</div>`).join('')}</div><hr>`;
            reviewHTML += '<thead><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr></thead><tbody>';
            q.content.questions.forEach((question, i) => {
                const ua = studentAnswers[i] || '-'; const ca = correctAnswers[i]; const isCorrect = ua === ca;
                reviewHTML += `<tr><td>${question}</td><td><span class="${isCorrect ? 'review-answer-correct' : 'review-answer-incorrect'}">${ua}</span></td><td><span class="review-answer-correct">${ca}</span></td></tr>`;
            });
            reviewHTML += '</tbody></table>';
        } else if (q.type === 'heading-matching') {
            reviewHTML += '<thead><tr><th>Your Answer</th><th>Correct Answer</th></tr></thead><tbody>';
            correctAnswers.forEach((ca, i) => {
                const ua = studentAnswers[i] || '-'; const isCorrect = ua === ca;
                const userHeading = q.content.headings.find(h => h.startsWith(ua)) || `${ua}. (not found)`;
                const correctHeading = q.content.headings.find(h => h.startsWith(ca));
                reviewHTML += `<tr><td><span class="${isCorrect ? 'review-answer-correct' : 'review-answer-incorrect'}">${i+1}. ${userHeading}</span></td><td><span class="review-answer-correct">${i+1}. ${correctHeading}</span></td></tr>`;
            });
             reviewHTML += '</tbody></table>';
        }
        reviewContent.innerHTML += reviewHTML;

    }

    function renderGapFill(q) {
        const content = q.content; let html = `<div class="gap-fill-container"><p>${content.prefix}</p>`;
        content.items.forEach((item, i) => { html += `<div class="gap-fill-item"><span>${item.prefix}</span><select><option value="">---</option>${item.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select><span>${item.suffix || ''}</span></div>`; });
        html += `<p>${content.suffix}</p></div>`; questionContent.innerHTML = html;
    }

    function renderSentenceOrdering(q) {
        const content = q.content; let dropZonesHTML = '';
        for (let i = 0; i < content.sentences.length; i++) dropZonesHTML += `<div class="drop-zone" data-drop-id="${i}"></div>`;
        const draggableItemsHTML = [...content.sentences].sort(() => Math.random() - 0.5).map((s, i) => `<div class="draggable" draggable="true" id="drag-${i}">${s}</div>`).join('');
        questionContent.innerHTML = `<div class="drag-and-drop-container"><div class="drop-zones">${dropZonesHTML}</div><div class="draggable-items">${draggableItemsHTML}</div></div>`;
        setupDragAndDrop();
    }

    function renderOpinionMatching(q) {
        const content = q.content; const opinionsHTML = content.opinions.map(op => `<div class="opinion-item"><b>${op.person}:</b> ${op.text}</div>`).join('');
        let questionsHTML = '';
        content.questions.forEach((question) => { questionsHTML += `<div class="question-item"><span>${question}</span><select><option value="">-</option>${content.opinions.map(op => `<option value="${op.person}">${op.person}</option>`).join('')}</select></div>`; });
        questionContent.innerHTML = `<div class="opinion-matching-container"><div class="opinions">${opinionsHTML}</div><div class="questions-list">${questionsHTML}</div></div>`;
    }

    function renderHeadingMatching(q) {
        const content = q.content; const headingsHTML = content.headings.map(h => `<li>${h}</li>`).join('');
        let paragraphsHTML = '';
        content.paragraphs.forEach((p, i) => {
            const optionsHTML = content.headings.map(h => `<option value="${h.split('.')[0]}">${h.split('.')[0]}</option>`).join('');
            paragraphsHTML += `<div class="paragraph-item"><select><option value="">-</option>${optionsHTML}</select><p><b>${i+1}.</b> ${p}</p></div>`;
        });
        questionContent.innerHTML = `<div class="heading-matching-container"><ul class="headings-list">${headingsHTML}</ul><div class="paragraphs-list">${paragraphsHTML}</div></div>`;
    }

    function setupDragAndDrop() {
        const draggables = document.querySelectorAll('.draggable'), dropZones = document.querySelectorAll('.drop-zone'), draggableItemsContainer = document.querySelector('.draggable-items');
        draggables.forEach(draggable => { draggable.addEventListener('dragstart', () => draggable.classList.add('dragging')); draggable.addEventListener('dragend', () => draggable.classList.remove('dragging')); });
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', e => e.preventDefault());
            zone.addEventListener('drop', e => {
                e.preventDefault(); const dragging = document.querySelector('.dragging');
                if (zone.children.length === 0) zone.appendChild(dragging);
                else { const existing = zone.children[0]; draggableItemsContainer.appendChild(existing); zone.appendChild(dragging); }
            });
        });
    }

    nextBtn.addEventListener('click', () => { saveCurrentAnswers(); if (currentQuestionIndex < testData.length - 1) displayQuestion(++currentQuestionIndex); });
    backBtn.addEventListener('click', () => { saveCurrentAnswers(); if (currentQuestionIndex > 0) displayQuestion(--currentQuestionIndex); });
    submitBtn.addEventListener('click', submitTest);
    
    // Nút review bây giờ được xử lý bởi hàm renderReviewPage
    reviewBtn.addEventListener('click', renderReviewPage);

    startTimer(35 * 60);
    displayQuestion(currentQuestionIndex);
});