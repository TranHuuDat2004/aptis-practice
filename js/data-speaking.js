const speakingData = {
    part1: [
        // --- 5 CHỦ ĐỀ ĐẦU TIÊN ĐÃ CÓ NỘI DUNG ---
        {
            id: 'sp1_topic1',
            title: 'Chủ đề 1: Favorite Season',
            audioSrc: 'audio/speaking-part1/1.mp3',
            prompt: {
                question: "Your favorite time of year/ What's your favorite season? Why?",
                duration: 30,
                sampleAnswer: "My favorite season is spring. I like it because the weather is warm and everything looks fresh and green. Flowers start to bloom, and the air is very nice. In spring, I enjoy doing outdoor activities like walking in the park, riding my bicycle, or having picnics with my friends. It makes me feel happy and relaxed."
            }
        },
        {
            id: 'sp1_topic2',
            title: 'Chủ đề 2: Travel in your country',
            audioSrc: 'audio/speaking-part1/2.mp3',
            prompt: {
                question: "Please tell me the best way to travel around your country.",
                duration: 30,
                sampleAnswer: "In my country, the best way to travel around is by motorbike. There are many motorbikes on the street. The motorbikes are comfortable and fast. It is a good way to travel. People can stop eating, playing and going shopping. People feel comfortable when traveling around Vietnam by motorbike. And I love riding motorbike very much."
            }
        },
        {
            id: 'sp1_topic3',
            title: 'Chủ đề 3: Friends',
            audioSrc: 'audio/speaking-part1/3.mp3',
            prompt: {
                question: "What do you like doing with your friends?",
                duration: 30,
                sampleAnswer: "My best friend is Mai. She is 21 years old and is a student at a university. Sometimes we travel together or do volunteer work in our free time. On weekends, I often play sports or go shopping with her. We also enjoy hanging out and chatting at coffee shops. I believe everyone should have at least one best friend."
            }
        },
        {
            id: 'sp1_topic4',
            title: 'Chủ đề 4: Where you live',
            audioSrc: 'audio/speaking-part1/4.mp3',
            prompt: {
                question: "Describe the area where you live/ Tell me about the place you live in?",
                duration: 30,
                sampleAnswer: "I live in Ward 7, Ho Chi Minh City. It's a lively area with lots of restaurants, shops, and cafes. The streets are busy, and there are many schools and parks nearby. It's easy to get around with buses and motorbike taxis. The community is friendly, and there's always something happening. It's a great place to live!"
            }
        },
        {
            id: 'sp1_topic5',
            title: 'Chủ đề 5: Your journey',
            audioSrc: 'audio/speaking-part1/5.mp3',
            prompt: {
                question: "Please describe your journey here today.",
                duration: 30,
                sampleAnswer: "My journey to the Aptis test was easy. I left home early, took a bus, and walked a short distance to the test center. The weather was good, so the walk was nice. I arrived a bit early, found my way to the exam room, and checked in smoothly. The staff were helpful and made the process easy. Overall, it was a calm and stress-free trip to the exam room."
            }
        },
        {
            id: 'sp1_topic6',
            title: 'Chủ đề 6: Favorite film star',
            audioSrc: 'audio/speaking-part1/6.mp3',
            prompt: {
                question: "Tell about your favorite film star.",
                duration: 30,
                sampleAnswer: "One Vietnamese actress I admire is Ngo Thanh Van. She is famous for her roles in movies like Dòng Máu Anh Hùng (The Rebel) and Hai Phuong (Furie). Ngo Thanh Van is known for her strong acting in action and drama films. She also works as a producer and director, showing her many skills. I admire her talent and hard work. She brings a lot of energy to her movies."
            }
        },
        {
            id: 'sp1_topic7',
            title: 'Chủ đề 7: The room you are in',
            audioSrc: 'audio/speaking-part1/7.mp3',
            prompt: {
                question: "Describe the room you are in.",
                duration: 30,
                sampleAnswer: "I am in a quite big room which is about 40 square meters with white walls. This room is equipped with 50 desks, 50 computers, 4 fans and 2 conditioners. I and other candidates are taking our exam on the computers. There are 3 supervisors who will help in case something goes wrong. The atmosphere in this room is fairly stressful."
            }
        },
        {
            id: 'sp1_topic8',
            title: 'Chủ đề 8: Your first school',
            audioSrc: 'audio/speaking-part1/8.mp3',
            prompt: {
                question: "Tell me about your first school.",
                duration: 30,
                sampleAnswer: "My first school was Hong Ha Elementary School. I went there when I was six years old. I liked my school because it had a big library. I made many friends there and we played together every day. My teachers were kind and helpful. They taught me how to read, write, and do math. I learned a lot of things at Hong Ha Elementary School."
            }
        },
        {
            id: 'sp1_topic9',
            title: 'Chủ đề 9: Last time you visited your friends',
            audioSrc: 'audio/speaking-part1/9.mp3',
            prompt: {
                question: "Tell me about the last time you visited your friends.",
                duration: 30,
                sampleAnswer: "The last time I visited my friends was about two weeks ago. We met at a café to catch up, as we hadn’t seen each other in a while. We had a great time talking about our recent experiences, watching a movie, and enjoying some snacks. It was a really fun and relaxing day, and it felt nice to reconnect after such a long time."
            }
        },
        {
            id: 'sp1_topic10',
            title: 'Chủ đề 10: Favorite singer',
            audioSrc: 'audio/speaking-part1/10.mp3',
            prompt: {
                question: "Tell me about your favorite singer.",
                duration: 30,
                sampleAnswer: "My favorite singer is My Tam. She is a famous Vietnamese pop star. She has a beautiful voice. She sings many songs that I love, such as \"Hoa Mi Toc Nau\", \"Nguoi Hay Quen Em Di\" and \"Tinh Yeu Chua Noi\". She also does charity work and helps people in need. I admire her talent and kindness. She is my idol."
            }
        }, {
            id: 'sp1_topic11',
            title: 'Chủ đề 11: Famous place in your city',
            audioSrc: 'audio/speaking-part1/11.mp3',
            prompt: {
                question: "Tell me about a famous place in your city.",
                duration: 30,
                sampleAnswer: "A famous place in my city is Duc Ba Church in Ho Chi Minh City. It was built during French rule and is known for its tall towers and red brick walls. Many people visit to admire its beautiful design and peaceful atmosphere. The cathedral is an important landmark in the city and is often visited by both locals and tourists."
            }
        },
        {
            id: 'sp1_topic12',
            title: 'Chủ đề 12: Watching TV',
            audioSrc: 'audio/speaking-part1/12.mp3',
            prompt: {
                question: "Do you like watching TV?",
                duration: 30,
                sampleAnswer: "Yes, I like watching TV. It's a fun way to relax after a busy day. I enjoy watching different kinds of shows, like movies, series, and news. My favorite shows are comedies because they help me feel happy. Sometimes, I watch documentaries to learn new things about the world. I also enjoy watching TV with my family or friends. It's a great way to spend time together and share opinions about what we're watching."
            }
        },
        {
            id: 'sp1_topic13',
            title: 'Chủ đề 13: Your favorite film',
            audioSrc: 'audio/speaking-part1/13.mp3',
            prompt: {
                question: "Tell me about your favorite film.",
                duration: 30,
                sampleAnswer: "My favorite film is Tom and Jerry. I've loved watching it since I was a kid. The cartoon is really funny because Tom and Jerry are always chasing each other and getting into funny situations. The animation is simple, but it's always entertaining. I enjoy how the show never gets boring, and it always makes me laugh, no matter how many times I watch it. "
            }
        },
        {
            id: 'sp1_topic14',
            title: 'Chủ đề 14: Your family',
            audioSrc: 'audio/speaking-part1/14.mp3',
            prompt: {
                question: "Do you have a large family?",
                duration: 30,
                sampleAnswer: "No, I don't have a large family. I have a small family with my parents and one younger sister. We live together in a cozy apartment. We enjoy spending time together, especially during weekends when we cook, watch movies, and play games. I love having my family around."
            }
        },// js/data-speaking.js


        // --- 5 CHỦ ĐỀ MỚI (15-19) ---
        {
            id: 'sp1_topic15',
            title: 'Chủ đề 15: Your family (detailed)',
            audioSrc: 'audio/speaking-part1/15.mp3',
            prompt: {
                question: "Tell me about your family.",
                duration: 30,
                sampleAnswer: "There are four members in my family including my father, my mother, my brother and me. My mother is 45 years old. She is a doctor. My father is 46 years old. He works at a hospital. At the weekend, we often watch films together. I love my family so much. I think people should spend more time with their family."
            }
        },
        {
            id: 'sp1_topic16',
            title: 'Chủ đề 16: Describe a member in your family',
            audioSrc: 'audio/speaking-part1/16.mp3',
            prompt: {
                question: "Describe a member in your family.",
                duration: 30,
                sampleAnswer: "Today, I want to talk about my sister. My sister is 25 years old. She is tall and has long black hair. She works as a teacher and loves her job. She is very kind and always helps me when I need it. In her free time, she enjoys reading books and going to the gym. We often spend time together on weekends, watching movies or going shopping. I love her very much."
            }
        },
        {
            id: 'sp1_topic17',
            title: 'Chủ đề 17: Describe your house',
            audioSrc: 'audio/speaking-part1/17.mp3',
            prompt: {
                question: "Please describe your house.",
                duration: 30,
                sampleAnswer: "My house is not very big, but it's cozy and comfortable. It has two bedrooms, a living room, a kitchen, and a small garden. The living room is cozy with a sofa, a TV, and some plants. My bedroom is simple, with a bed, a desk, and a bookshelf. The kitchen is where we cook meals together. I really love my house because it feels warm and like home."
            }
        },
        {
            id: 'sp1_topic18',
            title: "Chủ đề 18: Today's weather",
            audioSrc: 'audio/speaking-part1/18.mp3',
            prompt: {
                question: "What's the weather like today?",
                duration: 30,
                sampleAnswer: "Today, the weather is nice and sunny. The sky is clear with no clouds, and it feels warm outside. There is a gentle breeze, which makes it comfortable to be outside. It's not too hot, just perfect for a walk or spending time outdoors. I think it's a great day to enjoy the sunshine and fresh air."
            }
        },
        {
            id: 'sp1_topic19',
            title: 'Chủ đề 19: How you relax in the evening',
            audioSrc: 'audio/speaking-part1/19.mp3',
            prompt: {
                question: "How do you relax in the evening?",
                duration: 30,
                sampleAnswer: "In the evening, I like to relax by listening to music or watching TV. Sometimes, I read a book or spend time on my phone. I also enjoy spending time with my family, talking, or having dinner together. After a busy day, I like having quiet time to unwind. If the weather is nice, I take a walk to feel calm before bed."
            }
        },
        // --- 5 CHỦ ĐỀ MỚI (20-24) ---
        {
            id: 'sp1_topic20',
            title: 'Chủ đề 20: Free time',
            audioSrc: 'audio/speaking-part1/20.mp3',
            prompt: {
                question: "What do you like doing in your free time?",
                duration: 30,
                sampleAnswer: "In my free time, I enjoy a variety of activities. I like reading books, especially novels, as it helps me relax. I also love watching movies and spending time with my friends and family. Sometimes, I go for a walk or do some light exercise to stay healthy. On weekends, I like to explore new places or try new hobbies, like cooking or painting."
            }
        },
        {
            id: 'sp1_topic21',
            title: 'Chủ đề 21: Last weekend',
            audioSrc: 'audio/speaking-part1/21.mp3',
            prompt: {
                question: "Where did you go last weekend?",
                duration: 30,
                sampleAnswer: "Last weekend, my friends and I went to Vung Tau. It took us about 4 hours to get there by car. We had a great time relaxing on the beach and enjoying the fresh air. The weather was nice, and we spent some time swimming and taking pictures. We also ate delicious seafood at a local restaurant. It was a fun trip, and I really enjoyed spending time with my friends."
            }
        },
        {
            id: 'sp1_topic22',
            title: 'Chủ đề 22: Last night',
            audioSrc: 'audio/speaking-part1/22.mp3',
            prompt: {
                question: "What did you do last night?",
                duration: 30,
                sampleAnswer: "Last night, I stayed at home and relaxed. I watched a movie with my family, and we had dinner together. After that, I spent some time reading a book. It was a quiet evening, and I enjoyed it because I was able to unwind after a busy day. Before bed, I listened to some music to help me relax and fall asleep."
            }
        },
        {
            id: 'sp1_topic23',
            title: "Chủ đề 23: On the weekend",
            audioSrc: 'audio/speaking-part1/23.mp3',
            prompt: {
                question: "Please tell me what you do on the weekend.",
                duration: 30,
                sampleAnswer: "On the weekend, I usually relax and spend time with my family and friends. I like to go for walks in the park or watch movies. Sometimes, I do some shopping or try new activities. In the evenings, I enjoy having dinner with my family and chatting. Weekends are a great time to rest and recharge for the upcoming week."
            }
        },
        {
            id: 'sp1_topic24',
            title: 'Chủ đề 24: Favorite music',
            audioSrc: 'audio/speaking-part1/24.mp3',
            prompt: {
                question: "What's your favourite music?",
                duration: 30,
                sampleAnswer: "I am a big fan of classical music because it is a fantastic way to relax. Classical music reduces stress, boosts my mood. I often listen to music when I have free time. I always listen to classical music before going to bed. It helps me have a better sleep. Sometimes I go to concerts to enjoy classical music with my friends. I think people should listen to music to relax."
            }
        },
        // --- 4 CHỦ ĐỀ MỚI (25-28) ---
        {
            id: 'sp1_topic25',
            title: 'Chủ đề 25: Your job',
            audioSrc: 'audio/speaking-part1/25.mp3',
            prompt: {
                question: "Please tell me about your job.",
                duration: 30,
                sampleAnswer: "I'm a second-year student at Ton Duc Thang University, studying Business Administration. I don't have a full-time job right now, but I try to balance my studies with part-time work or internships when I can. My main focus is on my studies, but I also like to get some practical experience related to my field."
            }
        },
        {
            id: 'sp1_topic26',
            title: 'Chủ đề 26: Your best friend',
            audioSrc: 'audio/speaking-part1/26.mp3',
            prompt: {
                question: "Please tell me about your best friend.",
                duration: 30,
                sampleAnswer: "Today I want to talk about my best friend. Her name is Huong, and she's 20 years old. We've been friends for many years. She's kind, funny, and always there for me when I need help. We enjoy spending time together, like going to the movies or studying. She is also very hardworking and always supports me in everything I do. I'm really grateful to have such a wonderful friend."
            }
        },
        {
            id: 'sp1_topic27',
            title: 'Chủ đề 27: Last thing you saw on television',
            audioSrc: 'audio/speaking-part1/27.mp3',
            prompt: {
                question: "Please tell me about the last thing you saw on television.",
                duration: 30,
                sampleAnswer: "The last thing I saw on television was a movie called The Lion King. I watched it with my family. It was a great experience because the story is touching, and the animation is beautiful. We all enjoyed the music and the characters, especially Simba and Mufasa. It's a movie I've seen many times, but it never gets old, and I always love watching it."
            }
        },
        {
            id: 'sp1_topic28',
            title: "Chủ đề 28: Your typical day",
            audioSrc: 'audio/speaking-part1/28.mp3',
            prompt: {
                question: "Please describe your typical day.",
                duration: 30,
                sampleAnswer: "I am a student at Ton Duc Thang University. Everyday, I wake up at 6 a.m, make breakfast then I go to school. In the morning, I study my major subject at school. In the afternoon, I go to the library and read books or play badminton with my friends. In the evening, I do my homework. I work hard because I want to find a job in the future."
            }
        },
        // --- 5 CHỦ ĐỀ MỚI (29-33) ---
        {
            id: 'sp1_topic29',
            title: 'Chủ đề 29: About yourself',
            audioSrc: 'audio/speaking-part1/29.mp3',
            prompt: {
                question: "Please tell me about yourself.",
                duration: 30,
                sampleAnswer: "My name is ..., and I'm a freshman/ second-year student at Ton Duc Thang University. I'm studying Business Administration. I'm friendly and enjoy meeting new people. In my free time, I like reading books, watching movies, and spending time with my friends and family. I'm passionate about learning new things and improving my skills. My goal is to have a successful career in business in the future."
            }
        },
        {
            id: 'sp1_topic30',
            title: 'Chủ đề 30: Your favorite book',
            audioSrc: 'audio/speaking-part1/30.mp3',
            prompt: {
                question: "Please tell me about your favorite book.",
                duration: 30,
                sampleAnswer: "My favorite book is How to Be Rich by Napoleon Hill. It talks about how to become successful and rich by having a positive attitude, working hard, and making smart choices. The book teaches me how to set goals, stay focused, and keep going even when things are tough. I like it because it motivates me to believe in myself and work towards my financial goals."
            }
        },
        {
            id: 'sp1_topic31',
            title: 'Chủ đề 31: Sport you like',
            audioSrc: 'audio/speaking-part1/31.mp3',
            prompt: {
                question: "What sport do you like?",
                duration: 30,
                sampleAnswer: "I like playing soccer. It's a fun and exciting sport that keeps me active. I enjoy playing with my friends on the weekends. Soccer helps me stay fit and improve my teamwork skills. I also like watching professional matches on TV. It's a great way to relax and enjoy the game. I'm always excited to play or watch soccer whenever I have time."
            }
        },
        {
            id: 'sp1_topic32',
            title: "Chủ đề 32: Yourself and your new house",
            audioSrc: 'audio/speaking-part1/32.mp3',
            prompt: {
                question: "Tell me about yourself and what you are looking for in your new house.",
                duration: 30,
                sampleAnswer: "My name is ..., and I'm 20 years old. I'm a student at university. I'm looking for a new house that is comfortable and close to my school. I want a quiet place where I can study and relax. It should have two bedrooms, a kitchen, and a living room. I also prefer a house with a small garden or balcony where I can enjoy some fresh air."
            }
        },
        {
            id: 'sp1_topic33',
            title: 'Chủ đề 33: Learning English',
            audioSrc: 'audio/speaking-part1/33.mp3',
            prompt: {
                question: "Please tell me why you are learning English.",
                duration: 30,
                sampleAnswer: "I am learning English for several reasons. First, it is spoken all over the world, so it helps me communicate with many people. Second, as a student, English will help me with my studies and future job. It also allows me to enjoy books, movies, and news in English. I want to improve my speaking and writing skills to have better opportunities in the future."
            }
        },
        // --- 4 CHỦ ĐỀ CUỐI CÙNG (34-37) ---
        {
            id: 'sp1_topic34',
            title: 'Chủ đề 34: Interest in travel',
            audioSrc: 'audio/speaking-part1/34.mp3',
            prompt: {
                question: "Please tell me why you are interested in travel.",
                duration: 30,
                sampleAnswer: "I am interested in travel for several reasons. First, it allows me to explore new places and learn about different cultures. Second, traveling helps me relax and escape from my daily routine. I also enjoy trying new foods and seeing beautiful landscapes. Lastly, it broadens my understanding of the world and gives me memorable experiences that I can share with others."
            }
        },
        {
            id: 'sp1_topic35',
            title: 'Chủ đề 35: Sports in your country',
            audioSrc: 'audio/speaking-part1/35.mp3',
            prompt: {
                question: "What sports do people like in your country?",
                duration: 30,
                sampleAnswer: "In my country, people like several sports. The most popular is football (soccer), which many people play and watch. Volleyball is also loved, especially in schools and communities. Badminton is common in parks and backyards. Basketball is popular among younger people, and table tennis is a favorite indoor sport. These sports bring people together, and many enjoy playing them for fun or as a hobby."
            }
        },
        {
            id: 'sp1_topic36',
            title: 'Chủ đề 36: Favorite book in your country',
            audioSrc: 'audio/speaking-part1/36.mp3',
            prompt: {
                question: "Please tell me about a favorite book in your country.",
                duration: 30,
                sampleAnswer: "One favorite book in Vietnam is The Tale of Kieu by Nguyen Du. It tells the story of Kieu, a young woman who faces many problems in her life because of love and sacrifice. This book is famous for its beautiful poems and deep meaning. Many people in Vietnam read it in school, and it is an important part of Vietnamese culture and literature."
            }
        },
        {
            id: 'sp1_topic37',
            title: "Chủ đề 37: Favorite food in your country",
            audioSrc: 'audio/speaking-part1/37.mp3',
            prompt: {
                question: "Please tell me about a favorite food in my country.",
                duration: 30,
                sampleAnswer: "One of the most popular foods in Vietnam is pho. It's a delicious noodle soup made with broth, rice noodles, herbs, and usually beef or chicken. Pho is often eaten for breakfast, and it's loved for its rich flavor and comforting taste. People in Vietnam enjoy it at restaurants or street food stalls. It's a dish that represents Vietnamese culture and is famous worldwide."
            }
        }
    ],
    // --- THÊM MỚI DỮ LIỆU PART 2 ---
    part2: [
        {
            id: 'sp2_crowded_city',
            title: 'Chủ đề: Living in a crowded city',
            imageSrc: 'img/speaking-part2/crowded-city.png',
            audioSrc: 'audio/speaking-part2/1.m4a', // Đặt audio chung ở đây
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                },
                {
                    question: "What do you think about living in a crowded city?",
                    duration: 45,
                    sampleAnswer: "I think living in a crowded city has its pros and cons. On one hand, it can be exciting and convenient to have many things to do and see, and to meet different people. On the other hand, it can also be stressful and noisy. There are many problems like traffic, pollution, and high living costs. I guess it depends on your personality and preferences whether you like it or not."
                    // Bỏ audioSrc ở đây
                },
                {
                    question: "What are the inconveniences of living in a crowded city?",
                    duration: 45,
                    sampleAnswer: "Living in a crowded city can have many inconveniences. For example, you may have to deal with traffic jams, noise pollution, high living costs, and lack of privacy. You may also face more competition for jobs, education, and entertainment. Living in a crowded city can be stressful and exhausting for some people."
                    // Bỏ audioSrc ở đây
                }
            ]
        }
        // Thêm các chủ đề Part 2 khác vào đây với cấu trúc tương tự
    ],
};