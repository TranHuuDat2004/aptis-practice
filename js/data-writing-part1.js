const writingPart1Data = [
    {
        id: 'wp1_topic1',
        title: 'Chủ đề 1: Lên kế hoạch cho buổi gặp mặt câu lạc bộ',
        questions: [
            "Hi, what's your full name?",
            "Where are you from?",
            "What do you do in your free time?",
            "How did you hear about our club?",
            "What are you hoping to gain from joining?"
        ]
    },
    {
        id: 'wp1_topic2',
        title: 'Chủ đề 2: Thảo luận về hoạt động cuối tuần',
        questions: [
            "What activity are you interested in?",
            "Which day is best for you?",
            "Who else should we invite?",
            "What should I bring?",
            "Where should we meet?"
        ]
    },
    {
        id: 'wp1_topic3',
        title: 'Chủ đề 3: Chuẩn bị cho chuyến đi dã ngoại',
        questions: [
            "What kind of food do you like?",
            "Can you help with the preparations?",
            "What time should we leave?",
            "What's the weather forecast?",
            "Do you have any suggestions for games?"
        ],
    },
    {
        id: 'wp1_topic4',
        title: 'Chủ đề 4: Đăng ký thành viên câu lạc bộ phim',
        questions: ["What's your favorite film?", "What kinds of movies do you like?", "Who do you usually go to the movies with?", "What did you do last night?", "Do you like watching films?"]
    },
    {
        id: 'wp1_topic5',
        title: 'Chủ đề 5: Tìm hiểu về bạn mới',
        questions: ["How do you go to school?", "What is your job?", "What is your first school?", "How do you relax?", "How many people are there in your family?"]
    },
    {
        id: 'wp1_topic6',
        title: 'Chủ đề 6: Chia sẻ sở thích cá nhân',
        questions: ["What's your favorite hobby?", "Do you like doing exercise?", "What's your favorite sport?", "Do you like to take photos?", "What do you like to do in the evening?"]
    },
    {
        id: 'wp1_topic7',
        title: 'Chủ đề 7: Kế hoạch cho kỳ nghỉ',
        questions: ["Where do you like to go on holiday?", "What is your favorite season of the year?", "What's the weather like today?", "Why do you learn English?", "What's your favorite animal?"]
    },
    {
        id: 'wp1_topic8',
        title: 'Chủ đề 8: Trò chuyện buổi sáng',
        questions: ["How are you?", "What did you do yesterday?", "What do you like to do every morning?", "How do you get to work?", "What's your favorite food?"]
    },
    {
        id: 'wp1_topic9',
        title: 'Chủ đề 9: Thông tin cho câu lạc bộ du lịch',
        questions: ["First language?", "Which job would you like to do in the future?", "Where are you from?", "What do you do?", "What is your favourite device?"]
    },
    {
        id: 'wp1_topic10',
        title: 'Chủ đề 10: Thảo luận cuối tuần',
        questions: ["What do you usually do on weekends?", "What's your favorite season/time of the year?", "When do you usually watch TV?", "What did you do last night?", "Who do you usually go to the movies with?"]
    }
];

const writingPart1Bank = [
    { question: "What is your name?", answer: "My name is Tran Huu Dat." },
    { question: "What do you do?", answer: "I study at university." },
    { question: "What did you do last night?", answer: "I watched a movie." },
    { question: "What is your favourite device?", answer: "I love my laptop." },
    { question: "What's your favourite colour?", answer: "My favorite color is blue." },
    { question: "What's the weather like today?", answer: "Today is sunny and warm." },
    { question: "What do you do in your free time?", answer: "I like hiking and reading." },
    { question: "First language?", answer: "My first language is Vietnamese." },
    { question: "Who do you usually go to the movies with?", answer: "I usually go with my friends." },
    { question: "Do you like watching films?", answer: "Yes, I love watching films." },
    { question: "Where do you like to go on holiday?", answer: "I like beach holidays." },
    { question: "What did you do last night?", answer: "I cooked dinner and relaxed." },
    { question: "What's your favorite sport?", answer: "My favorite sport is badminton." },
    { question: "How many people are there in your family?", answer: "There are four people in my family." },
    { question: "What did you do yesterday?", answer: "I worked and visited grandparents." },
    { question: "How do you go to school?", answer: "I walk to school every day." },
    { question: "Do you like doing exercise?", answer: "Yes, I enjoy exercising regularly." },
    { question: "Do you like to take photos?", answer: "Yes, I love taking photos." },
    { question: "What is your job?", answer: "I am a marketing specialist." },
    { question: "What is your favorite season of the year?", answer: "My favorite season is autumn." },
    { question: "What do you like to do every morning?", answer: "I drink coffee and read." },
    { question: "How are you?", answer: "I'm doing well, thank you!" },
    { question: "What's your favorite hobby?", answer: "Reading books is my favorite hobby." },
    { question: "How do you get to work?", answer: "I take the bus to work." },
    { question: "What do you like to do in the evening?", answer: "I enjoy watching movies in the evening." },
    { question: "What kinds of movies do you like?", answer: "I like action and comedy movies." },
    { question: "What's your favorite food?", answer: "My favorite food is sushi." },
    { question: "Where are you from?", answer: "I am from Hanoi, Vietnam." },
    { question: "What do you do?/ what are you?/ what is your job/ career/ profession/ occupation?", answer: "I am a student." },
    { question: "Which job would you like to do in the future?", answer: "I want to be a teacher." },
    { question: "Why do you learn English?", answer: "To travel and get a good job." },
    { question: "What is your first school?", answer: "My first school is Le Loi School." },
    { question: "How do you relax?", answer: "I listen to music and rest." },
    { question: "What do you usually do on weekends?", answer: "I go out with my friends." },
    { question: "Who do you usually go to the movies with?", answer: "I go with my best friend." },
    { question: "When do you usually watch TV?", answer: "I watch TV in the evening." },
    { question: "What is your favorite film?", answer: "My favorite film is Frozen." },
    { question: "What is your favorite animal?", answer: "I like cats." },
    { question: "What is your favorite season/time of the year?", answer: "My favorite season is summer." }
];
