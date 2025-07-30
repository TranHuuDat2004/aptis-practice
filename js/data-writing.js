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

    // --- THÊM MỚI DỮ LIỆU PART 4 ---
    part4: [
        {
            id: 'wp4_travel_club_tourists',
            title: 'Chủ đề: Kế hoạch thu hút khách du lịch của Câu lạc bộ Du lịch',
            context: "Our club is planning to encourage tourists to visit an area. We also want visitors coming to our areas to behave politely. Please raise your voice and give some suggestions for this plan.",
            task1: {
                instruction: "Write an email to your friend. Tell your friend about your opinion and describe your own suggestion. 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you. I just got an email from the travel club. The club is planning to encourage tourists to visit an area. They also want visitors coming to our areas to behave politely. I think we should create brochures or flyers about our area's attractions and distribute them to hotels, airports, and tourist centers. We could also put up simple, friendly signs in key spots, reminding tourists to respect local customs and the environment. What do you think? Do you have any other suggestions?
Love,
Nguyen`
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
Nguyen`
            }
        },

        // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
        {
            id: 'wp4_science_club_exhibition',
            title: 'Chủ đề 2: Triển lãm của Câu lạc bộ Khoa học',
            context: "Dear all members in our club, our club is preparing to organize the science exhibition next month. Both young people and elderly people can take part in our activities in the exhibition. We are planning for our exhibition. Could you contribute some ideas for our event team? Whether our club issues the ticket for participants? I would like to hear your contribution.",
            task1: {
                instruction: "Write an email to your friend. 50 words.",
                sampleAnswer: `
Hi Sara,
I got an email from the Science Club about the club exhibition next month. They are asking for ideas and opinions. I think it would be fun to show some experiments or games that people can try. Maybe we can make a volcano or a rocket. What do you think? Should we charge money for the tickets? I think it would be better to make it free so more people can come. Let me know what you think.
Love,
Nguyen`
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
Vu Khanh Nguyen`
            }
        },

        // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
        {
            id: 'wp4_food_club_chef',
            title: 'Chủ đề 3: Gặp gỡ đầu bếp nổi tiếng',
            context: "Dear Member, The Food Club is going to organize a meeting with a famous chef and we would like to ask members for suggestions. The chef will give a talk and demonstrate how to cook something. What do you think the chef should talk about and what kind of meal should the chef guide to cook? We want to attract as wide an audience as possible of both young and elder people. Please send us your suggestions and also give reasons for your suggestions.",
            task1: {
                instruction: "Write an email to your friend. 50 words.",
                sampleAnswer: `
Hi Sara,
I hope you're doing well! I just got an email from the food club manager. He said that the club is organizing a meeting with a famous chef. To be honest, I felt so excited to hear that. I think the club should ask the chef to talk about Vietnamese food and guide us on how to make a dish like pho or spring rolls. It might be a good idea to attract both young and older people.
I hope to hear from you soon.
All the best,
Nguyen`
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
Vu Khanh Nguyen`
            }
        },
        {
            id: 'wp4_food_club_cooking',
            title: 'Chủ đề 4: Khuyến khích người trẻ nấu ăn',
            context: "Dear member, A recent report states that young people in their 20s do not cook at home. We want to encourage more people to learn cooking. What advice would you give to those who have never cooked before but want to start, and what is the best way to convey this advice?",
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I just got the email from the club manager. He said that the club wants to encourage more people to learn cooking. I think it's a good idea to promote cooking at home. Cooking is fun and healthy. I would tell people to start with easy recipes and watch some videos online. Maybe the club should organize cooking workshops for beginners. The club could also create easy video tutorials or recipe cards for members to follow at home. What do you think?
Love,
Nguyen`
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
Vu Khanh Nguyen`
            }
        },
        {
            id: 'wp4_walking_club_competition',
            title: 'Chủ đề 5: Cuộc thi đi bộ vòng quanh Châu Âu',
            context: "Dear member, the club is going to organize a walking competition through several Europe countries in two weeks. But there are some opinions that it is not realistic. Give your opinion and alternative suggestion for this.",
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you. I got an email from the club manager. He has an idea to organize a walking competition through several Europe countries in two weeks. But some people think it is not realistic.
I agree with them. It sounds too ambitious and expensive. I think the club should focus on local events and activities that are more accessible and affordable for everyone.
What do you think? Do you have any suggestions for the club?
Please reply soon.
Your friend,
Nguyen`
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
Nguyen`
            }
        },
        {
            id: 'wp4_walking_club_road_safety',
            title: 'Chủ đề 6: Nâng cao nhận thức về An toàn giao thông',
            context: "Dear Member, Road safety has become a major issue in big cities. Some people say this is because many pedestrians are reading their phones as they walk and not concentrating. There may be other issues, too. We would like to produce some information about road safety for people. What advice should we include and how can we communicate this effectively to members of public? Please write about your suggestions and why.",
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
I got an email from the club manager. He wants us to give some advice on road safety. I think it's a good idea. Many people are not careful when they walk on the streets. They look at their phones and don't see the cars or bikes. This is dangerous for them and others.
I think the club should make some posters or flyers with simple tips on how to be safe. What do you think? Do you have any other suggestions?
Love,
Nguyen`
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
Nguyen`
            }
        },
        {
            id: 'wp4_gardening_club_proposals',
            title: 'Chủ đề 7: Đề xuất của Hội đồng Thành phố về làm vườn',
            context: "Dear members, The City Council wants to encourage people to take up gardening. The City Council has two proposals. The first is to plant 500 new trees and some species of flowers at the local park. The second is to organise gardening workshops at a local college. As a member of the gardening club, please email which proposal you would like to propose.",
            task1: {
                instruction: "Write an email to your friend (feeling, ideas). Write about 50 words.",
                sampleAnswer: `
Hi Sara,
Hope you're doing well! I just got an email from the club about the City Council's new gardening plans. They're thinking of planting 500 trees and flowers in the park or organizing gardening workshops at a college.
I'm really excited! I think planting trees is a great idea—it'll make the park greener and more beautiful. What do you think? Let's discuss it soon!
All the best,
Nguyen`
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
Pham Khanh Nguyen`
            }
        },
        {
            id: 'wp4_car_club_program',
            title: 'Chủ đề 8: Chương trình xe hơi xuyên Châu Âu',
            context: "There will be a car program running across Europe. The program invites the Car Club to send 2 representatives (1 main driver and 1 passenger) and both must have good driving skills. Do you have any suggestions for the above positions?",
            task1: {
                instruction: "Write an email to your friend. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
Hope everything is going well with you. Did you see the latest notice from the club? They're choosing two people to join a car program across Europe! I just got an email from the club manager. To be honest, I'm super excited about it! I think we should suggest Minh as the driver – he's really skilled. Maybe I could go as the passenger? Hope to hear from you soon!
All the best,
Nguyen`
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
Pham Khanh Nguyen`
            }
        },
        {
            id: 'wp4_language_club_recommend',
            title: 'Chủ đề 9: Giới thiệu khóa học Tiếng Anh',
            context: "You are a member of the language club. You are taking an English Course at the American Dream Center. After studying for 2 months, you find the course effective and useful.",
            task1: {
                instruction: "Write an email to your friend. Write about your feelings and recommend the course to her/him.",
                sampleAnswer: `
Hi Sara,
I wanted to share something exciting with you! I've been taking an English course at the American Dream Center for the past two months, and it's been amazing! The lessons are really helpful, and I feel my speaking and writing skills have improved. If you're looking for a great course to improve your English, I highly recommend it. Let me know if you're interested!
Take care,
[Your Name]`
            },

            task2: {
                instruction: "Write about your feelings, the reason why you can’t attend and what you would like to do.",
                sampleAnswer: `
Dear Sir,
I hope you are doing well. My name is [Your Name], and I had registered for the English course at the A Level Speaking Center. I am writing to let you know that, unfortunately, I won’t be able to attend the course as planned.
I was really looking forward to this course, but because of my work schedule and some other personal responsibilities, I am unable to find a good time to attend the classes. I'm very disappointed, as I was excited to improve my English skills with your help.
I would love to join the course in the future when my schedule allows. Could you please let me know if there are any other sessions coming up that might work better for me? Thank you for understanding, and I hope to join your course soon.
Best regards,
[Your Name]`
            }
        },
        {
            id: 'wp4_book_club_library',
            title: 'Chủ đề 10: Thư viện công cộng có nguy cơ đóng cửa',
            context: "Dear Member, The local authorities announced that the public library may close next year. Many people prefer reading on the internet so there is no need for a public library. We want to write a letter to the authorities and we may need your help. What do you think?...",
            task1: {
                instruction: "Write an e-mail to your friend. What do you feel and what should be done? Write about 50 words. You have 10 minutes.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I got an email from the book club. The email stated that the local authorities announced that the public library may close next year. I'm so sad about the library. I love going there and reading books. It's not fair that they want to close it. We should do something to stop them. Maybe we can sign a petition or write letters. Can you help me with that? Please reply soon.
Love,
Nguyen`
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
Nguyen`
            }
        },
        {
            id: 'wp4_reading_club_new_library',
            title: 'Chủ đề 11: Thiết kế thư viện quốc gia mới',
            context: "Dear member, Our club has been invited to contribute to design a new national library. We would like to find out what our members think. Some people say that libraries are boring places and they are rarely used. We want the new library to be modern and exciting so that it will attract both young and old people. Please tell us what you think the kind of new library should be.",
            task1: {
                instruction: "Write an email to your friend, who is also a member of this club. Tell your friend about your opinion and what you think the club should do about the problem. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I just got the email from the book club manager about designing the new library. I think it should be more interactive, with spaces for reading, group activities, and modern technology like e-books and smart screens. To attract both young and older people, we could add comfortable seating and events like book talks or workshops. What do you think? Please reply soon.
Best,
Nguyen`
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
Vu Khanh Nguyen`
            }
        },
        {
            id: 'wp4_photo_club_categories',
            title: 'Chủ đề 12: Thay đổi hạng mục cuộc thi nhiếp ảnh',
            context: "Dear Member, As you know, every year we hold a competition for the best photograph from our members. In the past we have had just one single category. This year we are thinking about having separate categories for men and women and another category for people under 16. Before we make any changes, we would like to hear from you. What do you think of the proposed change? Please do not forget to tell us the reason for your opinion.",
            task1: {
                instruction: "Write an email to your friend, who is also a member of the club. Tell your friend how you feel about this change and why you feel this way. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
The club manager is considering separate categories based on gender and age for the annual photography competition. I don't agree with splitting the categories by gender and age. I think photography should be judged based on creativity and skill, no matter who takes the photo. Dividing the categories might create barriers and discourage some members. What do you think? Let's chat about it soon!
Love,
Nguyen`
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
Vu Khanh Nguyen`
            }
        },
        {
            id: 'wp4_garden_club_speaker_change',
            title: 'Chủ đề 13: Thay đổi diễn giả buổi nói chuyện',
            context: "Dear members, We are writing to tell you that the talk and slide show on The Gardens of Japan by Mr.Seiko has been canceled because the speaker has been taken ill. Mr.Jones has kindly agreed to give his talk on The Gardens of England again. I know that many of you have already heard Mr. Jones before but I hope you will be happy to hear him once again. Please give your suggestions.",
            task1: {
                instruction: "Write an email to your friend. Write about 75 simple words.",
                sampleAnswer: `
Hi Sara,
I wanted to tell you that the talk on "The Gardens of Japan" by Mr. Seiko has been canceled because he is ill. Instead, Mr. Jones will give his talk on "The Gardens of England" again. I know we've heard him before, but it should still be interesting. It's a good chance to learn more about English gardens. I hope you can join the talk too!
Love,
Nguyen`
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
Pham Khanh Nguyen`
            }
        },
        {
            id: 'wp4_college_exam_change',
            title: 'Chủ đề 14: Thay đổi lịch thi cuối kỳ',
            context: "Dear student, We are writing to inform you that the end of course exams will now take place two weeks earlier than originally planned. Your exam, which was scheduled for the 21st of next month, will now take place on the 7th of next month. We apologize for any difficulty this may cause.",
            task1: {
                instruction: "Write an email to your friend. Write about your feelings and what you think the college should do about the situation. Write about 50 words.",
                sampleAnswer: `
Hi Sara,
How's it going? I hope everything goes well with you.
I got an email from the college administrator. They changed the exam date to two weeks earlier. That's not fair at all. I have other things to do and I need more time to study. How can they do this to us? They should change it back or give us some extra help. This is a bad situation and I don't know what to do. I hope you are doing okay. Let me know if you want to talk more.
Your friend,
Nguyen`
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
Nguyen`
            }
        }
        // Thêm các chủ đề Part 4 khác vào đây
    ]

};