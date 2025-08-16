const listeningData = {
    part1: [
        {
            question: "Who does she live with? / A woman is talking about her vacation. What is the relationship between Lisa and the speaker?",
            options: ["Best friends", "Cousins", "Sisters"],
            answer: "Best friends",
            audioSrc: "audio/part1/q1.mp3" // Đường dẫn file audio
        },
        {
            question: "Where did she go for the holiday? / Listen to the woman talking about her holiday plans. Where is she going next?",
            options: ["The east", "The north", "The south"],
            answer: "The south",
            audioSrc: "audio/part1/q2.mp3"
        },
        {
            question: "Jorge is calling his friend about their plan for the weekend. What time does the football match start?",
            options: ["3pm", "5pm", "1pm"],
            answer: "1pm",
            audioSrc: "audio/part1/q3.mp3"
        },
        {
            question: "Two friends are talking about their trip. What will the weather be like?",
            options: ["Cold and wet", "Hot and sunny", "Mild and dry"],
            answer: "Cold and wet",
            audioSrc: "audio/part1/q4.mp3"
        },
        {
            question: "A man and a woman are going shopping. What does he buy in the store?",
            options: ["A T-shirt", "A suit for the office", "A hat"],
            answer: "A suit for the office",
            audioSrc: "audio/part1/q5.mp3"
        },
        {
            question: "What time is the meeting?",
            options: ["4pm", "3pm", "2pm"],
            answer: "2pm",
            audioSrc: "audio/part1/q6.mp3"
        },
        {
            question: "A woman is calling her son. What time will the mother meet the son?",
            options: ["Six o'clock", "Two o'clock", "Three o'clock"],
            answer: "Three o'clock",
            audioSrc: "audio/part1/q7.mp3"
        },
                // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Which platform do you need to take if you want to travel to Edinburgh? / Listen to an announcement. Which platform to wait for the train?",
            options: ["Platform One", "Platform Two", "Platform Three"],
            answer: "Platform Two",
            audioSrc: "audio/part1/q8.mp3"
        },
        {
            question: "A man is talking about his eating habit. What time does he usually eat?",
            options: ["8 o'clock", "7 o'clock", "5 o'clock"],
            answer: "7 o'clock",
            audioSrc: "audio/part1/q9.mp3"
        },
        {
            question: "What will they bring to the picnic?",
            options: ["Drinks", "Food", "Snacks"],
            answer: "Food",
            audioSrc: "audio/part1/q10.mp3"
        },
        {
            question: "Doctor's office is calling about a change in the appointment. When is the new appointment?",
            options: ["Thursday 13th", "Friday 14th", "Wednesday 12th"],
            answer: "Thursday 13th",
            audioSrc: "audio/part1/q11.mp3"
        },
        {
            question: "Listen to Sarah talking about her hobby. What does she do in her free time?",
            options: ["Go to the beach and swim", "Go to theater and play sports", "Watch TV and read books"],
            answer: "Go to theater and play sports",
            audioSrc: "audio/part1/q12.mp3"
        },
        {
            question: "Where does she walk every night? / Listen to Anna talking about her routine. Where does Anna go for a walk every morning?",
            options: ["The park", "The college", "The beach"],
            answer: "The college",
            audioSrc: "audio/part1/q13.mp3"
        },
        {
            question: "What does the man enjoy on his vacation?",
            options: ["Hiking in the mountains", "Playing soccer", "Swimming in the sea"],
            answer: "Swimming in the sea",
            audioSrc: "audio/part1/q14.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "A man is talking about how he goes to work. Why does he prefer traveling by train?",
            options: ["Cheaper", "Comfortable", "Practical"],
            answer: "Practical",
            audioSrc: "audio/part1/q15.mp3"
        },
        {
            question: "Listening to a tour guide talking about Rock City. How old is the city?",
            options: ["1000 years", "2000 years", "1500 years"],
            answer: "1500 years",
            audioSrc: "audio/part1/q16.mp3"
        },
        {
            question: "What is his favorite teacher?",
            options: ["Miss Taylor", "Mr. Styles", "Miss Brown"],
            answer: "Miss Brown",
            audioSrc: "audio/part1/q17.mp3"
        },
        {
            question: "A man is reading the news about a housing development plan. How many new houses are going to be built?",
            options: ["1500", "2000", "2500"],
            answer: "2000",
            audioSrc: "audio/part1/q18.mp3"
        },
        {
            question: "A woman is talking about her plan for the holiday. What will she do during the holiday?",
            options: ["Go for a run", "Go for a bike ride", "Go for a walk"],
            answer: "Go for a walk",
            audioSrc: "audio/part1/q19.mp3"
        },
        {
            question: "A man wants to buy a new house. What is his biggest problem?",
            options: ["Finding the right house", "Persuading his family", "Getting the financing"],
            answer: "Persuading his family",
            audioSrc: "audio/part1/q20.mp3"
        },
        {
            question: "When do they meet each other?",
            options: ["On Thursday morning", "On Wednesday morning", "On monday morning"],
            answer: "On Thursday morning",
            audioSrc: "audio/part1/q21.mp3"
        },
        {
            question: "A girl is calling her mother. Which dress does she want?",
            options: ["Short and blue", "Long and white", "Long and red"],
            answer: "Long and red",
            audioSrc: "audio/part1/q22.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to a girl calling the cafe. Where did she ask the coffee shop to look for her lost item?",
            options: ["On the counter", "Near the door", "In the corner"],
            answer: "In the corner",
            audioSrc: "audio/part1/q23.mp3"
        },
        {
            question: "What A call B for?",
            options: ["to tell her he will be late", "explaining his tardiness", "informing her about his delay"],
            answer: "to tell her he will be late",
            audioSrc: "audio/part1/q24.mp3"
        },
        {
            question: "A man is talking about his holiday. How is he going to travel to the city?",
            options: ["By car", "By bus", "By train"],
            answer: "By train",
            audioSrc: "audio/part1/q25.mp3"
        },
        {
            question: "Where did they meet?",
            options: ["The back entrance", "The front entrance", "The side entrance"],
            answer: "The front entrance",
            audioSrc: "audio/part1/q26.mp3"
        },
        {
            question: "Listen to a writer talking about her job. What is her first job?",
            options: ["Writer", "Librarian", "Teacher"],
            answer: "Teacher",
            audioSrc: "audio/part1/q27.mp3"
        },
        {
            question: "Alice is calling her friend. What did she lose?",
            options: ["Book", "Phone", "Laptop"],
            answer: "Phone",
            audioSrc: "audio/part1/q28.mp3"
        },
        {
            question: "A woman is talking about her family's holidays. What did the family do last year?",
            options: ["Camping", "Beach trip", "Road trip"],
            answer: "Camping",
            audioSrc: "audio/part1/q29.mp3"
        },
        {
            question: "What is the way to exercise? / What is she going to do? / What does she do on her holidays?",
            options: ["Cycling", "Running", "Walking"],
            answer: "Walking",
            audioSrc: "audio/part1/q30.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to a voice message. How does Evan feel?",
            options: ["Happy", "Tired", "Sick"],
            answer: "Sick",
            audioSrc: "audio/part1/q31.mp3"
        },
        {
            question: "A woman is talking about her holiday plan. Where is she going on holidays?",
            options: ["The beach", "The mountains", "The city"],
            answer: "The mountains",
            audioSrc: "audio/part1/q32.mp3"
        },
        {
            question: "What career did he choose?",
            options: ["to work in business", "to become a teacher", "to become a researcher"],
            answer: "to work in business",
            audioSrc: "audio/part1/q33.mp3"
        },
        {
            question: "A woman is discussing with her team. How many chairs does she need?",
            options: ["25", "15", "20"],
            answer: "20",
            audioSrc: "audio/part1/q34.mp3"
        },
        {
            question: "Which room will they study in? / Where will the first lesson of computer science take place?",
            options: ["Room 301", "Room 101", "Room 203"],
            answer: "Room 301",
            audioSrc: "audio/part1/q35.mp3"
        },
        {
            question: "What does her sister drink? / Linda is talking about what she likes to eat. What does she have for lunch?",
            options: ["Coffee", "Juice", "Tea"],
            answer: "Tea",
            audioSrc: "audio/part1/q36.mp3"
        },
        {
            question: "Where will Luis meet Standar?",
            options: ["Bus station", "Outside the station", "Inside a restaurant"],
            answer: "Outside the station",
            audioSrc: "audio/part1/q37.mp3"
        },
        {
            question: "James is talking about his family members. In what way does his mother and his aunt alike?",
            options: ["They had similar hair styles", "They had similar eye colors", "They were both thin"],
            answer: "They were both thin",
            audioSrc: "audio/part1/q38.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Why does Douglas call Kay?",
            options: ["to ask for a favor", "to say thank you", "to discuss idea"],
            answer: "to say thank you",
            audioSrc: "audio/part1/q39.mp3"
        },
        {
            question: "What does he advise young people to do to save money?",
            options: ["Use public transportation", "Buy second-hand items", "Cook for yourself"],
            answer: "Cook for yourself",
            audioSrc: "audio/part1/q40.mp3"
        },
        {
            question: "Listen to David talking about the conference. How long did he talk in the speech?",
            options: ["10 minutes", "15 minutes", "20 minutes"],
            answer: "15 minutes",
            audioSrc: "audio/part1/q41.mp3"
        },
        {
            question: "How much does the flight in the morning cost?",
            options: ["250 pounds", "350 pounds", "500 pounds"],
            answer: "350 pounds",
            audioSrc: "audio/part1/q42.mp3"
        },
        {
            question: "The daughter is calling her father. What did she buy?",
            options: ["A dress", "A pair of shoes", "A blouse"],
            answer: "A dress",
            audioSrc: "audio/part1/q43.mp3"
        },
        {
            question: "How much does she think the bus fare will be?",
            options: ["£3", "£2.5", "£2"],
            answer: "£2.5",
            audioSrc: "audio/part1/q44.mp3"
        },
        {
            question: "Soobin is talking about his favorite room. What is Soobin's favorite room?",
            options: ["Kitchen", "Living room", "Bathroom"],
            answer: "Bathroom",
            audioSrc: "audio/part1/q45.mp3"
        },
        {
            question: "A man is talking about his family trip. What does the man's wife enjoy?",
            options: ["Photography", "Shopping", "Hiking"],
            answer: "Photography",
            audioSrc: "audio/part1/q46.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Tom is calling his mom. Who is visiting Tom this weekend?",
            options: ["His aunt and uncle", "His sister and children", "His cousin"],
            answer: "His sister and children",
            audioSrc: "audio/part1/q47.mp3"
        },
        {
            question: "Which sports is she good at?",
            options: ["Running", "Swimming", "Football"],
            answer: "Football",
            audioSrc: "audio/part1/q48.mp3"
        },
        {
            question: "Lucy is calling her friend. What is her sister like?",
            options: ["She is taller than Lucy", "They have similar interests", "She is very different from Lucy"],
            answer: "They have similar interests",
            audioSrc: "audio/part1/q49.mp3"
        },
        {
            question: "Where will they meet to take a bus to home? / Anna is calling her friend. Where will they meet?",
            options: ["At the bus stop", "At the park", "At the marketplace"],
            answer: "At the marketplace",
            audioSrc: "audio/part1/q50.mp3"
        },
        {
            question: "A tour guide is talking about birds' behaviors. What do birds do in the winter?",
            options: ["They stay together in groups for protection", "They fly south", "They hunt for food"],
            answer: "They stay together in groups for protection",
            audioSrc: "audio/part1/q51.mp3"
        },
        {
            question: "How many weeks have they been in India?",
            options: ["2 weeks", "4 weeks", "3 weeks"],
            answer: "2 weeks",
            audioSrc: "audio/part1/q52.mp3"
        },
        {
            question: "Two friends are talking with each other. What did they both buy?",
            options: ["Clothes", "Shoes", "Books"],
            answer: "Clothes",
            audioSrc: "audio/part1/q53.mp3"
        },
        {
            question: "A man and a woman are talking about their old school days. What was the man's favorite thing about school?",
            options: ["Math classes", "History classes", "Sports"],
            answer: "History classes",
            audioSrc: "audio/part1/q54.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to the conversation. Who is she taking a photo of?",
            options: ["The girl's team", "The boys' team", "The coaches"],
            answer: "The girl's team",
            audioSrc: "audio/part1/q55.mp3"
        },
        {
            question: "The woman is walking into a local store. How much are the cleaning products?",
            options: ["Two pounds", "One pound fifty", "Three pounds"],
            answer: "One pound fifty",
            audioSrc: "audio/part1/q56.mp3"
        },
        {
            question: "A customer is calling the hotline of a department store. Which number to press in order to buy a computer?",
            options: ["One", "Two", "Three"],
            answer: "Three",
            audioSrc: "audio/part1/q57.mp3"
        },
        {
            question: "Lily is talking about her daily routine. What does she do in the evening?",
            options: ["Does yoga", "Goes for a walk", "Watches TV"],
            answer: "Goes for a walk",
            audioSrc: "audio/part1/q58.mp3"
        },
        {
            question: "A man is calling his wife. Where do the couple meet?",
            options: ["At the restaurant", "At the station", "Outside a shop"],
            answer: "Outside a shop",
            audioSrc: "audio/part1/q59.mp3"
        },
        {
            question: "A man is calling his friend to meet for coffee. Where is the coffee shop located?",
            options: ["Opposite the gift shop", "In the shopping center", "Next to the bookstore"],
            answer: "Opposite the gift shop",
            audioSrc: "audio/part1/q60.mp3"
        },
        {
            question: "What do they need to repair for the building? / A woman is talking about her house. What is she going to change in their house?",
            options: ["The roof", "The windows", "The doors"],
            answer: "The windows",
            audioSrc: "audio/part1/q61.mp3"
        },
        {
            question: "What is the main reason he gets late?",
            options: ["Missed the train", "Overslept", "Forgot something"],
            answer: "Missed the train",
            audioSrc: "audio/part1/q62.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to a weather forecast. Where will the weather be best?",
            options: ["In the west", "In the south", "In the east"],
            answer: "In the east",
            audioSrc: "audio/part1/q63.mp3"
        },
        {
            question: "What advice do they need for decorating their living room? / Mary is talking to her friend about her new home. What does she ask her friend about?",
            options: ["Where to buy a new table", "Where to buy a sofa", "Where to buy curtains"],
            answer: "Where to buy a new table",
            audioSrc: "audio/part1/q64.mp3"
        },
        {
            question: "Listen to a student talking about his study. What course is the student going to take this year?",
            options: ["English", "Math", "Computer"],
            answer: "Computer",
            audioSrc: "audio/part1/q65.mp3"
        },
        {
            question: "A woman is talking to the police. What did she lose?",
            options: ["A wallet", "A phone", "A bag"],
            answer: "A bag",
            audioSrc: "audio/part1/q66.mp3"
        },
        {
            question: "Where does he want to go tomorrow?",
            options: ["The park", "The cinema", "The town hall"],
            answer: "The town hall",
            audioSrc: "audio/part1/q67.mp3"
        },
        {
            question: "A woman is talking about her weekends. What did she do last week?",
            options: ["Went out with friends", "Stayed at home", "Visited a café"],
            answer: "Stayed at home",
            audioSrc: "audio/part1/q68.mp3"
        },
        {
            question: "A man is talking to his friend. Why does he need to learn to drive?",
            options: ["To go on a road trip", "To take his family on vacations", "He has to drive to work"],
            answer: "He has to drive to work",
            audioSrc: "audio/part1/q69.mp3"
        },
        {
            question: "Listen to the director talking about sales of his company. How many copies of Freeze Frame magazine were sold?",
            options: ["Over 200,000 copies", "Over 300,000 copies", "Over 500,000 copies"],
            answer: "Over 300,000 copies",
            audioSrc: "audio/part1/q70.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to a teacher talking about meeting preparations. What is the teacher preparing for the meeting now?",
            options: ["Order the food", "Print the documents", "Arrange the seating"],
            answer: "Order the food",
            audioSrc: "audio/part1/q71.mp3"
        },
        {
            question: "A man is talking about the city concert. How will the concert end?",
            options: ["With a fireworks display", "With a famous singer", "With the city's favorite group"],
            answer: "With the city's favorite group",
            audioSrc: "audio/part1/q72.mp3"
        },
        {
            question: "How many weeks did they spend in India?",
            options: ["Three weeks", "Two weeks", "One week"],
            answer: "Two weeks",
            audioSrc: "audio/part1/q73.mp3"
        },
        {
            question: "A finance expert is giving advice. What shouldn't young people do?",
            options: ["Ask for more money", "Put money into the bank", "Buy in bulk"],
            answer: "Ask for more money",
            audioSrc: "audio/part1/q74.mp3"
        },
        {
            question: "How much can Max pay for the computer?",
            options: ["200 pounds", "250 pounds", "300 pounds"],
            answer: "250 pounds",
            audioSrc: "audio/part1/q75.mp3"
        },
        {
            question: "What's the cheapest computer in the shop?",
            options: ["135", "513", "153"],
            answer: "135",
            audioSrc: "audio/part1/q76.mp3"
        },
        {
            question: "A professor is talking to his student. What does the professor ask his student to do?",
            options: ["Submit a report", "Speak at the conference", "Write an essay"],
            answer: "Speak at the conference",
            audioSrc: "audio/part1/q77.mp3"
        },
        {
            question: "A mom is talking to her son. What does the son like to study?",
            options: ["Art", "Math", "Science"],
            answer: "Art",
            audioSrc: "audio/part1/q78.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Stephanie is looking for a job taking care of children. How old is she?",
            options: ["21", "25", "30"],
            answer: "21",
            audioSrc: "audio/part1/q79.mp3"
        },
        {
            question: "Where does she go shopping?",
            options: ["at a new shopping mall", "at a department store", "at a local market"],
            answer: "at a new shopping mall",
            audioSrc: "audio/part1/q80.mp3"
        },
        {
            question: "Where are they going to meet?",
            options: ["at the park", "at the station", "at the university"],
            answer: "at the park",
            audioSrc: "audio/part1/q81.mp3"
        },
        {
            question: "Listening to a man talking about his business trip. What does he like in Dubai?",
            options: ["He enjoys shopping", "He enjoys his job here", "He enjoys the weather"],
            answer: "He enjoys his job here",
            audioSrc: "audio/part1/q82.mp3"
        },
        {
            question: "What country will they study next semester?",
            options: ["Germany", "Spain", "France"],
            answer: "France",
            audioSrc: "audio/part1/q83.mp3"
        },
        {
            question: "What did the mother call her daughter to help her buy?",
            options: ["eggs", "bread", "milk"],
            answer: "eggs",
            audioSrc: "audio/part1/q84.mp3"
        },
        {
            question: "A man is talking about his trip. What did he enjoy last year?",
            options: ["Hiking", "Cycling", "Swimming"],
            answer: "Cycling",
            audioSrc: "audio/part1/q85.mp3"
        },
        {
            question: "A woman is talking about her job. How is being a writer different from other jobs?",
            options: ["She works 9 to 5", "She works at irregular times", "She works at a desk all day"],
            answer: "She works at irregular times",
            audioSrc: "audio/part1/q86.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Where did he find the key?",
            options: ["In the front door", "In the garage", "By the window"],
            answer: "In the front door",
            audioSrc: "audio/part1/q87.mp3"
        },
        {
            question: "A woman is calling her husband. What time is lunch ready?",
            options: ["3pm", "1pm", "2pm"],
            answer: "2pm",
            audioSrc: "audio/part1/q88.mp3"
        },
        {
            question: "Two friends are talking with each other. What did they both buy?",
            options: ["Books", "Clothes", "Shoes"],
            answer: "Clothes",
            audioSrc: "audio/part1/q89.mp3"
        },
        {
            question: "What color top is he going to buy?",
            options: ["Green", "Red", "Black"],
            answer: "Black",
            audioSrc: "audio/part1/q90.mp3"
        },
        {
            question: "A woman is talking about her usual Saturday routine. What does she usually do on Saturdays?",
            options: ["Goes shopping", "Sees her family", "Goes to a birthday party"],
            answer: "Sees her family",
            audioSrc: "audio/part1/q91.mp3"
        },
        {
            question: "Why was the trip to the museum delayed? / A tour guide is making an announcement. Why was the tour canceled?",
            options: ["Not enough people", "Bad weather", "Transportation issue"],
            answer: "Not enough people",
            audioSrc: "audio/part1/q92.mp3"
        },
        {
            question: "Jana is talking to her friend. What does Jana's sister look like?",
            options: ["Blonde", "Tall", "Short"],
            answer: "Short",
            audioSrc: "audio/part1/q93.mp3"
        },
        {
            question: "What is the issue with the train?",
            options: ["Not enough seats", "Accident", "Not running on time"],
            answer: "Not enough seats",
            audioSrc: "audio/part1/q94.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "What advice does she give to save money?",
            options: ["Put money into the bank", "Buy in bulk", "Use the public transport"],
            answer: "Use the public transport",
            audioSrc: "audio/part1/q95.mp3"
        },
        {
            question: "How does the man usually go to work?",
            options: ["By car", "By plane", "By train"],
            answer: "By car",
            audioSrc: "audio/part1/q96.mp3"
        },
        {
            question: "A woman is talking about her job. What encouraged her to become a scientist?",
            options: ["Her computer", "Her mother", "A large stone"],
            answer: "A large stone",
            audioSrc: "audio/part1/q97.mp3"
        },
        {
            question: "What time do they meet?",
            options: ["6.30pm", "8.00pm", "7.00pm"],
            answer: "6.30pm",
            audioSrc: "audio/part1/q98.mp3"
        },
        {
            question: "Jack is calling to invite a friend to his house. What color is Jack's house?",
            options: ["Black", "Red", "Green"],
            answer: "Red",
            audioSrc: "audio/part1/q99.mp3"
        },
        {
            question: "Where should Dan turn right?",
            options: ["At the hospital", "At the traffic lights", "At the Mail Street"],
            answer: "At the traffic lights",
            audioSrc: "audio/part1/q100.mp3"
        },
        {
            question: "What was David's last job?",
            options: ["An electrician", "A doctor", "A teacher"],
            answer: "An electrician",
            audioSrc: "audio/part1/q101.mp3"
        },
        {
            question: "Jack is phoning his mom. What does Jack need to buy for his sister?",
            options: ["Clothes", "Chocolates", "A toy"],
            answer: "Chocolates",
            audioSrc: "audio/part1/q102.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "The woman is discussing her new exercise routine. How much time does she spend cycling?",
            options: ["45 minutes", "35 minutes", "60 minutes"],
            answer: "35 minutes",
            audioSrc: "audio/part1/q103.mp3"
        },
        {
            question: "A woman is talking about shopping places. Where is she going to go shopping?",
            options: ["At the mall", "At a boutique", "At a new shopping center"],
            answer: "At a new shopping center",
            audioSrc: "audio/part1/q104.mp3"
        },
        {
            question: "How long does it take to get to the station?",
            options: ["20 minutes", "15 minutes", "25 minutes"],
            answer: "20 minutes",
            audioSrc: "audio/part1/q105.mp3"
        },
        {
            question: "How much is the coffee?",
            options: ["6.99", "5.99", "4.99"],
            answer: "4.99",
            audioSrc: "audio/part1/q106.mp3"
        },
        {
            question: "A woman is talking about her favorite film on the radio. What film did she recommend?",
            options: ["Action film", "Romantic film", "Comedy film"],
            answer: "Action film",
            audioSrc: "audio/part1/q107.mp3"
        },
        {
            question: "Listen to Marry talking to Jane while waiting for James. What did they decide to do?",
            options: ["Cancel the meeting", "Having the meeting without him", "Wait for him longer"],
            answer: "Having the meeting without him",
            audioSrc: "audio/part1/q108.mp3"
        },
        {
            question: "Listen to a radio man talking about a new popular song. Which is the most attractive part of the song?",
            options: ["The melody", "The rhythm", "The words"],
            answer: "The words",
            audioSrc: "audio/part1/q109.mp3"
        },
        {
            question: "Listen to a nutrition expert. What time is the best for children to eat fruit?",
            options: ["In the morning", "In the afternoon", "In the evening"],
            answer: "In the morning",
            audioSrc: "audio/part1/q110.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "A woman is talking about her family's weekend. What does the family do most weekends?",
            options: ["Go for a walk", "Go to the beach", "Visit relatives"],
            answer: "Go for a walk",
            audioSrc: "audio/part1/q111.mp3"
        },
        {
            question: "Vincent is calling James. Why does Vincent call James?",
            options: ["Invite him to a party", "Suggest a drink", "Ask for help"],
            answer: "Suggest a drink",
            audioSrc: "audio/part1/q112.mp3"
        },
        {
            question: "Listen to a tour guide introducing the tour. Where will tea be served?",
            options: ["In the park", "The hotel", "The river boat"],
            answer: "The river boat",
            audioSrc: "audio/part1/q113.mp3"
        },
        {
            question: "Two colleagues talk about meeting. When do they want to meet?",
            options: ["Monday", "Wednesday", "Tuesday"],
            answer: "Tuesday",
            audioSrc: "audio/part1/q114.mp3"
        },
        {
            question: "Samia is going to meet her friend. What time are they going to meet?",
            options: ["9:30", "11:00", "10:00"],
            answer: "10:00",
            audioSrc: "audio/part1/q115.mp3"
        },
        {
            question: "Listen to the announcement. When does the train leave the station?",
            options: ["9:30", "9:00", "9:15"],
            answer: "9:15",
            audioSrc: "audio/part1/q116.mp3"
        },
        {
            question: "When is the assignment due?",
            options: ["on Friday afternoon", "on Saturday morning", "on Sunday morning"],
            answer: "on Saturday morning",
            audioSrc: "audio/part1/q117.mp3"
        },
        {
            question: "What will she do?",
            options: ["Go to work", "Go for a drive", "Stay home"],
            answer: "Go for a drive",
            audioSrc: "audio/part1/q118.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "What time should they meet at the library? / Two people are talking about meeting for dinner. What time does Ahmed meet Rose?",
            options: ["8:00 PM", "Quarter to eight", "7:30 PM"],
            answer: "Quarter to eight",
            audioSrc: "audio/part1/q119.mp3"
        },
        {
            question: "Why does the woman return the dress?",
            options: ["Because of its color", "Because of its size", "Because of its shape"],
            answer: "Because of its size",
            audioSrc: "audio/part1/q120.mp3"
        },
        {
            question: "What is this building currently used for?",
            options: ["A restaurant", "A pharmacy", "A department store"],
            answer: "A department store",
            audioSrc: "audio/part1/q121.mp3"
        },
        {
            question: "How does she go to school?",
            options: ["She drives", "She takes the bus", "She walks"],
            answer: "She walks",
            audioSrc: "audio/part1/q122.mp3"
        },
        {
            question: "A man is describing his school. What color is the teacher's building?",
            options: ["Green", "Blue", "White"],
            answer: "White",
            audioSrc: "audio/part1/q123.mp3"
        },
        {
            question: "How much are the eggs?",
            options: ["2 pounds", "3 pounds", "1.50 pounds"],
            answer: "1.50 pounds",
            audioSrc: "audio/part1/q124.mp3"
        },
        {
            question: "A woman is talking about her job. What encouraged her to become a scientist?",
            options: ["Her mother's support", "A large stone", "A book she read"],
            answer: "A large stone",
            audioSrc: "audio/part1/q125.mp3"
        },
        {
            question: "A boy is talking about his cat. What does he feed the cat?",
            options: ["Mice", "Fish", "Birds"],
            answer: "Fish",
            audioSrc: "audio/part1/q126.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "A man calls the teleshop. What is the teleshop number?",
            options: ["201030", "102030", "301020"],
            answer: "201030",
            audioSrc: "audio/part1/q127.mp3"
        },
        {
            question: "A man and woman are discussing their plans for the evening. What do the man and woman decide to do in the evening?",
            options: ["Go to the movies", "Make plans later", "Stay at home"],
            answer: "Make plans later",
            audioSrc: "audio/part1/q128.mp3"
        },
        {
            question: "A man is talking about his jobs. What does the man want to do next?",
            options: ["Become a history teacher", "Become a writer", "Become a chef"],
            answer: "Become a writer",
            audioSrc: "audio/part1/q129.mp3"
        },
        {
            question: "What did he leave at a friend's house? / What did the man forget?",
            options: ["Wallet", "Phone", "Glasses"],
            answer: "Glasses",
            audioSrc: "audio/part1/q130.mp3"
        },
        {
            question: "A man is giving directions to a friend about how to get to the football club. The football club is near?",
            options: ["A river", "A park", "A shopping mall"],
            answer: "A park",
            audioSrc: "audio/part1/q131.mp3"
        },
        {
            question: "Listen to an actor discussing his hobbies. What does the actor like to do in his free time?",
            options: ["Drawing", "Watching movies", "Playing video games"],
            answer: "Drawing",
            audioSrc: "audio/part1/q132.mp3"
        },
        {
            question: "Listen to the speaker talking about their weekly schedule. When is the meeting scheduled?",
            options: ["Monday morning", "Friday afternoon", "Wednesday afternoon"],
            answer: "Wednesday afternoon",
            audioSrc: "audio/part1/q133.mp3"
        },
        {
            question: "An author is talking about her daily routine. When does she usually write?",
            options: ["In the afternoons", "In the mornings", "At night"],
            answer: "In the afternoons",
            audioSrc: "audio/part1/q134.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Lucy is calling her brother. What does the brother have to drink?",
            options: ["Tea", "Water", "Coffee"],
            answer: "Water",
            audioSrc: "audio/part1/q135.mp3"
        },
        {
            question: "What is she talking about?",
            options: ["Her journey to work", "Her weekend plans", "Her favorite hobby"],
            answer: "Her journey to work",
            audioSrc: "audio/part1/q136.mp3"
        },
        {
            question: "A tour guide is talking about the vacation list of activities. What can people do in the afternoon?",
            options: ["Visit museums", "Play golf", "Go swimming"],
            answer: "Play golf",
            audioSrc: "audio/part1/q137.mp3"
        },
        {
            question: "What does her sister drink? / Linda is talking about what she likes to eat. What does she have for lunch?",
            options: ["Tea", "Juice", "Coffee"],
            answer: "Tea",
            audioSrc: "audio/part1/q138.mp3"
        },
        {
            question: "A man is talking about the environment of the countryside. What is the main cause of poor air quality?",
            options: ["Factories", "Cars", "Fires from the countryside"],
            answer: "Fires from the countryside",
            audioSrc: "audio/part1/q139.mp3"
        },
        {
            question: "What area is he describing?",
            options: ["A shopping district", "A university area", "A residential area"],
            answer: "A residential area",
            audioSrc: "audio/part1/q140.mp3"
        },
        {
            question: "What did she like best about the film?",
            options: ["the mountain scenes", "the action scenes", "the ending"],
            answer: "the ending",
            audioSrc: "audio/part1/q141.mp3"
        },
        {
            question: "When will Anna meet her friend? / A man is calling his friend, Maria. When will he see her?",
            options: ["10am on Saturday", "8pm on Sunday", "9am on Sunday"],
            answer: "9am on Sunday",
            audioSrc: "audio/part1/q142.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Where does Malik want to go?",
            options: ["The town hall", "The library", "The park"],
            answer: "The town hall",
            audioSrc: "audio/part1/q143.mp3"
        },
        {
            question: "Listen to a woman explaining her morning routine to her friend. Why do women get up early?",
            options: ["To go to work", "To take care of their kids", "To have some quiet time"],
            answer: "To have some quiet time",
            audioSrc: "audio/part1/q144.mp3"
        },
        {
            question: "What is her favorite thing to do in her spare time?",
            options: ["watching a movie at home", "going to the theatre", "playing sports"],
            answer: "going to the theatre",
            audioSrc: "audio/part1/q145.mp3"
        },
        {
            question: "What is she going to do this afternoon?",
            options: ["Go on a city tour", "Visit a museum", "Relax at home"],
            answer: "Go on a city tour",
            audioSrc: "audio/part1/q146.mp3"
        },
        {
            question: "A person calls a friend about his new car. What is the price of the small car?",
            options: ["3,250 pounds", "3,550 pounds", "3,000 pounds"],
            answer: "3,250 pounds",
            audioSrc: "audio/part1/q147.mp3"
        },
        {
            question: "Where is library located?",
            options: ["On the left of the square", "Behind the square", "In front of the square"],
            answer: "On the left of the square",
            audioSrc: "audio/part1/q148.mp3"
        },
        {
            question: "Listen to a conversation between the teacher and a parent. What will the father do?",
            options: ["Change schools", "Arrange private classes", "Enroll in after-school programs"],
            answer: "Arrange private classes",
            audioSrc: "audio/part1/q149.mp3"
        },
        {
            question: "Where is the girl's office? / Listen to a tour guide. Where is the office located?",
            options: ["Opposite the hotel", "Next to the park", "In the shopping mall"],
            answer: "Opposite the hotel",
            audioSrc: "audio/part1/q150.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "Listen to the announcement from a travel agent representative. Why is the air travel cancelled?",
            options: ["Staff shortage", "Poor weather conditions", "Technical issues"],
            answer: "Poor weather conditions",
            audioSrc: "audio/part1/q151.mp3"
        },
        {
            question: "The train was delayed. What time does the train leave? / Listen to a man talking about their train journey. What time did the train depart?",
            options: ["9:00", "9:15", "9:30"],
            answer: "9:30",
            audioSrc: "audio/part1/q152.mp3"
        },
        {
            question: "A man is ordering a drink. What does he want?",
            options: ["Water", "Iced tea", "Beer"],
            answer: "Iced tea",
            audioSrc: "audio/part1/q153.mp3"
        },
        {
            question: "What is not original?",
            options: ["Furniture", "Home", "Bicycle"],
            answer: "Furniture",
            audioSrc: "audio/part1/q154.mp3"
        },
        {
            question: "Listen to the instructions of a university. Where is the main office?",
            options: ["in the basement", "on the first floor", "on the second floor"],
            answer: "on the first floor",
            audioSrc: "audio/part1/q155.mp3"
        },
        {
            question: "Anna is calling her brother Max. What does Anna do later in the afternoon?",
            options: ["Pick up the kids", "Stay late at the office", "Hang out with friends"],
            answer: "Stay late at the office",
            audioSrc: "audio/part1/q156.mp3"
        },
        {
            question: "How many people live in the town?",
            options: ["5,000", "10,000", "20,000"],
            answer: "10,000",
            audioSrc: "audio/part1/q157.mp3"
        },
        {
            question: "Why should he be a doctor?",
            options: ["With animals", "With people", "Alone"],
            answer: "With people",
            audioSrc: "audio/part1/q158.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            question: "A man is talking about his daily routine. What does he do after work?",
            options: ["Go home", "Go to the coffee shop", "Play football"],
            answer: "Play football",
            audioSrc: "audio/part1/q159.mp3"
        },
        {
            question: "Greg is talking about a working day in his life. How does he go to work?",
            options: ["By bus", "By car", "By bike"],
            answer: "By bus",
            audioSrc: "audio/part1/q160.mp3"
        },
        {
            question: "Listen to a principal talking about new school facilities. What new facility will the school have?",
            options: ["A new library", "A sports field", "A performance space"],
            answer: "A performance space",
            audioSrc: "audio/part1/q161.mp3"
        },
        {
            question: "Where do they go when they travel to India?",
            options: ["Go to the mountains", "Go to the park", "Go to the beach"],
            answer: "Go to the park",
            audioSrc: "audio/part1/q162.mp3"
        },
        {
            question: "Listen to a saleswoman talking about a property. Which room is the largest?",
            options: ["Living room", "Bedroom", "Kitchen"],
            answer: "Kitchen",
            audioSrc: "audio/part1/q163.mp3"
        },
        {
            question: "A woman shares her job with her friend. Why does she want to become a writer?",
            options: ["Help people", "Become famous", "Earn money"],
            answer: "Help people",
            audioSrc: "audio/part1/q164.mp3"
        },
        {
            question: "What did she advice for people who lack motivation at work?",
            options: ["Attend a time management workshop", "Request a transfer", "Take on additional responsibilities"],
            answer: "Request a transfer",
            audioSrc: "audio/part1/q165.mp3"
        },
        {
            question: "Why does she like the manager?",
            options: ["He was always strict", "He taught her a lot", "He was very friendly"],
            answer: "He taught her a lot",
            audioSrc: "audio/part1/q166.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 4 CÂU HỎI CUỐI CÙNG ===
        {
            question: "A tour guide is talking about the group's traveling schedule. Where will the group wait for the bus?",
            options: ["By the hotel's main entrance", "In the lobby", "At the train station"],
            answer: "By the hotel's main entrance",
            audioSrc: "audio/part1/q167.mp3"
        },
        {
            question: "A receptionist is checking the client list of a clinic. How many American clients are there?",
            options: ["Two", "One", "Three"],
            answer: "One",
            audioSrc: "audio/part1/q168.mp3"
        },
        {
            question: "A woman is talking to her coworker. When does the meeting start?",
            options: ["10.15", "10.30", "9.45"],
            answer: "10.15",
            audioSrc: "audio/part1/q169.mp3"
        },
        {
            question: "Adam is calling his friend. When will he need the computer?",
            options: ["Friday", "Thursday", "Tuesday"],
            answer: "Friday",
            audioSrc: "audio/part1/q170.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === CÁC CÂU HỎI BỔ SUNG ĐỂ HOÀN THIỆN CHEATSHEET ===
        {
            question: "A man is buying a new computer. What color is the light on the front?",
            options: ["Red", "Green", "Blue"],
            answer: "Blue",
            audioSrc: "audio/part1/q171.mp3"
        },
        {
            question: "Two friends are arranging to meet. Where is the supermarket located?",
            options: ["The South", "The East", "The North"],
            answer: "The North",
            audioSrc: "audio/part1/q172.mp3"
        },
        {
            question: "A student is talking about his assignment. How many pages are the instructions?",
            options: ["5 pages", "4 pages", "6 pages"],
            answer: "4 pages",
            audioSrc: "audio/part1/q173.mp3"
        },
        {
            question: "How long does the student's essay need to be?",
            options: ["10 pages", "20 pages", "15 pages"],
            answer: "15 pages",
            audioSrc: "audio/part1/q174.mp3"
        },
        {
            question: "A woman is calling her friend. How late will she be?",
            options: ["Five minutes", "Ten minutes", "Fifteen minutes"],
            answer: "Ten minutes",
            audioSrc: "audio/part1/q175.mp3"
        },
        {
            question: "How long is the train journey?",
            options: ["30 minutes", "50 minutes", "40 minutes"],
            answer: "40 minutes",
            audioSrc: "audio/part1/q176.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === CÁC CÂU HỎI BỔ SUNG VỀ SỐ LƯỢNG LỚN ===
        {
            question: "A tour guide is talking about a historic city. How old is the city?",
            options: ["1000 years", "1500 years", "2000 years"],
            answer: "1500 years",
            audioSrc: "audio/part1/q177.mp3"
        },
        {
            question: "A speaker is describing a town. How many people live in the town?",
            options: ["5,000", "15,000", "10,000"],
            answer: "10,000",
            audioSrc: "audio/part1/q178.mp3"
        },
        {
            question: "A man is reading news about a housing development plan. How many new houses are going to be built?",
            options: ["2500", "2000", "1500"],
            answer: "2000",
            audioSrc: "audio/part1/q179.mp3"
        },
        {
            question: "The director is talking about sales of his company. How many copies of the magazine were sold?",
            options: ["Over 200,000 copies", "Over 400,000 copies", "Over 300,000 copies"],
            answer: "Over 300,000 copies",
            audioSrc: "audio/part1/q180.mp3"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === CÁC CÂU HỎI BỔ SUNG ĐỂ LÀM RÕ CHEATSHEET ===
        {
            question: "A man is thirsty after playing sports. What does he want to drink?",
            options: ["Water", "Coffee", "Milk"],
            answer: "Water",
            audioSrc: "audio/part1/q181.mp3"
        },
        {
            question: "A man is ordering at a cafe on a hot day. What does he want?",
            options: ["Hot chocolate", "Iced tea", "Orange juice"],
            answer: "Iced tea",
            audioSrc: "audio/part1/q182.mp3"
        }
    ]
};