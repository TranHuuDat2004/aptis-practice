const allReadingTests = {
    "test_001": [
        {
            part: 1,
            type: 'gap-fill',
            title: 'Question 1 of 5',
            instruction: 'Choose the word that fits in the gap. The first one is done for you.',
            content: {
                prefix: 'Hey Lewis,',
                items: [
                    { prefix: 'I am never', options: ['late', 'boring', 'boredom'] },
                    { prefix: 'In the mornings, I attend', options: ['class', 'classes', 'classic'] },
                    { prefix: 'I eat lunch in the', options: ['canteen', 'park', 'restaurant'] },
                    { prefix: 'I buy food from the', options: ['shop', 'market', 'vending machine'] },
                    { prefix: 'I always', options: ['do', 'make', 'cook'], suffix: 'dinner.' }
                ],
                suffix: 'Love,<br>Helen',
                // === DÒNG ĐÃ THÊM VÀO ĐỂ SỬA LỖI ===
                answer: ['late', 'classes', 'park', 'shop', 'make']
            }
        },
        {
            part: 2,
            type: 'sentence-ordering',
            title: 'Question 2 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: Natural History Center)',
            content: {
                sentences: [
                    "The entrance of the centre is on the town's main square",
                    "When you enter the building from the square, you will see a set of stairs to your left.",
                    "The most important of these is the Natural history centre",
                    "The ticket office is on the top of these stairs; the staff there are very helpful",
                    "As well as selling tickets, they can provide maps and useful tour information"
                ],
                answer: [
                    "The most important of these is the Natural history centre",
                    "The entrance of the centre is on the town's main square",
                    "When you enter the building from the square, you will see a set of stairs to your left.",
                    "The ticket office is on the top of these stairs; the staff there are very helpful",
                    "As well as selling tickets, they can provide maps and useful tour information"
                ]
            }
        },
        {
            part: 3,
            type: 'sentence-ordering',
            title: 'Question 3 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: Traffic Lights)',
            content: {
                sentences: [
                    "They were out of order and the traffic moved very slowly",
                    "As a result of these delays, many people were not able to get to work on time",
                    "Fortunately, in the evening, the traffic lights were working again",
                    "Therefore, there were no further delays for people going back home",
                    "This created long delays in the roads to the city's business district"
                ],
                answer: [
                    "They were out of order and the traffic moved very slowly",
                    "This created long delays in the roads to the city's business district",
                    "As a result of these delays, many people were not able to get to work on time",
                    "Fortunately, in the evening, the traffic lights were working again",
                    "Therefore, there were no further delays for people going back home"
                ]
            }
        },
        {
            part: 4,
            type: 'opinion-matching',
            title: 'Question 4 of 5',
            instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
            content: {
                topic: 'Technology',
                opinions: [
                    { person: 'A', text: 'I moved to a new country and it is challenging to stay in touch with relatives, but thanks to technology, I can now easily contact my family. I rely on technology a lot for this reason, and I believe many people nowadays depend on it too. It makes sense, and I have no issues with that. Technology has made staying connected much more convenient and accessible for all of us.' },
                    { person: 'B', text: 'I work in finance and it is normal for me to use technology to update international banking information and I am an accountant. However, looking at the screen for too long makes my eyes hurt. Also, using my phone for extended periods before bedtime affects my sleep, so I avoid it after 9 p.m. to ensure a good night\'s rest.' },
                    { person: 'C', text: 'Our family uses technology a lot. My sister called mom even inside the house! Although my dad told us not to use the phone at night, I use it anyway. I find it convenient to watch movies and listen to music. I also use it to play games with friends. My friends always have the most updated games, which puts pressure on me to buy the latest as soon as I can. I don\'t want to lag behind them.' },
                    { person: 'D', text: 'I am a professional painter, which is not traditionally connected to technology, but perhaps I will use it more in the future. I have a laptop at home. Whenever I use it, my daughter becomes really interested, so I have to keep it locked away. Although some of my friends are keen on letting children be exposed to technology, I think it would have an effect on their brain development.' }
                ],
                questions: [
                    'Who uses technology to communicate with family?',
                    "Who thinks children shouldn't use technology?",
                    'Who advises against using technology before going to bed?',
                    'Who uses technology for entertainment?',
                    'Who believes that people depend too much on technology?',
                    'Who uses technology for work purposes?',
                    'Who buys the latest technology products?',
                ],
                answer: ['A', 'D', 'B', 'C', 'A', 'B', 'C']
            }
        },
        {
            part: 5,
            type: 'heading-matching',
            title: 'Question 5 of 5',
            instruction: 'Read the text below. Match the headings to the paragraphs.',
            content: {
                topic: 'THE COFFEE',
                headings: [ "A. The custom", "B. Coffee encouraging", "C. A habit of", "D. The problem of", "E. A remedy", "F. The health risks", "G. The ancient origin of" ],
                // === NỘI DUNG ĐẦY ĐỦ CHO PART 5 ===
                paragraphs: [
                    "The custom of coffee drinking began to spread. The custom of drinking coffee has been around for a long time, perhaps as long as 1500 years ago. There were times when drinking coffee was banned in many places. At that time, coffee houses were opened in some places in Egypt and Ethiopia. Later, the custom of drinking coffee spread to Italy and all over Europe. Not long after that, the Dutch introduced coffee to Asia. Later, the habit of drinking coffee became popular all over the world.",
                    "Coffee was first used in Africa but Europe is known as the largest coffee-consuming region in the world. In the 18th century, many people from different professions such as writers, philosophers and politicians used coffee to stay awake during discussions and meetings. Coffee houses became meeting places for people to share ideas and debate hot topics in society. These places made it easy for people to share their intellectual thoughts and played an important role in business and society at that time.",
                    "Nowadays, many people have the habit of drinking coffee in the morning to wake up, or going to coffee shops in the evening to meet and socialize with each other. Coffee shops are popping up everywhere, providing places for people to relax and talk to each other. Coffee has become a global business, with personal coffee makers even appearing in households. Famous global coffee brands have become giant companies, using their brands and communication strategies to attract millions of coffee lovers around the world.",
                    "Coffee consumption in Europe accounts for about 90% of global coffee production, making it the largest market in the world. Meanwhile, some other countries in Africa, such as Egypt and Ethiopia, rely heavily on coffee exports to sustain their economies. However, there is a problem of injustice; workers in these African countries face terrible living and working conditions, with incomes as low as $1 a day. While wealthy European countries make huge profits from coffee, people in coffee-growing countries do not receive a fair share of their efforts and hard work.",
                    "To address this injustice, certification schemes for agricultural production have been introduced. If coffee meets certain certification standards, it can be sold at fair prices, preventing growers from having to sell at rock-bottom prices. However, there are problems with this solution. In reality, only about 5% of coffee meets the standards. Many small coffee producers in developing countries are too poor to pay the certification fees, leaving them even further behind in the global coffee market.",
                    "There is much debate about the effects of coffee on human health. It is true that coffee can help many people stay awake and concentrate. It contains antioxidants, which can help prevent diseases. But while drinking coffee, people often add sugar and milk and these can be harmful to your health. This can easily cause diseases such as diabetes or obesity for those who use it.",
                    "There is a legend about coffee. In the past, a monk observed that birds became more active and lively when they ate a small fruit. The monk then drank the juice from the fruit and stayed awake praying and talking until late at night. So it can be said that thanks to these birds, people knew about the coffee plant."
                ],
                answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            }
        }
    ],
        // === DỮ LIỆU CHO ĐỀ THI SỐ 2 ===
    "test_002": [
        {
            part: 1,
            type: 'gap-fill',
            title: 'Question 1 of 5',
            instruction: 'Choose the word that fits in the gap. The first one is done for you.',
            content: {
                prefix: 'Hey Lewis,',
                items: [
                    { prefix: 'It is a', options: ['long', 'short', 'nice'], suffix: 'day.' },
                    { prefix: 'I need the', options: ['detail', 'summary', 'overview'], suffix: 'of the report.' },
                    { prefix: 'Can you print a', options: ['copy', 'paper', 'file'], suffix: 'for me?' },
                    { prefix: 'I am very', options: ['love', 'busy', 'hate'], suffix: 'with my work.' },
                    { prefix: 'I will have a', options: ['meeting', 'lunch', 'call'], suffix: 'with my client this afternoon.' }
                ],
                suffix: 'Love,<br>Helen',
                answer: ['long', 'detail', 'copy', 'busy', 'meeting']
            }
        },
        {
            part: 2,
            type: 'sentence-ordering',
            title: 'Question 2 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: Famous Actor Jay)',
            content: {
                sentences: [
                    "He started study at the school in that country, and in his free time he did some strength exercise",
                    "It was a major action movie and he gained famous from that film",
                    "At one of these events, an actor agent saw him and gave him a starring role",
                    "They left their home country and took Jay to live in the United States",
                    "Jay was very good at that and he participated in a bodybuilding competition"
                ],
                answer: [
                    "They left their home country and took Jay to live in the United States",
                    "He started study at the school in that country, and in his free time he did some strength exercise",
                    "Jay was very good at that and he participated in a bodybuilding competition",
                    "At one of these events, an actor agent saw him and gave him a starring role",
                    "It was a major action movie and he gained famous from that film"
                ]
            }
        },
        {
            part: 3,
            type: 'sentence-ordering',
            title: 'Question 3 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: Space Travel Dream)',
            content: {
                sentences: [
                    "This hard work was recognized by many lecturers at the university",
                    "A year later, she was selected to fly into space",
                    "Because of this passion, she worked very hard and passed the university entrance exam",
                    "They introduced her to a job opportunity at a prestigious organization",
                    "When she was a child, she was very interested in space"
                ],
                answer: [
                    "When she was a child, she was very interested in space",
                    "Because of this passion, she worked very hard and passed the university entrance exam",
                    "This hard work was recognized by many lecturers at the university",
                    "They introduced her to a job opportunity at a prestigious organization",
                    "A year later, she was selected to fly into space"
                ]
            }
        },
        {
            part: 4,
            type: 'opinion-matching',
            title: 'Question 4 of 5',
            instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
            content: {
                topic: 'Plans for a new station',
                opinions: [
                    { person: 'A', text: 'I see too many people who do not arrange a good time to travel to work, they often arrive at work late. I always think in advance about what time I will get to work tomorrow and what means of transport I will use.' },
                    { person: 'B', text: 'Buses are often full of people, especially during rush hour. This makes me very uncomfortable when I have to travel to work by bus. The public transportation improvement plan proposed by the city is very reasonable and it will improve the above situation a lot.' },
                    { person: 'C', text: 'In my opinion, the bus is very clean and comfortable to travel. I find it has a lot of space for everyone, and the bus system is also very large. Therefore, I think improving the public transport system is unnecessary, while the old system is still good.' },
                    { person: 'D', text: 'Building a new public transportation system will be very costly, and we all know it\'s at the expense of residents. I think we should use that money for something more beneficial, which is building more hospitals. Hospitals in this living area are very few.' }
                ],
                questions: [
                    "Who thinks transport system doesn't need improving?", 
                    'Who thinks better medical facilities are needed?',
                    'Who thinks people should plan their journeys better?', 
                    'Who thinks the bus is too busy?',
                    'Who thinks the new station will improve train travel?', 
                    'Who thinks the bus service is good?',
                    'Who thinks the new station will cost too much to build?'
                ],
                answer: ['C', 'D', 'A', 'B', 'B', 'C', 'D']
            }
        },
        {
            part: 5,
            type: 'heading-matching',
            title: 'Question 5 of 5',
            instruction: 'Read the text below. Match the headings to the paragraphs.',
            content: {
                topic: 'THE ZOO',
                headings: [
                    'A. A symbol of privilege and wealth', 'B. Opening the door to everyone', 'C. Away from amusement to conservation',
                    'D. Away from enclosure to greater freedom', 'E. A different set of values', 'F. A new mission of conservation',
                    'G. A modern-life alternative'
                ],
                paragraphs: [
                    "Long time ago, zoos were reserved exclusively for monarchs and aristocrats, showcasing a grand collection of rare and exotic animals as symbols of their richness and social status. These animals served not only as a display of wealth but also as diplomatic tools, where animals were exchanged as prestigious gifts among the wealthy elite. Kings and emperors delighted in possessing the most diverse and extraordinary creatures from faraway lands, reflecting their dominion over nature and their realm.",
                    "It wasn't until the reign of England's King John, in the early 13th century, that the concept of the zoo shifted dramatically. King John, a progressive ruler, opened the royal animal exhibit at the Tower of London to the public. This groundbreaking decision marked a turning point, as zoos gradually transitioned from being exclusive enclaves of royalty to inclusive spaces accessible to people from all walks of life. Zoos transformed into places where the general public could enjoy, leisure and explore the wonders of the animal kingdom.",
                    "As society beliefs progressed, zoos took on a more educational role. Conservation efforts gained strength, and zoos began to focus on raising awareness about endangered species and the importance of preserving biodiversity. The purpose of zoos extended beyond entertainment to provide valuable learning experiences. Modern zoos now prioritize animal welfare, creating environments that mimic natural habitats to ensure the well-being of their residents. Educational programs are designed to inform visitors about wildlife conservation, fostering a deeper appreciation for the natural world.",
                    "In the 19th century, there was a significant change in how zoos treated animals, thanks to the pioneering work of Carl Hagenbeck, a renowned German animal dealer and zoo founder. Hagenbeck completely transformed the way zoos were designed. Instead of confining animals in small cages and enclosures, he introduced the concept of open enclosures. In these more naturalistic environments, animals had greater freedom to move around and express their natural behaviors. The shift from confinement to freedom not only improved the animals' quality of life but also allowed visitors to observe animals in a more authentic setting.",
                    "As culture and ethics evolve, zoos are reevaluating their beliefs. Instead of solely showcasing rare and exotic animals, modern zoos are now stressing the importance of protecting biodiversity and the environment. Their goal is to encourage visitors to appreciate and care for all forms of life on Earth. Zoos are now working towards practices that prioritize animal welfare and conservation, encouraging a stronger sense of responsibility towards our planet.",
                    "As climate change and habitat destruction pose significant threats to wildlife, zoos have embraced a new mission – protecting animals on the brink of extinction. They play a crucial role in species recovery and act as sanctuaries for critically endangered creatures. Through dedicated conservation programs, zoos work tirelessly to ensure the survival and well-being of these vulnerable species. By taking a lead in conservation efforts, zoos aim to inspire visitors and the wider community to recognize the urgency of protecting our fragile ecosystems and the species that inhabit them.",
                    "While zoos have evolved to prioritize conservation and education, the question arises: Do modern humans still need zoos to learn about animals? Zoos aim to strike a delicate balance, simultaneously educating people, protecting animals, and ensuring their well-being. To achieve this, some zoos are exploring innovative approaches, such as virtual reality experiences and augmented reality exhibits, to offer visitors an immersive and educational experience without physical enclosures. By embracing these modern-life alternatives, zoos can fulfill their educational objectives while they evolve in their mission to protect and preserve wildlife."
                ],
                answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            }
        }
    ],
        // === DỮ LIỆU CHO ĐỀ THI SỐ 3 ===
    "test_003": [
        {
            part: 1,
            type: 'gap-fill',
            title: 'Question 1 of 5',
            instruction: 'Choose the word that fits in the gap. The first one is done for you.',
            content: {
                prefix: 'Hey Lewis,',
                items: [
                    { prefix: 'My colleague is', options: ['sick', 'well', 'fine'], suffix: 'today.' },
                    { prefix: 'I need to', options: ['read', 'write', 'check'], suffix: 'a report.' },
                    { prefix: 'I have a', options: ['meeting', 'call', 'break'], suffix: 'soon.' },
                    { prefix: 'The phone is', options: ['ringing', 'silent', 'off'], suffix: '.' },
                    { prefix: 'I need to', options: ['drink', 'eat', 'make'], suffix: 'some coffee.' }
                ],
                suffix: 'Love,<br>Helen',
                answer: ['sick', 'read', 'meeting', 'ringing', 'drink']
            }
        },
        {
            part: 2,
            type: 'sentence-ordering',
            title: 'Question 2 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: A famous football player)',
            content: {
                sentences: [
                    "When he was a child, he played for some local teams near his home in Marseille",
                    "He then moved away from his home to join Cannes Football Club in the southern France",
                    "While he was at that club, people throughout France saw that he was a brilliant player",
                    "After that, he moved to Italy and Spain, where he finished his playing career",
                    "Since he retired from playing, he has worked as a football club manager"
                ],
                answer: [
                    "When he was a child, he played for some local teams near his home in Marseille",
                    "He then moved away from his home to join Cannes Football Club in the southern France",
                    "While he was at that club, people throughout France saw that he was a brilliant player",
                    "After that, he moved to Italy and Spain, where he finished his playing career",
                    "Since he retired from playing, he has worked as a football club manager"
                ]
            }
        },
        {
            part: 3,
            type: 'sentence-ordering',
            title: 'Question 3 of 5',
            instruction: 'Put the sentences below in the right order. (Topic: Growing Potatoes)',
            content: {
                sentences: [
                    "All you need is some earth, an old potato and a big spot",
                    "An old potato will have little roots, will be a little green, and won't be good for eating",
                    "This colour means it is perfect for growing, you should put some earth in the pot and dig it deep down",
                    "When you've done this, you should water it everyday and place it in a sunny spot",
                    "With this care, you should see a potato plant growing after couples of weeks"
                ],
                answer: [
                    "All you need is some earth, an old potato and a big spot",
                    "An old potato will have little roots, will be a little green, and won't be good for eating",
                    "This colour means it is perfect for growing, you should put some earth in the pot and dig it deep down",
                    "When you've done this, you should water it everyday and place it in a sunny spot",
                    "With this care, you should see a potato plant growing after couples of weeks"
                ]
            }
        },
        {
            part: 4,
            type: 'opinion-matching',
            title: 'Question 4 of 5',
            instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
            content: {
                topic: 'Watching a movie',
                opinions: [
                    { person: 'A', text: 'This is the second time I\'ve watched this movie but it still makes me feel restless and anxious. Every time there are sudden scary scenes, my heart feels like it\'s going to jump out. I think the director and actors made this movie very successful in scaring the audience.' },
                    { person: 'B', text: 'I feel like going to the cinema is a waste of money so I watched this movie at home with my family, and we had a very good time together. One thing about this movie that makes me excited is the plot of the movie. The film progresses very logically, the story lines are cleverly and skillfully arranged to express the character\'s psychology in the most complete way. That\'s one thing I like most about this movie.' },
                    { person: 'C', text: 'It was a holiday weekend and my college friends and I had planned to go see this movie at the cinema. We had a great time together watching that horror movie. However, I feel that this movie is not as scary as rumored. When I finished watching, I didn\'t feel any impression or fear at all.' },
                    { person: 'D', text: 'I read the book for the movie, and to be fair, the movie wasn\'t as good as the book. If you want to understand more about this movie you should read its book before you watch the movie. For me, the length of this movie is terrible, the movie lasts over 3 hours, while only half the time is needed for all that content.' }
                ],
                questions: [
                    'Who thought the film was too long?',
                    'Who saw the movies with friends?',
                    'Who found the film scary?',
                    'Who saw the film at home?',
                    'Who enjoyed the story of the film?',
                    'Who read the book of the film?',
                    'Who saw the film previously?'
                ],
                answer: ['D', 'C', 'A', 'B', 'B', 'D', 'A']
            }
        },
        {
            part: 5,
            type: 'heading-matching',
            title: 'Question 5 of 5',
            instruction: 'Read the text below. Match the headings to the paragraphs.',
            content: {
                topic: 'CONSUMER AGE',
                headings: [
                    'A. Making things last longer', 'B. A temporary experiment', 'C. The reason of secrecy',
                    'D. Still relevant to our times', 'E. The difficulty of being generous', 'F. Reason to reach a compromise',
                    'G. Important lessons for all of us'
                ],
                paragraphs: [
                    "This has not always been the case. Only a few generations ago, the number of possessions that most people owned was far fewer than those accumulated by the average person in a developed country today. For example, shoes were expected to be worn for many years; a working man in the early twentieth century may only have owned five or six pairs in his lifetime. When necessary, they would be repaired rather than discarded, as fashion was regarded as a luxury. If you were lucky enough to have a telephone, the same machine might be expected to be in use for a lifetime.",
                    "In the face of modern consumerism, journalist Judith Levine decided to make a radical change to her lifestyle: she and her husband Paul would reduce their spending to a minimum. For a whole year, they would only buy essential items, such as food and things they needed for work. They would mend anything that broke or was old, and they would avoid going out to the cinema, or visiting cafes and restaurants. Although they would save money, this was not the main point of the exercise. As a writer, she planned to document the entire year with the aim of publishing her findings as a book.",
                    "In order to make the experiment as authentic as possible, the couple did not tell people why they were no longer buying things. If they had told them, their friends might have offered to pay for them, which would defeat the purpose. Judith Levine wanted to experience and observe the effects of stepping off the consumer treadmill, to see how practical it was, and to see how it affected her own mental state and her relationships with friends, family and strangers. She wanted to know how it would feel to live outside the modern consumerist age.",
                    "Published in 2006, the book was called Not Buying It. Reading it more than ten years later, it is interesting to see how Levine predicted many of today's concerns, such as plastic waste and excessive screen time. She realized how much waste she was generating as a result of shopping. Being forced to keep and re-use things meant she had far less packaging to recycle. Added to this, she became more local in her shopping habits, which again seems to be a current trend. She also anticipated the growing interest in adopting a minimalist lifestyle in relation to possessions.",
                    "One of the more interesting problems the Levines encountered was giving gifts. As they were not allowed to buy unnecessary things, they decided that the best option was to make them. However, as neither of them had any particular artistic skills, their attempts at making a gift for a friend's graduation looked rather cheap, and they decided it would not be appropriate to give it to her. Luckily, Paul had an inspiration: he suggested that his wife should choose something that she loved. This turned out to be a piece of family jewelry, which proved to be the perfect gift.",
                    "A more serious issue concerned meetings for work. In New York, where Judith was based, it was common for journalists to meet their sources and contacts in cafes to discuss the stories they were working on. This was not an option for Judith, as she did not want to rely on others to pay. She did have an office, and meeting at her home seemed inappropriate. This was a real problem, and in the end she decided to continue visiting cafes, as they were necessary to her work. When working alone, however, Judith found public libraries very convenient.",
                    "Overall, the year proved to be a fascinating experiment, and reading about it makes you realise how dependent on shopping most of us are. Being more mindful of what we buy is vital for our planet, as resources are rapidly diminishing. On a more personal level, as well as the obvious economic benefits, there are health benefits from cutting out unnecessary food and drinks and switching from car use to cycling and walking. It forces you to use your imagination to come up with ways to live with fewer things. It was certainly an eye-opening insight for this reader."
                ],
                answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            }
        }
    ], // <--- Đừng quên dấu phẩy này để ngăn cách với đề thi "test_003"
"test_004": [
    {
        part: 1,
        type: 'gap-fill',
        title: 'Question 1 of 5',
        instruction: 'Choose the word that fits in the gap. The first one is done for you.',
        content: {
            prefix: 'Hey Lewis,',
            items: [
                { prefix: 'I wake up', options: ['early', 'late', 'on time'], suffix: 'every day.' },
                { prefix: 'I have', options: ['breakfast', 'lunch', 'dinner'], suffix: 'at noon.' },
                { prefix: 'I', options: ['leave', 'live', 'stay'], suffix: 'the house at 8 AM.' },
                { prefix: 'I drive in my new', options: ['house', 'job', 'car'], suffix: '.' },
                { prefix: 'I sleep when I feel', options: ['tired', 'sleepy', 'happy'], suffix: '.' }
            ],
            suffix: 'Love,<br>Helen',
            answer: ['early', 'lunch', 'leave', 'car', 'sleepy']
        }
    },
    {
        part: 2,
        type: 'sentence-ordering',
        title: 'Question 2 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Hand in assignment)',
        content: {
            sentences: [
                "First, it is a good idea to check your report and correct mistakes",
                "When you are sure there are no mistakes left, print out your report",
                "Next, complete a cover sheet with your name and your student number, and attach it to your printed assignment",
                "Bring your assignment with the attached cover sheet to the front desk in the main hall",
                "The staff member will take your report and confirm that everything is complete"
            ],
            answer: [
                "First, it is a good idea to check your report and correct mistakes",
                "When you are sure there are no mistakes left, print out your report",
                "Next, complete a cover sheet with your name and your student number, and attach it to your printed assignment",
                "Bring your assignment with the attached cover sheet to the front desk in the main hall",
                "The staff member will take your report and confirm that everything is complete"
            ]
        }
    },
    {
        part: 3,
        type: 'sentence-ordering',
        title: 'Question 3 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: MFire instructions)',
        content: {
            sentences: [
                "When you hear the alarm, leave your bags and belongings at the desk",
                "Next, walk calmly to the doors marked Emergency Exit",
                "Through these doors, there are stairs leading you to the ground floor",
                "When you reach the bottom of these stairs, leave the building through front entrance",
                "Outside, gather on the grass and wait for further instructions"
            ],
            answer: [
                "When you hear the alarm, leave your bags and belongings at the desk",
                "Next, walk calmly to the doors marked Emergency Exit",
                "Through these doors, there are stairs leading you to the ground floor",
                "When you reach the bottom of these stairs, leave the building through front entrance",
                "Outside, gather on the grass and wait for further instructions"
            ]
        }
    },
    {
        part: 4,
        type: 'opinion-matching',
        title: 'Question 4 of 5',
        instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
        content: {
            topic: 'Sports',
            opinions: [
                { person: 'A', text: 'Exercising with friends is a fantastic idea, don\'t you think? It adds a fun element to the workout routine. It\'s important to fuel our bodies properly, though. After a good workout, I always make sure to have a nutritious meal to replenish energy and support muscle recovery.' },
                { person: 'B', text: 'Establishing a consistent workout routine has really helped me stay on track with my fitness goals. It\'s amazing how much more I can accomplish when I have a structured plan in place. Plus, it keeps me accountable and ensures I make time for physical activity every day.' },
                { person: 'C', text: 'Age is just a number when it comes to exercise. Whether you\'re young or old, staying active is crucial for maintaining overall health and vitality. While competitions can be motivating for some, they\'re not necessarily suitable for everyone. It\'s important to find activities that are enjoyable and sustainable for each individual.' },
                { person: 'D', text: 'Experiencing pain during exercise isn\'t necessary and it\'s a sign that something may be wrong. It\'s important to listen to our bodies and seek expert advice when needed, whether it\'s from a trainer, physical therapist, or medical professional. Taking care of ourselves properly ensures we can continue to enjoy physical activity without risking injury.' }
            ],
            questions: [
                'Who thinks work out with friends is a good idea?', 
                'Who thinks competitions are not useful for everybody?',
                'Who thinks experience pain is not necessary?', 
                'Who thinks a proper meal is important?',
                'Who thinks a routine can help us do more sport?', 
                'Who thinks exercise is for both the young and the elderly?',
                'Who thinks at times we seek expert advice?',
            ],
            answer: ['A', 'C', 'D', 'A', 'B', 'C', 'D']
        }
    },
    {
        part: 5,
        type: 'heading-matching',
        title: 'Question 5 of 5',
        instruction: 'Read the text below. Match the headings to the paragraphs.',
        content: {
            topic: 'Early Australia',
            headings: [
                'A. New evidence', 'B. Natural barrier', 'C. Technology',
                'D. Journey', 'E. No precise figure', 'F. Lack of knowledge and skills',
                'G. Determination'
            ],
            paragraphs: [
                "The history of early Australians stretches back much further than previously believed, with evidence suggesting human presence on the Australian continent dating back approximately 65,000 years. This timeline challenges traditional views held by historians regarding the first human settlers in Australia. Carbon analysis of archaeological sites has provided different results, leading to alternative hypotheses about the early inhabitants of the land Down Under. The findings shed new light on the ancient origins and rich cultural heritage of the indigenous people who have inhabited the continent for millennia.",
                "Recent discoveries have revealed that the settlement of Australia was not a singular event. In addition to the early settlers, scientists have uncovered traces of two other human groups that migrated to the continent. The presence of multiple groups suggests a complex history of human migration and interaction. However, reaching the isolated continent would have posed significant challenges for ancient humans, as they would have needed to traverse vast stretches of open sea, a feat seemingly impossible with the technology available to them at the time.",
                "The aid of advanced equipment and techniques has allowed scientists to identify a series of small islands closely connected, forming a continuous pathway leading to Australia. Remote sensing technology has helped researchers identify and map out islands and potential migration routes. Geographic Information Systems (GIS) have integrated various data sets to discover more about the migration corridors. This detailed mapping provides insight into the probable routes taken by ancient migrants as they ventured across the vast expanse of the sea, providing a deeper understanding of the complex migration patterns that shaped the early history of the continent.",
                "The migration patterns of early Australians reveal a gradual journey to the continent. Archaeological evidence points to the likelihood of different tribes arriving in Australia through a series of island-hopping journeys. Each island served as a resting point and a source of food, allowing them to continue their voyage. This gradual movement indicates an adaptive and resourceful approach taken by these ancient tribes, who navigated the challenges of the terrain to ultimately settle in Australia.",
                "Scientists can only speculate about the exact number of individuals required to undertake such a migration, which could have ranged from a small group to several thousand people. The uncertainty stems from various factors, including the limitations of archaeological evidence and the complexities of ancient human migration. The lack of exact statistics makes it challenging to determine the scale and composition of these early human journeys accurately. However, ongoing research and technological advancements may offer more insights in the future.",
                "Some skeptics argue that ancient humans didn't have enough the intellectual capacity, knowledge, and skills needed to undertake such journeys. They question whether early humans possessed the navigational and maritime expertise to traverse vast stretches of open ocean. Critics contend that without advanced tools or navigational aids, navigating through open seas would have been beyond the capabilities of ancient populations. However, it is crucial to acknowledge that human ingenuity and adaptability have proven remarkable throughout history, enabling our ancestors to overcome various challenges and achieve extraordinary feats.",
                "History has demonstrated the unwavering determination and resilience of human explorers in the past. From deep-sea expeditions to ancient times to modern space travel, humans have showcased their resolve to explore and conquer the unknown. The same determination might have driven the early Australians to embark on perilous journeys across treacherous waters. While the challenges they faced were undoubtedly immense, the spirit of human curiosity and the desire to discover new lands and opportunities likely motivated these ancient explorers, leaving a remarkable legacy in the annals of history."
            ],
            answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        }
    }
],

// Thay thế khối mã "test_005" cũ bằng khối mã này

"test_005": [
    {
        part: 1,
        type: 'gap-fill',
        title: 'Question 1 of 5',
        instruction: 'Choose the word that fits in the gap. The first one is done for you.',
        content: {
            prefix: 'Hey Lewis,',
            items: [
                { prefix: 'My dog is', options: ['Friendly', 'Walk', 'First', 'Speak', 'Together'], suffix: '.' },
                { prefix: 'This is the', options: ['Friendly', 'Walk', 'First', 'Speak', 'Together'], suffix: 'book I read.' },
                { prefix: 'I can', options: ['Friendly', 'Walk', 'First', 'Speak', 'Together'], suffix: 'to the park.' },
                { prefix: 'He can', options: ['Friendly', 'Walk', 'First', 'Speak', 'Together'], suffix: 'English very well.' },
                { prefix: 'We eat dinner', options: ['Friendly', 'Walk', 'First', 'Speak', 'Together'], suffix: 'every evening.' }
            ],
            suffix: 'Love,<br>Helen',
            answer: ['Friendly', 'First', 'Walk', 'Speak', 'Together']
        }
    },
    {
        part: 2,
        type: 'sentence-ordering',
        title: 'Question 2 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: A scientist\'s life - Albert)',
        content: {
            sentences: [
                "As a child, he moved to a special school because he was so clever",
                "His best friend in his new class was a girl named Lavime",
                "She later became his wife and helped him with his earliest scientific discoveries",
                "These were so advanced that he soon became famous all over the world",
                "Princeton University in the USA offered him a job because he was so famous"
            ],
            answer: [
                "As a child, he moved to a special school because he was so clever",
                "His best friend in his new class was a girl named Lavime",
                "She later became his wife and helped him with his earliest scientific discoveries",
                "These were so advanced that he soon became famous all over the world",
                "Princeton University in the USA offered him a job because he was so famous"
            ]
        }
    },
    {
        part: 3,
        type: 'sentence-ordering',
        title: 'Question 3 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Enter the Conference Hall)',
        content: {
            sentences: [
                "When you arrive at the conference hall, give your booking number",
                "A staff member will note this down and give you a welcome pack",
                "Inside you will find a schedule of events and the information of the key speaker",
                "If you would like to attend his talk, it will take place in the main hall at midday",
                "After he finishes, there will be time for questions"
            ],
            answer: [
                "When you arrive at the conference hall, give your booking number",
                "A staff member will note this down and give you a welcome pack",
                "Inside you will find a schedule of events and the information of the key speaker",
                "If you would like to attend his talk, it will take place in the main hall at midday",
                "After he finishes, there will be time for questions"
            ]
        }
    },
    {
        part: 4,
        type: 'opinion-matching',
        title: 'Question 4 of 5',
        instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
        content: {
            topic: 'Going on holiday',
            opinions: [
                { person: 'A', text: 'When I travel somewhere, I often ask for bus routes to famous tourist destinations so that I can get to those places as quickly as possible and avoid wasting time going around. Famous tourist destinations are the places I want to explore the most when traveling somewhere. I don\'t understand why many people just like to sit still at the beach when traveling, I find that uninteresting and time-consuming.' },
                { person: 'B', text: 'My family and I often plan to travel every time we have a vacation. If the weather is nice then our plans go ahead as usual, if not, we will postpone that vacation. For my family, light wind and warm sunlight are important when we go out. A few of my friends invited me to go climbing, but I\'m afraid of heights so I refused them. However, in the future I really want to try mountain climbing once.' },
                { person: 'C', text: 'Next month\'s trip will be the first time I travel to another country. Normally I only travel to famous local places or in my country. These places are beautiful but I\'m so excited to travel to a foreign place once in my life.' },
                { person: 'D', text: 'Last year, I went on a mountain climbing trip with my friends. It was the most horrible trip I have ever experienced. However, after that trip, I had a strong passion for walking. So now, every day I walk as a hobby, and it also helps my health a lot. I\'m old so I\'m no longer interested in traveling to far away places. Instead, I want to lie on a comfortable sofa and watch my favorite TV show.' }
            ],
            questions: [
                'Who thinks going to the beach is boring?',
                'Who prefers to stay at home?',
                'Who thinks holiday requires good weather?',
                'Who likes going walking?',
                'Who wants to go mountaineering trip?',
                'Who has never been abroad?',
                'Who likes seeing tourist attractions?'
            ],
            // === ĐÁP ÁN ĐÃ ĐƯỢC SỬA LẠI CHO ĐÚNG ===
            answer: ['A', 'D', 'B', 'D', 'B', 'C', 'A']
        }
    },
    {
        part: 5,
        type: 'heading-matching',
        title: 'Question 5 of 5',
        instruction: 'Read the text below. Match the headings to the paragraphs.',
        content: {
            topic: 'Charles Dickens',
            headings: [
                'A. Dickens for our time', 'B. Difficulties for modern readers', 'C. Keeping the readers guessing',
                'D. The influence of the media', 'E. Dickens\'s early success', 'F. Trying to protect his property',
                'G. Bring the books to life'
            ],
            paragraphs: [
                "The popularity of Dickens's works in our time remains a global phenomenon. Although he wrote his novels in the 19th century, his works have had a global impact. In addition, these masterpieces helped connect Renaissance drama to the multimedia revolution. Many readers find the characters and themes surprisingly modern.",
                "Shakespeare's plays are difficult to understand and sometimes require the reader to struggle or think twice to figure out the character's thoughts. Sometimes the dialogue tends to be emotional without any connection to the context of the story. There are many passages that are a confusing mess of single words and old classical vocabulary.",
                "Hamlet is a Renaissance tragedy written by Shakespeare. The play is very long and has plot twists that keep the reader guessing. Dickens had a special interest in the work. He told his daughter to keep an eye on Hamlet. For Dickens' novels, he sometimes created serial editions, with new chapters released monthly, keeping readers eagerly awaiting the next issue.",
                "Dickens's legacy is undeniable. His works have been translated and used in over 100 countries and are studied by most schoolchildren in the world. It has even been said that Dickens' legacy belongs not to one era but to all times. It is easy to see that Dickens lives on in society and culture through his language and through his enduring influence on education and the media.",
                "Dickens achieved success at a young age. His first novel, The Pickwick Papers, was published when he was only 24 and became a bestseller. His success increased throughout the 1890s. He was honored as a member of the Lord Chamber Men - those lucky enough to perform for the Queen of England on many occasions. Alongside his novels and plays, he also published many poems in his own style.",
                "As Dickens's reputation grew, the question arose whether to preserve his legacy and make it live on. Dickens himself was always keen to make his mark and to maintain his uniqueness. He even attempted to break the convention of the popular comedies of the time with a series of dramatic plays.",
                "To mark the 400th anniversary of Dickens's death, there will be a number of events to help readers, and especially students, better understand his works. There will be videos detailing the content of each of his works to help people excitedly explore the pinnacle of language and the meaning his works bring to our daily lives."
            ],
            answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        }
    }
]// Thêm vào file js/data-reading-test.js

, // <--- Đừng quên dấu phẩy này để ngăn cách với đề thi "test_005"
"test_006": [
    {
        part: 1,
        type: 'gap-fill',
        title: 'Question 1 of 5',
        instruction: 'Choose the word that fits in the gap. The first one is done for you.',
        content: {
            prefix: 'Hey Lewis,',
            items: [
                { prefix: 'I imagine you don\'t want to', options: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'], suffix: 'this.' },
                { prefix: 'I', options: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'], suffix: 'you earlier but you were not home.' },
                { prefix: 'Can you be', options: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'], suffix: 'before 7pm?' },
                { prefix: 'I can', options: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'], suffix: 'you at your place then.' },
                { prefix: 'Don\'t have too much', options: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'], suffix: 'because we\'re going to eat cake.' }
            ],
            suffix: 'Love,<br>Helen',
            answer: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner']
        }
    },
    {
        part: 2,
        type: 'sentence-ordering',
        title: 'Question 2 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Printer Usage)',
        content: {
            sentences: [
                "First, you need to find an appropriate place to put your printer",
                "When your printer is in place, turn it on using the switch",
                "A light comes on at the front of the printer",
                "If the light is green, your printer is ready to use",
                "Before using the printer, you need to put papers into it"
            ],
            answer: [
                "First, you need to find an appropriate place to put your printer",
                "When your printer is in place, turn it on using the switch",
                "A light comes on at the front of the printer",
                "Before using the printer, you need to put papers into it",
                "If the light is green, your printer is ready to use"
            ]
        }
    },
    {
        part: 3,
        type: 'sentence-ordering',
        title: 'Question 3 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Delivery man)',
        content: {
            sentences: [
                "You should arrive at the main office by 6.30am and collect your keys",
                "In the office, you can also collect a map of your route",
                "You must follow the route on the map to deliver packages",
                "When you have completed all deliveries, return to your office",
                "You must return your keys to the office manager after you get back"
            ],
            answer: [
                "You should arrive at the main office by 6.30am and collect your keys",
                "In the office, you can also collect a map of your route",
                "You must follow the route on the map to deliver packages",
                "When you have completed all deliveries, return to your office",
                "You must return your keys to the office manager after you get back"
            ]
        }
    },
    {
        part: 4,
        type: 'opinion-matching',
        title: 'Question 4 of 5',
        instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
        content: {
            topic: 'Opinions on flying',
            opinions: [
                { person: 'A', text: 'I have a dream that I work as a tour guide. So I understand that I will have to fly to other countries. In my personal opinion, airplanes are currently too cheap compared to the damage they cause to the environment, so I believe we should add taxes to airline ticket prices to make people choose to use other means of transport before they think about flying. I believe that people are also very happy when they can contribute to protecting the environment.' },
                { person: 'B', text: 'My family and siblings live quite far from me. So I often have to fly to visit them every month when I have time. We really appreciate the time we spend together and we are happy to be able to meet each other and share our new story. I know that traveling by plane too much is not good for the environment so I often shop online or go to work by bike instead of going by car or I reuse plastic bags and paper bags. In addition, I sometimes volunteer to clean up trash in the neighborhood.' },
                { person: 'C', text: 'I was a businessman so I had to fly many times a week. I had to go to other countries to be able to sign wine trading contracts with them. I felt very tired every time I have to fly. Now, my sister and I, whenever we have free time, take the train together and we enjoy that time very much because I can travel while sightseeing and relax without any stress.' },
                { person: 'D', text: 'If I have to go somewhere I will choose other means of public transport, not the plane. Every time I go on a plane I feel extremely tired and I just hope time passes quickly so I can get off that plane. However, due to the specific nature of my job, I have to film in many different locations, so sometimes I cannot avoid having to take this public transportation.' }
            ],
            questions: [
                'Who tries to protect the environment?', 
                'Who likes relaxing while they travel?',
                'Who finds flying tiring?', 
                'Who needs to fly for their work?',
                'Who suggests making flights more expensive?', 
                'Who wants to work in other countries?',
                'Who visits relatives regularly?',
            ],
            answer: ['B', 'C', 'D', 'D', 'A', 'A', 'B']
        }
    },
    {
        part: 5,
        type: 'heading-matching',
        title: 'Question 5 of 5',
        instruction: 'Read the text below. Match the headings to the paragraphs.',
        content: {
            topic: 'The Tulips',
            headings: [
                'A. The economy during the golden age', 'B. Coming into', 'C. An item of trade',
                'D. Different types of tulip', 'E. Trade mechanics', 'F. Trade across Europe',
                'G. An Unexpected turn of events'
            ],
            paragraphs: [
                "During the period of the Dutch Golden Age, the port of Manchester was one of the wealthiest in all of Europe. This prosperity was in part due to the trade connections established by the Dutch East India Company, which transported luxury and exotic goods to Europe from Asia and beyond. Among the imported items, tulip bulbs made their way to Europe and quickly captured public attention, especially after their arrival in the bustling ports of the Netherlands. Tulips, with their striking colors and exotic appeal, soon became a symbol of status and luxury in Europe, especially as they gained popularity through trade at the prominent Manchester port.",
                "In 1593, studies conducted at Dutch universities revealed that tulips could survive the cold European climate, an insight that fueled the flower's popularity. Their vibrant and diverse colors stood out against the more subdued tones of European flora, making tulips a unique spectacle. As they gained popularity, tulips became a symbol of wealth and status, particularly in the Netherlands. This popularity spread quickly across Europe, establishing tulips as a highly desirable commodity and solidifying their reputation as a status symbol among the European elite.",
                "The demand for tulips surged, with collectors and merchants eagerly seeking the most colorful and unique blooms. Because tulips only bloomed during a limited season, from September to November, those who wanted tulips outside this window had to place orders in advance. This created a system of advance sales and pre-purchases, giving rise to a speculative market. This practice of pre-ordering tulips and trading contracts for their future delivery resembled modern-day options and futures trading in the financial markets, laying the groundwork for a complex market around these rare and exotic flowers.",
                "Tulip values varied greatly, depending on their rarity and color. Multi-colored tulips, especially those with striking patterns, commanded higher prices than solid-colored varieties. Of particular interest were tulips affected by a viral infection that caused beautiful flame-like patterns on the petals, known as 'broken' tulips. These rare blooms were highly valued for their unique appearance and sold for premium prices. Since tulips were also susceptible to disease, their fragility and exclusivity made them a prized commodity, as any remaining bulbs became even more desirable.",
                "As the tulip market grew, prices skyrocketed. Merchants often held onto their bulbs, waiting to sell at inflated prices. Between 1634 and 1637, the value of certain tulips rose by up to sixty times their original price. Speculators poured increasing amounts of money into tulips, driven by the hope of reselling them at even higher prices. The speculative nature of the market led to an economic bubble, where the price of tulips continued to rise without any intrinsic reason beyond collective belief in their value.",
                "Tulip prices reached such extreme heights that they began to be traded on exchanges and even listed on stock markets. The general public, hoping to partake in the lucrative trade, flocked to purchase tulip bulbs. This speculative frenzy drew in a wide range of people, from merchants to commoners, all vying for a piece of what seemed like a guaranteed profitable investment. The tulip market became a cultural and economic phenomenon, with people from all backgrounds willing to invest their savings into tulips, expecting substantial returns.",
                "However, this bustling tulip market eventually reached its breaking point. As with many speculative bubbles, the tulip craze was unsustainable, and prices eventually began to plummet. Once people realized that tulip prices had risen far beyond reasonable levels, panic selling ensued, and the market collapsed. The dramatic fall in prices left many investors in financial ruin, as the value of tulips dwindled to a fraction of their peak. The tulip mania became one of history's most famous economic bubbles, offering a cautionary tale about the dangers of speculation and the risks inherent in market bubbles."
            ],
            answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        }
    }
]// Thêm vào file js/data-reading-test.js

, // <--- Đừng quên dấu phẩy này để ngăn cách với đề thi "test_006"
"test_007": [
    {
        part: 1,
        type: 'gap-fill',
        title: 'Question 1 of 5',
        instruction: 'Choose the word that fits in the gap. The first one is done for you.',
        content: {
            prefix: 'Hey Lewis,',
            items: [
                { prefix: 'The books don\'t', options: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'], suffix: 'on the shelf.' },
                { prefix: 'Could you get the financial', options: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'], suffix: 'for me?' },
                { prefix: 'I', options: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'], suffix: 'it will be useful for the project.' },
                { prefix: 'Read the instructions', options: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'], suffix: ', not quickly.' },
                { prefix: 'Send me the report', options: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'], suffix: 'the meeting, not after.' }
            ],
            suffix: 'Love,<br>Helen',
            answer: ['Balance', 'Statement', 'Think', 'Slowly', 'Before']
        }
    },
    {
        part: 2,
        type: 'sentence-ordering',
        title: 'Question 2 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Solve a problem)',
        content: {
            sentences: [
                "The first step is to find out what you know about the problem",
                "The next one is to form a hypothesis or an idea based on your information",
                "Then, you need to perform experiments to see if these ideas are true or not",
                "You can also compare your results with experiments in the past",
                "In this way, you can add to your knowledge of the subject for future experiments"
            ],
            answer: [
                "The first step is to find out what you know about the problem",
                "The next one is to form a hypothesis or an idea based on your information",
                "Then, you need to perform experiments to see if these ideas are true or not",
                "You can also compare your results with experiments in the past",
                "In this way, you can add to your knowledge of the subject for future experiments"
            ]
        }
    },
    {
        part: 3,
        type: 'sentence-ordering',
        title: 'Question 3 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Submit Report)',
        content: {
            sentences: [
                "Before you start to write your report, you should look at websites for the information you need",
                "Remember to save links to websites and include them in your report",
                "You should also include a list of books that you use for reference",
                "When you have finished your report, correct all the mistakes",
                "After you make the corrections, send your report by your email"
            ],
            answer: [
                "Before you start to write your report, you should look at websites for the information you need",
                "Remember to save links to websites and include them in your report",
                "You should also include a list of books that you use for reference",
                "When you have finished your report, correct all the mistakes",
                "After you make the corrections, send your report by your email"
            ]
        }
    },
    {
        part: 4,
        type: 'opinion-matching',
        title: 'Question 4 of 5',
        instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
        content: {
            topic: 'A new restaurant',
            opinions: [
                { person: 'A', text: 'This is my first time coming to this restaurant. The food is very cheap but the quality is excellent. I was very surprised with the starter because its menu is very diverse, but there is one thing that I want the restaurant to improve. The music was too low and it didn\'t make the meal atmosphere lively. Next time turn the music louder, please!' },
                { person: 'B', text: 'This is a very famous restaurant that I saw in the newspaper. Sadly, I arrived later than the rest of the party, so I didn\'t get to order dinner. However, I ordered orange juice and mango juice and they were both delicious. What about the surroundings? Lively music along with fashionable and appropriate decor makes me feel very comfortable.' },
                { person: 'C', text: 'I\'m not sure if I will return to this restaurant. I think the staff was arguing when I got there, because the atmosphere here was not very comfortable. As for the food, I think there\'s nothing to write about. I ordered fish and chips, it wasn\'t bad, but it wasn\'t good either. But many people say that the food here is fabulous. So, I think I\'m an exception.' },
                { person: 'D', text: 'I don\'t understand why this restaurant is so famous. When I arrived and saw a menu with lots of different dishes, I saw this as a bad sign. Furthermore, the menu with traditional dishes contrasting with the modern decoration style made me feel very confused and strange. The staff here are also not friendly. This was one of my worst experiences eating at a restaurant.' }
            ],
            questions: [
                'Who was impressed by the range of appetizers?',
                'Who thought his experience was probably unusual?',
                'Who thought the food was of average quality?',
                'Who will definitely not return to the restaurant?',
                'Who thought the music was too quiet?',
                "Who didn't eat anything at the restaurant?",
                'Who enjoyed the atmosphere?',
            ],
            answer: ['A', 'C', 'C', 'D', 'A', 'B', 'B']
        }
    },
    {
        part: 5,
        type: 'heading-matching',
        title: 'Question 5 of 5',
        instruction: 'Read the text below. Match the headings to the paragraphs.',
        content: {
            topic: 'Eating in China',
            headings: [
                'A. The origins of Chinese food', 'B. The influence of philosophy', 'C. Regional variations',
                'D. Cooking methods', 'E. The style', 'F. Changes in the Chinese diet',
                'G. Effects of a changing diet'
            ],
            paragraphs: [
                "The story of this cuisine stretches back thousands of years, shaped by local farming and customs. Early diets were simple, relying on grains and ingredients from nearby sources. Over time, different areas began to create their own flavors influenced by unique resources and historical events. Key foods, such as rice and noodles, became staples, adding depth to a rich culinary history that continues to evolve.",
                "Ancient ideas play a significant role in shaping attitudes toward food and meals. Concepts like balance and harmony are often reflected in how dishes are prepared and enjoyed, guiding choices in cooking. This backdrop helps create an environment where meals are not just about sustenance but also about connection and community, enriching the overall dining experience.",
                "The diverse geography of the country results in a wide range of culinary styles. Each area showcases distinct flavors based on local ingredients and traditions. For instance, the bold tastes found in one region can be quite different from the lighter fare in another. These variations highlight the richness of the culinary landscape, influenced by both local practices and cultural exchanges.",
                "A variety of cooking techniques are used that enhance the flavors of the ingredients. Quick methods, like stir-frying, keep vegetables crisp and fresh, while steaming helps maintain the natural taste and nutrients of food. Each technique serves to improve the overall eating experience, showing how versatile and innovative cooking can be.",
                "Dining is often approached as a communal experience, emphasizing sharing and togetherness. Meals are usually served in a way that allows everyone to sample different dishes, fostering conversation and connection. The use of chopsticks adds an element of culture, making the act of eating feel more intentional and connected to tradition.",
                "Recent years have seen shifts in eating habits, influenced by modern lifestyles and global trends. While traditional foods remain important, there’s a growing interest in fast food and snacks, reflecting a blend of old and new practices. This evolution illustrates how culinary choices can change while still holding onto some aspects of the past.",
                "The shift in dietary habits carries various implications for health and cultural practices. Increased consumption of processed foods and sugary drinks has raised concerns, challenging long-held eating traditions. As younger generations lean towards convenience, there's a risk of losing valuable culinary knowledge. Balancing contemporary choices with traditional practices is essential for maintaining cultural integrity and promoting healthier lifestyles."
            ],
            answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        }
    }
], // <--- Đừng quên dấu phẩy này để ngăn cách với đề thi "test_007"
"test_008": [
    {
        part: 1,
        type: 'gap-fill',
        title: 'Question 1 of 5',
        instruction: 'Choose the word that fits in the gap. The first one is done for you.',
        content: {
            prefix: 'Hey Lewis,',
            items: [
                { prefix: 'I', options: ['Live', 'Share', 'Class', 'Drive', 'Cook'], suffix: 'in a house.' },
                { prefix: 'I', options: ['Live', 'Share', 'Class', 'Drive', 'Cook'], suffix: 'my room with my brother.' },
                { prefix: 'We are in the same', options: ['Live', 'Share', 'Class', 'Drive', 'Cook'], suffix: 'at school.' },
                { prefix: 'We', options: ['Live', 'Share', 'Class', 'Drive', 'Cook'], suffix: 'to the park.' },
                { prefix: 'We like to', options: ['Live', 'Share', 'Class', 'Drive', 'Cook'], suffix: 'together.' }
            ],
            suffix: 'Love,<br>Helen',
            answer: ['Live', 'Share', 'Class', 'Drive', 'Cook']
        }
    },
    {
        part: 2,
        type: 'sentence-ordering',
        title: 'Question 2 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Instructions for new students)',
        content: {
            sentences: [
                "When you arrive at the university, go to the help desk",
                "A member of staff will ask for your name and your address",
                "He or she will enter your information into the computer and give you an identification card",
                "You can use this card to borrow books from library and access lesson materials online",
                "You will find these in material links on your home page"
            ],
            answer: [
                "When you arrive at the university, go to the help desk",
                "A member of staff will ask for your name and your address",
                "He or she will enter your information into the computer and give you an identification card",
                "You can use this card to borrow books from library and access lesson materials online",
                "You will find these in material links on your home page"
            ]
        }
    },
    {
        part: 3,
        type: 'sentence-ordering',
        title: 'Question 3 of 5',
        instruction: 'Put the sentences below in the right order. (Topic: Participate in a race)',
        content: {
            sentences: [
                "On your arrival, please go to the information point at the north gate",
                "Runners must register here at least 30 minutes before the race starts at 9am",
                "To do this, you just need to give us your photo card",
                "A member of staff will give you a numbered armband to wear",
                "Please put this on immediately and join other competitors at the warm-up area"
            ],
            answer: [
                "On your arrival, please go to the information point at the north gate",
                "Runners must register here at least 30 minutes before the race starts at 9am",
                "To do this, you just need to give us your photo card",
                "A member of staff will give you a numbered armband to wear",
                "Please put this on immediately and join other competitors at the warm-up area"
            ]
        }
    },
    {
        part: 4,
        type: 'opinion-matching',
        title: 'Question 4 of 5',
        instruction: 'Four people respond in the comments section of an online magazine article about the above topic. Read the texts and then answer the questions.',
        content: {
            topic: 'Visit Stevenson city',
            opinions: [
                { person: 'A', text: 'When I first came to this city, I felt very scared because this city is very big. The city has many parts and the shopping part is very far from the green part. However, we already had the bus route and we signed up to take the bus for a full day. Buses are very cheap and very convenient. I feel very lucky to not have to put pressure on my sore feet.' },
                { person: 'B', text: 'I don\'t like big cities and rarely go out. But I go to StevenSon city very often. I go there about five to seven times a year. There is an area outside the city. In that area, there are many things that I need. There is a lot of water, a natural area, a small forest and a special camping area. I really like coming to this place to rest. It also has a great coffee serving area for visitors.' },
                { person: 'C', text: 'I went to this city last summer and really liked the atmosphere of this city. The reason I like the atmosphere here is because it has a lot of public performances. These performances often take place in front of department stores, so this prevents me from shopping inside those stores. I was very surprised when I came home with an empty bag and I didn\'t buy anything.' },
                { person: 'D', text: 'When I go out, I only care about two things: good food and a good play. I especially liked the lunch I had in this city, it was delicious and I really want to come back here next time. However, I guess it\'s a bit expensive and I have to walk a long way to get there. However, it didn\'t matter because I had a wonderful day.' }
            ],
            questions: [
                'Who liked the public theatre that the city puts on?',
                'Who paid a lot for their meal?',
                'Who usually spends a lot of money on shopping?',
                'Who thought public transport system was good?',
                'Who thought walking too much causes a problem?',
                'Who likes the natural resort here?',
                'Who visits one part of the city?',
            ],
            answer: ['C', 'D', 'C', 'A', 'A', 'B', 'B']
        }
    },
    {
        part: 5,
        type: 'heading-matching',
        title: 'Question 5 of 5',
        instruction: 'Read the text below. Match the headings to the paragraphs.',
        content: {
            topic: 'Children and exercises',
            // === HEADINGS ĐÃ ĐƯỢC CẬP NHẬT ===
            headings: [
                'A. The wider effects of regular activity', 
                'B. Ways in which environment can influence behavior', 
                'C. The success of a simple idea',
                'D. The situation have the potential of being worst', 
                'E. Factors contributing to inactivity', 
                'F. A design for exercise and for study',
                'G. Achieving the right balance'
            ],
            paragraphs: [
                "Not anymore, if the statistics are to be believed. For the majority of children in developed countries, there is an increasing volume of evidence that fewer and fewer hours are spent getting exercise outside, and more and more time is spent lying on a sofa, hanging around inside with friends, or more likely, looking at a screen. However, it isn't just screens that are to blame; urbanization restricts children's access to green spaces, fears over their safety keep parents from giving them the freedom to roam, and pressure from schools for children to do hours of homework all contribute.",
                "Is this trend reversible? Technological change is happening at such a rate that it is difficult to make accurate predictions. Nevertheless, it seems certain that laptops and smartphones will continue to prove irresistible, and this is likely to exacerbate the current behavior of the young. The fact that the issue has become an increasing claim is evident from the ongoing debate in the media, as well as in journals of medicine and psychology. As a society, we seem to be recognising the problem, and, in the search for possible solutions, there is a will to prevent it from becoming a full-blown crisis.",
                "One of the more interesting solutions originated in a school in Scotland, which pioneered a scheme to ensure that all its pupils walk or run a mile every day. The initiative was widely praised and won several awards. The subsequent media attention was instrumental in helping to promote the scheme, which in some form or other has been adopted by over 3,600 schools in 35 countries. A recent university study compared two schools one a member of the 'Daily Mile' scheme, the other not-and found evidence that participation led to improved fitness and body composition.",
                "The scheme have reported improvements in the pupils' ability to focus, their alertness and even their classroom behaviour. Recent experiments in psychology and neuroscience have found evidence that these can be consequences of physical activity, although the precise mechanisms are not yet fully understood. The old saying a healthy mind in a healthy body is, it appears, supported by science.",
                "Another means of combatting the problem of lack of exercise comes from the world of architecture. Architectural design not only enables people to live in a particular way, it can also affect the way people go about their lives. For example, carefully designed retail outlets can even have an impact on people's shopping habits. Workplaces can be made more productive through design, and homes can be built that encourage greater communication. Now it seems that a carefully designed school can directly contribute to the amount of exercise children do, not only in exercise or sports classes but also in their normal, day-to-day activities.",
                "Japanese architect Takaharu Tezuka created a kindergarten in Tokyo in which the layout functions as a giant playground. The oval-shaped roof acts as both a play area and a running track. Tezuka recalls the emotional moment when the first pupils started interacting with the architecture. 'It was simple,' he said. 'They just started running.' He did not want to impose physical boundaries on the children so created a continuous open space. As an architect, he believes that traditional classrooms do not create a positive learning environment. The free plan of his award winning kindergarten encourages both independence and collaboration.",
                "The two initiatives cited above cost 'The Daily Mile' and the Japanese kindergarten- occupy two ends of the economic spectrum. The former requires very little in terms of resources and can be easily adapted at no great cost. The latter, however, involves a significant investment of both time and money. To solve the global problem of inactivity amongst the young will require a variety of responses. Local conditions, including the availability of space and budgetary considerations, will dramatically affect how local authorities and educational institutions respond to the issue, and it will be their responsibility to find a happy medium."
            ],
           // === ĐÁP ÁN ĐÃ ĐƯỢC CẬP NHẬT THEO HEADINGS MỚI ===
            answer: ['E', 'D', 'C', 'A', 'B', 'F', 'G']
        }
    }
]

};

