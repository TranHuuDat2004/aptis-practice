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
    ]

};

