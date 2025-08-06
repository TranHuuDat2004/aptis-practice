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
                    sampleAnswer: "In this picture, I can see many people crossing a street at a crosswalk in a busy city. The people are wearing different kinds of clothes, from casual to business wear, and most of them are walking with purpose. I guess it's probably a weekday during rush hour, maybe lunchtime. In the background, there are many tall buildings, which look like offices. Overall, this picture gives a strong feeling of the fast and energetic life in a modern city."
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
        },
        // --- 3 CHỦ ĐỀ MỚI ---
        {
            id: 'sp2_hiking',
            title: 'Chủ đề 2: Visiting a new place',
            imageSrc: 'img/speaking-part2/hiking.png',
            audioSrc: 'audio/speaking-part2/2.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see a woman and a child standing on a rocky mountain. They are both wearing backpacks, so I think they are hiking. The woman is holding the child gently, and they are looking at the beautiful view. The weather looks sunny and nice. It seems like they are enjoying nature together."
                },
                {
                    question: "When was the last time you visit a new place?",
                    duration: 45,
                    sampleAnswer: "The last time I visited a new place was about a month ago, when my family and I went to Da Lat. We spent three days there exploring the beautiful flower gardens and enjoying the cool weather. We also tried many local dishes. It was a wonderful and memorable trip for all of us."
                },
                {
                    question: "Why do people like visit a new place?",
                    duration: 45,
                    sampleAnswer: "People like to visit new places for several reasons. First, it's a great way to relax and escape from daily routine. Second, it allows them to explore new cultures, try new foods, and see beautiful landscapes. Finally, traveling creates memorable experiences that they can share with family and friends."
                }
            ]
        },
        {
            id: 'sp2_shopping',
            title: 'Chủ đề 3: Shopping for clothes',
            imageSrc: 'img/speaking-part2/shopping.png',
            audioSrc: 'audio/speaking-part2/3.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see two men shopping in a clothes store. One man is holding a striped shirt and showing it to the other man. They both look happy and relaxed. I guess they are friends enjoying their time together. In the background, there are many other clothes on the racks."
                },
                {
                    question: "The last time you went shopping for clothes?",
                    duration: 45,
                    sampleAnswer: "The last time I went shopping for clothes was about two weeks ago. I went to a shopping mall with my friend because I needed some new clothes for summer. I bought a few T-shirts, a pair of shorts, and some sandals. The store had a big sale, so I got everything at a good price. I really enjoyed the experience because it was fun to choose new styles and try them on."
                },
                {
                    question: "Why do people choose different types of clothing?",
                    duration: 45,
                    sampleAnswer: "People choose different types of clothing for a few reasons. First, they wear what matches their personal style. Second, they choose clothes that are comfortable depending on the weather or their needs. Finally, they are influenced by fashion trends or what is popular in their culture or social group."
                }
            ]
        },
        {
            id: 'sp2_library',
            title: 'Chủ đề 4: Reading books',
            imageSrc: 'img/speaking-part2/library.png',
            audioSrc: 'audio/speaking-part2/4.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see a man sitting in a library. He is wearing a yellow shirt and blue jeans, and he is reading a blue book. He looks very focused. Behind him, there are many books on the shelves. The place looks quiet and perfect for studying. I think he is a student."
                },
                {
                    question: "What kind of things do you enjoy reading?",
                    duration: 45,
                    sampleAnswer: "I enjoy reading stories, especially mysteries and adventure books, because they are exciting and keep me interested. I also like reading articles about science and technology because they help me learn new things. Sometimes, I read travel blogs to discover new places and get ideas for future trips."
                },
                {
                    question: "Why do people enjoy reading books?",
                    duration: 45,
                    sampleAnswer: "People enjoy reading books for a few reasons. First, books let them escape into exciting stories and new worlds. Second, books help people learn new things and discover different ideas. Finally, reading is a great way to relax and feel calm after a busy day."
                }
            ]
        },
        // --- 3 CHỦ ĐỀ MỚI ---
        {
            id: 'sp2_active_kids',
            title: 'Chủ đề 5: Being active',
            imageSrc: 'img/speaking-part2/kids-playing-soccer.png',
            audioSrc: 'audio/speaking-part2/5.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see three children playing in a park. They seem to be playing soccer with a white ball on a green grass field. They look very happy and energetic. In the background, there are many trees. The weather seems sunny and pleasant, perfect for outdoor activities."
                },
                {
                    question: "Tell about a time you did something active.",
                    duration: 45,
                    sampleAnswer: "I like to do active things sometimes. The last time I did something active was last week. I went to the park with my friend and we played soccer. It was fun and we ran a lot. We also kicked the ball hard and tried to score goals. It was a sunny day and the grass was green. I felt happy and healthy. I think doing active things is good for you."
                },
                {
                    question: "How important is it for people to be active?",
                    duration: 45,
                    sampleAnswer: "It is very important for people to be active. First, being active can improve your physical health and prevent diseases. Second, being active can boost your mood and mental well-being. Third, being active can help you socialize and make new friends. These are some of the benefits of being active."
                }
            ]
        },
        {
            id: 'sp2_playing_sports',
            title: 'Chủ đề 6: Playing sports',
            imageSrc: 'img/speaking-part2/family-playing-soccer.png',
            audioSrc: 'audio/speaking-part2/6.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "This picture shows a happy family of four playing in a park. It looks like the parents and their two children are playing soccer together. They are all running and smiling. In the background, there is a lot of green grass and trees. I think they are spending quality time together on a beautiful day."
                },
                {
                    question: "What are the benefits of playing sports?",
                    duration: 45,
                    sampleAnswer: "Playing sports has many benefits for people. First, sports can improve physical health and fitness. People who play sports regularly can have stronger muscles, bones and immune systems. Second, sports can reduce stress and anxiety. Third, sports can help people develop social skills and teamwork."
                },
                {
                    question: "Tell me about the sport you played or the sports program you watched recently.",
                    duration: 45,
                    sampleAnswer: "I played soccer with my friends last weekend. It was a lot of fun. We divided into two teams and played for an hour. The score was 3-2 for my team. I scored one goal and assisted another. Soccer is a great sport because it keeps you fit and healthy. It also helps you make friends and have fun."
                }
            ]
        },
        {
            id: 'sp2_friends_trip',
            title: 'Chủ đề 7: Going somewhere with friends',
            imageSrc: 'img/speaking-part2/friends-hiking.png',
            audioSrc: 'audio/speaking-part2/7.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In the picture, I can see a group of five young friends hiking in the mountains. They are all wearing backpacks and comfortable clothes for walking. They look happy and are smiling. The scenery around them is very beautiful, with green hills and a clear sky. I think they are enjoying their trip together."
                },
                {
                    question: "Tell about a time when you go somewhere with your friends.",
                    duration: 45,
                    sampleAnswer: "Last week, I went to Vung Tau beach with my friends. We had a lot of fun there. We swam in the sea, played volleyball on the sand, and ate delicious seafood. We also rented a boat and explored the nearby islands. We saw some dolphins and turtles. It was one of the best experiences of my life."
                },
                {
                    question: "What is the benefit of doing/ working with others?",
                    duration: 45,
                    sampleAnswer: "Working with others can be very helpful. First, you can learn new things from them, share your ideas, and get feedback. Second, you can also support each other when you face challenges or difficulties. Third, working with others can make you more creative, productive, and happy."
                }
            ]
        },
        // --- 4 CHỦ ĐỀ MỚI ---
        {
            id: 'sp2_crossing_street',
            title: 'Chủ đề 8: Crossing the street',
            imageSrc: 'img/speaking-part2/crossing-street.png',
            audioSrc: 'audio/speaking-part2/8.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see a group of young students crossing a street. They are all wearing warm clothes like jackets and beanies, so it might be cold. They are carrying backpacks, so I guess they are walking home from school. They are walking on a zebra crossing, which is a safe way to cross the street."
                },
                {
                    question: "Tell me the last time you crossed the street.",
                    duration: 45,
                    sampleAnswer: "The last time I crossed the street was yesterday. I was going to the grocery store to buy some milk and eggs. I waited for the green light and then I looked both ways before stepping onto the crosswalk. There were some cars passing by, but they slowed down and stopped for me. I walked quickly and safely to the other side of the street."
                },
                {
                    question: "Why are some people scared of crossing the street?",
                    duration: 45,
                    sampleAnswer: "Some people are scared of crossing the street for different reasons. First, they may have had a bad experience in the past, such as being hit by a car. Second, they may lack confidence in crossing the street safely. Third, they may not trust the drivers or the traffic lights, and think that they are not safe enough."
                }
            ]
        },
        {
            id: 'sp2_travelling',
            title: 'Chủ đề 9: Travelling',
            imageSrc: 'img/speaking-part2/waiting-for-train.png',
            audioSrc: 'audio/speaking-part2/9.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "This picture shows a group of people waiting for a train at a station. They are standing on the platform next to the train. A woman in the foreground is looking at her phone. The people seem to be a diverse group of travelers. The atmosphere looks calm as they wait to board the train."
                },
                {
                    question: "Tell about the last time you travelled somewhere.",
                    duration: 45,
                    sampleAnswer: "Last month, I went to Vung Tau with my friends. It was a fun trip. We took a bus from Ho Chi Minh City and arrived in the morning. We checked in at a hotel near the beach and then went swimming. We also played volleyball and built sandcastles. In the evening, we ate seafood and watched the sunset. It was a beautiful view."
                },
                {
                    question: "Why some people find travelling stressful?",
                    duration: 45,
                    sampleAnswer: "Some people find travelling stressful for different reasons. First, they may have to deal with a lot of planning and preparation, such as booking flights. Second, they may face unexpected challenges or problems during their trip, such as delays or lost items. Third, they may have to adapt to a new culture or environment."
                }
            ]
        },
        {
            id: 'sp2_eating_out',
            title: 'Chủ đề 10: Eating out with friends',
            imageSrc: 'img/speaking-part2/eating-with-friends.png',
            audioSrc: 'audio/speaking-part2/10.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "In this picture, I can see a group of friends eating together at a restaurant. They are sitting around a table full of food and drinks. Everyone is laughing and smiling, so they seem to be having a great time. The restaurant looks bright and modern. It looks like a very happy and enjoyable meal."
                },
                {
                    question: "Why do people like eating out with friends?",
                    duration: 45,
                    sampleAnswer: "People like eating out with friends for many reasons. One reason is that they can try different kinds of food and share their opinions. Another reason is that they can have fun conversations and laugh together. Eating out with friends can also make them feel closer and happier. It is a convenient and enjoyable option."
                },
                {
                    question: "Please talk about the last time you ate with friends?",
                    duration: 45,
                    sampleAnswer: "The last time I ate with friends was a few weeks ago. We went to a Vietnamese restaurant and ordered pho, which is a delicious noodle soup. We had a lot of fun talking about our lives, our hobbies, and our plans for the future. It was a warm and cozy meal that made me feel happy and relaxed."
                }
            ]
        },
        {
            id: 'sp2_presentation',
            title: 'Chủ đề 11: Giving a presentation',
            imageSrc: 'img/speaking-part2/giving-presentation.png',
            audioSrc: 'audio/speaking-part2/11.m4a',
            tasks: [
                {
                    question: "Describe the picture.",
                    duration: 45,
                    sampleAnswer: "This picture shows a man giving a presentation in a meeting room. He is standing in front of a large screen, and he is talking to an audience. The audience is sitting at a long table and listening carefully. The room looks professional and modern. The man seems confident and well-prepared."
                },
                {
                    question: "Tell us about the time you give a presentation. How did you feel?",
                    duration: 45,
                    sampleAnswer: "I gave a presentation last week. It was about my project on climate change. I practiced a lot, but I was still afraid of making mistakes. I used slides and pictures to show my main points. I spoke slowly and clearly. I looked at the audience and smiled. I felt happy and proud when I finished. I think I did a good job."
                },
                {
                    question: "Why are people scared of public speaking?",
                    duration: 45,
                    sampleAnswer: "Many people are scared of public speaking for some reasons. Firstly, they worry about making mistakes or forgetting what to say. They think that other people will judge them harshly or laugh at them. Secondly, they feel nervous or anxious in front of a large audience. Finally, they lack confidence or experience in speaking skills."
                }
            ]
        }
        // Thêm các chủ đề Part 2 khác vào đây với cấu trúc tương tự
    ],

     // --- THÊM MỚI DỮ LIỆU PART 3 ---
    part3: [
        {
            id: 'sp3_shopping_places',
            title: 'Chủ đề 1: Shopping Places',
            image1Src: 'img/speaking-part3/shopping-market.png',
            image2Src: 'img/speaking-part3/shopping-supermarket.png',
            audioSrc: 'audio/speaking-part3/1.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I can see a young woman shopping for bananas at a market. She looks focused, maybe checking if the bananas are fresh. In the second picture, there is a woman and a little girl shopping together in a supermarket. The child is pointing at the fruits, and they both look happy. Both pictures show people buying fruits, but the first one is alone and in a market, while the second one is with family in a supermarket. I think shopping with someone is more fun because you can share the experience."
                },
                {
                    question: "What are the benefits of shopping in these two places?",
                    duration: 45,
                    sampleAnswer: "Shopping in a market is good because the food is often fresh and cheap. You can talk to the sellers and feel the local atmosphere. It's a fun place to shop. In supermarkets, you can find many things in one place. It is clean, organized, and has many choices. It's easy for families and busy people."
                },
                {
                    question: "Where do you think people will shop in the future?",
                    duration: 45,
                    sampleAnswer: "In the future, I think many people will shop online because it's fast and easy. You can buy things from home, and they will deliver them to your house. But some people will still go to supermarkets or markets to buy fresh food. I think shopping will change, but people will use different ways depending on their needs. Maybe we will see more smart technology in shops too."
                }
            ]
        },
        {
            id: 'sp3_relaxing_places',
            title: 'Chủ đề 2: Relaxing Places',
            image1Src: 'img/speaking-part3/relaxing-beach.png',
            image2Src: 'img/speaking-part3/relaxing-lake.png',
            audioSrc: 'audio/speaking-part3/2.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, there are many people relaxing on a crowded beach. There are umbrellas, towels, and people sunbathing or swimming. It looks noisy and full of energy. In the second picture, there is only one person sitting quietly by a lake in the mountains. The place looks peaceful and natural. Both places are good for relaxing, but they are very different. The beach is lively and social, while the lake is calm and quiet."
                },
                {
                    question: "What is your favorite place in the two pictures? Why?",
                    duration: 45,
                    sampleAnswer: "I prefer the second picture, the natural setting by the river. I enjoy quiet and peaceful environments where I can relax and connect with nature. The sound of the water and the fresh air would make me feel refreshed. While the beach is exciting, I find the forest more relaxing and suitable for my personality."
                },
                {
                    question: "Why do many people like going to different places on holiday?",
                    duration: 45,
                    sampleAnswer: "People enjoy traveling to different places because they want to experience something new and escape their daily routines. Some people love the excitement of crowded beaches and fun activities, while others prefer the tranquility of nature to recharge their energy. Visiting diverse places also allows them to explore different cultures, scenery, and climates, making holidays more memorable."
                }
            ]
        },

        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_free_time_activities',
            title: 'Chủ đề 3: Free time activities',
            image1Src: 'img/speaking-part3/hobby-crossword.png',
            image2Src: 'img/speaking-part3/hobby-game.png',
            audioSrc: 'audio/speaking-part3/3.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "Both pictures show people doing activities in their free time, but they are very different. In the first picture, we can see an elderly man doing a crossword puzzle. He looks very focused and calm. In the second picture, there is a young boy playing a computer game. He looks very excited and energetic. The activity looks fun and fast-paced."
                },
                {
                    question: "What are the attractions of these activities?",
                    duration: 45,
                    sampleAnswer: "The attractions of doing a crossword puzzle are that it helps improve thinking skills and can be a fun way to pass time. Playing a computer game is exciting because it can be very entertaining and gives you the chance to explore different worlds or challenges. Both activities help people relax and have fun."
                },
                {
                    question: "Playing games is for children, not for adults. What do you think?",
                    duration: 45,
                    sampleAnswer: "I think playing games is not only for children. Adults can enjoy games too because they help people relax and have fun. Games like puzzles or strategy games can be challenging and good for the brain. They also allow adults to spend time with friends or family."
                }
            ]
        },
        {
            id: 'sp3_eating_habits',
            title: 'Chủ đề 4: Eating habits',
            image1Src: 'img/speaking-part3/food-healthy.png',
            image2Src: 'img/speaking-part3/food-pizza.png',
            audioSrc: 'audio/speaking-part3/4.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "Both pictures show people eating, but the situations are quite different. In the first picture, we can see a young man eating healthy food. He has a bowl of salad and many fresh fruits. He seems to be enjoying a nutritious meal alone. In the second picture, there are three men eating pizza. They look happy and are talking and laughing together."
                },
                {
                    question: "Which food do you prefer?",
                    duration: 45,
                    sampleAnswer: "I prefer vegetables because they are healthier and provide important nutrients. They also make me feel energized and are better for my overall well-being. While fast food can be tasty, I try to avoid it since it's often not as good for my health in the long run."
                },
                {
                    question: "Why do people like to eat different types of food?",
                    duration: 45,
                    sampleAnswer: "People like to eat different types of food for several reasons. First, variety in food makes meals more interesting and enjoyable. Second, different foods offer a range of flavors that people enjoy tasting. Finally, people eat different foods because they provide various nutrients, which help keep them healthy."
                }
            ]
        },

         // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_different_games',
            title: 'Chủ đề 5: Different types of games',
            image1Src: 'img/speaking-part3/game-chess.png',
            image2Src: 'img/speaking-part3/game-video.png',
            audioSrc: 'audio/speaking-part3/5.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different games. In the first picture, there are four people: a man, a woman, a boy, and a girl I guess they are a family. The boy wearing a long sleeve checked shirt is playing chess with his father. In the second picture, I see a man wearing headphones and holding a video game controller. He looked very focused. I think he is playing games to relax after a tiring day of work."
                },
                {
                    question: "What are the attractions of these two different types of games?",
                    duration: 45,
                    sampleAnswer: "Chess and video games are both fun and challenging activities, but they have different attractions. Chess is a classic game that requires logic, strategy and concentration. It can improve your mental skills. Video games are more modern and diverse. They can offer different genres, graphics and stories. They can stimulate your imagination and creativity."
                },
                {
                    question: "Computer games are bad. What do you think?",
                    duration: 45,
                    sampleAnswer: "I don’t think computer games are bad. They can be fun and educational. They can also help people relax and socialize. Computer games are not bad if you play them in moderation and balance them with other activities. Some computer games can improve your skills and creativity. They have pros and cons, but they are not bad by themselves."
                }
            ]
        },
        {
            id: 'sp3_outdoor_time',
            title: 'Chủ đề 6: Spending time outdoors',
            image1Src: 'img/speaking-part3/outdoor-beach.png',
            image2Src: 'img/speaking-part3/outdoor-mountain.png',
            audioSrc: 'audio/speaking-part3/6.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "Both pictures show people spending time outdoors, but in different ways. In the first picture, there is a family walking along the beach. The weather looks warm and sunny, and they seem happy. In the second picture, we can see four people standing on top of a mountain. They are probably friends or hikers enjoying the view after a long walk."
                },
                {
                    question: "Which do you prefer?",
                    duration: 45,
                    sampleAnswer: "I prefer walking along the beach because it feels very relaxing. I love the sound of the waves and the fresh air. Walking on the sand is a peaceful way to clear my mind and enjoy nature. I also like to watch the sunset over the ocean. It's a great way to feel calm and recharge after a busy day."
                },
                {
                    question: "What are the characteristics that make a good resort?",
                    duration: 45,
                    sampleAnswer: "A good resort should have a few key characteristics. First, it should offer comfortable accommodations with clean rooms. Second, the staff should be friendly and helpful, making guests feel welcome. Finally, a good resort should provide a variety of activities and be located in a beautiful, peaceful area."
                }
            ]
        },
         // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_places_to_eat',
            title: 'Chủ đề 7: Places to eat',
            image1Src: 'img/speaking-part3/eating-street-food.png',
            image2Src: 'img/speaking-part3/eating-restaurant.png',
            audioSrc: 'audio/speaking-part3/7.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different places to eat. In the first picture, I can see many people standing in front of street food stalls. They are enjoying the food. In the second picture, there is a woman. She has long hair and is wearing a blue t-shirt. She is using chopsticks and a fork to eat food. I guess she’s happy because she can enjoy food at the restaurant she likes."
                },
                {
                    question: "What are the disadvantages of these two types of eating?",
                    duration: 45,
                    sampleAnswer: "Eating at street food stalls and eating in the restaurant have some disadvantages. Street food may be cheaper and faster, but it can be unhealthy and unsafe. You don’t know how the food is cooked or stored. Restaurant food may be more expensive and slower, but it can be tasty, clean, and safe. However, restaurant food can also be unhealthy, too salty, or too oily."
                },
                {
                    question: "Why people don’t prefer eating out alone?",
                    duration: 45,
                    sampleAnswer: "Some people don’t like to eat out alone because they feel lonely or bored without someone to talk to. They think that other people will judge them for not having company. Eating out alone can also be expensive for some people. They would rather cook at home or order takeout and watch something on their phone or laptop."
                }
            ]
        },
        {
            id: 'sp3_different_environments',
            title: 'Chủ đề 8: Different Environments',
            image1Src: 'img/speaking-part3/environment-snow.png',
            image2Src: 'img/speaking-part3/environment-desert.png',
            audioSrc: 'audio/speaking-part3/8.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, we see a man standing in a snowy place. He is wearing a big furry hat, scarf, and a thick coat. The background is full of snow and trees. In the second picture, there is a woman standing in a desert. She is wearing a long black dress that covers her body. The background is full of sand. It looks very hot and dry."
                },
                {
                    question: "What are the differences between the two places?",
                    duration: 45,
                    sampleAnswer: "The two places are very different. The first one is a cold, snowy place with low temperatures. The second place is a hot desert with sand and strong sunlight. People wear long clothes to protect their skin from the sun. The weather, temperature, and environment are opposite. One is freezing and white, the other is hot and dry."
                },
                {
                    question: "How can surroundings affect people?",
                    duration: 45,
                    sampleAnswer: "Surroundings can affect people in many ways. In cold places, people stay indoors more, wear warm clothes, and eat hot food. In hot places, people drink more water, wear light clothes, and avoid the sun. The environment also changes how homes are built, what people eat, and how they travel. It can also affect health, jobs and lifestyle."
                }
            ]
        },
        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_children_animals',
            title: 'Chủ đề 9: Children and Animals',
            image1Src: 'img/speaking-part3/animals-horse.png',
            image2Src: 'img/speaking-part3/animals-snake.png',
            audioSrc: 'audio/speaking-part3/9.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "Two pictures show children's interactions with animals. In the first picture, I can see a father and his son feeding a horse. The son seems to be very excited. In the second picture, there is a teacher and three students. They are touching the snake. I think the teacher is probably teaching his students knowledge about snakes. The children looks very interested and excited."
                },
                {
                    question: "How do the children feel in these situations?",
                    duration: 45,
                    sampleAnswer: "Children have different feelings when they feed a horse or play with a snake. Feeding a horse can make them happy and excited. They can touch the horse's fur and feel its warmth. Playing with a snake can make them scared and curious. They can feel the snake's scales and its coldness. They can also watch the snake's movements and its tongue."
                },
                {
                    question: "Why is it important to learn about animals?",
                    duration: 45,
                    sampleAnswer: "It is important to learn about animals because they are part of our world. Animals can teach us many things, like how to care for others, how to adapt to different environments, and how to respect nature. Animals also have different roles in the ecosystem, such as providing food and controlling pests. Learning about animals can help us understand how we can protect them."
                }
            ]
        },
        {
            id: 'sp3_leisure_activities',
            title: 'Chủ đề 10: Leisure Activities',
            image1Src: 'img/speaking-part3/leisure-museum.png',
            image2Src: 'img/speaking-part3/leisure-zipline.png',
            audioSrc: 'audio/speaking-part3/10.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different leisure activities. In the first picture, there is a woman, a boy and a girl. They are visiting the museum. On the contrary, in the second picture, I can see a boy. He is wearing a helmet and a seat belt. He is playing outdoor activities. I guess the boy is very active and wants to improve his health."
                },
                {
                    question: "What are the benefits of these 2 activities?",
                    duration: 45,
                    sampleAnswer: "Visiting a museum and playing an outdoor activity are two fun and healthy ways to spend your free time. Visiting a museum can enrich your knowledge and culture. You can learn about history, art, science, and many other topics. Playing an outdoor activity can improve your physical and mental health. You can exercise your body, breathe fresh air, and enjoy nature."
                },
                {
                    question: "It is easier to learn when we enjoy doing it. What do you think?",
                    duration: 45,
                    sampleAnswer: "I completely agree that it is easier to learn when we enjoy doing it. When we enjoy something, we pay more attention to it. We also remember it more easily. We feel happy and motivated to learn more. Learning is not boring or hard when we like it. That is why I think it is easier to learn when we enjoy doing it."
                }
            ]
        },
        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_team_individual_sports',
            title: 'Chủ đề 11: Team vs Individual Sports',
            image1Src: 'img/speaking-part3/sports-rowing.png',
            image2Src: 'img/speaking-part3/sports-cycling.png',
            audioSrc: 'audio/speaking-part3/11.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different types of sports activities including team sports and individual sports. In the first picture, I can see a group of four people. They are participating in a rowing race. On the contrary, in the second picture there is a male athlete in a bike jersey and helmet. He is cycling very fast. I guess he is trying to reach the finish line."
                },
                {
                    question: "What are the difficulties in each sport?",
                    duration: 45,
                    sampleAnswer: "Each sport has its own difficulties. Rowing race is hard because you need to work with your team and keep the same pace. You also need to use a lot of strength to move the boat fast. Racing bike is hard because you need to balance on the bike and avoid obstacles. You also need to pedal fast to finish the race."
                },
                {
                    question: "Why do people prefer team sports to individual sports?",
                    duration: 45,
                    sampleAnswer: "Some people like team sports more than individual sports because they enjoy working with others. They think it is more fun and rewarding to share goals, strategies, and achievements with their teammates. They also like the social aspect of team sports, such as making friends, supporting each other, and celebrating together."
                }
            ]
        },
        {
            id: 'sp3_different_locations',
            title: 'Chủ đề 12: Different Locations',
            image1Src: 'img/speaking-part3/locations-mountain.png',
            image2Src: 'img/speaking-part3/locations-beach.png',
            audioSrc: 'audio/speaking-part3/12.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different locations. In the first picture, I can see a group with their backpacks on their backs. They are hiking through the mountains. On the contrary, in the second picture, I can see a blue beach and white sand with a clear blue sky. On the right of the picture, there are two chairs and an umbrella underneath a big coconut tree."
                },
                {
                    question: "What are the attractions of these places?",
                    duration: 45,
                    sampleAnswer: "The mountain and the beach are two different places that have many attractions. The mountain is a place where you can enjoy nature, fresh air, and beautiful views. You can go hiking, camping, skiing, or snowboarding on the mountain. The beach is a place where you can relax, swim, and have fun. You can play in the sand, surf, or sunbathe on the beach."
                },
                {
                    question: "What are the ways to protect natural beauty?",
                    duration: 45,
                    sampleAnswer: "There are many ways to protect natural beauty. Firstly, we must reduce pollution by using renewable energy, recycling, and avoiding using plastics. Secondly, it is important to conserve water and energy, using them wisely. Thirdly, we can plant trees and flowers to create habitats for animals and insects. Lastly, promoting sustainable tourism can also contribute to the protection of our natural beauty."
                }
            ]
        },

        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_enjoying_music',
            title: 'Chủ đề 13: Enjoying Music',
            image1Src: 'img/speaking-part3/music-concert.png',
            image2Src: 'img/speaking-part3/music-home.png',
            audioSrc: 'audio/speaking-part3/13.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different places to enjoy music. In the first picture, I can see a man wearing a black vest. He is standing on the stage and performing. I guess he is a famous singer because there are many people in front of him watching him perform. The atmosphere here is so vibrant. In the second picture, there is a man sitting on the sofa. He is wearing headphones. He looked very excited when listening to his favorite song."
                },
                {
                    question: "Which do you prefer?",
                    duration: 45,
                    sampleAnswer: "I prefer listening to music at home rather than in a concert. Here are some of my reasons. First, I can choose the songs I like and play them as loud or as soft as I want. Second, I can relax on my couch or bed and enjoy the music without any distractions. Third, I can save money and time by not buying tickets or traveling to the concert venue. Fourth, I can invite my friends or family over and have a fun time together."
                },
                {
                    question: "What are the benefits of listening to music?",
                    duration: 45,
                    sampleAnswer: "I think that listening to music has many benefits. Firstly, it can improve our mood, helping us feel happier and more positive. Secondly, music can help us escape from daily stress and help us relax and unwind. Additionally, music can enhance your memory and learning by stimulating different parts of your brain. These are why I think that listening to music has many benefits."
                }
            ]
        },
        {
            id: 'sp3_places_to_eat_2',
            title: 'Chủ đề 14: Places to eat (2)',
            image1Src: 'img/speaking-part3/eating-home.png',
            image2Src: 'img/speaking-part3/eating-restaurant-formal.png',
            audioSrc: 'audio/speaking-part3/14.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different places to eat. In the first picture, I can see three women eating at home. I guess they are about 25 years old. They are wearing casual clothes. There are a lot of vegetables and fruit on the dining table. On the contrary, in the second picture, I see a group of four people consisting of two men and two women. They are eating at a restaurant. On a table, there are some glasses and a lot of food that looks very greasy."
                },
                {
                    question: "Why people eat out?",
                    duration: 45,
                    sampleAnswer: "People eat out for many reasons. Firstly, they are too busy to cook at home. They may work long hours or have many activities to do. Secondly, they want to try new foods or enjoy different cuisines. They may like to explore different cultures or flavors. Finally, they want to socialize with others. They may have friends, family, or colleagues who invite them to eat out."
                },
                {
                    question: "Which do you prefer?",
                    duration: 45,
                    sampleAnswer: "I prefer to eat at home because it is cheaper, healthier and more comfortable. I can cook whatever I want and enjoy it with my family or friends. I don’t have to worry about the quality of the food, the service or the hygiene of the restaurant. I also save time and money by not having to travel or tip. Eating at home is more relaxing and satisfying for me."
                }
            ]
        },

        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_housing_styles',
            title: 'Chủ đề 15: Housing Styles',
            image1Src: 'img/speaking-part3/housing-classic.png',
            image2Src: 'img/speaking-part3/housing-modern.png',
            audioSrc: 'audio/speaking-part3/15.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "Two pictures show two different housing styles including classic style and modern style. In the first picture, I can see a man wearing a suit and dress shoes. He is sitting at the foot of the stairs. The furniture is made of wood and the room looks like it lacks sunlight. On the contrary, in the second picture, there is a man wearing a blue shirt and blue jeans. He is sitting on the sofa and holding the remote control to choose the channel he likes. He looks very happy."
                },
                {
                    question: "Which room do you prefer to live in?",
                    duration: 45,
                    sampleAnswer: "If someone asks me which room I prefer to live in, I would say a modern room. I like modern rooms because they are more comfortable, spacious and stylish. They have smart devices, cozy furniture and minimalist design. They make me feel relaxed and happy. Classic rooms are too old-fashioned, cluttered and boring for me. They have outdated appliances, heavy curtains and dark colors."
                },
                {
                    question: "Why do people like decorating their houses?",
                    duration: 45,
                    sampleAnswer: "People like decorating their houses for many reasons. Firstly, they want to make their houses more comfortable and cozy. They choose colors, furniture, and accessories that match their personality and style. Secondly, they want to impress their guests and neighbors. They follow the latest trends and buy expensive items to show off their wealth and taste. Finally, decorating can also be a fun and creative activity."
                }
            ]
        },
        {
            id: 'sp3_shopping_mother_daughter',
            title: 'Chủ đề 16: Shopping with family',
            image1Src: 'img/speaking-part3/shopping-jewelry.png',
            image2Src: 'img/speaking-part3/shopping-clothes-child.png',
            audioSrc: 'audio/speaking-part3/16.mp3',
            tasks: [
                {
                    question: "Describe the 2 pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I can see a woman with her daughter. The woman is wearing a white shirt and her daughter is wearing a blue striped t-shirt. They were looking at the jewelry in the display case. I guess the woman is buying jewelry for her daughter. On the contrary, in the second picture, a woman is trying on clothes for her daughter. The little girl seemed to be excited when buying clothes for herself. Around them, there are a lot of clothes hanging on racks."
                },
                {
                    question: "Describe the difference between the two pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show different ways that a mother and her child spend their money. In picture one, they go to a jewelry store and buy expensive items, such as rings and necklaces. This suggests that they have a lot of money and like to show it off. In picture two, they go to a clothing store and buy basic items, such as shirts and pants. This suggests that they have a limited budget and prioritize their needs over their wants."
                },
                {
                    question: "Why do people like to buy expensive things?",
                    duration: 45,
                    sampleAnswer: "People like to buy expensive things for different reasons. Firstly, people buy expensive things to show their status or wealth. They want to impress others or feel good about themselves. Secondly, they think they are better quality or more durable. They want to enjoy the benefits of the products or services they buy. Finally, they like them or they have a personal preference. They want to express their taste or style."
                }
            ]
        },
        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_city_vs_countryside',
            title: 'Chủ đề 17: City vs Countryside',
            image1Src: 'img/speaking-part3/living-countryside.png',
            image2Src: 'img/speaking-part3/living-city.png',
            audioSrc: 'audio/speaking-part3/17.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I can see a quiet countryside with mountains and trees. A person is sitting on the grass, enjoying nature near a small wooden barn. The weather looks sunny and calm. In the second picture, there are many people walking on a busy city street. The buildings are tall, and there are cars and bright sunlight. The two places look very different in atmosphere and lifestyle."
                },
                {
                    question: "What are the differences of living in these two places?",
                    duration: 45,
                    sampleAnswer: "Living in the countryside is more peaceful and quiet. People can relax, breathe fresh air, and enjoy nature. Life is slower and less stressful. In the city, life is faster and more exciting. There are more job opportunities, schools, and things to do, but also more noise and traffic. Some people prefer peace, while others enjoy the busy life in the city."
                },
                {
                    question: "What do you think are the characteristics of a good neighborhood?",
                    duration: 45,
                    sampleAnswer: "A good neighborhood should be clean, safe, and friendly. People should help and respect each other. There should be parks, shops, and schools nearby, so life is more convenient. It's also good to have quiet streets and green spaces to relax. When neighbors talk and care about each other, the place feels like home."
                }
            ]
        },
        {
            id: 'sp3_house_vs_apartment',
            title: 'Chủ đề 18: House vs Apartment',
            image1Src: 'img/speaking-part3/housing-house.png',
            image2Src: 'img/speaking-part3/housing-apartment.png',
            audioSrc: 'audio/speaking-part3/18.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I see a happy family sitting on the grass in front of a house. There are two children and their parents. The weather is nice and the house is big with a garden. In the second picture, I see a woman standing on the balcony of an apartment. She looks like she is enjoying the view or some fresh air. The building is tall and modern."
                },
                {
                    question: "What are the differences between the situations in two pictures?",
                    duration: 45,
                    sampleAnswer: "The first picture shows a house with a garden, so the family has more space and privacy. The second picture shows a woman in an apartment, which is smaller and has less outdoor space. Living in a house feels more peaceful, while an apartment is more modern and maybe closer to the city."
                },
                {
                    question: "Which situation do you prefer?",
                    duration: 45,
                    sampleAnswer: "I prefer the house in the first picture. I like nature and having a garden to relax. It's also better for a family with kids. There is more space to play and enjoy outdoor time. But apartments are good too if you live alone or work in the city."
                }
            ]
        },
         // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_kinds_of_travel',
            title: 'Chủ đề 19: Kinds of Travel',
            image1Src: 'img/speaking-part3/travel-car.png',
            image2Src: 'img/speaking-part3/travel-train.png',
            audioSrc: 'audio/speaking-part3/19.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I see a happy group of three people in a car. One person is driving, and another is holding a map, maybe helping with directions. They look like they are on a road trip. In the second picture, there is a couple sitting on a train. They are relaxing, looking out the window, and enjoying the view. Both pictures show people traveling and spending time together."
                },
                {
                    question: "What is the differences between these kinds of travel?",
                    duration: 45,
                    sampleAnswer: "Traveling by car gives you more freedom. You can stop whenever you want and choose your own route. It's great for short trips or traveling with family or friends. On the other hand, traveling by train is more relaxing. You don't have to drive, so you can rest, read, or look at the view. Also, trains are often faster and better for the environment. So, each way of travel has its own advantages."
                },
                {
                    question: "What are benefits of traveling by train?",
                    duration: 45,
                    sampleAnswer: "Traveling by train has many benefits. First, it's comfortable because you don't have to drive. You can sit back, relax, and enjoy the scenery. Second, trains are often safer and more reliable than cars. Also, train stations are usually in the city center, so it's easy to get around. Another big advantage is that it's better for the environment, as trains use less fuel than cars."
                }
            ]
        },
        {
            id: 'sp3_relationships_with_animals',
            title: 'Chủ đề 20: Relationships with Animals',
            image1Src: 'img/speaking-part3/animals-monkeys.png',
            image2Src: 'img/speaking-part3/animals-whale.png',
            audioSrc: 'audio/speaking-part3/20.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I see a man surrounded by many small monkeys. The monkeys are climbing on him and seem very friendly. He looks happy and is probably in a zoo or a forest. In the second picture, some people are on a boat and touching a big whale. They look excited and are taking photos. Both pictures show people having special experiences with animals in nature."
                },
                {
                    question: "How would you react in these two situations?",
                    duration: 45,
                    sampleAnswer: "If I were in the first picture, I might be surprised at first, but I would probably enjoy playing with the monkeys. It looks like fun. In the second picture, I would be very excited to see a whale up close. I think I'd feel a little scared too, because the whale is so big. But overall, I would love both experiences because I like animals and enjoy being close to nature."
                },
                {
                    question: "In what ways can people benefit from relationships with animals?",
                    duration: 45,
                    sampleAnswer: "People can benefit from animals in many ways. Animals can help us feel happy and relaxed. Pets like dogs or cats can give us love and make us feel less lonely. Being around animals can reduce stress and improve our mood. Also, animals can teach us to be kind, responsible, and patient. Some animals, like guide dogs, can help people with disabilities."
                }
            ]
        },
        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_ways_of_exercising',
            title: 'Chủ đề 21: Ways of Exercising',
            image1Src: 'img/speaking-part3/exercise-gym.png',
            image2Src: 'img/speaking-part3/exercise-hiking.png',
            audioSrc: 'audio/speaking-part3/21.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, there's a man working out at the gym. He is lifting weights and looks very focused. In the second picture, I see two people hiking outdoors. They are walking on a mountain trail surrounded by trees and nature. While the first picture shows indoor exercise, the second shows outdoor physical activity in a natural environment."
                },
                {
                    question: "What are the differences between exercising in these ways?",
                    duration: 45,
                    sampleAnswer: "Exercising in a gym helps people build strength by using equipment and following a fixed routine. It's great for muscle training. In contrast, hiking is done outdoors and gives people a chance to enjoy nature while moving. It's more relaxing and refreshing than gym workouts. So, one is more focused and controlled, while the other feels more natural and enjoyable."
                },
                {
                    question: "Why should people take regular exercise?",
                    duration: 45,
                    sampleAnswer: "Regular exercise is important because it helps people stay fit and healthy. It can improve heart health, build stronger muscles, and help with weight control. Exercise also reduces stress and helps people sleep better. It gives more energy and makes people feel happier. Whether it's walking, swimming, or going to the gym, moving the body regularly brings both physical and mental health benefits."
                }
            ]
        },
        {
            id: 'sp3_learning_environments',
            title: 'Chủ đề 22: Learning Environments',
            image1Src: 'img/speaking-part3/learning-outdoor.png',
            image2Src: 'img/speaking-part3/learning-classroom.png',
            audioSrc: 'audio/speaking-part3/22.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, I see a group of children and a teacher learning outside in a garden. They look happy and are touching plants. In the second picture, some students are in a classroom. They are sitting at desks and raising their hands to answer a question. The teacher is standing at the front. Both pictures show children learning, but in different environments."
                },
                {
                    question: "What are the benefits of learning in two different environments?",
                    duration: 45,
                    sampleAnswer: "Learning in different places gives students more experience. In class, they learn theory, like reading and math. Outside, they can do hands-on activities, like planting or doing experiments. This helps them understand better and keeps learning fun. It also helps students use their knowledge in real life."
                },
                {
                    question: "Students should spend less time in class. What do you think?",
                    duration: 45,
                    sampleAnswer: "I agree a little. Students should not spend all their time in class. They also need time for sports, hobbies, and outdoor learning. This helps them stay healthy and more creative. But they still need enough time in class to learn important subjects like science and math."
                }
            ]
        },

        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_eating_together',
            title: 'Chủ đề 23: Eating Together',
            image1Src: 'img/speaking-part3/eating-restaurant-friends.png',
            image2Src: 'img/speaking-part3/eating-picnic.png',
            audioSrc: 'audio/speaking-part3/23.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, a group of friends is sitting around a long table in a restaurant. They are smiling, enjoying their meal and drinks, and having fun together. In the second picture, there is a family of three – a man, a woman, and a little girl – having a picnic in a park. They're sitting on a red picnic blanket with lots of fruit and snacks, enjoying the sunshine and spending quality time together."
                },
                {
                    question: "Do you prefer to have a meal in which picture?",
                    duration: 45,
                    sampleAnswer: "I prefer to have a meal like the second picture, where a family is having a picnic. I love eating outdoors in nature because it's peaceful and comfortable. I also enjoy spending time with close family members rather than being in a noisy restaurant. Eating in a park also allows me to relax, breathe fresh air, and enjoy simple food while talking and playing with loved ones. It feels more personal and meaningful to me."
                },
                {
                    question: "Do you think it is necessary to eat together?",
                    duration: 45,
                    sampleAnswer: "Yes, I think it is very important to eat together. When people eat together, they have time to talk, laugh, and share their feelings. It helps to build stronger relationships, especially between family members. Eating together can also reduce stress and make people feel happier. In today's busy life, having meals together is a great way to stay connected and show care for one another."
                }
            ]
        },
        {
            id: 'sp3_keeping_pets',
            title: 'Chủ đề 24: Keeping Pets',
            image1Src: 'img/speaking-part3/pets-cat.png',
            image2Src: 'img/speaking-part3/pets-snake.png',
            audioSrc: 'audio/speaking-part3/24.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, there is a young woman holding a cat in her arms. She looks happy and relaxed, standing in a modern kitchen. The cat seems comfortable with her. In the second picture, I see a boy holding a snake. He is smiling and looks very confident. Both pictures show people who love and take care of their pets at home."
                },
                {
                    question: "Why do people like to keep pets at home?",
                    duration: 45,
                    sampleAnswer: "People like to keep pets at home because pets can make them feel happy and less lonely. Pets such as cats or dogs are friendly and bring comfort, while others like snakes or fish can be fun to watch and take care of. Taking care of a pet also teaches people responsibility. Overall, pets help people relax, feel loved, and enjoy life more at home."
                }
            ]
        },
        // --- 3 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_weather_locations',
            title: 'Chủ đề 25: Weather and Locations',
            image1Src: 'img/speaking-part3/weather-winter.png',
            image2Src: 'img/speaking-part3/weather-summer.png',
            audioSrc: 'audio/speaking-part3/25.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture, a man and a woman are hiking in a snowy forest. They are dressed warmly in winter clothes and carrying walking sticks. It looks cold but enjoyable. In the second picture, a couple is sitting on beach chairs by the sea. The weather is sunny and bright, and they seem to be relaxing and enjoying their time together."
                },
                {
                    question: "Between the two locations, where do you prefer? Why?",
                    duration: 45,
                    sampleAnswer: "I prefer the second location, which is the beach. I really enjoy warm, sunny weather because it makes me feel more relaxed and happy. I love sitting in the sun, listening to the sound of the waves, and feeling the sea breeze. It's a perfect place to take a break from work and enjoy nature. The beach also gives me a chance to wear light clothes and swim."
                },
                {
                    question: "How do you think the weather affects people's emotions?",
                    duration: 45,
                    sampleAnswer: "I think the weather can strongly affect how people feel. For example, sunny and warm weather often makes people feel happier, more energetic, and more positive. On the other hand, cold or rainy weather can make people feel tired, sad, or unmotivated. Many people feel less active in the winter. That's why many prefer spring or summer."
                }
            ]
        },
        {
            id: 'sp3_living_places',
            title: 'Chủ đề 26: Places to live',
            image1Src: 'img/speaking-part3/housing-apartment-building.png',
            image2Src: 'img/speaking-part3/housing-bungalow.png',
            audioSrc: 'audio/speaking-part3/26.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture I can see a big apartment building with many floors. I think young people like university students live here. It’s in the city. In the second picture I can see a small one floor house. It has big windows and a wooden door. There is grass outside. I think a small family lives here."
                },
                {
                    question: "What would it be like living in these two places?",
                    duration: 45,
                    sampleAnswer: "In the first place it would be noisy, not private and crowded. There would be no garden. In the second place it would be more quiet, more relaxing and there is space for my children to play in the garden. I would like to live in the second place."
                },
                {
                    question: "Which of these two places would it be better for old people to live in? Why?",
                    duration: 45,
                    sampleAnswer: "I think the second place would be better for old people to live in. In the second place there is no need to go up and down the stairs. It would be more comfortable for the old people to walk around. Also, because it’s a small house it would be easier for cleaning. There is an outside area where they have a picnic and grow flowers."
                }
            ]
        },
        {
            id: 'sp3_reading_methods',
            title: 'Chủ đề 27: Reading Methods',
            image1Src: 'img/speaking-part3/reading-library-shelf.png',
            image2Src: 'img/speaking-part3/reading-laptop.png',
            audioSrc: 'audio/speaking-part3/27.mp3',
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "Looking at first picture, I can see two children: a boy and a girl. They are finding books at the library. Looking at the second one, there is a girl. She is writing something on paper and looking at the laptop. I guess she is reading material on laptop and taking note. The difference between two pictures is that one pictures is the traditional way of reading while the other is the modern way of reading."
                },
                {
                    question: "Do you prefer reading printed books or e-books?",
                    duration: 45,
                    sampleAnswer: "I prefer reading e-books as it is convenient. E-books are portable so I can bring them to every place without being afraid of the heavy, but we cannot deny the benefits of printed books."
                },
                {
                    question: "Does technology affect the way we read books?",
                    duration: 45,
                    sampleAnswer: "Yes, of course. The advance of technology is sharply changing our reading habit. In the past, people read printed books to gain knowledge or find material. Now, with the support of technology, people can read books on their laptop or phone. Many books are available on the Internet without charging fees, which allows people to read free books."
                }
            ]
        },

        {
            id: 'sp2_children_playing',
            title: 'Chủ đề 28: Children Playing',
            image1Src: 'img/speaking-part3/children-tablet.png',
            image2Src: 'img/speaking-part3/children-running.png',
            audioSrc: 'audio/speaking-part2/28.m4a',
            tags: ['hot', 'low-quality-img'], // Đây là chủ đề "hot" nhưng ảnh mờ
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "These two pictures show children playing in different situations. In the first picture on the left, I see a family in a living room. Two children are lying on the floor at home, playing with a tablet. The parents are sitting on a sofa and watching them. The room looks cozy and quiet. In contrast, the second picture shows several children playing and running in a park. They are wearing colorful clothes and look very happy and energetic."
                },
                {
                    question: "What are the benefits of these 2 ways for children to play?",
                    duration: 45,
                    sampleAnswer: "Playing with electronic devices can help children improve thinking skills and creativity. They can also learn from educational games and apps. On the other hand, outdoor activities help children stay active and healthy. Running and playing outside builds their physical strength. Also, outdoor play gives them a chance to interact with other kids."
                },
                {
                    question: "Why is it important for children to play together?",
                    duration: 45,
                    sampleAnswer: "Children playing together is important for several reasons. First, it helps them learn social skills like sharing, cooperation, and communication. Second, it keeps them active, which is good for their health and development. Third, playing helps them use their imagination and be creative through different games and activities. That's why playing with others is a big part of growing up."
                }
            ]
        },

        // --- 2 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_gardening',
            title: 'Chủ đề 29: Gardening',
            image1Src: 'img/speaking-part3/gardening-adults.png',
            image2Src: 'img/speaking-part3/gardening-children.png',
            audioSrc: 'audio/speaking-part3/29.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "These two pictures show people gardening. In the first picture on the left, there are three adults working together in a garden. They are outdoors, surrounded by green plants. In contrast, the second picture shows an older man and two children in a garden. The girl in a pink dress is holding a small watering can, and the older man is helping her water the plants."
                },
                {
                    question: "What are the attractions of the two pictures?",
                    duration: 45,
                    sampleAnswer: "Both pictures are attractive because they show people enjoying gardening. In the first picture, the garden looks calm and peaceful, which helps adults relax and connect with nature. It’s also a nice way to spend time with friends or family. In the second picture, the children are learning new things while having fun. Gardening teaches them to care for plants and be responsible."
                },
                {
                    question: "What is the appeal of growing plants and doing gardening?",
                    duration: 45,
                    sampleAnswer: "Growing plants and gardening are enjoyable for many reasons. First, it helps people relax and feel calm while spending time in nature. Second, it is good for health because it gives you some exercise and fresh air. Third, it can be fun to do with family or friends, which makes everyone feel closer."
                }
            ]
        },
        {
            id: 'sp3_presentations',
            title: 'Chủ đề 30: Presentations',
            image1Src: 'img/speaking-part3/presentation-large.png',
            image2Src: 'img/speaking-part3/presentation-small.png',
            audioSrc: 'audio/speaking-part3/30.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show people attending presentations or meetings. In the first picture on the left, there are many people wearing formal clothes and sitting in rows, facing a speaker. In contrast, the second picture shows a small group of people in a meeting room. They are wearing business clothes and sitting around a table with laptops. The atmosphere looks more interactive and informal."
                },
                {
                    question: "What are the problems of giving a presentation in these situations?",
                    duration: 45,
                    sampleAnswer: "Giving a presentation in different situations can be challenging. When giving a presentation to a big group, people often feel nervous and find it hard to keep everyone's attention. When speaking to a small group, it can feel personal and you might feel pressured to answer questions. If the audience doesn't show much interest, it can be hard to stay confident."
                },
                {
                    question: "Technology has improved the ability to communicate of people. How do you think?",
                    duration: 45,
                    sampleAnswer: "Technology has made communication faster and easier. First, we can now send messages or make video calls instantly, no matter where we are. Second, it helps people stay connected with family and friends through social media. Lastly, translation tools help us understand different languages, making communication simpler. Overall, technology helps people stay in touch and communicate better than ever before."
                }
            ]
        },

        // --- 4 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_ways_of_eating',
            title: 'Chủ đề 31: Ways of eating',
            image1Src: 'img/speaking-part3/eating-ready-meal.png',
            image2Src: 'img/speaking-part3/eating-cooking.png',
            audioSrc: 'audio/speaking-part3/31.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different ways of eating. In the first picture on the left, a man is sitting at a table, smiling while eating a fresh salad. In the second picture, a man is standing in the kitchen, carefully chopping vegetables on a cutting board. He looks relaxed and is probably preparing a healthy meal for himself."
                },
                {
                    question: "What appeal to these 2 ways of eating?",
                    duration: 45,
                    sampleAnswer: "Both ways of eating have their own appeal. Eating a ready-made meal is quick and convenient, especially for busy people. It saves time and effort. On the other hand, cooking at home can also be a relaxing and enjoyable activity. Personally, I think cooking is more rewarding, but sometimes fast meals are necessary."
                },
                {
                    question: "Is it important to think about what you eat?",
                    duration: 45,
                    sampleAnswer: "Yes, it's important to think about what you eat for three main reasons. First, eating healthy food helps you stay strong and avoid illnesses. Second, a good diet gives you more energy to work or study better. Third, what you eat can affect your mood — healthy meals can help you feel happier and more focused."
                }
            ]
        },
        {
            id: 'sp3_keeping_memories',
            title: 'Chủ đề 32: Keeping memories',
            image1Src: 'img/speaking-part3/memories-selfie.png',
            image2Src: 'img/speaking-part3/memories-writing.png',
            audioSrc: 'audio/speaking-part3/32.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show two different ways of keeping memories. In the first picture on the left, a family of four is standing next to a car and taking a selfie. They are smiling and look very happy. In contrast, the second picture shows a man sitting alone in a café. He is writing in a notebook and looks focused. He might be writing a diary to keep personal memories."
                },
                {
                    question: "Which do you prefer to record memories? Why?",
                    duration: 45,
                    sampleAnswer: "I prefer taking photos to record memories for three reasons. First, photos capture real moments and emotions instantly. Second, they are easy to store and share with friends or family. Third, looking at old pictures can bring back strong feelings and help us remember details we might forget. While writing is also nice, I think photos are more visual and powerful."
                },
                {
                    question: "Why do people like taking photograph?",
                    duration: 45,
                    sampleAnswer: "People like taking photographs for a few reasons. First, it helps them keep memories of important moments like family gatherings or trips. Second, photography lets people show their creativity by playing with angles and lighting. Also, photos are a great way to share experiences with friends and family, especially on social media. Lastly, some people use photography to express themselves and share how they see the world."
                }
            ]
        },
        {
            id: 'sp3_types_of_jobs',
            title: 'Chủ đề 33: Types of jobs',
            image1Src: 'img/speaking-part3/jobs-construction.png',
            image2Src: 'img/speaking-part3/jobs-farmer.png',
            audioSrc: 'audio/speaking-part3/33.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "The two pictures show different types of jobs. In the first picture on the left, several workers are on a construction site. They are standing on scaffolding, working with metal bars. They look busy and focused. In contrast, the second picture shows a man standing alone in the middle of a green field. He might be a farmer checking his crops."
                },
                {
                    question: "What do you feel if you are in those places?",
                    duration: 45,
                    sampleAnswer: "Both places give different feelings. If I were at the construction site, I might feel a bit nervous because it looks high and dangerous. But I would also feel proud to help build something useful. If I were in the field, I think I would feel calm and relaxed. The open space and nature would make me happy."
                },
                {
                    question: "Natural beauty should be protected from developments. What is your opinion?",
                    duration: 45,
                    sampleAnswer: "I think we should protect natural beauty from developments for three reasons. First, nature gives us clean air and beautiful views that make us feel good. Second, protecting nature helps preserve wildlife and ecosystems. Finally, preserving natural areas can boost tourism and local economies. While development is important, we should find ways to grow without harming nature."
                }
            ]
        },
        {
            id: 'sp3_different_sports',
            title: 'Chủ đề 34: Different sports',
            image1Src: 'img/speaking-part3/sports-wheelchair-basketball.png',
            image2Src: 'img/speaking-part3/sports-tennis.png',
            audioSrc: 'audio/speaking-part3/34.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                {
                    question: "Tell me what you see in the two pictures.",
                    duration: 45,
                    sampleAnswer: "In the first picture on the left, people in wheelchairs are playing basketball. They look strong and focused. On the contrary, in the second picture, four women are playing tennis. They are shaking hands at the end of the match. They look respectful and friendly. Both pictures show the power of sports."
                },
                {
                    question: "What is your favorite sport?",
                    duration: 45,
                    sampleAnswer: "My favorite sport is football. I like it because it is fun and exciting. I enjoy playing with my friends and working as a team. It also helps me stay strong and healthy. I like watching football matches on TV, especially when my favorite team plays. Football is easy to play anywhere, even in a small space."
                },
                {
                    question: "What are the differences/ benefits of indoor and outdoor activities?",
                    duration: 45,
                    sampleAnswer: "Indoor and outdoor activities are different in many ways. Indoor activities, like playing video games or table tennis, are good when the weather is bad. They are safe and comfortable. Outdoor activities, like football or hiking, help you get fresh air and sunshine. They are great for your health and give you more space to move. Both types of activities are fun and useful."
                }
            ]
        },

         // --- 5 CHỦ ĐỀ MỚI ---
        {
            id: 'sp3_field_sports',
            title: 'Chủ đề 35: Field Sports',
            image1Src: 'img/speaking-part3/sports-football.png',
            image2Src: 'img/speaking-part3/sports-high-jump.png',
            audioSrc: 'audio/speaking-part3/35.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                { question: "Tell me what you see in the two pictures.", duration: 45, sampleAnswer: "In the first picture on the left, a group of men is playing football in a big stadium. One player in white is running with the ball, while others are trying to stop him. On the contrary, in the second picture, a man is doing high jump. He is in the air, jumping over a high bar. He looks strong and focused. Both sports need energy and practice." },
                { question: "What are the attractions of these sports?", duration: 45, sampleAnswer: "Football is exciting because it’s a fast-paced team sport that helps players improve teamwork, skills, and fitness. High jump is attractive because it challenges athletes to jump as high as possible, testing their strength, speed, and technique. It’s a great way to improve physical ability and set personal goals." },
                { question: "Which key factors can influence the popularity of sports?", duration: 45, sampleAnswer: "Some important things make sports popular. First, if a sport is easy to play and doesn’t cost much, more people will try it. Second, sports that are on TV and social media get more attention. Third, culture is important - people like sports that are popular in their country. Finally, sports that are fun and exciting to watch usually have more fans." }
            ]
        },
        {
            id: 'sp3_traditional_travel',
            title: 'Chủ đề 36: Traditional ways of transport',
            image1Src: 'img/speaking-part3/travel-camel.png',
            image2Src: 'img/speaking-part3/travel-horse-carriage.png',
            audioSrc: 'audio/speaking-part3/36.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                { question: "Tell me what you see in the two pictures.", duration: 45, sampleAnswer: "Both pictures show traditional ways of transport. In the first picture on the left, there is a man riding a camel in the desert, with the famous pyramids of Egypt in the background. In the second picture, we can see a man driving a horse-drawn carriage in a city. He is wearing formal clothes and a black hat, and the horse looks strong and healthy." },
                { question: "What is the interesting point of the vehicle experience in the two ways of traveling above?", duration: 45, sampleAnswer: "Riding a horse or camel is interesting because these animals make the journey special. Camels are slower but very comfortable for long journeys in the desert. On the other hand, horses are fast and strong, often used for riding through forests, fields, or city tours. Riding these animals also helps us learn about local culture." },
                { question: "Should animals be treated like means of transportation?", duration: 45, sampleAnswer: "Animals should not be treated just as means of transportation for several reasons. First, animals have feelings and can feel pain, so they need kindness and respect. Second, using animals too much for carrying people or goods can harm their health. Third, today we have many other ways to travel, so we should protect animals and not rely on them too much." }
            ]
        },
        {
            id: 'sp3_plane_vs_train',
            title: 'Chủ đề 37: Plane vs Train',
            image1Src: 'img/speaking-part3/travel-airport.png',
            image2Src: 'img/speaking-part3/travel-train-station.png',
            audioSrc: 'audio/speaking-part3/37.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                { question: "Tell me what you see in the two pictures.", duration: 45, sampleAnswer: "In the first picture on the left, a man is standing inside an airport, looking out the window at an airplane taking off. On the contrary, the second picture shows a man standing on a train platform, looking at an approaching train. The sunset with its golden light creates a warm and peaceful atmosphere." },
                { question: "Why do people prefer to go by plane than by train?", duration: 45, sampleAnswer: "People prefer to go by plane rather than by train for three main reasons. First, planes are much faster, so they save a lot of travel time. Second, planes can reach distant or remote places that trains cannot go to. Third, many people find flying more comfortable and convenient, with better services on board." },
                { question: "Why does flying make many people feel uncomfortable?", duration: 45, sampleAnswer: "Flying can make many people feel uncomfortable for several reasons. First, some people are afraid of heights or flying, which causes anxiety. Second, the airplane cabin is small, so it can feel tight and uncomfortable. Third, during the flight, changes in air pressure can cause ear pain or headaches." }
            ]
        },
        {
            id: 'sp3_enjoy_music_ways',
            title: 'Chủ đề 38: Ways to enjoy music',
            image1Src: 'img/speaking-part3/music-piano.png',
            image2Src: 'img/speaking-part3/music-concert-small.png',
            audioSrc: 'audio/speaking-part3/38.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                { question: "Tell me what you see in the two pictures.", duration: 45, sampleAnswer: "These two pictures show different ways people enjoy music. In the first picture on the left, a family is in a cozy room. The mother and daughter are playing the piano together, while the father is playing guitar. In contrast, the second picture shows a lively concert. A musician is singing and playing guitar on stage, with a keyboard player in the background." },
                { question: "Where do you like to play music? Why?", duration: 45, sampleAnswer: "I like to play music in my bedroom because it is a cozy and private space. I can sing along to my favorite songs without worrying about disturbing anyone. I also have a guitar that I like to practice on. Playing music helps me relax and express myself. Sometimes I even write my own songs and record them on my phone." },
                { question: "How does playing music in different locations bring different feelings?", duration: 45, sampleAnswer: "Playing music in different places can create different feelings because each place has its own mood. For example, playing music outside in nature feels relaxing and free. Playing music in a small room feels cozy and personal. Playing music in a crowded place, like a party or concert, feels exciting and energetic because of the people around." }
            ]
        },
        {
            id: 'sp3_study_places',
            title: 'Chủ đề 39: Places to study',
            image1Src: 'img/speaking-part3/study-group.png',
            image2Src: 'img/speaking-part3/study-alone.png',
            audioSrc: 'audio/speaking-part3/39.mp3',
            tags: ['hot', 'low-quality-img'],
            tasks: [
                { question: "Tell me what you see in the two pictures.", duration: 45, sampleAnswer: "Two pictures show two different places to study. In the first picture, we can see a group of students sitting together in a library. They are smiling and working on a laptop, probably doing a group project. In the second picture, there is a man studying alone in a quiet environment. He is wearing headphones and taking notes, which suggests he is very focused and concentrated." },
                { question: "What are the difficulties when studying in this place?", duration: 45, sampleAnswer: "Studying in a library or a coffee shop can have some challenges. For example, the library might be too quiet and make you feel sleepy or bored. The coffee shop might be too noisy and distract you from your work. You have to find the right balance between silence and stimulation for your study needs." },
                { question: "There is too much noise in our modern lives? Do you agree/ disagree?", duration: 45, sampleAnswer: "I agree that there is too much noise in our modern lives. Noise can come from many sources, such as traffic, construction, music, or people. Noise can affect our health, our mood, and our productivity. It can cause stress, anxiety, and sleep problems. I think we need to find ways to reduce noise pollution and create more quiet spaces for ourselves and others." }
            ]
        }

        // Thêm 38 chủ đề Part 3 khác vào đây
    ],
     // --- THÊM MỚI DỮ LIỆU PART 4 ---
    part4: [
        {
            id: 'sp4_saving_up',
            title: 'Chủ đề 1: Saving up to buy something',
            audioSrc: 'audio/speaking-part4/1.mp3',
            tasks: [
                {
                    question: "Tell me about a time you saved up something to buy something for yourself.",
                    sampleAnswer: "I'd like to share about a time I saved money to buy something I really wanted. Last month, I wanted to buy a new cellphone because my old one was slow and cracked. I found a phone I liked online, but I didn't have enough money. So, I saved up by making coffee at home, cooking instead of eating out, and taking the bus. After a few weeks, I finally had enough money to buy it. When it arrived, I was really happy because it was fast, looked nice, and the camera was great."
                },
                {
                    question: "How did you feel?",
                    sampleAnswer: "Moving on to the second question, I felt very happy and excited when the phone arrived. I worked hard to save money, so it felt great to finally get what I wanted."
                },
                {
                    question: "People spend too much money on trivial items. What do you think?",
                    sampleAnswer: "As for the final question, I believe that people spend too much money on trivial items for a few reasons. First, they want to impress others with their wealth or status. Second, they are influenced by advertising and social media, which make them want things they don't really need. Third, they don't have a clear financial plan to help control their spending. That's why many people end up wasting money on things that aren't truly important."
                }
            ]
        },
        {
            id: 'sp4_buying_expensive',
            title: 'Chủ đề 2: Buying something expensive',
            audioSrc: 'audio/speaking-part4/2.mp3',
            tasks: [
                {
                    question: "Tell me about a time you bought something expensive.",
                    sampleAnswer: "I'd like to share about a time when I bought something quite expensive. Last month, I wanted to buy a new cellphone because my old one was slow and cracked. I found a phone I liked online, but I didn't have enough money. So, I saved up by making coffee at home, cooking instead of eating out, and taking the bus. After a few weeks, I finally had enough money to buy it. When it arrived, I was really happy because it was fast, looked nice, and the camera was great."
                },
                {
                    question: "What are the items you can buy at a high price?",
                    sampleAnswer: "Moving on to the next question, there are many items that I can buy at a high price. Some examples are: jewelry, art, cars, houses, and designer clothes. These items are expensive because they are rare, beautiful, or have high quality. People who buy them want to show their wealth, taste, or style."
                },
                {
                    question: "In your country, do people often buy high-priced items? Why?",
                    sampleAnswer: "As for the final question, many people in my country buy expensive things for different reasons. First, they want to show that they have a good job or a lot of money, so others will respect them. Second, they believe expensive products have better quality and last longer. Third, buying something expensive can make people feel happy, proud, and more confident. That's why many choose to spend more on things they really like."
                }
            ]
        },
        // --- 3 CHỦ ĐỀ MỚI ---
        {
            id: 'sp4_stop_doing_something',
            title: 'Chủ đề 3: Told to stop doing something',
            audioSrc: 'audio/speaking-part4/3.mp3',
            tasks: [
                {
                    question: "Tell me about a time when somebody told you to stop doing something.",
                    sampleAnswer: "I'd like to share a time when someone told me to stop doing something. Last month, I was playing music loudly while studying, and my roommate told me to stop because it was disturbing them. I didn't realize it was bothering them at first, but then I understood. I felt a bit surprised at first, but I quickly turned the music down and apologized."
                },
                {
                    question: "How did you feel about it?",
                    sampleAnswer: "Now, moving on to the next question. At first, I felt a little surprised and embarrassed. But then I felt sorry for making my roommate uncomfortable. I was happy they told me in a polite way, so we could solve the problem quickly."
                },
                {
                    question: "Do you think there are too many rules in modern life?",
                    sampleAnswer: "As for the final question, I think modern life has a lot of rules. We have rules at school, work, and in public places. Even on social media, there are rules about what we can or cannot say. Some rules are helpful because they keep us safe and organized. But sometimes, there are too many rules, and they make people feel stressed or not free. I think it's important to have rules, but not too many. Balance is the key."
                }
            ]
        },
        {
            id: 'sp4_important_choice',
            title: 'Chủ đề 4: Making an important choice',
            audioSrc: 'audio/speaking-part4/4.mp3',
            tasks: [
                {
                    question: "Tell me about a time you had to make an important choice.",
                    sampleAnswer: "I'd like to share a time when I had to make an important choice. Last week, I had to choose between going to a party or staying home to study for an important test. I really wanted to have fun with my friends, but I knew the test would affect my final grade. After thinking carefully, I decided to study first and join the party later. It was not an easy choice, but I felt proud because I did well on the test and still got to enjoy the party."
                },
                {
                    question: "What do you feel when you have to make a difficult decision?",
                    sampleAnswer: "Moving on to the next question, when I have to make a difficult decision, I feel nervous and worried. I don't want to choose the wrong thing. But after thinking carefully, I usually feel more sure and confident."
                },
                {
                    question: "Can you give some general advice to people who have to make a choice?",
                    sampleAnswer: "As for the final question, I believe that making a choice can be hard, but here are some simple tips. First, think about what is most important to you and what you really want. Second, look at the good and bad sides of each option and how they might affect your future. Third, talk to someone you trust for advice. Don't rush — take your time and trust yourself."
                }
            ]
        },
        {
            id: 'sp4_new_course',
            title: 'Chủ đề 5: Starting a new course',
            audioSrc: 'audio/speaking-part4/5.mp3',
            tasks: [
                {
                    question: "Tell me about a time when you started a new course or learned something new.",
                    sampleAnswer: "I'd like to talk about a time when I started learning something new. Last month, I joined an online English course to improve my skills and learn more vocabulary. The course was fun and interesting. I met new friends from different countries and we practiced speaking together. The teacher gave useful tips and helped us with grammar and pronunciation. I felt more confident after that."
                },
                {
                    question: "What makes a course enjoyable?",
                    sampleAnswer: "Moving on to the next question, I think a good course needs three things. First, the teacher should make lessons fun and easy to follow. Second, the topics should be useful and interesting. Third, students should join in activities and talk with others. These things make learning more fun and effective."
                },
                {
                    question: "Why do people choose to do new courses?",
                    sampleAnswer: "As for the final question, I believe that people join new courses for many reasons. First, they want to learn new skills or get better at something. Second, they may want to explore a new hobby or topic. Third, they want to advance their careers or get a better job. Finally, they want to challenge themselves or grow personally."
                }
            ]
        },
        // --- 3 CHỦ ĐỀ MỚI ---
        {
            id: 'sp4_long_journey',
            title: 'Chủ đề 6: A long journey',
            audioSrc: 'audio/speaking-part4/6.mp3',
            tasks: [
                {
                    question: "Tell me about a time you went on a long journey/ you traveled to somewhere new.",
                    sampleAnswer: "I'd like to talk about a time when I went on a long journey. Last year, I went on a trip to Vung Tau with three close friends. We left early in the morning and drove for about three hours. The weather was sunny and nice. On the way, we talked, listened to music, and laughed a lot, so the trip felt short. We stopped at a small café to rest and take some photos. When we arrived, we went to the beach, played in the water, and ate delicious seafood. It was a fun trip with many good memories."
                },
                {
                    question: "How did you feel about it?",
                    sampleAnswer: "Moving on to the next question, I felt happy and relaxed on the trip. I had a lot of fun with my friends. I really enjoyed the nice views, tasty food, and quiet beach. It was a good way to take a break from studying."
                },
                {
                    question: "What is the importance of understanding the customs where you travel?",
                    sampleAnswer: "As for the final question, I believe that understanding the customs where you travel is important. First, it helps you show respect to local people. They feel happy when you understand their way of life. Second, it helps you avoid problems or mistakes, like saying or doing the wrong thing. Third, it makes your trip more fun. You can join local festivals, try new food, and talk to people more easily."
                }
            ]
        },
        {
            id: 'sp4_internet_usage',
            title: 'Chủ đề 7: Using the Internet',
            audioSrc: 'audio/speaking-part4/7.mp3',
            tasks: [
                {
                    question: "What are different ways you use Internet?",
                    sampleAnswer: "To be honest, I often use the internet when I want to relax. I like watching movies, listening to music, and enjoying game shows online. I also use the internet for studying. I'm a final-year student, so I need to look for books and research articles. Lastly, I use the internet to stay in touch with my family and friends through apps like Facebook and Zalo."
                },
                {
                    question: "How do you feel when you use the Internet?",
                    sampleAnswer: "Now, moving on to the second question, I would say that most of the time, I feel relaxed and happy, especially when I watch funny videos or chat with my friends. However, if I spend too much time online, I sometimes feel tired or distracted."
                },
                {
                    question: "Some people say that the Internet has a bad impact on our lives. What do you think?",
                    sampleAnswer: "As for the final question, I believe that the Internet has both good and bad effects. It helps us stay connected, learn new things, and enjoy free time with music or videos. It's also useful for studying and working. However, using it too much can waste time and affect our health. Some people become addicted or see bad content online. So, we should use the Internet in a smart and balanced way."
                }
            ]
        },
        {
            id: 'sp4_reading_a_good_book',
            title: 'Chủ đề 8: Reading a good book',
            audioSrc: 'audio/speaking-part4/8.mp3',
            tasks: [
                {
                    question: "Tell me about a time you read a good book.",
                    sampleAnswer: "I really love reading books, especially ones that teach me something new. A time I read a good book was when I read How to Be Rich by Napoleon Hill last week. It's a famous book that shares the secrets of successful people and how they built their wealth. It inspired me to set goals, work hard, and stay positive. I learned a lot from it, and I think it's great for anyone who wants to improve their life."
                },
                {
                    question: "How do you feel when you read books for pleasure?",
                    sampleAnswer: "Now, moving on to the second question. When I read for pleasure, I feel relaxed and happy. Reading helps me forget about stress and enjoy the present moment. I also feel curious and excited because I often discover new ideas or learn something interesting. It's a great way to relax after a long, busy day."
                },
                {
                    question: "Some people love watching films more than reading books. What do you think?",
                    sampleAnswer: "As for the final question, I believe that many people prefer watching films over reading books for a few reasons. First, films are more visually exciting — they have sound, color, and movement, which make the story easier to follow. Second, movies clearly show emotions through the actors' faces and voices. Also, watching a film is more convenient than reading, especially when people are tired. That's why I think films are a fun and easy way to enjoy stories and learn something new."
                }
            ]
        },
        // --- 5 CHỦ ĐỀ MỚI ---
        {
            id: 'sp4_extreme_sport',
            title: 'Chủ đề 9: An extreme sport',
            audioSrc: 'audio/speaking-part4/9.mp3',
            tasks: [
                {
                    question: "Tell me about a time you did or saw someone do an extreme sport.",
                    sampleAnswer: "I'd like to share a time I did an extreme sport. The last time I did one was two weeks ago, when I went skydiving with my friends. We jumped out of a plane at 10,000 feet and felt so many emotions during the free fall. After about a minute, we opened our parachutes and enjoyed the amazing view below. It was peaceful and beautiful. I felt like I was flying."
                },
                {
                    question: "How did you feel?",
                    sampleAnswer: "Now, moving on to the second question. I felt really great. At first, I was a little scared, but then I felt excited and free. It was like flying in the sky. I forgot all my worries and just enjoyed the moment. It was one of the best feelings I've ever had."
                },
                {
                    question: "Only adults should be allowed to do extreme sports?",
                    sampleAnswer: "As for the final question, I don't think only adults should do extreme sports. Young people can enjoy them too, as long as they are trained and guided by professionals. These sports can help people become more brave and confident. Of course, safety is very important. If people follow the rules and wear the right equipment, they can do it safely at any age."
                }
            ]
        },
        {
            id: 'sp4_work_of_art',
            title: 'Chủ đề 10: A work of art',
            audioSrc: 'audio/speaking-part4/10.mp3',
            tasks: [
                {
                    question: "Tell me about a time you saw a work of art.",
                    sampleAnswer: "I'd like to talk about a time when I saw a beautiful work of art. Last week, I visited a museum and saw a famous painting called Starry Night by Vincent van Gogh. It shows a quiet village at night, with big stars and a moon shining in a swirling sky. The whole picture feels like a dream. The colors were strong and the sky looked like it was moving."
                },
                {
                    question: "How did you feel about it?",
                    sampleAnswer: "Moving on to the next question, I felt calm and amazed. The painting made me think deeply, but also feel peaceful inside. It was really beautiful."
                },
                {
                    question: "Can we teach other people creativity?",
                    sampleAnswer: "As for the final question, I think that creativity can be taught. First, people can learn by practicing and watching how others solve problems. They can join art classes or try new things. Second, we can teach methods like brainstorming or thinking outside the box to help them get new ideas. Finally, we can inspire creativity by sharing our own ideas and giving support."
                }
            ]
        },
        {
            id: 'sp4_amusement_park',
            title: 'Chủ đề 11: Amusement park',
            audioSrc: 'audio/speaking-part4/11.mp3',
            tasks: [
                {
                    question: "Tell me about the last time you went to the amusement park.",
                    sampleAnswer: "I'd like to talk about the last time I went to the amusement park. It was two months ago on a sunny day, and I went with my best friend. We had so much fun riding the roller coaster, the Ferris wheel, and the bumper cars. We also ate cotton candy, popcorn, and ice cream. We laughed a lot and took many pictures."
                },
                {
                    question: "How did you feel?",
                    sampleAnswer: "Moving on to the next question, very happy and excited during the trip. I enjoyed the rides, the snacks, and the time with my friend. It was truly a great day."
                },
                {
                    question: "Do people in your country often visit amusement parks?",
                    sampleAnswer: "As for the final question, I think people often go to amusement parks, especially on holidays or for special events. First, these parks offer fun activities for all ages, like rides, games, and shows, so they attract both families and groups of friends. Second, it's a fun way to choose to celebrate birthdays or special events. Third, it's a fun way to relax and enjoy time together after a busy week."
                }
            ]
        },
        {
            id: 'sp4_different_generations',
            title: 'Chủ đề 12: Different generations',
            audioSrc: 'audio/speaking-part4/12.mp3',
            tasks: [
                {
                    question: "Tell about a time you were with someone older or younger than you.",
                    sampleAnswer: "I'd like to talk about a time I was with someone older than me. Last year, I spent a weekend with my grandmother at her house in the countryside. We cooked together, walked around her garden, and talked a lot. She told me stories about her life when she was young, and I found them really interesting."
                },
                {
                    question: "What do you feel to be with that person?",
                    sampleAnswer: "Now, moving on to the second question, I felt warm and happy. My grandmother is very kind and caring. I also felt lucky to spend time with her and learn from her experiences. She gave me good advice and made me feel relaxed, like I could tell her anything."
                },
                {
                    question: "How do people from different generations learn from each other?",
                    sampleAnswer: "And finally, I think young people can learn about the past, life skills, and values from older people. On the other hand, older people can learn about technology, new trends, or modern ways of thinking from the younger generation. Sharing time and listening to each other is the best way to learn and understand more."
                }
            ]
        },
        {
            id: 'sp4_visiting_someone',
            title: 'Chủ đề 13: Visiting someone',
            audioSrc: 'audio/speaking-part4/13.mp3',
            tasks: [
                {
                    question: "Describe a time when you visited someone.",
                    sampleAnswer: "I'd like to talk about a time when I visited someone. Last summer, I visited my best friend who had just moved to a new house in the countryside. The area was quiet and green, with a nice garden and a river nearby. We spent the whole day cooking, talking, and riding bicycles around the village. It was a fun and relaxing day."
                },
                {
                    question: "What do you think about having unexpected visitors?",
                    sampleAnswer: "Now, moving on to the second question, to be honest, I think it depends. If I'm free and the house is clean, I feel happy to welcome them. It's a nice surprise. But if I'm busy or tired, it can be a little stressful. So I think it's better if people send a quick message before coming, even if they are close friends or family."
                },
                {
                    question: "Some people like to live in small communities while others like to live in big cities. What is your opinions?",
                    sampleAnswer: "And finally, in my opinion, living in a small community is better for me. It's quieter, safer, and people are more friendly. You can feel like part of a family. Big cities have more jobs and modern services, but they are crowded and noisy. So I prefer the peaceful life in a small place."
                }
            ]
        },
        // --- 4 CHỦ ĐỀ MỚI ---
        {
            id: 'sp4_surrounded_by_nature',
            title: 'Chủ đề 14: Surrounded by nature',
            audioSrc: 'audio/speaking-part4/14.mp3',
            tasks: [
                {
                    question: "Tell me about a time you spent surrounded by nature.",
                    sampleAnswer: "I'd like to talk about a time I spent surrounded by nature. Last summer, I went camping with my friends in a national park. We stayed in a small tent near a lake, surrounded by trees, flowers and birds. In the morning, we walked in the forest, listened to birds singing, and watched the sunrise. At night, we made a fire and looked at the stars. It was very quiet and peaceful, and I felt really close to nature."
                },
                {
                    question: "How do you feel afterwards?",
                    sampleAnswer: "Moving on to the second question, after that trip, I felt relaxed and happy. Being in nature helped me forget all the stress from studying and daily life. I also felt healthier because we walked a lot and breathed fresh air. I think spending time in nature is very good for both body and mind."
                },
                {
                    question: "How can people be encouraged to protect and preserve nature?",
                    sampleAnswer: "And finally, I think education is the most important. People need to learn why nature is important and how to take care of it. Schools should teach students about the environment. Also, governments can make laws to protect natural areas. And finally, we can all do small things, like not littering, saving water, or planting trees."
                }
            ]
        },
        {
            id: 'sp4_sports_game',
            title: 'Chủ đề 15: A sports game',
            audioSrc: 'audio/speaking-part4/15.mp3',
            tasks: [
                {
                    question: "Tell me a sports game you went to watched or watched on TV?",
                    sampleAnswer: "I'd like to talk about a football match I watched on TV last year. I watched a football match on TV between Vietnam and Thailand. I watched it with my family at home. It was an exciting game, and we were all cheering for Vietnam. The players ran fast, passed the ball well, and worked as a team. The match ended in a 2-2 draw, but it was still fun to watch. I felt proud of my country."
                },
                {
                    question: "How did you feel about watching it?",
                    sampleAnswer: "Moving on to the next question, I was so happy and felt proud. Even though I wasn't there, watching it on TV was still thrilling, and I really enjoyed the experience."
                },
                {
                    question: "Do sporting events always bring out the best in people?",
                    sampleAnswer: "As for the final question, I think that sporting events often bring out the best in people. First, they help create a strong community spirit. People come together to cheer for their team and share the fun. Second, sports teach teamwork, respect, and fair play. Third, watching or playing sports helps people feel happy and forget stress. Most people enjoy sports in a positive way and feel more connected with others."
                }
            ]
        },
        {
            id: 'sp4_old_building',
            title: 'Chủ đề 16: An old building',
            audioSrc: 'audio/speaking-part4/16.mp3',
            tasks: [
                {
                    question: "Tell me about a time when you visited an old building.",
                    sampleAnswer: "I visited an old building last year when I went to Ho Chi Minh City in Vietnam. It was the Duc Ba church. The building is over 100 years old and it has a beautiful style. I was amazed by the red bricks, the stained glass windows and the two tall towers. The church was very crowded with tourists and locals, but I still felt a sense of peace and history inside. I learned that the church is a symbol of the city and a cultural heritage of Vietnam."
                },
                {
                    question: "How did you feel about it?",
                    sampleAnswer: "I felt amazed when I visited the Duc Ba Church. It was so old and beautiful. I liked the architecture and the stained glass windows. I learned a lot about the history and culture of Vietnam."
                },
                {
                    question: "Why do you think it is important to look after old building?",
                    sampleAnswer: "I think it is important to look after old buildings for three reasons. First, old buildings are part of our history and culture. They tell us stories about the past and help us understand where we came from. Second, old buildings are beautiful and special. They make our cities and towns more interesting and attractive. Third, old buildings can also be useful for different purposes, such as museums, hotels, or offices."
                }
            ]
        },
        {
            id: 'sp4_getting_lost',
            title: 'Chủ đề 17: Getting lost',
            audioSrc: 'audio/speaking-part4/17.mp3',
            tasks: [
                {
                    question: "Tell me about a time when you got lost.",
                    sampleAnswer: "The last time I got lost was last year. When I had a business trip to Ho Chi Minh City, I wanted to visit Duc Ba Church. It was a beautiful church in Ho Chi Minh City, Vietnam. I wanted to explore the surrounding area, so I walked around without a map. I realized that I didn't know where I was or how to get back to the church. The streets were crowded and noisy, and I couldn't find anyone who spoke English. I felt scared and confused. Luckily, I had my phone with me and I was able to call a taxi."
                },
                {
                    question: "How did you feel about it?",
                    sampleAnswer: "I was very scared and confused. I didn't know where to go or who to ask for help. I felt alone and helpless. It was a lesson for me to be more careful when traveling in unfamiliar places."
                },
                {
                    question: "What do people usually do when they get lost?",
                    sampleAnswer: "When people get lost, they usually try to find their way back by using their phone. They can use a map app or a GPS to see where they are and where they need to go. Sometimes, they can also call someone who knows the place better and ask for directions. If they don't have a phone, they might ask other people around them for help. They can also check for signs or landmarks that can guide them to their destination."
                }
            ]
        }
    ]
};