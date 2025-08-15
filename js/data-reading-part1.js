const readingPart1Data = [
    {
        id: 'contract_topic',
        title: 'Đề 1: Contract Details',
        questions: [
            {
                text: "1. The contract is a very important document. The whole contract has 55 pages. It is very ___.",
                options: ["long", "red", "tall"],
                answer: "long"
            },
            {
                text: "2. Can you read it carefully and check every ___.",
                options: ["work", "job", "detail"],
                answer: "detail"
            },
            {
                text: "3. I will print it and give you a ___.",
                options: ["information", "copy", "paper"],
                answer: "copy" 
            },
            {
                text: "4. I am very ___ and don't have any free time.",
                options: ["busy", "table", "round"],
                answer: "busy"
            },
            {
                text: "5. I will have meetings with my ___.",
                options: ["neighbor", "wife", "client"],
                answer: "client"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'daily_routine_topic',
        title: 'Đề 2: Daily Routine',
        questions: [
            {
                text: "1. I am never ___.",
                options: ["late", "soon", "early"],
                answer: "late"
            },
            {
                text: "2. In the mornings, I attend ___.",
                options: ["meetings", "dinner", "breakfast"],
                answer: "meetings"
            },
            {
                text: "3. I have lunch in the ___.",
                options: ["park", "city", "village"],
                answer: "park" 
            },
            {
                text: "4. I buy food from the ___.",
                options: ["shop", "window", "car"],
                answer: "shop"
            },
            {
                text: "5. I always ___ dinner for myself.",
                options: ["cook", "drink", "breathe"],
                answer: "cook"
            }
        ]
    },
    {
        id: 'office_day_topic',
        title: 'Đề 3: Office Day',
        questions: [
            {
                text: "1. My colleague is not at work today because he was ___.",
                options: ["sick", "black", "origin"],
                answer: "sick"
            },
            {
                text: "2. I am going to ___ three reports this afternoon.",
                options: ["read", "eat", "drink"],
                answer: "read"
            },
            {
                text: "3. I have an important ___ with a client later.",
                options: ["meeting", "sleep", "remote"],
                answer: "meeting" 
            },
            {
                text: "4. The phone in my office is ___ all the time.",
                options: ["ringing", "cooking", "singing"],
                answer: "ringing"
            },
            {
                text: "5. I need to take a break and ___ coffee.",
                options: ["drink", "eat", "watch"],
                answer: "drink"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'work_day_topic',
        title: 'Đề 4: Work Day',
        questions: [
            {
                text: "1. I start ___ in the morning at 7 a.m.",
                options: ["sleep", "early", "angry"],
                answer: "early"
            },
            {
                text: "2. I have ___ at the cafe near the office.",
                options: ["lunch", "bed", "tutor"],
                answer: "lunch"
            },
            {
                text: "3. I ___ the office at 5 p.m.",
                options: ["go", "leave", "return"],
                answer: "leave" 
            },
            {
                text: "4. I go home in my new ___.",
                options: ["bag", "jeans", "car"],
                answer: "car"
            },
            {
                text: "5. I go to bed when I feel ___.",
                options: ["sleepy", "angry", "alert"],
                answer: "sleepy"
            }
        ]
    },
    {
        id: 'social_life_topic',
        title: 'Đề 5: Social Life',
        questions: [
            {
                text: "1. Everyone is so ___.",
                options: ["friendly", "melty", "noisy"],
                answer: "friendly"
            },
            {
                text: "2. I am living in a small flat near my university so I can ___ to my class.",
                options: ["train", "sleep", "walk"],
                answer: "walk"
            },
            {
                text: "3. I met Lesly for the ___ time.",
                options: ["very", "first", "one"],
                answer: "first" 
            },
            {
                text: "4. She can ___ 5 languages.",
                options: ["talk", "say", "speak"],
                answer: "speak"
            },
            {
                text: "5. Last night, we went out for dinner ___.",
                options: ["toward", "together", "another"],
                answer: "together"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'movie_night_topic',
        title: 'Đề 6: Movie Night',
        questions: [
            {
                text: "1. Guess what? We are going to watch a movie tonight. I don't want you to ___ this happiness.",
                options: ["love", "remember", "miss"],
                answer: "miss"
            },
            {
                text: "2. I ___ you earlier but you were not there.",
                options: ["called", "told", "said"],
                answer: "called"
            },
            {
                text: "3. Can you be ___ before 7pm?",
                options: ["early", "sleepy", "ready"],
                answer: "ready" 
            },
            {
                text: "4. I can ___ you at your place then.",
                options: ["hold", "meet", "miss"],
                answer: "meet"
            },
            {
                text: "5. Don't have too much ___ because we're going to eat cake.",
                options: ["talk", "pencil", "dinner"],
                answer: "dinner"
            }
        ]
    },
    {
        id: 'financial_report_topic',
        title: 'Đề 7: Financial Report',
        questions: [
            {
                text: "1. The budget doesn't ___.",
                options: ["work", "count", "balance"],
                answer: "balance"
            },
            {
                text: "2. Could you get the financial ___?",
                options: ["department", "statement", "accountant"],
                answer: "statement"
            },
            {
                text: "3. I ___ it will help.",
                options: ["sure", "assure", "think"],
                answer: "think" 
            },
            {
                text: "4. Read the information ___ not quickly.",
                options: ["beautifully", "fluently", "slowly"],
                answer: "slowly"
            },
            {
                text: "5. Send me the results ___ you go home, not after.",
                options: ["when", "before", "between"],
                answer: "before"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'living_together_topic',
        title: 'Đề 8: Living Together',
        questions: [
            {
                text: "1. I ___ in an apartment near the city centre.",
                options: ["go", "live", "walk"],
                answer: "live"
            },
            {
                text: "2. I ___ it with my friend.",
                options: ["share", "drink", "hold"],
                answer: "share"
            },
            {
                text: "3. We are in the same ___.",
                options: ["door", "class", "chair"],
                answer: "class" 
            },
            {
                text: "4. We ___ to work.",
                options: ["drive", "smile", "say"],
                answer: "drive"
            },
            {
                text: "5. In the evening we like to ___ dinner.",
                options: ["hold", "cook", "melt"],
                answer: "cook"
            }
        ]
    },
    {
        id: 'holiday_day_topic',
        title: 'Đề 9: A Holiday Day',
        questions: [
            {
                text: "1. The water is ___.",
                options: ["sour", "clear", "see"],
                answer: "clear"
            },
            {
                text: "2. The ___ is out.",
                options: ["wind", "dust", "sun"],
                answer: "sun"
            },
            {
                text: "3. I have an ___ holiday.",
                options: ["tired", "enjoyable", "good"],
                answer: "enjoyable" 
            },
            {
                text: "4. After ___ so hard.",
                options: ["working", "sleeping", "eating"],
                answer: "working"
            },
            {
                text: "5. I hope to ___ your letter.",
                options: ["tell", "read", "forward"],
                answer: "read"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'shopping_day_topic',
        title: 'Đề 10: Shopping Day',
        questions: [
            {
                text: "1. I saw some shoes in the ___ of one store.",
                options: ["market", "window", "shoe"],
                answer: "window"
            },
            {
                text: "2. I didn't ___ it.",
                options: ["eat", "drink", "buy"],
                answer: "buy"
            },
            {
                text: "3. I buy some food at the ___.",
                options: ["classroom", "park", "market"],
                answer: "market" 
            },
            {
                text: "4. I ate ___.",
                options: ["watch", "door", "cake"],
                answer: "cake"
            },
            {
                text: "5. I ___ a program on TV.",
                options: ["ate", "saw", "watched"],
                answer: "watched"
            }
        ]
    },
    {
        id: 'a_trip_topic',
        title: 'Đề 11: A Trip',
        questions: [
            {
                text: "1. The weather is ___.",
                options: ["cheap", "expensive", "great"],
                answer: "great"
            },
            {
                text: "2. We are on the ___.",
                options: ["city", "countryside", "boat"],
                answer: "boat"
            },
            {
                text: "3. We eat dinner ___ we go to church.",
                options: ["after", "then", "before"],
                answer: "then" 
            },
            {
                text: "4. We are going to ___ around.",
                options: ["drive", "see", "talk"],
                answer: "drive"
            },
            {
                text: "5. I hope the weather isn't ___ hot.",
                options: ["too", "to", "on"],
                answer: "too"
            }
        ]
    }    , // <-- Đảm bảo có dấu phẩy ở cuối bộ câu hỏi trước đó
    {
        id: 'living_with_family_topic',
        title: 'Đề 12: Living with a Family',
        questions: [
            {
                text: "1. I am living with a family ___ the city.",
                options: ["next", "near", "under"],
                answer: "near"
            },
            {
                text: "2. The children are ___ to me.",
                options: ["cruel", "noisy", "friendly"],
                answer: "friendly"
            },
            {
                text: "3. Seamus and Agnes ___ speaking English with me.",
                options: ["read", "hold", "practise"],
                answer: "practise" 
            },
            {
                text: "4. Sometimes, I ___ Seamus and Agnes.",
                options: ["see", "read", "say"],
                answer: "read"
            },
            {
                text: "5. I hate the food, ___ yesterday I ate out.",
                options: ["then", "so", "also"],
                answer: "so"
            }
        ]
    },
    {
        id: 'perfect_gift_topic',
        title: 'Đề 13: The Perfect Gift',
        questions: [
            {
                text: "1. It is ___ what I like.",
                options: ["yet", "not", "just"],
                answer: "just"
            },
            {
                text: "2. And it is the perfect color, ___.",
                options: ["so", "too", "to"],
                answer: "too"
            },
            {
                text: "3. I am going to wear it ___ my birthday party.",
                options: ["to", "on", "at"],
                answer: "to" 
            },
            {
                text: "4. I will save you ___ cake.",
                options: ["many", "none", "some"],
                answer: "some"
            },
            {
                text: "5. ___ my love to everyone.",
                options: ["Give", "Hold", "Receive"],
                answer: "Give"
            }
        ]
    }

];