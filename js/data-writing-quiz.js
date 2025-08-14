const writingQuizData = [
    // --- CÂU HỎI CHO EMAIL TRANG TRỌNG (FORMAL) ---
    {
        category: "Formal Email - Opening",
        question: "Đâu là cách MỞ ĐẦU phù hợp nhất cho email gửi quản lý?",
        options: [
            "Hi Manager,",
            "Dear Manager,",
            "What's up, Manager?"
        ],
        answer: "Dear Manager,"
    },
    {
        category: "Formal Email - Opening",
        question: "Chọn câu chào hỏi lịch sự và phổ biến nhất ở đầu email trang trọng.",
        options: [
            "I hope you are fine.",
            "I hope this email finds you well.",
            "How's it going?"
        ],
        answer: "I hope this email finds you well."
    },
    {
        category: "Formal Email - Purpose",
        question: "Để NÊU MỤC ĐÍCH viết thư, bạn nên dùng câu nào?",
        options: [
            "I am writing this email to express my opinion concerning the recent email.",
            "I want to talk about the email.",
            "This email is about the club's news."
        ],
        answer: "I am writing this email to express my opinion concerning the recent email."
    },
    {
        category: "Formal Email - Context",
        question: "Để TRÌNH BÀY LẠI VẤN ĐỀ, câu nào là phù hợp nhất?",
        options: [
            "You said in the email that...",
            "According to the email, you said that...",
            "I remember you wrote..."
        ],
        answer: "According to the email, you said that..."
    },
    {
        category: "Formal Email - Suggestion",
        question: "Khi bắt đầu đưa ra GỢI Ý, bạn nên dùng cụm từ nào để thể hiện sự trang trọng?",
        options: [
            "I think we should...",
            "From my perspective, I think we should...",
            "We must do this..."
        ],
        answer: "From my perspective, I think we should..."
    },
    {
        category: "Formal Email - Suggestion",
        question: "Đâu là một từ nối tốt để trình bày gợi ý THỨ HAI?",
        options: [
            "And...",
            "Then...",
            "In addition, we could also..."
        ],
        answer: "In addition, we could also..."
    },
    {
        category: "Formal Email - Closing",
        question: "Câu nào sau đây là một cách KẾT BÀI gợi ý tốt?",
        options: [
            "Thank you for considering my suggestions.",
            "That's all I want to say.",
            "Please think about it."
        ],
        answer: "Thank you for considering my suggestions."
    },
    {
        category: "Formal Email - Call to Action",
        question: "Để KÊU GỌI HÀNH ĐỘNG một cách lịch sự, bạn nên dùng câu nào?",
        options: [
            "I look forward to hearing from you soon.",
            "Please reply soon.",
            "Tell me what you think."
        ],
        answer: "I look forward to hearing from you soon."
    },
    {
        category: "Formal Email - Closing",
        question: "Đâu là lời chào cuối thư TRANG TRỌNG nhất?",
        options: [
            "Love,",
            "Best,",
            "Yours sincerely,"
        ],
        answer: "Yours sincerely,"
    },
    {
        category: "Formal Email - Introduction",
        question: "Khi cần GIỚI THIỆU BẢN THÂN trong email cho quản lý, bạn nên nói gì?",
        options: [
            "My name is [Tên] and I have been a club member for [số] years.",
            "I'm [Tên], a member.",
            "Just to let you know, my name is [Tên]."
        ],
        answer: "My name is [Tên] and I have been a club member for [số] years."
    },

    // --- CÂU HỎI CHO EMAIL THÂN MẬT (INFORMAL) ---
    {
        category: "Informal Email - Greeting",
        question: "Đâu là cách chào hỏi THÂN MẬT và phổ biến nhất cho bạn bè?",
        options: [
            "Dear Sara,",
            "Hi Sara,",
            "To my friend Sara,"
        ],
        answer: "Hi Sara,"
    },
    {
        category: "Informal Email - Greeting",
        question: "Chọn câu hỏi thăm thân mật ở đầu email.",
        options: [
            "I hope this email finds you well.",
            "How are you doing?",
            "How's it going?"
        ],
        answer: "How's it going?"
    },
    {
        category: "Informal Email - Context",
        question: "Để NÊU VẤN ĐỀ một cách tự nhiên, bạn nên dùng câu nào?",
        options: [
            "I just got an email from the club manager.",
            "I am writing to inform you about an email.",
            "Regarding the recent email from the manager,"
        ],
        answer: "I just got an email from the club manager."
    },
    {
        category: "Informal Email - Feeling",
        question: "Để thể hiện CẢM XÚC, câu nào là phù hợp nhất trong văn phong thân mật?",
        options: [
            "I was a little disappointed about this news.",
            "My feeling was one of surprise.",
            "To be honest, I was very surprised about this news."
        ],
        answer: "To be honest, I was very surprised about this news."
    },
    {
        category: "Informal Email - Suggestion",
        question: "Khi đưa ra GỢI Ý cho bạn bè, bạn có thể bắt đầu bằng:",
        options: [
            "From my perspective, we should...",
            "I think we should...",
            "It is recommended that we..."
        ],
        answer: "I think we should..."
    },
    {
        category: "Informal Email - Suggestion",
        question: "Đâu là một cách khác để đưa ra gợi ý thân mật?",
        options: [
            "Furthermore, it would be a great idea if...",
            "Maybe the club could...",
            "Additionally, the club ought to..."
        ],
        answer: "Maybe the club could..."
    },
    {
        category: "Informal Email - Closing",
        question: "Để hỏi ý kiến của bạn bè ở cuối thư, bạn nói gì?",
        options: [
            "What do you think?",
            "I await your response.",
            "Please provide your feedback."
        ],
        answer: "What do you think?"
    },
    {
        category: "Informal Email - Closing",
        question: "Chọn một cách kết bài thân mật khác.",
        options: [
            "Hope to hear from you soon.",
            "I look forward to your reply.",
            "Awaiting your earliest convenience."
        ],
        answer: "Hope to hear from you soon."
    },
    {
        category: "Informal Email - Closing",
        question: "Đâu là lời chào cuối thư phù hợp nhất cho bạn bè?",
        options: [
            "Yours sincerely,",
            "Best regards,",
            "Best,"
        ],
        answer: "Best,"
    },
    {
        category: "Informal Email - Closing",
        question: "Một lời chào cuối thư THÂN MẬT và tình cảm hơn là:",
        options: [
            "All the best,",
            "Love,",
            "Regards,"
        ],
        answer: "Love,"
    }
];