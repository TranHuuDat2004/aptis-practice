const speakingQuizData = [
    // --- PART 2: MIÊU TẢ 1 BỨC TRANH ---
    {
        category: "Part 2 - B1: Tổng quan",
        question: "Đâu là cách tốt nhất để bắt đầu miêu tả một bức tranh?",
        options: [
            "I think this picture is beautiful.",
            "In the picture, I can see...",
            "The people in the picture are..."
        ],
        answer: "In the picture, I can see..."
    },
    {
        category: "Part 2 - B2: Hành động",
        question: "Cấu trúc ngữ pháp nào là đúng nhất để miêu tả hành động đang diễn ra của một người đàn ông?",
        options: [
            "The man is V-ing...",
            "The man V-ed...",
            "The man to V..."
        ],
        answer: "The man is V-ing..."
    },
    {
        category: "Part 2 - B3: Phỏng đoán",
        question: "Để đưa ra một phỏng đoán về những người trong ảnh, bạn nên dùng câu nào?",
        options: [
            "I'm sure they are...",
            "They seem to be...",
            "I know they are..."
        ],
        answer: "They seem to be..."
    },
    {
        category: "Part 2 - B3: Phỏng đoán",
        question: "Sau cụm từ \"It looks as if...\" (Trông cứ như thể...), bạn nên dùng loại cấu trúc nào?",
        options: [
            "Một danh từ (a noun)",
            "Một mệnh đề hoàn chỉnh (a sentence)",
            "Một tính từ (an adjective)"
        ],
        answer: "Một mệnh đề hoàn chỉnh (a sentence)"
    },
    {
        category: "Part 2 - B4: Vị trí",
        question: "Để miêu tả một vật thể ở phía trước bức tranh, bạn dùng cụm từ nào?",
        options: [
            "In the background...",
            "At the top...",
            "In the foreground..."
        ],
        answer: "In the foreground..."
    },
    {
        category: "Part 2 - B5: Bình luận",
        question: "Đâu là một cách hay để kết thúc phần miêu tả tranh bằng cảm nhận cá nhân?",
        options: [
            "That's all I can see.",
            "I like this picture because it reminds me of...",
            "The picture is finished."
        ],
        answer: "I like this picture because it reminds me of..."
    },

    // --- PART 3: SO SÁNH 2 BỨC TRANH ---
    {
        category: "Part 3 - Chiến lược",
        question: "Trong 45 giây của Part 3, bạn nên dành khoảng bao nhiêu thời gian để miêu tả BỨC TRANH ĐẦU TIÊN?",
        options: [
            "10 giây",
            "20 giây",
            "30 giây"
        ],
        answer: "20 giây"
    },
    {
        category: "Part 3 - Cấu trúc",
        question: "Để bắt đầu phần so sánh 2 bức tranh, câu mở đầu nào là hiệu quả nhất?",
        options: [
            "I will talk about two pictures.",
            "Let's look at the pictures.",
            "Both pictures show..."
        ],
        answer: "Both pictures show..."
    },
    {
        category: "Part 3 - Cấu trúc",
        question: "Để chuyển ý từ tranh 1 sang tranh 2 và thể hiện sự tương phản, bạn nên dùng từ nối nào?",
        options: [
            "And in the second picture...",
            "Also, the second picture...",
            "On the contrary, in the second picture..."
        ],
        answer: "On the contrary, in the second picture..."
    },

    // --- PART 4: TRẢ LỜI 3 CÂU HỎI ---
    {
        category: "Part 4 - Chiến lược",
        question: "Trong Part 4, bạn có bao nhiêu thời gian để CHUẨN BỊ trước khi trả lời?",
        options: [
            "30 giây",
            "1 phút",
            "2 phút"
        ],
        answer: "1 phút"
    },
    {
        category: "Part 4 - Chiến lược",
        question: "Bạn có tổng cộng bao nhiêu thời gian để NÓI TRẢ LỜI 3 câu hỏi trong Part 4?",
        options: [
            "1 phút",
            "2 phút",
            "3 phút"
        ],
        answer: "2 phút"
    },
    {
        category: "Part 4 - Cấu trúc",
        question: "Đâu là một cách trang trọng để bắt đầu trả lời câu hỏi 1 (Q1)?",
        options: [
            "For the first question...",
            "Listen, the first question is...",
            "Regarding the first question..."
        ],
        answer: "Regarding the first question..."
    },
    {
        category: "Part 4 - Cấu trúc",
        question: "Cụm từ nào được gợi ý để chuyển sang câu hỏi 2 (Q2)?",
        options: [
            "Now, for the second question...",
            "Moving on to the second question...",
            "Next is the second question..."
        ],
        answer: "Moving on to the second question..."
    },
    {
        category: "Part 4 - Cấu trúc",
        question: "Để bắt đầu trả lời câu hỏi cuối cùng (Q3), bạn có thể dùng:",
        options: [
            "The last question is...",
            "And finally, I think that...",
            "To end this, my answer is..."
        ],
        answer: "And finally, I think that..."
    },

    // --- CÔNG THỨC P.E.E.L ---
    {
        category: "Công thức PEEL",
        question: "Trong công thức PEEL, chữ 'P' (Point) có nghĩa là gì?",
        options: [
            "Đưa ra ví dụ (Provide an example)",
            "Nêu ý kiến/Trả lời trực tiếp (Make your Point)",
            "Lên kế hoạch (Plan your answer)"
        ],
        answer: "Nêu ý kiến/Trả lời trực tiếp (Make your Point)"
    },
    {
        category: "Công thức PEEL",
        question: "Chữ 'E' đầu tiên (Explain) trong công thức PEEL dùng để làm gì?",
        options: [
            "Kết thúc câu trả lời (End the answer)",
            "Đưa ra ví dụ (Give an Example)",
            "Giải thích lý do cho ý kiến của bạn (Explain your reason)"
        ],
        answer: "Giải thích lý do cho ý kiến của bạn (Explain your reason)"
    },
    {
        category: "Công thức PEEL",
        question: "Chữ 'L' (Link) trong công thức PEEL có vai trò gì?",
        options: [
            "Lắng nghe lại câu hỏi (Listen to the question)",
            "Liên kết lại với câu hỏi ban đầu để kết luận (Link back to the question)",
            "Liệt kê thêm ý (List more ideas)"
        ],
        answer: "Liên kết lại với câu hỏi ban đầu để kết luận (Link back to the question)"
    },
    {
        category: "Công thức PEEL",
        question: "Cụm từ nào sau đây phù hợp để bắt đầu phần 'Explain'?",
        options: [
            "For example...",
            "That's why...",
            "This is because..."
        ],
        answer: "This is because..."
    },
    {
        category: "Công thức PEEL",
        question: "Khi áp dụng chiến lược P-E-E-L cho câu hỏi 'Why...', bước đầu tiên bạn cần làm là gì?",
        options: [
            "Giải thích ngay lập tức",
            "Đưa ra ví dụ",
            "Nêu ý kiến chính (trả lời trực tiếp)"
        ],
        answer: "Nêu ý kiến chính (trả lời trực tiếp)"
    },
    
    // --- MẸO LÀM BÀI SPEAKING ---
    {
        category: "Mẹo Speaking",
        question: "Theo các mẹo được đưa ra, bạn nên sử dụng loại câu nào khi nói?",
        options: [
            "Câu phức tạp với nhiều mệnh đề phụ",
            "Câu dài và hoa mỹ",
            "Câu ngắn gọn, đơn giản nhưng chính xác"
        ],
        answer: "Câu ngắn gọn, đơn giản nhưng chính xác"
    },
    {
        category: "Mẹo Speaking",
        question: "Khi nói, bạn nên cố gắng dùng những từ vựng và cấu trúc như thế nào?",
        options: [
            "Những từ mới và phức tạp để gây ấn tượng",
            "Những từ và cấu trúc bạn đã quen thuộc, tránh sai ngữ pháp",
            "Những cấu trúc ngữ pháp nâng cao dù chưa chắc chắn"
        ],
        answer: "Những từ và cấu trúc bạn đã quen thuộc, tránh sai ngữ pháp"
    },
    {
        category: "Mẹo Speaking",
        question: "Lời khuyên về giọng điệu khi nói là gì?",
        options: [
            "Nói thật to và nhanh",
            "Giữ giọng tự nhiên, tránh đọc như học thuộc lòng",
            "Nói nhỏ và chậm để không bị sai"
        ],
        answer: "Giữ giọng tự nhiên, tránh đọc như học thuộc lòng"
    },
    {
        category: "Mẹo Speaking",
        question: "Để cải thiện kỹ năng nói, bước cuối cùng và quan trọng nhất được gợi ý là gì?",
        options: [
            "Học thêm thật nhiều từ vựng mới",
            "Tập nói trước gương",
            "Tập nói, ghi âm lại để tự đánh giá và cải thiện"
        ],
        answer: "Tập nói, ghi âm lại để tự đánh giá và cải thiện"
    },

    // --- CÂU HỎI BỔ SUNG ---
    {
        category: "Part 2 - B2: Miêu tả",
        question: "Trong Part 2, yếu tố nào được nhấn mạnh là 'quan trọng nhất' khi miêu tả người?",
        options: [
            "Kiểu tóc (Hair style)",
            "Hành động (Action)",
            "Tuổi tác (Age)"
        ],
        answer: "Hành động (Action)"
    },
    {
        category: "Công thức PEEL",
        question: "Mục đích chính của phần 'Example' trong PEEL là gì?",
        options: [
            "Để kéo dài thời gian nói",
            "Để lặp lại ý kiến chính",
            "Để minh họa cho lý do của bạn bằng ví dụ cụ thể"
        ],
        answer: "Để minh họa cho lý do của bạn bằng ví dụ cụ thể"
    },
    {
        category: "Part 3 - Cấu trúc",
        question: "Nếu còn thời gian sau khi miêu tả 2 tranh, bạn có thể làm gì?",
        options: [
            "Kết thúc bài nói",
            "Miêu tả lại tranh 1 chi tiết hơn",
            "Đưa ra một câu so sánh tổng thể"
        ],
        answer: "Đưa ra một câu so sánh tổng thể"
    },
    {
        category: "Part 4 - Cấu trúc",
        question: "Câu \"Thank you for listening\" là một câu kết thúc...",
        options: [
            "Bắt buộc",
            "Tùy chọn (Optional)",
            "Không nên dùng"
        ],
        answer: "Tùy chọn (Optional)"
    },
     {
        category: "Công thức PEEL",
        question: "Công thức PEEL đặc biệt hữu ích cho các câu hỏi về...",
        options: [
            "Mô tả (Describe)",
            "Kể chuyện (Tell a story)",
            "Quan điểm và lý do (Opinion and 'Why')"
        ],
        answer: "Quan điểm và lý do (Opinion and 'Why')"
    },
    {
        category: "Mẹo Speaking",
        question: "Mẹo số 1 về thời gian nói là gì?",
        options: [
            "Nói càng nhanh càng tốt",
            "Nói đủ thời gian, đừng quá ngắn",
            "Nói chậm để kéo dài thời gian"
        ],
        answer: "Nói đủ thời gian, đừng quá ngắn"
    },
    {
        category: "Part 2 - B3: Phỏng đoán",
        question: "Cụm từ \"He/she looks like...\" nên được theo sau bởi...",
        options: [
            "Một động từ V-ing",
            "Một danh từ hoặc tính từ (a noun/adjective)",
            "Một mệnh đề hoàn chỉnh"
        ],
        answer: "Một danh từ hoặc tính từ (a noun/adjective)"
    }
];