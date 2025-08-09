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
        }
        // Thêm các chủ đề Part 4 khác vào đây
    ]

};