// js/data-writing.js

const writingData = {
    part1: [
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

        // --- 7 CHỦ ĐỀ MỚI ĐƯỢC SÁNG TẠO ---
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
    ],

    // --- THÊM MỚI NGÂN HÀNG CÂU HỎI ---
    part1_bank: [
        // Từ đề thi mẫu
        { question: "What is your name?", answer: "My name is Tran Huu Dat." },
        { question: "What do you do?", answer: "I study at university." },
        { question: "What did you do last night?", answer: "I watched a movie." },
        { question: "What is your favourite device?", answer: "I love my laptop." },
        { question: "What's your favourite colour?", answer: "My favorite color is blue." },

        // Từ ví dụ 1
        { question: "What's the weather like today?", answer: "Today is sunny and warm." },
        { question: "What do you do in your free time?", answer: "I like hiking and reading." },
        { question: "First language?", answer: "My first language is Vietnamese." },
        { question: "Who do you usually go to the movies with?", answer: "I usually go with my friends." },
        { question: "Do you like watching films?", answer: "Yes, I love watching films." },
        { question: "Where do you like to go on holiday?", answer: "I like beach holidays." },

        // Từ ví dụ 2
        { question: "What did you do last night?", answer: "I cooked dinner and relaxed." },
        { question: "What's your favorite sport?", answer: "My favorite sport is badminton." },
        { question: "How many people are there in your family?", answer: "There are four people in my family." },
        { question: "What did you do yesterday?", answer: "I worked and visited grandparents." },
        { question: "How do you go to school?", answer: "I walk to school every day." },

        // --- BỔ SUNG DỮ LIỆU MỚI ---

        // Từ ảnh mới 1
        { question: "Do you like doing exercise?", answer: "Yes, I enjoy exercising regularly." },
        { question: "Do you like to take photos?", answer: "Yes, I love taking photos." },
        { question: "What is your job?", answer: "I am a marketing specialist." },
        { question: "What is your favorite season of the year?", answer: "My favorite season is autumn." },
        { question: "What do you like to do every morning?", answer: "I drink coffee and read." },
        { question: "How are you?", answer: "I'm doing well, thank you!" },

        // Từ ảnh mới 2
        { question: "What's your favorite hobby?", answer: "Reading books is my favorite hobby." },
        { question: "How do you get to work?", answer: "I take the bus to work." },
        { question: "What do you like to do in the evening?", answer: "I enjoy watching movies in the evening." },
        { question: "What kinds of movies do you like?", answer: "I like action and comedy movies." },
        { question: "What's your favorite food?", answer: "My favorite food is sushi." },
        { question: "Where are you from?", answer: "I am from Hanoi, Vietnam." },

        // Từ ảnh mới 3
        { question: "What do you do?/ what are you?/ what is your job/ career/ profession/ occupation?", answer: "I am a student." },
        { question: "Which job would you like to do in the future?", answer: "I want to be a teacher." },
        { question: "Why do you learn English?", answer: "To travel and get a good job." },
        { question: "What is your first school?", answer: "My first school is Le Loi School." },
        { question: "How do you relax?", answer: "I listen to music and rest." },

        // Từ ảnh mới 4
        { question: "What do you usually do on weekends?", answer: "I go out with my friends." },
        { question: "Who do you usually go to the movies with?", answer: "I go with my best friend." },
        { question: "When do you usually watch TV?", answer: "I watch TV in the evening." },
        { question: "What is your favorite film?", answer: "My favorite film is Frozen." },
        { question: "What is your favorite animal?", answer: "I like cats." },
        { question: "What is your favorite season/time of the year?", answer: "My favorite season is summer." }
    ],

    part2: [
        {
            id: 'wp2_travel_club',
            title: 'Chủ đề 1: Travel Club',
            question: "Why are you interested in travel?",
            sampleAnswer: "I love travel because it opens my mind to new cultures, experiences, and people. Travel makes me happy and curious. I want to see the world and learn from it."
        },
        {
            id: 'wp2_home_living_club',
            title: 'Chủ đề 2: Home Living Club',
            question: "Describe where you live",
            sampleAnswer: "I live in Ho Chi Minh City, the largest and most populous city in Vietnam. It is a busy and lively place with many cultural and historical attractions. I enjoy the diversity and energy of this city."
        },
        {
            id: 'wp2_science_club',
            title: 'Chủ đề 3: Science Club',
            question: "Do you like Science? Why?",
            sampleAnswer: "Yes. I am really interested in science because it helps me understand the world around me. For example, science gives me a better understanding of the planets."
        },
        {
            id: 'wp2_food_club_lunch',
            title: 'Chủ đề 4: Food Club - Lunch',
            question: "What did you have for lunch yesterday and where did you eat it?",
            sampleAnswer: "I had grilled pork with broken rice (cơm tấm thịt nướng) for lunch yesterday. I enjoyed it at a local Vietnamese restaurant near my office. The tender meat and fragrant rice made for a delicious and filling meal."
        },
        {
            id: 'wp2_food_club_breakfast',
            title: 'Chủ đề 5: Food Club - Breakfast',
            question: "What do you usually eat for breakfast and when do you eat it?",
            sampleAnswer: "I like to eat Banh mi for breakfast. It is a Vietnamese sandwich with meat, vegetables and sauce. I usually eat it around 8 a.m., before I go to work. It is delicious and filling."
        },
        {
            id: 'wp2_language_club_usage',
            title: 'Chủ đề 6: Language Club',
            question: "In which cases do you often use foreign languages?",
            sampleAnswer: "I use foreign languages when I travel, watch movies, read books, or chat online. I like learning new words and cultures. It's fun and useful."
        },

        // --- 7 CHỦ ĐỀ MỚI ---
        {
            id: 'wp2_walking_club_when_where',
            title: 'Chủ đề 7: Walking Club - When and where',
            question: "When and where you like to walk?",
            sampleAnswer: "I like to walk in the park on sunny days. It is relaxing and fun. I enjoy the fresh air and the nature. I walk for about an hour."
        },
        {
            id: 'wp2_walking_club_last_time',
            title: 'Chủ đề 8: Walking Club - Last time',
            question: "Tell about the last time you went for a long walk.",
            sampleAnswer: "I enjoy walking for exercise and relaxation. The last time I went for a long walk was two weeks ago. I walked around the park for an hour and admired the scenery and the fresh air."
        },
        {
            id: 'wp2_garden_club_join',
            title: 'Chủ đề 9: Garden Club',
            question: "Why did you join the club?",
            sampleAnswer: "I joined the garden club because I have always enjoyed spending time outdoors, and I want to learn more about gardening. I think it will be fun to meet new people who share similar interests and exchange gardening tips."
        },
        {
            id: 'wp2_travel_by_car',
            title: 'Chủ đề 10: Travel by car',
            question: "Do you usually travel by car?",
            sampleAnswer: "Yes, I usually travel by car, especially when I go to work or take short trips. It's more convenient and saves time compared to public transportation. I also enjoy the flexibility of stopping wherever I want."
        },
        {
            id: 'wp2_free_time_interests',
            title: 'Chủ đề 11: Free time and interests',
            question: "Tell me your free time and interests.",
            sampleAnswer: "In my free time, I enjoy listening to music, especially pop and rock. I also like reading books and watching movies, particularly action and thriller genres. Additionally, I like to spend time with my friends, going out and exploring new places."
        },
        {
            id: 'wp2_book_club_keep_books',
            title: 'Chủ đề 12: Book Club - Keeping books',
            question: "Where do you keep all your books in your home?",
            sampleAnswer: "I have a lot of books in my home. I keep them in different places. Some are on shelves, some are in boxes, and some are under my bed. I like to read everywhere, so I always have a book nearby."
        },
        {
            id: 'wp2_reading_club_last_book',
            title: 'Chủ đề 13: Reading Club - Last book',
            question: "Tell me about the last book or story you read.",
            sampleAnswer: "The last story I read was about Doraemon, a blue robot cat from the future. He uses his magical gadgets to help Nobita, a young boy, with everyday problems and adventures. It's fun and heartwarming!"
        },
        {
            id: 'wp2_photography_club',
            title: 'Chủ đề 14: Photography Club',
            question: "What is your favorite time and place to take pictures?",
            sampleAnswer: "I love taking pictures in the morning at the park. The light is soft and the flowers are fresh. I enjoy capturing the beauty of nature and the people there."
        },
        {
            id: 'wp2_outdoor_club',
            title: 'Chủ đề 15: Outdoor Club',
            question: "Which outdoor activities do you like? Why?",
            sampleAnswer: "I enjoy hiking and camping because I love being in nature. It's relaxing, and I like the challenge of exploring new places. It's a great way to stay active and enjoy the outdoors."
        },
        {
            id: 'wp2_course_attendance',
            title: 'Chủ đề 16: Course Attendance',
            question: "Please tell us about the days and times you can attend courses and what subject do you like to study?",
            sampleAnswer: "I can attend this course on Friday; the most reasonable time is from 5 p.m. to 7 p.m. I like studying speaking and listening skills because I want to improve them to get high marks in the exams."
        }
    ],

    part3: [
        {
            id: 'wp3_travel_club',
            title: 'Chủ đề 1: Travel Club Chat',
            prompts: [
                { user: 'User A', question: "Tell me a time you had a trip in bad weather.", sampleAnswer: "Last year, I went camping with my friends. It was sunny when we left, but it started to rain hard at night. We got wet and cold, and our tent leaked. It was a bad trip, but we still had fun." },
                { user: 'User B', question: "Traveling a long distance by some means of transportation is not good for the environment? Do you agree?", sampleAnswer: "I disagree. Traveling a long distance can be good for the environment. It can help us learn about different cultures and places. It can also inspire us to protect nature and wildlife. We can travel in eco-friendly ways, like trains or bikes." },
                { user: 'User C', question: "What are the most interesting places to visit in your country?", sampleAnswer: "Vietnam has many interesting places to visit. You can see beautiful nature, ancient temples, and lively cities. Some of the best places are Ha Long Bay, Hoi An, and Ho Chi Minh City. You will enjoy the culture, food, and people of Vietnam." }
            ]
        },
        {
            id: 'wp3_living_opinions',
            title: 'Chủ đề 2: Living Opinions Chat',
            prompts: [
                { user: 'User A', question: "You have to stay in the bedroom but have to share with your brother. How do you feel?", sampleAnswer: "I feel happy to share the bedroom with my brother. He is my best friend and we have fun together. We play games, read books and tell jokes. I like having him around. He makes me laugh and feel safe." },
                { user: 'User B', question: "It is better to live in the city or in the countryside. Do you agree? Why?", sampleAnswer: "I prefer living in the city. There are more things to do and see. I can meet new people and have fun. The countryside is boring and lonely. I don't like nature or animals. The city is better for me." },
                { user: 'User C', question: "Nowadays, old buildings are demolished and replaced with modern buildings. I feel we should protect historic buildings. How do you think?", sampleAnswer: "I agree with you. Historic buildings are part of our culture and heritage. They show us how people lived in the past and what they valued. Modern buildings are often boring. They lack the charm and character of old buildings. We should preserve historic buildings for future generations." }
            ]
        },
        {
            id: 'wp3_science_club',
            title: 'Chủ đề 3: Science Club Chat',
            prompts: [
                { user: 'User A', question: "Why do you decide to join in our Science Club? How often can you go to the club?", sampleAnswer: "I decided to join the club because my best friend was a member. Moreover, when I was a child, I was really interested in science. I usually study on weekdays, so I want to take part in club activities on weekends." },
                { user: 'User B', question: "In the past, you leant about Science in school. Do you remember something about Science?", sampleAnswer: "I still remember some knowledge about science; these are the basics. Firstly, the earth revolves around the sun. Secondly, water boils at 100 degrees Celsius. Finally, information about the Big Bang." },
                { user: 'User C', question: "Who is your favorite inventor or scientist? Why?", sampleAnswer: "My favorite scientist is Marie Curie. She is the first woman in the world to receive a Nobel Award. She is a woman who is very hardworking and passionate about her research work. I admire her very much." }
            ]
        },

        // --- 7 CHỦ ĐỀ MỚI ---
        {
            id: 'wp3_food_club_1',
            title: 'Chủ đề 4: Food Club Chat 1',
            prompts: [
                { user: 'Kimi', question: "Yesterday, had a great dinner with my friends. It was the best meal I've ever had. Tell me about the best meal you have ever had.", sampleAnswer: "Yesterday, I had an amazing dinner with my friends. It was truly the best meal I’ve ever had. The combination of delicious food, great company, and cheerful ambiance made it a memorable experience." },
                { user: 'Tiberius', question: "I like eating out with friends whenever I can. Do you prefer to eat out or eat at home? Why?", sampleAnswer: "I enjoy eating out with friends whenever possible. It's a great way to socialize, try new dishes, and experience different atmospheres. However, eating at home allows for a more relaxed and personalized dining experience." },
                { user: 'Randal', question: "People in some countries are eating too much and becoming unhealthy. I think there should be high taxes on unhealthy food. What do you think?", sampleAnswer: "I believe imposing higher taxes on unhealthy food can encourage better eating habits and possibly reduce health issues related to poor diet choices. It’s a step towards promoting a healthier population and managing public health better." }
            ]
        },
        {
            id: 'wp3_food_club_2',
            title: 'Chủ đề 5: Food Club Chat 2',
            prompts: [
                { user: 'User A', question: "What do you do when you don't have much time to cook?", sampleAnswer: "When I don't have much time to cook, I usually make something easy and quick. For example, I might boil some pasta and add some sauce, or make a sandwich with cheese and ham. Sometimes I just order pizza or Chinese food online. It depends on what I feel like eating." },
                { user: 'User B', question: "What do you prefer? Buy at some small local shops or supermarkets?", sampleAnswer: "I like to buy at small local shops. They have fresh and good quality products. I also support the local economy and community. Supermarkets are too big and crowded for me." },
                { user: 'User C', question: "Cooking is an important skill for children to study at school. What do you think?", sampleAnswer: "I think cooking is important for kids. They can learn about food, health, and culture. Cooking is also fun and creative. Kids can make their own dishes and share them with others. Cooking can help kids grow up happy and healthy." }
            ]
        },
        {
            id: 'wp3_food_club_3',
            title: 'Chủ đề 6: Food Club Chat 3',
            prompts: [
                { user: 'Kim', question: "I love good food. Can you tell me about the last time you had a really nice meal?", sampleAnswer: "I had a nice meal when I came back home over the weekend. My mom cooked many of my favorite foods, such as “banh xeo” and sour soup. I really want to have time to come back home to eat them." },
                { user: 'Marco', question: "If I visit your country, where can I eat some local food. What should I try? Can you give me some advice?", sampleAnswer: "If you visit my country, you can eat local food in many places. You should try pho, banh mi, and spring rolls. They are delicious and cheap. In Ho Chi Minh, you can find them in street stalls or restaurants. I hope you enjoy your trip!" },
                { user: 'Sylvia', question: "People are eating more and more fast food like pizza. It is not healthy and they should eat less. What is your opinion?", sampleAnswer: "I think fast food is bad for your health. Pizza has too much fat and salt. It can cause obesity and heart problems. People should eat more fruits and vegetables. They are good for the body and mind." }
            ]
        },
        {
            id: 'wp3_language_club_1',
            title: 'Chủ đề 7: Language Club Chat 1',
            prompts: [
                { user: 'User A', question: "I didn't study English well when I was at school. I have a private teacher now. Can you tell me about your experience of learning English.", sampleAnswer: "I learned English by myself. I watched movies and read books in English. I also practiced speaking with friends online. It was fun and easy for me. I hope you enjoy learning English too." },
                { user: 'User B', question: "I can read and write in English very well, but I have trouble speaking. How can I improve? Can you give me some advice?", sampleAnswer: "To improve your speaking, you need to practice more. Find a partner or a group online. Talk about topics you like. Listen to podcasts or videos. Repeat what they say. Don't be afraid to make mistakes. Good luck!" },
                { user: 'User C', question: "It is more important to communicate in a language. We don't have to worry about making any mistakes. What is your opinion?", sampleAnswer: "I think it's essential to prioritize communication in a language without fearing mistakes. The main goal is to connect and convey our thoughts effectively. Mistakes are a normal part of learning, so let's focus on understanding and being understood rather than perfection." }
            ]
        },
        {
            id: 'wp3_language_club_2',
            title: 'Chủ đề 8: Language Club Chat 2',
            prompts: [
                { user: 'User A', question: "I used to learn French and found it very interesting. Tell me about a memory you have with a foreign language?", sampleAnswer: "I learn English because I like to watch movies and read books. One time, I went to London with my family and I spoke English with some people there. It was fun and they were very nice. I want to learn more English and visit other places." },
                { user: 'User B', question: "I am very forgetful. Can you give me some tips on how to remember new words?", sampleAnswer: "Here are some tips that can help you remember new words easily. First, you should repeat them out loud several times. Second, you can write them down in a notebook or flashcards. Third, you use them in sentences or stories." },
                { user: 'User C', question: "Some people learn English through videos and reading books. However, there are also many private classes and teachers. What do you think is the most effective way to learn?", sampleAnswer: "I think the best way to learn English is to use different methods. Videos and books are good for vocabulary and grammar. But classes and teachers are good for speaking and listening. So, I would mix them and try to practice every day." }
            ]
        },
        {
            id: 'wp3_walking_club_1',
            title: 'Chủ đề 9: Walking Club Chat 1',
            prompts: [
                { user: 'User A', question: "Có lần tôi đang đi bộ thì bị dính mưa. Kể về một trải nghiệm xấu khi bạn đi bộ?", sampleAnswer: "One time I was walking and it started to rain. I didn't have an umbrella or a jacket. I ran to the nearest store and bought a raincoat. It was bright pink and had a butterfly on it. I felt silly but also happy." },
                { user: 'User B', question: "My friends like to walk fast but I like walk slowly. What about you?", sampleAnswer: "I like to walk slowly too. It is relaxing and I can enjoy the view. Sometimes my friends walk fast and I get tired. I wish they would slow down a bit. How do you feel?" },
                { user: 'User C', question: "How do you encourage people to walk more?", sampleAnswer: "To encourage people to walk more, you can tell them the benefits of walking for health and mood. Choose a scenic route or a new destination to explore and listen to music, podcasts or audiobooks while walking." }
            ]
        },
        {
            id: 'wp3_walking_club_2',
            title: 'Chủ đề 10: Walking Club Chat 2',
            prompts: [
                { user: 'User A', question: "I walk to work everyday to save money on bus tickets. I also walk in a local park on nice evenings to get some exercise. Why do you walk?", sampleAnswer: "I walk for different reasons. In the morning, I walk to work to save money on bus tickets. In the evening, I walk in a park to exercise and relax. I like to enjoy nature and stay healthy. Walking is good for your body and mind." },
                { user: 'User B', question: "I prefer to go to the countryside to go for long walks. Walking in the city is too stressful and noisy. Where do you prefer and why?", sampleAnswer: "I like the countryside too. It is quiet and peaceful. I can enjoy nature and relax. The city is too busy and loud for me. I don't like the traffic and the crowds. I prefer to walk where there is fresh air and greenery." },
                { user: 'User C', question: "In the past, many people walked long distances as part of their daily lives. Why do many people do very little walking nowadays?", sampleAnswer: "Nowadays, many people do very little walking because of three reasons. First, they have cars or buses that can take them anywhere. Second, they work at home or in offices that are close to their homes. Third, they spend a lot of time watching TV or playing games on their phones." }
            ]
        },

        // --- 5 CHỦ ĐỀ MỚI ---
        {
            id: 'wp3_garden_club',
            title: 'Chủ đề 11: Garden Club Chat',
            prompts: [
                { user: 'User A', question: "Describe your garden?", sampleAnswer: "My garden is small but colorful. I have various flowers like roses, tulips, and daisies, along with a few herbs like basil and mint. There's also a small vegetable patch where I grow tomatoes and lettuce." },
                { user: 'User B', question: "Do people in your country like gardening?", sampleAnswer: "Yes, many people in my country enjoy gardening, especially in rural areas. It's common to see gardens with flowers, vegetables, and fruit trees. People appreciate the beauty of plants and also enjoy the sense of accomplishment from growing their own food." },
                { user: 'User C', question: "What is your favorite season? Why?", sampleAnswer: "My favorite season is spring because the weather is warm and pleasant. I love seeing the flowers bloom and the trees regain their leaves. It's also the perfect time to start planting and enjoying the outdoors." }
            ]
        },
        {
            id: 'wp3_travel_by_car',
            title: 'Chủ đề 12: Travel by Car Chat',
            prompts: [
                { user: 'User A', question: "Tell me about a time you traveled by car.", sampleAnswer: "Last summer, I traveled by car with two of my closest friends. We went on a weekend trip to the countryside. The drive was long but enjoyable. We listened to music, had snacks, and stopped to take photos of the beautiful scenery along the way." },
                { user: 'User B', question: "Tell me about memories when traveling by car.", sampleAnswer: "One of my best memories was a road trip with my family when I was a teenager. We drove to the beach, played games in the car, and talked a lot. It was a great way to bond with each other and enjoy quality time together without distractions." },
                { user: 'User C', question: "Should we take public transportation or buy a car?", sampleAnswer: "Both options have advantages. Public transportation is better for the environment and often cheaper. However, owning a car offers more independence and is more convenient for people with busy schedules or those living in remote areas. It depends on your lifestyle." }
            ]
        },
        {
            id: 'wp3_language_club_3',
            title: 'Chủ đề 13: Language Club Chat 3',
            prompts: [
                { user: 'User A', question: "Why did you choose this course?", sampleAnswer: "I chose this course because I want to improve my English speaking and listening skills. I believe it will help me in both my personal and professional life, especially when traveling or working in an international environment." },
                { user: 'User B', question: "How have you found the course so far? What has been difficult?", sampleAnswer: "So far, the course has been really helpful, especially in building my confidence. However, I've found the vocabulary and speaking practice challenging, particularly in learning more complex words and using them correctly in conversations." },
                { user: 'User C', question: "What are you hoping to do when you finish the course?", sampleAnswer: "When I finish the course, I hope to be more fluent in English, especially in speaking. I want to use it confidently for professional opportunities, travel, and socializing with people from different countries without feeling nervous." }
            ]
        },
        {
            id: 'wp3_reading_habits',
            title: 'Chủ đề 14: Reading Habits Chat',
            prompts: [
                { user: 'User A', question: "I often read books in the evening. When do you usually read books? Where?", sampleAnswer: "I like your question. I also enjoy reading books. I usually read books in the morning, before I start my day. I like to read in my bed, where it is cozy and quiet. Reading helps me relax and learn new things." },
                { user: 'User B', question: "I usually read non-fiction books, especially about history and famous people. Which kind of books do you prefer reading? Why?", sampleAnswer: "That's cool. I like non-fiction books too. They are very informative and interesting. I usually read books about science and technology because I'm curious about how things work and what the future holds. I also enjoy reading biographies of inspiring people who have made a difference in the world." },
                { user: 'User C', question: "Do you think people will read in the future? Why?", sampleAnswer: "I think people will read in the future. Reading is fun and good for the brain. Books have many stories and information. People like to learn new things and imagine. Reading helps with that. Reading is also relaxing and enjoyable." }
            ]
        },
        {
            id: 'wp3_reading_vs_games',
            title: 'Chủ đề 15: Reading vs Video Games Chat',
            prompts: [
                { user: 'User A', question: "I really like reading all types of magazine, especially about the sport. What do you like to read and why?", sampleAnswer: "I enjoy reading a variety of magazines, particularly ones about sports. I find them interesting and informative. Reading about different sports events and athletes is both entertaining and educational for me." },
                { user: 'User B', question: "I have to read lots of books for my studies but I don't remember a lot of information I read. Can you suggest what I do about this?", sampleAnswer: "To remember information from your studies, take notes, summarize key points, discuss with others, highlight important details, and use mnemonic devices. These techniques can help improve your memory retention when reading for your studies." },
                { user: 'User C', question: "Many children prefer playing video games to reading books. Do you think it's important to encourage children to read?", sampleAnswer: "Yes, it is important to encourage children to read. Encouraging reading in children is important. It expands imagination, builds language skills, and enhances empathy. While video games can be educational, books offer a depth of learning and creativity that is essential for young minds to develop." }
            ]
        },

        // --- 4 CHỦ ĐỀ MỚI ---
        {
            id: 'wp3_photography_club_1',
            title: 'Chủ đề 16: Photography Club Chat 1',
            prompts: [
                { user: 'User A', question: "Hi! Welcome to the club. What is your favorite photo?", sampleAnswer: "Hello, glad to talk to you. My favorite photo is the one with my family. We are smiling and hugging each other. It was taken on a sunny day at the park. I love this photo because it reminds me of how happy we are together." },
                { user: 'User B', question: "Hi! What kind of photos do you like to take?", sampleAnswer: "Hi. I like to take photos of nature and animals. They are beautiful and relaxing. I also enjoy taking selfies with my friends and family. They make me happy and remember good times." },
                { user: 'User C', question: "Is it good to take pictures with the phone?", sampleAnswer: "I think it is good to take pictures with the phone. You can capture memories and share them with others. You can also edit them and make them look better. Phones are easy to carry and use." }
            ]
        },
        {
            id: 'wp3_photography_club_2',
            title: 'Chủ đề 17: Photography Club Chat 2',
            prompts: [
                { user: 'Sajed', question: "My favorite family photograph is a picture of me when I was a child. Can you tell me about one of your family photos?", sampleAnswer: "My favorite family photograph captures a special moment from a beach trip with my parents and siblings. We are all laughing joyfully, the sun setting in the background, creating a warm and cherished memory." },
                { user: 'Jo', question: "I enjoy taking photos of people, especially if they are doing something active. What kind of photographs do you like taking and why?", sampleAnswer: "I enjoy capturing a variety of photos. Nature shots allow me to appreciate the beauty of the world, while people photos capture special moments. Gift items and interesting objects intrigue me. Ultimately, photography connects me to memories and emotions." },
                { user: 'Chris', question: "People are always taking photos of themselves with their phones these days. Do you think this is a good thing? Why or why not?", sampleAnswer: "I think it's a good thing. It allows people to capture moments instantly and share them. It's a way to express oneself and preserve memories. However, it's important to enjoy the present too, not just through a screen. Balance is key." }
            ]
        },
        {
            id: 'wp3_photography_club_3',
            title: 'Chủ đề 18: Photography Club Chat 3',
            prompts: [
                { user: 'User A', question: "I often save photos in files on my computer, but sometimes I print them out. How do you store your photos?", sampleAnswer: "I usually store my photos digitally on my computer for easy access and organization. Occasionally, I print out my favorites to display or share with friends and family. It's a balance between convenience and having tangible memories." },
                { user: 'User B', question: "I want to take interesting photographs. Can you give me some advice?", sampleAnswer: "To create captivating photos, I seek out diverse subjects and settings. Experimenting with lighting, angles, and composition helps me capture unique moments. I aim to convey emotions or stories through my photography, keeping my creativity flowing." },
                { user: 'User C', question: "What are the characteristics of a good photographer?", sampleAnswer: "A good photographer possesses a keen eye for detail, patience, creativity, and technical skill. They understand light, composition, and moments, capturing them to tell a story or evoke emotions. Passion and dedication to the craft are also essential." }
            ]
        },
        {
            id: 'wp3_college_chat',
            title: 'Chủ đề 19: College Chat',
            prompts: [
                { user: 'User A', question: "Hi! Welcome to the college. What course are you doing and why did you choose it?", sampleAnswer: "Hello! I joined the English course held by teacher Alex. I decided to attend this course because I know that he is one of the best teachers at my college. It is a great opportunity to improve my English skills." },
                { user: 'User B', question: "Welcome! How do you feel about the college so far?", sampleAnswer: "The college is the most interesting place for me. The facilities are modern. Everyone is so helpful and friendly. The teachers are excellent and my English skills have markedly improved." },
                { user: 'User C', question: "Did you hear that the college sports club has closed? What do you think about this?", sampleAnswer: "Yes, I heard the news. I think it's a shame that the college sports club has closed. It was a great place for students to exercise, socialize and have fun. I hope they can find another way to support their physical and mental health." }
            ]
        }
    ],

    // --- THÊM MỚI DỮ LIỆU PART 4 ---
    part4: [
        {
            id: 'wp4_travel_club_tourists',
            title: 'Chủ đề 1: Kế hoạch thu hút khách du lịch của Câu lạc bộ Du lịch',
            context: "Our club is planning to encourage tourists to visit an area. We also want visitors coming to our areas to behave politely. Please raise your voice and give some suggestions for this plan.",
            // --- DỮ LIỆU DỊCH MỚI ---
            context_vi: "Câu lạc bộ của chúng ta đang có kế hoạch khuyến khích khách du lịch đến thăm một khu vực. Chúng ta cũng muốn du khách đến khu vực của chúng ta cư xử lịch sự. Vui lòng cho ý kiến và đưa ra một số gợi ý cho kế hoạch này.",
            keywords_vi: {
                "encourage tourists": "khuyến khích khách du lịch",
                "behave politely": "cư xử lịch sự",
                "give some suggestions": "đưa ra một số gợi ý"
            },
            task1: {
                instruction: "Write an email to your friend. Tell your friend about your opinion and describe your own suggestion. 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you. I just got an email from the travel club. The club is planning to encourage tourists to visit an area. They also want visitors coming to our areas to behave politely. I think we should create brochures or flyers about our area's attractions and distribute them to hotels, airports, and tourist centers. We could also put up simple, friendly signs in key spots, reminding tourists to respect local customs and the environment. What do you think? Do you have any other suggestions?
Love,
Nguyen`,
                hints: [
                    "create brochures or flyers",
                    "distribute them to hotels, airports, or tourist centers",
                    "put up simple, friendly signs",
                    "reminding tourists to respect local customs"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and make another suggestion. 120 – 150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health. My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, the club is planning to encourage tourists to visit an area. They also want visitors coming to our areas to behave politely. To be honest, I was on top of the world when I heard this news.
From my perspective, I think we should make some brochures or flyers that introduce our area and its attractions. We can distribute them to hotels, airports, or tourist centers. This way, more people will know about our area and what it has to offer.
Besides, to encourage polite behavior, we could put up signs in important areas, asking tourists to respect local customs and the environment. The signs should be simple, friendly, and easy to understand, maybe with translations for visitors from other countries. This way, we can avoid conflicts or misunderstandings with the locals.
I hope you find my suggestions helpful. Please let me know if you have any questions or feedback.
Sincerely,
Nguyen`,
                hints: [
                    "make some brochures or flyers that introduce our area",
                    "put up signs in important areas",
                    "asking tourists to respect local customs and the environment"
                ]
            }
        },

        // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
        {
            id: 'wp4_science_club_exhibition',
            title: 'Chủ đề 2: Triển lãm của Câu lạc bộ Khoa học',
            context: "Dear all members in our club, our club is preparing to organize the science exhibition next month. Both young people and elderly people can take part in our activities in the exhibition. We are planning for our exhibition. Could you contribute some ideas for our event team? Whether our club issues the ticket for participants? I would like to hear your contribution.",
            context_vi: "Gửi tất cả các thành viên, câu lạc bộ của chúng ta đang chuẩn bị tổ chức triển lãm khoa học vào tháng tới. Cả người trẻ và người lớn tuổi đều có thể tham gia. Chúng tôi đang lên kế hoạch cho triển lãm. Bạn có thể đóng góp một vài ý tưởng cho đội sự kiện không? Liệu câu lạc bộ có nên phát hành vé cho người tham gia? Tôi rất muốn nghe sự đóng góp của bạn.",
            keywords_vi: {
                "organize the science exhibition": "tổ chức triển lãm khoa học",
                "contribute some ideas": "đóng góp một vài ý tưởng",
                "issues the ticket": "phát hành vé"
            },
            task1: {
                instruction: "Write an email to your friend. 50 words.",
                sampleAnswer: `
Hi Sara,
I got an email from the Science Club about the club exhibition next month. They are asking for ideas and opinions. I think it would be fun to show some experiments or games that people can try. Maybe we can make a volcano or a rocket. What do you think? Should we charge money for the tickets? I think it would be better to make it free so more people can come. Let me know what you think.
Love,
Nguyen`,
                hints: [
                    "show some experiments or games",
                    "make a volcano or a rocket",
                    "make it free so more people can come"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. 120 – 150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
First, I would like to introduce myself. My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, the club is preparing to organize the science exhibition next month. Both young people and elderly people can take part in our activities in the exhibition. To be honest, I was on top of the world when I heard this news.
I have some ideas for the event team. First, I think we should have some interactive experiments and demonstrations that can attract both young and elderly people. For example, we can show how to make slime, volcanoes, rockets. Second, I think we should have some quizzes and games that can test and reward the participants’ scientific knowledge. For example, we can have a trivia contest, a scavenger hunt, or a puzzle challenge.
I also have an opinion about the ticket issue. I think we should not charge the participants for the tickets. Instead, we can ask for voluntary donations or sponsorships from local businesses or organizations.
I hope you find my suggestions helpful. Please let me know if you have any questions or feedback.
Sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "have some interactive experiments and demonstrations",
                    "attract both young and elderly people",
                    "have some quizzes and games",
                    "should not charge for the tickets",
                    "ask for voluntary donations or sponsorships"
                ]
            }
        },

        // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
        {
            id: 'wp4_food_club_chef',
            title: 'Chủ đề 3: Gặp gỡ đầu bếp nổi tiếng',
            context: "Dear Member, The Food Club is going to organize a meeting with a famous chef and we would like to ask members for suggestions. The chef will give a talk and demonstrate how to cook something. What do you think the chef should talk about and what kind of meal should the chef guide to cook? We want to attract as wide an audience as possible of both young and elder people. Please send us your suggestions and also give reasons for your suggestions.",

            context_vi: "Gửi thành viên, Câu lạc bộ Ẩm thực sẽ tổ chức một buổi gặp mặt với một đầu bếp nổi tiếng và chúng tôi muốn hỏi ý kiến của các thành viên. Đầu bếp sẽ nói chuyện và trình diễn cách nấu một món ăn. Bạn nghĩ đầu bếp nên nói về chủ đề gì và hướng dẫn nấu món ăn nào? Chúng tôi muốn thu hút đông đảo khán giả cả trẻ và già. Vui lòng gửi cho chúng tôi gợi ý và lý do của bạn.",
            // --- THAY THẾ OBJECT NÀY ---
            keywords_vi: {
                "ask members for suggestions": "hỏi ý kiến của các thành viên",
                "what should the chef talk about": "đầu bếp nên nói về chủ đề gì",
                "what kind of meal... guide to cook": "hướng dẫn nấu món ăn nào",
                "attract as wide an audience as possible": "thu hút đông đảo khán giả nhất có thể"
            },
            task1: {
                instruction: "Write an email to your friend. 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the food club manager. He said that the club is organizing a meeting with a famous chef. To be honest, I felt so excited to hear that. I think the club should ask the chef to talk about Vietnamese food and guide us on how to make a dish like pho or spring rolls. It might be a good idea to attract both young and older people.
I hope to hear from you soon.
All the best,
Nguyen`,
                hints: [
                    "ask the chef to talk about Vietnamese food",
                    "guide us on how to make a dish like pho or spring rolls"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. 120 – 150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well. My name is Vu Khanh Nguyen, and I have been a club member for 5 years. I am writing this email to share my opinion about the recent email from the club.
According to the email, the club is going to organize a meeting with a famous chef and is asking for suggestions. To be honest, I was very happy to hear this news. I think it's a good idea. It gives our members a chance to meet, have fun, and learn from each other.
From my perspective, I suggest that the chef talk about Vietnamese food. Vietnamese food is rich in flavors and culture. It will attract both young and older members. Besides, it would be great if the chef could guide us on how to make a traditional dish like pho or spring rolls. These are famous Vietnamese dishes that are loved by many. They are not only delicious but also healthy and easy to make.
I believe that by choosing Vietnamese food, we will not only entertain but also educate our members, creating a memorable event.
Thank you for considering my suggestions. I look forward to the event.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "I suggest that the chef talk about Vietnamese food",
                    "it would be great if the chef could guide us on how to make a traditional dish",
                    "choosing Vietnamese food, we will not only entertain but also educate our members"
                ]
            }
        },
        {
            id: 'wp4_food_club_cooking',
            title: 'Chủ đề 4: Khuyến khích người trẻ nấu ăn',
            context: "Dear member, A recent report states that young people in their 20s do not cook at home. We want to encourage more people to learn cooking. What advice would you give to those who have never cooked before but want to start, and what is the best way to convey this advice?",
            context_vi: "Gửi thành viên, Một báo cáo gần đây chỉ ra rằng những người trẻ ở độ tuổi 20 không nấu ăn ở nhà. Chúng tôi muốn khuyến khích nhiều người hơn học nấu ăn. Bạn sẽ đưa ra lời khuyên gì cho những người chưa từng nấu ăn trước đây nhưng muốn bắt đầu, và cách tốt nhất để truyền đạt lời khuyên này là gì?",
            keywords_vi: {
                "encourage more people to learn cooking": "khuyến khích nhiều người học nấu ăn",
                "what advice would you give": "bạn sẽ đưa ra lời khuyên gì",
                "best way to convey this advice": "cách tốt nhất để truyền đạt lời khuyên này"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I just got the email from the club manager. He said that the club wants to encourage more people to learn cooking. I think it's a good idea to promote cooking at home. Cooking is fun and healthy. I would tell people to start with easy recipes and watch some videos online. Maybe the club should organize cooking workshops for beginners. The club could also create easy video tutorials or recipe cards for members to follow at home. What do you think?
Love,
Nguyen`,
                hints: [
                    "start with easy recipes and watch some videos online",
                    "organize cooking workshops for beginners",
                    "create easy video tutorials or recipe cards"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
I would like to introduce myself. My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, a recent report indicates that young people in their 20s do not cook at home, and the club wants to encourage them to learn cooking. To be honest, I was a little disappointed to hear this news because I believe cooking is a valuable skill that many young people should have, but they often feel overwhelmed or unsure where to start.
From my perspective, I think we should organize cooking workshops for beginners. These workshops could focus on simple, quick meals such as pasta, stir-fries, or salads. These would help people feel more confident in the kitchen.
Besides, I suggest the club could create video tutorials or recipe cards that members can follow at home. This would be a convenient way for people to learn cooking at their own pace.
I have spoken to other club members, and I know that they also share the same opinions as me.
I hope you will consider these suggestions and let me know what you decide.
I am looking forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "organize cooking workshops for beginners",
                    "workshops could focus on simple, quick meals",
                    "create video tutorials or recipe cards",
                    "learn cooking at their own pace"
                ]
            }
        },
        {
            id: 'wp4_walking_club_competition',
            title: 'Chủ đề 5: Cuộc thi đi bộ vòng quanh Châu Âu',
            context: "Dear member, the club is going to organize a walking competition through several Europe countries in two weeks. But there are some opinions that it is not realistic. Give your opinion and alternative suggestion for this.",
            context_vi: "Gửi thành viên, câu lạc bộ sẽ tổ chức một cuộc thi đi bộ qua một vài quốc gia Châu Âu trong hai tuần. Nhưng có một số ý kiến cho rằng điều đó không thực tế. Hãy đưa ra ý kiến và gợi ý thay thế của bạn về việc này.",
            keywords_vi: {
                "organize a walking competition": "tổ chức một cuộc thi đi bộ",
                "not realistic": "không thực tế",
                "alternative suggestion": "gợi ý thay thế"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you. I got an email from the club manager. He has an idea to organize a walking competition through several Europe countries in two weeks. But some people think it is not realistic.
I agree with them. It sounds too ambitious and expensive. I think the club should focus on local events and activities that are more accessible and affordable for everyone.
What do you think? Do you have any suggestions for the club?
Please reply soon.
Your friend,
Nguyen`,
                hints: [
                    "It sounds too ambitious and expensive",
                    "the club should focus on local events",
                    "activities that are more accessible and affordable"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, the club is planning to organize a walking competition through several Europe countries in two weeks. I think it is a very exciting and challenging idea, but I also agree that it is not very realistic.
There are many factors that make this idea difficult to achieve, such as the cost, the distance, the visa requirements, the weather, the safety, and the health of the participants. I think it would be too stressful and risky to try to walk across different countries in a short time.
Therefore, I suggest that we can do something simpler and closer to home, like a walking challenge in our own city or country. We can still have fun and stay healthy, but without traveling abroad. We could also extend the duration of the competition and make it more flexible. We could also invite other walking clubs to join us and make it more fun and social.
I hope you will consider my suggestion and let me know what you think.
I am looking forward to hearing from you soon.
Sincerely,
Nguyen`,
                hints: [
                    "many factors make this idea difficult",
                    "too stressful and risky",
                    "do something simpler and closer to home",
                    "like a walking challenge in our own city",
                    "extend the duration... make it more flexible",
                    "invite other walking clubs to join us"
                ]
            }
        },
        {
            id: 'wp4_walking_club_road_safety',
            title: 'Chủ đề 6: Nâng cao nhận thức về An toàn giao thông',
            context: "Dear Member, Road safety has become a major issue in big cities. Some people say this is because many pedestrians are reading their phones as they walk and not concentrating. There may be other issues, too. We would like to produce some information about road safety for people. What advice should we include and how can we communicate this effectively to members of public? Please write about your suggestions and why.",
            context_vi: "Gửi thành viên, An toàn giao thông đã trở thành một vấn đề lớn ở các thành phố. Một số người cho rằng điều này là do nhiều người đi bộ đọc điện thoại khi đi đường và không tập trung. Cũng có thể có các vấn đề khác. Chúng tôi muốn tạo ra một số thông tin về an toàn giao thông cho mọi người. Chúng ta nên bao gồm lời khuyên nào và làm thế nào để truyền đạt điều này một cách hiệu quả đến công chúng? Vui lòng viết gợi ý và lý do của bạn.",
            keywords_vi: {
                "major issue": "vấn đề lớn",
                "pedestrians are reading their phones": "người đi bộ đọc điện thoại",
                "what advice should we include": "nên bao gồm lời khuyên nào",
                "how can we communicate this effectively": "làm thế nào để truyền đạt hiệu quả"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I got an email from the club manager. He wants us to give some advice on road safety. I think it's a good idea. Many people are not careful when they walk on the streets. They look at their phones and don't see the cars or bikes. This is dangerous for them and others.
I think the club should make some posters or flyers with simple tips on how to be safe. What do you think? Do you have any other suggestions?
Love,
Nguyen`,
                hints: [
                    "make some posters or flyers",
                    "with simple tips on how to be safe"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
First, I would like to introduce myself. My name is Nguyen Thi Ngan and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, you said that many pedestrians are reading their phones as they walk and not concentrating. There may be other issues, too. I think it is a serious problem that affects many people.
I have two suggestions for how we can inform people about road safety. First, we can create a flyer or a brochure with some tips and facts about how to be safe on the road. We can distribute this to our club members and also to other pedestrians we meet on our walks. Second, we can organize a road safety awareness event, where we invite experts, police officers, or local officials to talk about the issue and answer questions. We can also have some activities or games to make it fun and engaging.
I think these suggestions will help us communicate effectively with the public and raise awareness about road safety. Please let me know what you think and if you have any other ideas.
Sincerely,
Nguyen`,
                hints: [
                    "create a flyer or a brochure with some tips and facts",
                    "distribute this to our club members and other pedestrians",
                    "organize a road safety awareness event",
                    "invite experts, police officers, or local officials to talk"
                ]
            }
        },
        {
            id: 'wp4_gardening_club_proposals',
            title: 'Chủ đề 7: Đề xuất của Hội đồng Thành phố về làm vườn',
            context: "Dear members, The City Council wants to encourage people to take up gardening. The City Council has two proposals. The first is to plant 500 new trees and some species of flowers at the local park. The second is to organise gardening workshops at a local college. As a member of the gardening club, please email which proposal you would like to propose.",

            context_vi: "Gửi thành viên, Hội đồng Thành phố muốn khuyến khích mọi người tham gia làm vườn. Hội đồng có hai đề xuất. Thứ nhất là trồng 500 cây mới và một số loài hoa tại công viên địa phương. Thứ hai là tổ chức các buổi hội thảo làm vườn tại một trường cao đẳng địa phương. Với tư cách là thành viên câu lạc bộ làm vườn, vui lòng gửi email cho biết bạn muốn đề xuất phương án nào.",
            keywords_vi: {
                "two proposals": "hai đề xuất",
                "plant 500 new trees": "trồng 500 cây mới",
                "organise gardening workshops": "tổ chức hội thảo làm vườn",
                "which proposal you would like to propose": "bạn muốn đề xuất phương án nào"
            },
            task1: {
                instruction: "Write an email to your friend (feeling, ideas). Write about 50 words.",
                sampleAnswer: `
Hi Sara,
Hope you're doing well! I just got an email from the club about the City Council's new gardening plans. They're thinking of planting 500 trees and flowers in the park or organizing gardening workshops at a college.
I'm really excited! I think planting trees is a great idea—it'll make the park greener and more beautiful. What do you think? Let's discuss it soon!
All the best,
Nguyen`,
                hints: [
                    "I'm really excited!",
                    "I think planting trees is a great idea",
                    "it'll make the park greener and more beautiful"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Write about 120-150 words.",
                sampleAnswer: `
Dear Sir/Madam,
I hope this email finds you well. My name is Pham Khanh Nguyen, and I have been a member of the gardening club for three years. I am writing to share my opinion regarding the City Council's proposals.
Both ideas are fantastic, but I strongly support planting 500 trees and flowers in the local park. This initiative will provide a greener environment, improve air quality, and create a beautiful space for the community. Additionally, trees offer long-term benefits such as shade, habitats for wildlife, and a natural way to combat pollution.
While gardening workshops are valuable, I believe more people will benefit from an improved park. A beautiful park can inspire residents to take up gardening naturally, even without formal workshops. Also, this project will have a lasting impact on future generations.
I appreciate the effort the City Council is making to encourage gardening and would love to support this initiative in any way I can. Please let me know if there are opportunities to get involved.
I look forward to your response.
Yours sincerely,
Pham Khanh Nguyen`,
                hints: [
                    "I strongly support planting 500 trees and flowers",
                    "This initiative will provide a greener environment",
                    "trees offer long-term benefits",
                    "more people will benefit from an improved park",
                    "this project will have a lasting impact"
                ]
            }
        },
        {
            id: 'wp4_car_club_program',
            title: 'Chủ đề 8: Chương trình xe hơi xuyên Châu Âu',
            context: "There will be a car program running across Europe. The program invites the Car Club to send 2 representatives (1 main driver and 1 passenger) and both must have good driving skills. Do you have any suggestions for the above positions?",

            context_vi: "Sẽ có một chương trình xe hơi chạy xuyên Châu Âu. Chương trình mời Câu lạc bộ Xe hơi cử 2 đại diện (1 tài xế chính và 1 hành khách) và cả hai đều phải có kỹ năng lái xe tốt. Bạn có gợi ý gì cho các vị trí trên không?",
            keywords_vi: {
                "car program running across Europe": "chương trình xe hơi xuyên Châu Âu",
                "send 2 representatives": "cử 2 đại diện",
                "good driving skills": "kỹ năng lái xe tốt",
                "suggestions for the above positions": "gợi ý cho các vị trí"
            },
            task1: {
                instruction: "Write an email to your friend. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
Hope everything is going well with you. Did you see the latest notice from the club? They're choosing two people to join a car program across Europe! I just got an email from the club manager. To be honest, I'm super excited about it! I think we should suggest Minh as the driver – he's really skilled. Maybe I could go as the passenger? Hope to hear from you soon!
All the best,
Nguyen`,
                hints: [
                    "I'm super excited about it!",
                    "suggest Minh as the driver – he's really skilled",
                    "Maybe I could go as the passenger?"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Write about 120-150 words.",
                sampleAnswer: `
Dear Sir/Madam,
I hope this email finds you well. My name is Pham Khanh Nguyen, and I have been a member of the Car Club for over three years. I am writing to express my suggestions regarding your recent email about the upcoming car program across Europe.
According to the message, the club needs two representatives – one driver and one passenger – both with strong driving skills. Honestly, I was really excited when I read the email because this is a great chance to show our club's talent.
From my perspective, I suggest that Minh Nguyen be selected as the main driver. He has won several local driving competitions and always drives safely and responsibly. As for the passenger, I would like to recommend myself. I have experience with long road trips and can also assist with navigation and planning.
I have also spoken to other club members, and they agree with my suggestions.
I hope you will take them into consideration and let me know your decision.
Yours sincerely,
Pham Khanh Nguyen`,
                hints: [
                    "suggest that Minh Nguyen be selected as the main driver",
                    "As for the passenger, I would like to recommend myself",
                    "I have experience with long road trips",
                    "can also assist with navigation and planning"
                ]
            }
        },
        {
            id: 'wp4_language_club_recommend',
            title: 'Chủ đề 9: Giới thiệu khóa học Tiếng Anh',
            context_vi: "Bạn là thành viên của câu lạc bộ ngôn ngữ. Bạn đang tham gia một Khóa học Tiếng Anh tại Trung tâm American Dream. Sau 2 tháng học, bạn thấy khóa học hiệu quả và hữu ích.",
            keywords_vi: {
                "taking an English Course": "đang tham gia khóa học Tiếng Anh",
                "course effective and useful": "khóa học hiệu quả và hữu ích",
                "recommend the course": "giới thiệu khóa học"
            },
            context: "You are a member of the language club. You are taking an English Course at the American Dream Center. After studying for 2 months, you find the course effective and useful.",
            task1: {
                instruction: "Write an email to your friend. Write about your feelings and recommend the course to her/him.",
                sampleAnswer: `
Hi Sara,
I wanted to share something exciting with you! I've been taking an English course at the American Dream Center for the past two months, and it's been amazing! The lessons are really helpful, and I feel my speaking and writing skills have improved. If you're looking for a great course to improve your English, I highly recommend it. Let me know if you're interested!
Take care,
[Your Name]`,
                hints: [
                    "The lessons are really helpful",
                    "my speaking and writing skills have improved",
                    "I highly recommend it"
                ]
            },

            task2: {
                instruction: "Write about your feelings, the reason why you can’t attend and what you would like to do.",
                sampleAnswer: `
Dear Sir,
I hope you are doing well. My name is [Your Name], and I had registered for the English course at the A Level Speaking Center. I am writing to let you know that, unfortunately, I won’t be able to attend the course as planned.
I was really looking forward to this course, but because of my work schedule and some other personal responsibilities, I am unable to find a good time to attend the classes. I'm very disappointed, as I was excited to improve my English skills with your help.
I would love to join the course in the future when my schedule allows. Could you please let me know if there are any other sessions coming up that might work better for me? Thank you for understanding, and I hope to join your course soon.
Best regards,
[Your Name]`,
                hints: [
                    "I won’t be able to attend the course as planned",
                    "because of my work schedule",
                    "I'm very disappointed",
                    "I would love to join the course in the future",
                    "let me know if there are any other sessions coming up"
                ]
            }
        },
        {
            id: 'wp4_book_club_library',
            title: 'Chủ đề 10: Thư viện công cộng có nguy cơ đóng cửa',
            context: "Dear Member, The local authorities announced that the public library may close next year. Many people prefer reading on the internet so there is no need for a public library. We want to write a letter to the authorities and we may need your help. What do you think?...",
            context_vi: "Gửi thành viên, Chính quyền địa phương đã thông báo rằng thư viện công cộng có thể sẽ đóng cửa vào năm tới. Nhiều người thích đọc trên internet hơn nên không cần thư viện công cộng. Chúng tôi muốn viết một lá thư cho chính quyền và có thể cần sự giúp đỡ của bạn. Bạn nghĩ sao?...",
            keywords_vi: {
                "public library may close": "thư viện công cộng có thể đóng cửa",
                "no need for a public library": "không cần thư viện công cộng",
                "write a letter to the authorities": "viết thư cho chính quyền"
            },
            task1: {
                instruction: "Write an e-mail to your friend. What do you feel and what should be done? Write about 50 words. You have 10 minutes.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I got an email from the book club. The email stated that the local authorities announced that the public library may close next year. I'm so sad about the library. I love going there and reading books. It's not fair that they want to close it. We should do something to stop them. Maybe we can sign a petition or write letters. Can you help me with that? Please reply soon.
Love,
Nguyen`,
                hints: [
                    "I'm so sad about the library",
                    "We should do something to stop them",
                    "Maybe we can sign a petition or write letters"
                ]
            },
            task2: {
                instruction: "Write an e-mail to the of the club. Write about your opinion and what actions should be taken. Write 120-150 words. You have 20 minutes.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
First, I would like to introduce myself. My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, the local authorities announced that the public library may close next year. Many people prefer reading on the internet so there is no need for a public library. To be honest, I was in a black mood when I heard this news.
From my perspective, I think it is very important to keep it open. The library has many books that are not on the internet. The library also helps people who cannot afford to buy books or computers. The library is a place where people can meet, learn and have fun.
I think we should write a letter to the authorities and explain why the library is valuable for us and for society. We should also ask them to reconsider their decision and find other ways to save money. We should also start a petition and get signatures from other people who support the library. We should also spread the word on social media and ask our friends and family to join us.
I hope you agree with me and I look forward to hearing from you soon.
Yours sincerely,
Nguyen`,
                hints: [
                    "it is very important to keep it open",
                    "write a letter to the authorities",
                    "start a petition and get signatures",
                    "spread the word on social media"
                ]
            }
        },
        {
            id: 'wp4_reading_club_new_library',
            title: 'Chủ đề 11: Thiết kế thư viện quốc gia mới',
            context: "Dear member, Our club has been invited to contribute to design a new national library. We would like to find out what our members think. Some people say that libraries are boring places and they are rarely used. We want the new library to be modern and exciting so that it will attract both young and old people. Please tell us what you think the kind of new library should be.",
            context_vi: "Gửi thành viên, Câu lạc bộ của chúng ta đã được mời đóng góp ý kiến thiết kế một thư viện quốc gia mới. Chúng tôi muốn biết các thành viên nghĩ gì. Một số người nói rằng thư viện là nơi nhàm chán và hiếm khi được sử dụng. Chúng tôi muốn thư viện mới phải hiện đại và thú vị để thu hút cả người trẻ và người già. Vui lòng cho chúng tôi biết bạn nghĩ loại thư viện mới nên như thế nào.",
            keywords_vi: {
                "design a new national library": "thiết kế thư viện quốc gia mới",
                "libraries are boring places": "thư viện là nơi nhàm chán",
                "modern and exciting": "hiện đại và thú vị",
                "attract both young and old people": "thu hút cả người trẻ và người già"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I just got the email from the book club manager about designing the new library. I think it should be more interactive, with spaces for reading, group activities, and modern technology like e-books and smart screens. To attract both young and older people, we could add comfortable seating and events like book talks or workshops. What do you think? Please reply soon.
Best,
Nguyen`,
                hints: [
                    "it should be more interactive",
                    "with spaces for reading, group activities",
                    "modern technology like e-books",
                    "add comfortable seating and events"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear manager,
I hope this email finds you in good health.
First, I would like to introduce myself. My name is Vu Khanh Nguyen, and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, you said some people say that libraries are boring places and they are rarely used. We want the new library to be modern and exciting so that it will attract both young and old people. I'm excited and would like to share some thoughts.
I think the library should be more interactive to attract both young and older people. There should be spaces for reading, group activities, and modern technology like e-books and smart screens. This will make it more engaging, especially for younger visitors.
We could also have comfortable seating and host events like book talks or workshops. This way, the library will become a lively and inviting place for everyone.
Thank you for considering my suggestions. I am looking forward to hearing from you soon.
Sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "library should be more interactive",
                    "spaces for reading, group activities",
                    "modern technology like e-books and smart screens",
                    "have comfortable seating and host events"
                ]
            }
        },
        {
            id: 'wp4_photo_club_categories',
            title: 'Chủ đề 12: Thay đổi hạng mục cuộc thi nhiếp ảnh',
            context: "Dear Member, As you know, every year we hold a competition for the best photograph from our members. In the past we have had just one single category. This year we are thinking about having separate categories for men and women and another category for people under 16. Before we make any changes, we would like to hear from you. What do you think of the proposed change? Please do not forget to tell us the reason for your opinion.",
            context_vi: "Gửi thành viên, Như bạn đã biết, hàng năm chúng ta tổ chức một cuộc thi ảnh đẹp nhất từ các thành viên. Trong quá khứ, chúng ta chỉ có một hạng mục duy nhất. Năm nay, chúng tôi đang nghĩ đến việc có các hạng mục riêng cho nam, nữ và một hạng mục khác cho người dưới 16 tuổi. Trước khi thực hiện bất kỳ thay đổi nào, chúng tôi muốn nghe ý kiến từ bạn. Bạn nghĩ gì về sự thay đổi được đề xuất này? Vui lòng cho chúng tôi biết lý do cho ý kiến của bạn.",
            keywords_vi: {
                "one single category": "một hạng mục duy nhất",
                "separate categories": "các hạng mục riêng",
                "proposed change": "sự thay đổi được đề xuất",
                "reason for your opinion": "lý do cho ý kiến của bạn"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of the club. Tell your friend how you feel about this change and why you feel this way. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
The club manager is considering separate categories based on gender and age for the annual photography competition. I don't agree with splitting the categories by gender and age. I think photography should be judged based on creativity and skill, no matter who takes the photo. Dividing the categories might create barriers and discourage some members. What do you think? Let's chat about it soon!
Love,
Nguyen`,
                hints: [
                    "I don't agree with splitting the categories",
                    "should be judged based on creativity and skill",
                    "Dividing the categories might create barriers"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager what your opinion about the proposed change is and your reason for that opinion. 120 – 150 words.",
                sampleAnswer: `
Dear Club Manager,
I hope this message finds you well.
First, I would like to introduce myself. My name is Vu Khanh Nguyen and I have been a club member for 5 years. I am writing this email to express my opinion concerning the recent email that I have received from the club.
According to the email, you said that in the past we have had just one single category. This year we are thinking about having separate categories for men and women and another category for people under 16. I believe photography should be judged on creativity and skill, no matter who takes the photo. Splitting the categories might create divisions and discourage some members from joining in. A single category brings us together and helps us learn from each other.
I think we should keep the competition as one category to celebrate everyone's talent equally. Besides, I suggest we could have special awards for different themes or styles within the main competition. This way, we can celebrate a variety of talents without dividing the members.
Thank you for your consideration, and I look forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "keep the competition as one category",
                    "celebrate everyone's talent equally",
                    "suggest we could have special awards for different themes",
                    "celebrate a variety of talents without dividing the members"
                ]
            }
        },
        {
            id: 'wp4_garden_club_speaker_change',
            title: 'Chủ đề 13: Thay đổi diễn giả buổi nói chuyện',
            context: "Dear members, We are writing to tell you that the talk and slide show on The Gardens of Japan by Mr.Seiko has been canceled because the speaker has been taken ill. Mr.Jones has kindly agreed to give his talk on The Gardens of England again. I know that many of you have already heard Mr. Jones before but I hope you will be happy to hear him once again. Please give your suggestions.",
            context_vi: "Gửi các thành viên, Chúng tôi viết thư để thông báo rằng buổi nói chuyện và trình chiếu về Vườn Nhật Bản của ông Seiko đã bị hủy vì diễn giả bị ốm. Ông Jones đã vui lòng đồng ý trình bày lại bài nói của mình về Vườn Anh Quốc. Tôi biết nhiều người trong số các bạn đã nghe ông Jones nói trước đây nhưng hy vọng các bạn sẽ vui vẻ khi nghe lại ông ấy. Vui lòng cho chúng tôi gợi ý của bạn.",
            keywords_vi: {
                "has been canceled": "đã bị hủy",
                "speaker has been taken ill": "diễn giả bị ốm",
                "give his talk... again": "trình bày lại bài nói",
                "give your suggestions": "đưa ra gợi ý của bạn"
            },
            task1: {
                instruction: "Write an email to your friend. Write about 75 simple words.",
                sampleAnswer: `
Hi Sara,
I wanted to tell you that the talk on "The Gardens of Japan" by Mr. Seiko has been canceled because he is ill. Instead, Mr. Jones will give his talk on "The Gardens of England" again. I know we've heard him before, but it should still be interesting. It's a good chance to learn more about English gardens. I hope you can join the talk too!
Love,
Nguyen`,
                hints: [
                    "talk...has been canceled because he is ill",
                    "Mr. Jones will give his talk...again",
                    "It's a good chance to learn more"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Write about 200 simple words.",
                sampleAnswer: `
Dear Manager,
I hope you're doing well. I received your email about the change in the upcoming event. I'm sorry to hear that Mr. Seiko is ill, and I wish him a speedy recovery. It's great to know that Mr. Jones will give his talk on "The Gardens of England" again.
Although I've heard Mr. Jones speak before, his talks are always interesting and informative, so I'm sure many of us, including myself, will enjoy it again. However, I understand that some members may be looking for something new. Perhaps we could consider inviting a different speaker or exploring new topics in the future. For example, we could learn about gardens in other countries or discuss new gardening trends.
It could also be nice to have a Q&A session or a discussion after the talk. This would give everyone a chance to share ideas and learn from each other.
Thank you for organizing the event. I look forward to hearing Mr. Jones again.
Best regards,
Pham Khanh Nguyen`,
                hints: [
                    "I'm sorry to hear that Mr. Seiko is ill",
                    "his talks are always interesting and informative",
                    "consider inviting a different speaker or exploring new topics",
                    "have a Q&A session or a discussion after the talk"
                ]
            }
        },
        {
            id: 'wp4_college_exam_change',
            title: 'Chủ đề 14: Thay đổi lịch thi cuối kỳ',
            context: "Dear student, We are writing to inform you that the end of course exams will now take place two weeks earlier than originally planned. Your exam, which was scheduled for the 21st of next month, will now take place on the 7th of next month. We apologize for any difficulty this may cause.",
            context_vi: "Gửi sinh viên, Chúng tôi viết thư để thông báo rằng kỳ thi cuối khóa sẽ diễn ra sớm hơn hai tuần so với kế hoạch ban đầu. Kỳ thi của bạn, dự kiến vào ngày 21 tháng sau, giờ sẽ diễn ra vào ngày 7 tháng sau. Chúng tôi xin lỗi vì bất kỳ khó khăn nào điều này có thể gây ra.",
            keywords_vi: {
                "exams will now take place": "kỳ thi sẽ diễn ra",
                "two weeks earlier": "sớm hơn hai tuần",
                "apologize for any difficulty": "xin lỗi vì bất kỳ khó khăn nào"
            },
            task1: {
                instruction: "Write an email to your friend. Write about your feelings and what you think the college should do about the situation. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I got an email from the college administrator. They changed the exam date to two weeks earlier. That's not fair at all. I have other things to do and I need more time to study. How can they do this to us? They should change it back or give us some extra help. This is a bad situation and I don't know what to do. I hope you are doing okay. Let me know if you want to talk more.
Your friend,
Nguyen`,
                hints: [
                    "They changed the exam date to two weeks earlier",
                    "That's not fair at all",
                    "They should change it back or give us some extra help"
                ]
            },
            task2: {
                instruction: "Write an email to the college administrator. Write about your feelings and what you think the college should do about the situation. Write about 120 – 150 words.",
                sampleAnswer: `
Dear College Administrator,
I hope this email finds you in good health.
My name is Vu Khanh Nguyen. I am writing this email to express my feelings concerning the recent email that I have received from you.
According to the email, you said that our final exams would happen two weeks sooner than usual. The exams will take place on the 7th of next month instead of the 21st. To be honest, I felt blue when I heard this news.
From my perspective, I think the college should reconsider this decision and change the exam dates back to the original ones. Besides, the college should provide us with some extra help, such as revision sessions, online resources or extra time for the exams. This would be fair and reasonable for all the students who are affected by this change.
I hope you will consider my suggestions and let me know what you think. I am looking forward to hearing from you soon.
Sincerely,
Nguyen`,
                hints: [
                    "I felt blue when I heard this news",
                    "college should reconsider this decision",
                    "change the exam dates back to the original ones",
                    "provide us with some extra help, such as revision sessions"
                ]
            }
        },
        {
            id: 'wp4_business_club_proposals',
            title: 'Chủ đề 15: Hỗ trợ doanh nghiệp nhỏ',
            context: "Dear Members, Currently our club is planning to support local individuals who want to start up a small business. The club has 2 proposals: First, create a call center where customers can call to ask questions and request help. Second, create free courses to support local universities nearby. Let us know which option you would use and why.",
            context_vi: "Gửi các thành viên, Hiện tại câu lạc bộ của chúng ta đang có kế hoạch hỗ trợ các cá nhân tại địa phương muốn khởi nghiệp một doanh nghiệp nhỏ. Câu lạc bộ có 2 đề xuất: Thứ nhất, tạo một trung tâm cuộc gọi nơi khách hàng có thể gọi để đặt câu hỏi và yêu cầu giúp đỡ. Thứ hai, tạo các khóa học miễn phí để hỗ trợ các trường đại học lân cận. Hãy cho chúng tôi biết bạn sẽ chọn phương án nào và tại sao.",
            keywords_vi: {
                "support local individuals": "hỗ trợ các cá nhân tại địa phương",
                "2 proposals": "2 đề xuất",
                "create a call center": "tạo một trung tâm cuộc gọi",
                "create free courses": "tạo các khóa học miễn phí",
                "which option you would use and why": "bạn sẽ chọn phương án nào và tại sao"
            },
            task1: {
                instruction: "Write a letter to a friend about your choice and the idea. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just received an email from the manager of the business club about two ways to support local small businesses: setting up a call center or offering free courses at nearby universities. Honestly, I'm really excited about this! I think offering free courses is the better option because it will provide valuable skills to those starting businesses. You should join us!
Looking forward to your thoughts.
All the best,
Nguyen`,
                hints: [
                    "two ways to support local small businesses",
                    "offering free courses is the better option",
                    "it will provide valuable skills"
                ]
            },
            task2: {
                instruction: "Write a letter to the club manager about your choice and why. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, we have two options to support local individuals who want to start up a small business: creating a call center for customer support or offering free courses at local universities. To be honest, I was excited to hear this because it shows our club's dedication to helping the community.
From my perspective, we should offer free courses. These courses will provide valuable knowledge and skills to people who want to start their own businesses, helping them build a strong foundation for their businesses. Free courses can also help build strong connections with local universities, which can help us work together better in the future.
I have spoken to other club members, and I know that they also have the same opinions as me.
I hope you will consider these suggestions and let me know what you decide. I am looking forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "we should offer free courses",
                    "provide valuable knowledge and skills",
                    "help build a strong foundation for their businesses",
                    "build strong connections with local universities"
                ]
            }
        },
        {
            id: 'wp4_nature_club_plan',
            title: 'Chủ đề 16: Kế hoạch cho người trẻ của CLB Thiên nhiên',
            context: "Dear Members, The club wants to make a plan for the young people because they just love to stay home and play games.",
            context_vi: "Gửi các thành viên, Câu lạc bộ muốn lập một kế hoạch cho những người trẻ tuổi vì họ chỉ thích ở nhà và chơi game.",
            keywords_vi: {
                "make a plan for the young people": "lập kế hoạch cho người trẻ",
                "love to stay home and play games": "thích ở nhà và chơi game"
            },
            task1: {
                instruction: "Write an email to your friend. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the manager of the nature club. The email says that the club is planning to create some new activities for young people because many of them prefer staying at home and playing games. To be honest, I felt happy to hear that. I think the club should organize outdoor activities like hiking and nature walks. It might be a good idea to have some fun challenges too.
I hope to hear from you soon.
All the best,
Nguyen`,
                hints: [
                    "create some new activities for young people",
                    "organize outdoor activities like hiking and nature walks",
                    "have some fun challenges too"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club wants to make a plan for young people because they just love to stay home and play games. To be honest, I felt so happy to hear that.
From my perspective, we should organize outdoor activities like hiking and nature walks. These activities will help young people enjoy nature, stay active, and connect with others.
Additionally, the club could add some fun challenges to make the events more exciting. For example, a scavenger hunt in nature would be both entertaining and educational. These activities can increase interest and participation among young members.
I have spoken with other club members, and they also agree with these ideas.
I hope you will consider my suggestions and let me know what you decide.
I look forward to hearing from you soon.
Yours sincerely,
Pham Khanh Nguyen`,
                hints: [
                    "organize outdoor activities like hiking and nature walks",
                    "help young people enjoy nature, stay active, and connect",
                    "add some fun challenges",
                    "a scavenger hunt in nature",
                    "increase interest and participation among young members"
                ]
            }
        },
        {
            id: 'wp4_community_club_support',
            title: 'Chủ đề 17: Hỗ trợ các dự án cộng đồng',
            context: "Dear Members, Our club needs support with several tasks this year. First, we need more members who can actively participate in our ongoing projects. Second, we are looking for creative ideas to develop new activities. Could you share some suggestions with us to help support our projects this year?",
            context_vi: "Gửi các thành viên, Câu lạc bộ của chúng ta cần sự hỗ trợ cho một vài nhiệm vụ trong năm nay. Thứ nhất, chúng ta cần thêm thành viên có thể tích cực tham gia vào các dự án đang diễn ra. Thứ hai, chúng ta đang tìm kiếm những ý tưởng sáng tạo để phát triển các hoạt động mới. Bạn có thể chia sẻ một vài gợi ý để giúp hỗ trợ các dự án của chúng ta trong năm nay không?",
            keywords_vi: {
                "needs support": "cần sự hỗ trợ",
                "more active members": "thêm thành viên tích cực",
                "creative ideas to develop new activities": "ý tưởng sáng tạo để phát triển hoạt động mới",
                "share some suggestions": "chia sẻ một vài gợi ý"
            },
            task1: {
                instruction: "Write an email to your friend. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the manager of the community club. He said that we need more active members and creative ideas for activities. Honestly, I'm really excited about this!
I think we should encourage current members to invite their friends and family to join. Also, the club could organize fun workshops, competitions, or community service projects to attract more people. What do you think?
I hope to hear from you soon.
All the best,
Nguyen`,
                hints: [
                    "encourage current members to invite their friends and family",
                    "organize fun workshops, competitions, or community service projects"
                ]
            },
            task2: {
                instruction: "Write an email to your club manager. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club wants more active members for ongoing projects and creative ideas for new activities. I'm excited because this is a great chance to grow and help our community.
To increase active members, I suggest encouraging current members to invite their friends and family. This will help bring in new people who are interested and motivated.
For creative activities, we could organize workshops on useful skills, hold fun competitions, or arrange community service projects. These would attract participation and help build a stronger community spirit.
In addition, using social media to promote these activities can help us reach a wider audience and keep everyone informed.
I have spoken to other members, and they agree with these ideas. I hope you will consider them and look forward to your reply.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "encouraging current members to invite their friends and family",
                    "organize workshops on useful skills, hold fun competitions",
                    "using social media to promote these activities",
                    "reach a wider audience and keep everyone informed"
                ]
            }
        },
        {
            id: 'wp4_fashion_club_meeting',
            title: 'Chủ đề 18: Lựa chọn hình thức sự kiện thời trang',
            context: "Dear Members, The club is planning to hold meetings with famous designers who will talk about their clothing designs and answer members' questions. We need feedback on organizations. There are opinions that it should be held online while others want to organize a fashion show-style event. State your opinion.",
            context_vi: "Gửi các thành viên, Câu lạc bộ đang lên kế hoạch tổ chức các buổi gặp gỡ với các nhà thiết kế nổi tiếng, họ sẽ nói về các thiết kế quần áo của mình và trả lời câu hỏi của thành viên. Chúng tôi cần phản hồi về cách thức tổ chức. Có ý kiến cho rằng nên tổ chức trực tuyến, trong khi những người khác muốn tổ chức một sự kiện theo kiểu trình diễn thời trang. Hãy nêu ý kiến của bạn.",
            keywords_vi: {
                "hold meetings with famous designers": "tổ chức buổi gặp gỡ với các nhà thiết kế nổi tiếng",
                "held online": "tổ chức trực tuyến",
                "organize a fashion show-style event": "tổ chức sự kiện kiểu trình diễn thời trang",
                "State your opinion": "Nêu ý kiến của bạn"
            },
            task1: {
                instruction: "Write to a friend to express which way of organisation you prefer.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the manager of the fashion club. He mentioned that the club is deciding between holding meetings with designers online or organizing a fashion show-style event. Honestly, I'm really excited about this! I personally prefer the fashion show because it would be wonderful to see the designs up close and meet the famous designers in person.
I hope to hear from you soon.
All the best,
Nguyen`,
                hints: [
                    "deciding between holding meetings online or organizing a fashion show",
                    "I personally prefer the fashion show",
                    "see the designs up close and meet the famous designers in person"
                ]
            },
            task2: {
                instruction: "Write to the manager to express which ways of organisation you prefer and explain.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club is seeking feedback on how the upcoming meetings with designers should be organized. Some people prefer to have it online, while others suggest a fashion show-style event. To be honest, I was really excited when I heard about this!
From my perspective, it would be great if we could organize a fashion show-style event for two main reasons. First, a fashion show is exciting and fun to watch. It allows members to see the designers' clothes in action, which can be more interesting than an online meeting. Second, a live event gives members a chance to meet and talk with the designers and other people in person. This can help us make new friends and connections, which might not be as easy to do online.
I have spoken to other club members, and I know that they also prefer this option.
I hope you will consider this suggestion and let me know what you decide. I am looking forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "organize a fashion show-style event",
                    "a fashion show is exciting and fun to watch",
                    "see the designers' clothes in action",
                    "a live event gives members a chance to meet and talk with the designers"
                ]
            }
        },
        {
            id: 'wp4_tech_club_comments',
            title: 'Chủ đề 19: Xử lý bình luận tiêu cực',
            context: "Dear Members, As you know, our members are very active online and like to post comments on the club's website. However, recently some members have been posting negative comments about other members. At the moment, everyone who posts on our website is anonymous. We are thinking of changing the system so that we can identify everyone who makes a comment. We would like to hear your opinion about this. Also, can you think of an alternative solution to this problem?",
            context_vi: "Gửi các thành viên, Như bạn đã biết, các thành viên của chúng ta rất năng động trực tuyến và thích đăng bình luận trên trang web của câu lạc bộ. Tuy nhiên, gần đây một số thành viên đã đăng những bình luận tiêu cực về các thành viên khác. Hiện tại, mọi người đăng bài trên trang web của chúng ta đều ẩn danh. Chúng tôi đang nghĩ đến việc thay đổi hệ thống để có thể xác định danh tính của mọi người. Chúng tôi muốn nghe ý kiến của bạn về điều này. Ngoài ra, bạn có thể nghĩ ra một giải pháp thay thế cho vấn đề này không?",
            keywords_vi: {
                "posting negative comments": "đăng bình luận tiêu cực",
                "is anonymous": "là ẩn danh",
                "identify everyone": "xác định danh tính mọi người",
                "alternative solution": "giải pháp thay thế"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything is going well with you. I just received an email from the manager of the technology club about the negative comments on the website. Honestly, I think it's not a good idea to make everyone reveal their identity. Instead, the club should set clear rules for comments and have a moderation system to check them before posting. What do you think?
Love,
Nguyen`,
                hints: [
                    "not a good idea to make everyone reveal their identity",
                    "set clear rules for comments",
                    "have a moderation system to check them"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, recently some members have been posting negative comments about other members. At the moment, everyone who posts on our website is anonymous. I don't think changing the system to identify everyone who makes a comment is a good idea. That might discourage some members from sharing their opinions and ideas, and make them feel less comfortable and safe.
Instead, I suggest that we set clear rules for commenting. This can help remind members to be respectful and avoid negative language. Additionally, I believe the club should have a moderation system to review comments before they are posted. This way, the club can remove inappropriate comments while protecting members' privacy.
I have spoken to other club members, and I know that they also share the same opinions as me.
I hope you will consider these suggestions and let me know what you decide. I am looking forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "don't think changing the system... is a good idea",
                    "discourage some members from sharing their opinions",
                    "suggest that we set clear rules for commenting",
                    "have a moderation system to review comments",
                    "remove inappropriate comments while protecting members' privacy"
                ]
            }
        },
        {
            id: 'wp4_tech_club_fair',
            title: 'Chủ đề 20: Tình nguyện viên cho Hội chợ Công nghệ',
            context: "Dear Members, Our club is going to participate in the annual Technology Fair. We are asking members for help. We need several volunteers to speak to members of general public about computers and the internet. Please write to us and tell us why technology is important and why you think you would be a good presenter?",
            context_vi: "Gửi các thành viên, Câu lạc bộ của chúng ta sẽ tham gia Hội chợ Công nghệ thường niên. Chúng tôi đang kêu gọi sự giúp đỡ từ các thành viên. Chúng tôi cần một vài tình nguyện viên để nói chuyện với công chúng về máy tính và internet. Vui lòng viết thư cho chúng tôi và cho biết tại sao công nghệ lại quan trọng và tại sao bạn nghĩ mình sẽ là một người thuyết trình tốt?",
            keywords_vi: {
                "participate in the annual Technology Fair": "tham gia Hội chợ Công nghệ thường niên",
                "asking members for help": "kêu gọi sự giúp đỡ từ thành viên",
                "why technology is important": "tại sao công nghệ lại quan trọng",
                "why you would be a good presenter": "tại sao bạn sẽ là người thuyết trình tốt"
            },
            task1: {
                instruction: "Write an e-mail to your friend. Write about what you think and why you would be a good speaker. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the manager of the technology club. They're looking for volunteers to speak at the technology fair. I am really excited about this, and I'd love to join! Technology is important because it helps us learn, connect, and improve our daily lives. I think I'd be a good speaker since I know a lot about tech and have given presentations before. What do you think? Would you like to join me?
Love,
Nguyen`,
                hints: [
                    "I'd love to join!",
                    "Technology is important because it helps us learn, connect, and improve",
                    "I'd be a good speaker since I know a lot about tech",
                    "have given presentations before"
                ]
            },
            task2: {
                instruction: "Write an e-mail to the manager of the club. Write about your opinion and why you would be a good presenter? Write 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club needs several volunteers to speak to members of general public about computers and the internet. I was truly excited about the chance to be a presenter at the upcoming Technology Fair. I believe technology is very important because it helps us communicate, learn, create, and solve problems. It also makes our lives easier and more enjoyable.
I believe I would be a good presenter because I have strong knowledge of computers and the Internet. I have used them since I was a child and know many software applications. In the past, I've given presentations both at school and in the club before and I received positive feedback.
Please let me know if you need more information. I would be honored to represent the club at the fair.
Sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "technology is very important because it helps us communicate, learn, create, and solve problems",
                    "I have strong knowledge of computers and the Internet",
                    "I've given presentations...before and I received positive feedback"
                ]
            }
        },
        {
            id: 'wp4_music_club_complaints',
            title: 'Chủ đề 21: Khiếu nại về tiếng ồn của CLB Âm nhạc',
            context: "Dear Members, As you know, we regularly have concerts at our club in the evenings. Unfortunately, there have been complaints about the music from people in the living area. If we do not do something about this situation, we may have to stop the concerts. I would be interested to hear what you think about this. What can be done about this problem? I am writing to ask all members for their suggestions. Please send me your ideas in an email.",
            context_vi: "Gửi các thành viên, Như bạn đã biết, chúng ta thường xuyên tổ chức các buổi hòa nhạc tại câu lạc bộ vào buổi tối. Thật không may, đã có những lời phàn nàn về âm nhạc từ những người dân trong khu vực. Nếu chúng ta không làm gì đó về tình hình này, chúng ta có thể phải dừng các buổi hòa nhạc. Tôi muốn nghe ý kiến của bạn về việc này. Có thể làm gì để giải quyết vấn đề này? Tôi viết thư này để hỏi ý kiến của tất cả các thành viên. Vui lòng gửi cho tôi ý tưởng của bạn qua email.",
            keywords_vi: {
                "complaints about the music": "lời phàn nàn về âm nhạc",
                "may have to stop the concerts": "có thể phải dừng các buổi hòa nhạc",
                "what can be done about this problem": "có thể làm gì để giải quyết vấn đề này",
                "give your suggestions": "đưa ra gợi ý của bạn"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the manager of the music club about noise complaints from neighbors. Honestly, I was a bit sad because I really enjoy our concerts. I think it is important to respect their rights. Personally, I believe the club should take some soundproofing measures or change the concert times to reduce noise impact. What do you think? Let me know your ideas.
Love,
Nguyen`,
                hints: [
                    "I was a bit sad because I really enjoy our concerts",
                    "respect their rights",
                    "take some soundproofing measures",
                    "change the concert times to reduce noise impact"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, there have been complaints from neighbors about the noise caused by our evening concerts. When I received this news, I felt concerned because I really enjoy the concerts at our club, but I also understand that the music can disturb the people living nearby. I believe we should respect their rights and work together find a suitable solution.
From my perspective, the club should implement soundproofing measures to reduce the noise. In addition, it would be helpful to reschedule the concerts to Saturday evenings, from 7 to 10 p.m., when people are not working or going to bed early.
I have talked with other members, and they share the same opinion. I hope you will consider my suggestions and let me know your decision.
I look forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "implement soundproofing measures to reduce the noise",
                    "reschedule the concerts to Saturday evenings, from 7 to 10 p.m.",
                    "when people are not working or going to bed early"
                ]
            }
        },
        {
            id: 'wp4_social_club_meetings',
            title: 'Chủ đề 22: Tổ chức buổi gặp mặt CLB Xã hội',
            context: "Dear Members, We would like to organize some monthly face-to-face meetings. We would like your suggestions about when and where we could meet. It should suit both young and older people. Please send us your suggestions and your reasons.",
            context_vi: "Gửi các thành viên, Chúng tôi muốn tổ chức một số buổi gặp mặt trực tiếp hàng tháng. Chúng tôi muốn nhận được gợi ý của bạn về thời gian và địa điểm chúng ta có thể gặp nhau. Buổi gặp mặt nên phù hợp cho cả người trẻ và người lớn tuổi. Vui lòng gửi cho chúng tôi gợi ý và lý do của bạn.",
            keywords_vi: {
                "monthly face-to-face meetings": "buổi gặp mặt trực tiếp hàng tháng",
                "when and where we could meet": "khi nào và ở đâu chúng ta có thể gặp",
                "suit both young and older people": "phù hợp cho cả người trẻ và người lớn tuổi"
            },
            task1: {
                instruction: "Write an email to your friend. Tell your friend about your opinion and describe your own suggestion. (50 words)",
                sampleAnswer: `
Hi Sara,
How are you? I hope everything is going well with you. I just got an email from the manager of the social club. They are planning monthly face-to-face meetings.
I'm really excited because it's a great chance for us to connect more. I think we should meet at the community center near the park on weekends. It's peaceful, easy to reach, and perfect for both young and older members. What do you think? I'd love to hear your opinion.
Love,
Nguyen`,
                hints: [
                    "I'm really excited because it's a great chance to connect more",
                    "meet at the community center near the park on weekends",
                    "peaceful, easy to reach, and perfect for both young and older members"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and make another suggestion. (120 - 150 words)",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club wants to organize meetings every month and is asking for suggestions about when and where to meet. The meetings should be good for both young and older people. I was very happy to hear this, because I think meeting in person is a great way to connect and share.
From my perspective, we should meet on the first Saturday of each month, from 10 a.m. to 12 p.m. This time is convenient because people usually have free time on weekends, and it is not too early or too late for older members.
In addition, I suggest holding the meetings at the community center near the park. It is quiet, easy to reach by bus or car, and has enough space for group activities.
I hope you will think about my ideas. I look forward to hearing from you.
Vu Khanh Nguyen`,
                hints: [
                    "meet on the first Saturday of each month, from 10 a.m. to 12 p.m.",
                    "convenient because people usually have free time on weekends",
                    "not too early or too late for older members",
                    "holding the meetings at the community center near the park",
                    "quiet, easy to reach... and has enough space"
                ]
            }
        },
        {
            id: 'wp4_book_club_public_talk',
            title: 'Chủ đề 23: Tổ chức buổi nói chuyện công khai',
            context: "Dear Members, We are planning to organize a public talk soon. We would like your ideas on who we should invite as a guest speaker and what topics they should cover. Our goal is to attract a wide audience, including both young people and older adults. Please send us your suggestions.",
            context_vi: "Gửi các thành viên, Chúng tôi đang lên kế hoạch sớm tổ chức một buổi nói chuyện công khai. Chúng tôi muốn nhận ý kiến của bạn về việc chúng ta nên mời ai làm diễn giả khách mời và họ nên trình bày những chủ đề gì. Mục tiêu của chúng ta là thu hút một lượng lớn khán giả, bao gồm cả người trẻ và người lớn tuổi. Vui lòng gửi cho chúng tôi gợi ý của bạn.",
            keywords_vi: {
                "organize a public talk": "tổ chức buổi nói chuyện công khai",
                "who we should invite": "chúng ta nên mời ai",
                "what topics they should cover": "họ nên trình bày chủ đề gì",
                "attract a wide audience": "thu hút lượng lớn khán giả"
            },
            task1: {
                instruction: "Write an email to your friend. Tell your friend about your opinion and describe your own suggestion. (50 words)",
                sampleAnswer: `
Hi Sara,
How are you? I just got an email from the book club manager about organizing a public talk. Honestly, I'm really excited because it's a great chance for us to connect and share our love of reading. I think we should invite a famous Vietnamese author to talk about \"the joy of reading for all ages.\" This topic could attract both young and older people.
What do you think? Let me know your ideas!
Love,
Nguyen`,
                hints: [
                    "I'm really excited",
                    "invite a famous Vietnamese author",
                    "talk about \"the joy of reading for all ages\"",
                    "attract both young and older people"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and make another suggestion. (120 - 150 words)",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club is planning to organize a public talk and wants suggestions on who to invite and what topics to cover. I was very happy to hear this news.
From my perspective, the club should invite Nguyen Nhat Anh, a famous Vietnamese author who writes stories loved by both children and adults. His books are easy to read but full of inspiring many people who enjoy reading. I believe he would attract a large and diverse audience.
For the topic, I suggest "The joy of reading for all ages." This theme is suitable for everyone and would encourage more people to join our club and enjoy books.
I hope you will consider my suggestions and let me know your decision.
I am looking forward to hearing from you soon.
Sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "the club should invite Nguyen Nhat Anh",
                    "His books are easy to read but full of inspiring",
                    "attract a large and diverse audience",
                    "I suggest \"The joy of reading for all ages.\"",
                    "encourage more people to join our club"
                ]
            }
        },
        {
            id: 'wp4_debate_club_encourage',
            title: 'Chủ đề 24: Khuyến khích người trẻ tham gia CLB Tranh biện',
            context: "Dear Members, We want to encourage young people to join our club. Sadly, young people often think debating is not for them. We are writing to ask for your help. Please write and tell us the two most important benefits of learning how to debate topical issues and speak in public. Please share your ideas about the importance of debating. We will publish them on our website.",
            context_vi: "Gửi các thành viên, Chúng tôi muốn khuyến khích những người trẻ tuổi tham gia câu lạc bộ của chúng ta. Đáng buồn thay, những người trẻ thường nghĩ rằng tranh biện không dành cho họ. Chúng tôi viết thư này để nhờ sự giúp đỡ của bạn. Vui lòng viết và cho chúng tôi biết hai lợi ích quan trọng nhất của việc học cách tranh luận về các vấn đề thời sự và nói trước công chúng. Hãy chia sẻ ý tưởng của bạn về tầm quan trọng của việc tranh biện. Chúng tôi sẽ đăng chúng trên trang web của mình.",
            keywords_vi: {
                "encourage young people to join": "khuyến khích người trẻ tham gia",
                "debating is not for them": "tranh biện không dành cho họ",
                "two most important benefits": "hai lợi ích quan trọng nhất",
                "share your ideas": "chia sẻ ý tưởng của bạn"
            },
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How are you? I hope you're well.
I got an email from the debate club. They want more young people to join, but many think debating isn't for them. I think debating helps improve speaking and thinking skills and teaches us about new topics. Maybe the club can organize fun workshops or games to make it more interesting.
Hope to hear from you soon!
All the best,
Nguyen`,
                hints: [
                    "debating helps improve speaking and thinking skills",
                    "teaches us about new topics",
                    "organize fun workshops or games",
                    "make it more interesting"
                ]
            },
            task2: {
                instruction: "Write an email to the manager of the club. Tell the manager about your opinion and what you think the club should do about the problem. Write about 120-150 words.",
                sampleAnswer: `
Dear Manager,
I hope this email finds you well.
My name is Vu Khanh Nguyen, and I have been an active member of the club for the past two years. I am writing in response to your recent email.
According to the email, the club wants to encourage more young people to join, but many of them feel debating isn't for them. I believe debating is very helpful because it improves our speaking and thinking skills. It also helps us gain new knowledge about many topics.
From my perspective, the club should choose debate topics that interest young people, such as social media, music, or the environment. Also, organizing fun activities like workshops or games would help young people enjoy debating and join more easily.
I hope you will consider my suggestions and let me know your decision.
I look forward to hearing from you soon.
Yours sincerely,
Vu Khanh Nguyen`,
                hints: [
                    "debating is very helpful because it improves our speaking and thinking skills",
                    "choose debate topics that interest young people",
                    "organizing fun activities like workshops or games",
                    "help young people enjoy debating and join more easily"
                ]
            }
        }
        // Thêm các chủ đề Part 4 khác vào đây
    ]

};