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
                headings: ["A. The custom", "B. Coffee encouraging", "C. A habit of", "D. The problem of", "E. A remedy", "F. The health risks", "G. The ancient origin of"],
                paragraphs: [
                    "The custom of coffee drinking began to spread...",
                    "Coffee was first used in Africa but Europe is known as the largest coffee-consuming region...",
                    "Nowadays, many people have the habit of drinking coffee in the morning...",
                    "Coffee consumption in Europe accounts for about 90% of global coffee production...",
                    "To address this injustice, certification schemes for agricultural production have been introduced...",
                    "There is much debate about the effects of coffee on human health...",
                    "There is a legend about coffee. In the past, a monk observed that birds became more active..."
                ],
                answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            }
        }
    ]
};
