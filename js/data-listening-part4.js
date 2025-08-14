const listeningPart4Data = {
    part4: [
        // Cặp câu hỏi 1 (về cuốn sách)
        {
            topicId: 1, // ID để nhóm các câu hỏi cùng chủ đề
            question: "Why do many readers find the book interesting?",
            options: ["It avoids explaining abstract concepts.", "It uses simple language to describe complex ideas.", "It relies heavily on technical vocabulary."],
            answer: "It uses simple language to describe complex ideas."
        },
        {
            topicId: 1,
            question: "Why is the book so popular?",
            options: ["It is too long.", "It is similar to the previous book about the scientist.", "It is too difficult to understand."],
            answer: "It is similar to the previous book about the scientist."
        },
        // Cặp câu hỏi 2 (về thể thao)
        {
            topicId: 2,
            question: "What is this person's opinion on sports?",
            options: ["They bring people together", "They have a harmful effect", "They improve concentration"],
            answer: "They have a harmful effect"
        },
        {
            topicId: 2,
            question: "What is the importance of sports for students?",
            options: ["It is only useful for professional athletes.", "It distracts students from studying.", "Provides them with a balance in their lives"],
            answer: "Provides them with a balance in their lives"
        },
        // Cặp câu hỏi 3 (về series phim)
        {
            topicId: 3,
            question: "Why is this series so popular?",
            options: ["It has the consistent quality throughout.", "It was only available for a short time.", "It features unknown actors."],
            answer: "It has the consistent quality throughout."
        },
        {
            topicId: 3,
            question: "What is the current series industry affected by?",
            options: ["Actors now write most of the scripts themselves.", "Series are no longer produced for online platforms.", "Viewer habits influence the way that series are made."],
            answer: "Viewer habits influence the way that series are made."
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 3 CẶP CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            topicId: 4,
            question: "What is the importance of advertising?",
            options: ["It can help reach new customers", "It increases the product price", "It can build brand recognition"],
            answer: "It can help reach new customers"
        },
        {
            topicId: 4,
            question: "Why shouldn't we sponsor sports tournaments?",
            options: ["They are not always good for sport fans", "They can create unfair competition", "They are too expensive"],
            answer: "They are not always good for sport fans"
        },
        {
            topicId: 5,
            question: "What do these two famous writers have in common?",
            options: ["They both wrote in the same genre", "They have both been overlooked by academics.", "They both were born in the same country"],
            answer: "They have both been overlooked by academics."
        },
        {
            topicId: 5,
            question: "What is special about their works?",
            options: ["Their works are all based on real events", "It is not always easily for the meanings to be identified", "They use simple language and structure"],
            answer: "It is not always easily for the meanings to be identified"
        },
        {
            topicId: 6,
            question: "Why do residents oppose this plan?",
            options: ["It provides free public transportation for all residents", "It doesn't provide enough to promote alternatives to driving", "It increases the number of public parks in the area"],
            answer: "It doesn't provide enough to promote alternatives to driving"
        },
        {
            topicId: 6,
            question: "What difficulties is the city council having with this plan?",
            options: ["It is likely to meet resistance from local communities.", "The plan has already exceeded its budget by a large margin", "There is too much public support, making it hard to manage expectations"],
            answer: "It is likely to meet resistance from local communities."
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 6 CẶP CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            topicId: 7,
            question: "What should students do when choosing a career?",
            options: ["Focus only on the salary offered", "Choose the same career as their friends", "Be flexible and open minded"],
            answer: "Be flexible and open minded"
        },
        {
            topicId: 7,
            question: "What should students pay attention to when applying for jobs these days?",
            options: ["They are becoming more competitive", "Most jobs no longer require any qualifications", "Companies prefer handwritten applications"],
            answer: "They are becoming more competitive"
        },
        {
            topicId: 8,
            question: "How should people feel about cameras in the workplace?",
            options: ["People are unnecessarily worried about them", "People should feel uneasy", "Cameras should be banned"],
            answer: "People are unnecessarily worried about them"
        },
        {
            topicId: 8,
            question: "How should people feel about cameras in general?",
            options: ["People should feel reassured by their presence", "Cameras invade personal space", "People should feel paranoid"],
            answer: "People should feel reassured by their presence"
        },
        {
            topicId: 9,
            question: "What is special about his new novel?",
            options: ["It has been written in a different genre", "It is shorter and easier to read", "It is different from his earlier works"],
            answer: "It is different from his earlier works"
        },
        {
            topicId: 9,
            question: "What is the speaker's opinion of this writer?",
            options: ["He is a brilliant but slow writer", "He should listen to the critics before writing next novel", "He needs to change his writing style"],
            answer: "He should listen to the critics before writing next novel"
        },
        {
            topicId: 10,
            question: "What will this musician do in the near future?",
            options: ["He plans to release a new album", "He wants to collaborate with younger artists", "He will probably retire from singing"],
            answer: "He will probably retire from singing"
        },
        {
            topicId: 10,
            question: "What does the speaker think about his career in general?",
            options: ["He could have been more successful", "He regrets choosing his profession", "He believes he reached the peak too early"],
            answer: "He could have been more successful"
        },
        {
            topicId: 11,
            question: "What is the advantage of this new guide?",
            options: ["It includes detailed hotel reviews", "It focuses mainly on luxury travel", "It creates an adventure"],
            answer: "It creates an adventure"
        },
        {
            topicId: 11,
            question: "What is the limitation of this new guide?",
            options: ["It is only suitable for a particular generation", "It doesn't cover popular tourist attractions", "It is too expensive for most travelers"],
            answer: "It is only suitable for a particular generation"
        },
        {
            topicId: 12,
            question: "How has this research into happiness been responded to?",
            options: ["It has not been accurately reported by the media", "It has been completely ignored by the public", "It has led to immediate changes in government policy"],
            answer: "It has not been accurately reported by the media"
        },
        {
            topicId: 12,
            question: "What is the speaker's opinion on this research in general?",
            options: ["The research is unlikely to find a conclusive answer", "The research has already changed public attitudes", "The researchers are biased in their approach"],
            answer: "The research is unlikely to find a conclusive answer"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 6 CẶP CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            topicId: 13,
            question: "What attracts readers to this novel?",
            options: ["The chapters are very short and easy to read", "The book includes detailed historical facts", "The characters were interesting"],
            answer: "The characters were interesting"
        },
        {
            topicId: 13,
            question: "What is the speaker's opinion about this novel?",
            options: ["It's unlikely to appeal to international readers", "It needs major editing before publication", "It will establish the author's popularity"],
            answer: "It will establish the author's popularity"
        },
        {
            topicId: 14,
            question: "What helps writers focus more on writing?",
            options: ["Rely entirely on inspiration", "Work in noisy environments", "Create dedicated periods"],
            answer: "Create dedicated periods"
        },
        {
            topicId: 14,
            question: "What is a common mistake writers make when generating ideas?",
            options: ["Refusing to seek the advice of other people", "Writing ideas only in digital format", "Spending too much time researching grammar rules"],
            answer: "Refusing to seek the advice of other people"
        },
        {
            topicId: 15,
            question: "How is professionalism demonstrated at work?",
            options: ["Maintain the positive attitude", "Always agree with your manager", "Avoid giving feedback to colleagues"],
            answer: "Maintain the positive attitude"
        },
        {
            topicId: 15,
            question: "What is the public's view of current professionalism?",
            options: ["Our definition of it is changing", "Increase working hours", "Reduce opportunities for remote work"],
            answer: "Our definition of it is changing"
        },
        {
            topicId: 16,
            question: "How does creating each small plan help you?",
            options: ["They delay overall progress", "They increase your workload", "They help you make decisions"],
            answer: "They help you make decisions"
        },
        {
            topicId: 16,
            question: "How does creating a plan help you in general?",
            options: ["It guarantees immediate success", "It removes all risks from the process", "It requires you to set yourself certain limits"],
            answer: "It requires you to set yourself certain limits"
        },
        {
            topicId: 17,
            question: "What do people think about this promotion campaign?",
            options: ["It is too simple to be effective", "It is being ignored completely", "It is making exaggerated claims"],
            answer: "It is making exaggerated claims"
        },
        {
            topicId: 17,
            question: "What does the speaker think about this campaign?",
            options: ["It is too cheap to produce", "It is to similar to many existing products", "It is priced too low for its value"],
            answer: "It is to similar to many existing products"
        },
        {
            topicId: 18,
            question: "What is the speaker's opinion on this script?",
            options: ["The dialogues seems unrealistic.", "Detailed setting descriptions", "Strong emphasis on character growth"],
            answer: "The dialogues seems unrealistic."
        },
        {
            topicId: 18,
            question: "How do industries impact script production?",
            options: ["They provide more creative freedom to writers", "The new industry demands are negatively influencing script production", "They increase audience engagement significantly"],
            answer: "The new industry demands are negatively influencing script production"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 6 CẶP CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            topicId: 19,
            question: "How is this restaurant reviewed by customers?",
            options: ["The food was too exotic for locals", "The location is difficult to find", "The standard of service is not good"],
            answer: "The standard of service is not good"
        },
        {
            topicId: 19,
            question: "What should this restaurant do?",
            options: ["They need to focus only on online orders", "They should increase their prices for profit", "They need to make the customers feel valued and welcome"],
            answer: "They need to make the customers feel valued and welcome"
        },
        {
            topicId: 20,
            question: "How does she feel about working from home?",
            options: ["It gave her more free time than expected", "It helped her become more productive", "It wasn't as good as she expected"],
            answer: "It wasn't as good as she expected"
        },
        {
            topicId: 20,
            question: "What is her opinion on working from home in general?",
            options: ["It depends on your situation and personality", "It's better than working in an office for everyone", "It should be avoided whenever possible"],
            answer: "It depends on your situation and personality"
        },
        {
            topicId: 21,
            question: "What should you do to better control your short-term spending?",
            options: ["Monitor your spending for a weekly plan", "Use only cash instead of cards", "Avoid all unnecessary purchases entirely"],
            answer: "Monitor your spending for a weekly plan"
        },
        {
            topicId: 21,
            question: "What should you do to better control your long-term spending?",
            options: ["Stop spending on entertainment altogether", "Track every single expense daily", "Seek advice from someone who have experience"],
            answer: "Seek advice from someone who have experience"
        },
        {
            topicId: 22,
            question: "What is the way to have a good sleep according to the speaker?",
            options: ["Sleeping fewer hours increases deep sleep quality", "Blocking out noise and light is key", "Drinking coffee before bed helps relax the mind"],
            answer: "Blocking out noise and light is key"
        },
        {
            topicId: 22,
            question: "What is the speaker's view on insomnia in general?",
            options: ["Insomnia is caused only by physical health problems", "Most people with insomnia actually sleep too much", "The media overemphasize the subject"],
            answer: "The media overemphasize the subject"
        },
        {
            topicId: 23,
            question: "What is the speaker's opinion on modern scripts?",
            options: ["They reflect real-life conversations well.", "They are perfectly written and engaging.", "They seem unrealistic."],
            answer: "They seem unrealistic."
        },
        {
            topicId: 23,
            question: "How are they negatively influencing the industry?",
            options: ["It is negatively influencing script production.", "It is leading to more innovative ideas.", "It is allowing for more thorough script development."],
            answer: "It is negatively influencing script production."
        },
        {
            topicId: 24,
            question: "What is the benefit of this approach?",
            options: ["Be open to new ideas and changes", "It allows you to be more flexible", "Always follow the same approach"],
            answer: "It allows you to be more flexible"
        },
        {
            topicId: 24,
            question: "What is the main outcome of this method?",
            options: ["It rushes you through tasks quickly", "There is no correct answer", "It prevents you from making mistakes"],
            answer: "It prevents you from making mistakes"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 6 CẶP CÂU HỎI MỚI BẮT ĐẦU TỪ ĐÂY ===
        {
            topicId: 25,
            question: "What should people do to achieve their goals?",
            options: ["Spend more time on social media", "Organize their resources more effectively", "Creating more opportunities for diverse storytelling"],
            answer: "Organize their resources more effectively"
        },
        {
            topicId: 25,
            question: "What is the speaker's advice?",
            options: ["Encouraging students to embrace failure", "Get advice from someone they know who is experienced", "Creating more opportunities for diverse storytelling"],
            answer: "Get advice from someone they know who is experienced"
        },
        {
            topicId: 26,
            question: "What is a common criticism of the characters?",
            options: ["Lack of clear character motivations", "They are difficult to relate to", "Characters exhibit inconsistent behavior"],
            answer: "They are difficult to relate to"
        },
        {
            topicId: 26,
            question: "What is the main weakness of the script?",
            options: ["Incorporating more action scenes", "Strong character development", "It lacks originality"],
            answer: "It lacks originality"
        },
        {
            topicId: 27,
            question: "What is a potential downside of this popularity?",
            options: ["It can lead to a decrease in sales", "Series are damaged by overexposure", "New seasons will be produced due to great demand"],
            answer: "Series are damaged by overexposure"
        },
        {
            topicId: 27,
            question: "How can this affect the sport's image?",
            options: ["They can generate negative publicity for the sport", "Series are made without considering viewer feedback", "They have no effect on the sport's reputation"],
            answer: "They can generate negative publicity for the sport"
        },
        {
            topicId: 28,
            question: "How was the series initially received?",
            options: ["It caught the audience's attention from the start", "It didn't receive enough investment at the early stage", "It was overlooked by critics"],
            answer: "It caught the audience's attention from the start"
        },
        {
            topicId: 28,
            question: "What is a risk of this success?",
            options: ["Series are damaged by overexposure", "New seasons will be produced due to great demand", "It inspires young filmmakers to follow a new movie-making style"],
            answer: "Series are damaged by overexposure"
        },
        {
            topicId: 29,
            question: "What stands out about this production?",
            options: ["Its promotional campaign", "Its production techniques", "Its soundtrack"],
            answer: "Its production techniques"
        },
        {
            topicId: 29,
            question: "What is crucial for a film's success according to the speaker?",
            options: ["They should be released at the right time", "They should be made by famous actors", "They should have long durations"],
            answer: "They should be released at the right time"
        },
        {
            topicId: 30,
            question: "What is the speaker's main point about concentration?",
            options: ["Concentration depends mostly on environment", "Concentration depends on intelligence", "Concentration increases with age"],
            answer: "Concentration depends mostly on environment"
        },
        {
            topicId: 30,
            question: "What mistake do people often make regarding concentration?",
            options: ["People often fail to consider the limits of concentration", "Taking breaks is unnecessary for concentration", "People can concentrate endlessly if they try"],
            answer: "People often fail to consider the limits of concentration"
        }        , // <-- Đảm bảo có dấu phẩy ở cuối câu hỏi trước đó
        // === 8 CẶP CÂU HỎI CUỐI CÙNG ===
        {
            topicId: 31,
            question: "What is the speaker's view on these buildings?",
            options: ["They are not typical of modern buildings", "They are a standard feature of modern buildings", "They are very common in modern cityscapes"],
            answer: "They are not typical of modern buildings"
        },
        {
            topicId: 31,
            question: "What is a common characteristic of their design?",
            options: ["They often display a lack of ambition", "They often display excessive creativity", "They often prioritize beauty over function"],
            answer: "They often display a lack of ambition"
        },
        {
            topicId: 32,
            question: "How does the speaker describe the reading experience?",
            options: ["It is boring to read", "It is very exciting to read", "It is difficult to read"],
            answer: "It is very exciting to read"
        },
        {
            topicId: 32,
            question: "Who is the intended audience for this book?",
            options: ["It has been written for the general audience", "It has been written for experts in the field", "It has been written for a specific group of people"],
            answer: "It has been written for the general audience"
        },
        {
            topicId: 33,
            question: "What is the primary goal of this educational approach?",
            options: ["Finding a balance in their lives", "Prepare students for a competitive work environment", "Sacrificing personal well-being for career advancement"],
            answer: "Prepare students for a competitive work environment"
        },
        {
            topicId: 33,
            question: "What is the main benefit for students?",
            options: ["Provides them with a balance in their lives", "Encouraging students to embrace failure", "Learning in a competitive work environment"],
            answer: "Provides them with a balance in their lives"
        },
        {
            topicId: 34,
            question: "What is the main focus of this approach?",
            options: ["Disease prevention", "Injury treatment", "Health promotion"],
            answer: "Health promotion"
        },
        {
            topicId: 34,
            question: "How does it affect well-being?",
            options: ["It provides balance", "it creates imbalance", "It has no impact on well-being"],
            answer: "It provides balance"
        },
        {
            topicId: 35,
            question: "What was his readiness for higher education?",
            options: ["He was ready to start a higher education", "It is unclear if he was ready to start a higher education", "He wasn't ready to start a higher education"],
            answer: "He wasn't ready to start a higher education"
        },
        {
            topicId: 35,
            question: "What was the key lesson he learned?",
            options: ["How to be independent", "How to avoid independence", "How to depend on others"],
            answer: "How to be independent"
        },
        {
            topicId: 36,
            question: "What is the impact of this approach on the team?",
            options: ["The team members gain confidence", "The team members lose confidence", "The team members lack motivation"],
            answer: "The team members lose confidence"
        },
        {
            topicId: 36,
            question: "Who is best suited for this role?",
            options: ["Someone who can set a realistic goal", "Someone who sets unrealistic goals", "Someone who ignores goals"],
            answer: "Someone who can set a realistic goal"
        },
        {
            topicId: 37,
            question: "What was the main financial issue?",
            options: ["They were making too much money", "They were not concerned about money", "They were not making enough money"],
            answer: "They were not making enough money"
        },
        {
            topicId: 37,
            question: "What was his approach to policies?",
            options: ["He was disregarding all policies", "He was continuing policies", "He was introducing new policies"],
            answer: "He was continuing policies"
        },
        {
            topicId: 38,
            question: "What should people do in this situation?",
            options: ["They can ignore it", "They need to act quickly on it", "They need to think carefully about it"],
            answer: "They need to think carefully about it"
        },
        {
            topicId: 38,
            question: "How does this compare to the present?",
            options: ["They are different from how they have been these days", "They are uncertain about how they have been these days", "They are similar to how they have been these days"],
            answer: "They are similar to how they have been these days"
        }
    ]
};