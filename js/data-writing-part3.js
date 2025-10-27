const writingPart3Data = [
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
];
