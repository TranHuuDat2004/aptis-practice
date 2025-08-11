// js/data-writing-club-analysis.js

const writingClubAnalysisData = {
    "book-club": {
        title: "Câu lạc bộ Sách (Book Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I have a lot of books in my house. I keep them in different places. There are many books put on the bookshelf, in the boxes, and under my bed. I like to read a book anywhere, so I always have <del>it</del> nearby.",
                correctedText: "I have a lot of books in my house. I keep them in different places. There are many books put on the bookshelf, in the boxes, and under my bed. I like to read a book anywhere, so I always have <strong>one</strong> nearby.",
                feedback: "Lỗi đại từ: Thay <code>it</code> bằng <strong>one</strong> để chỉ một cuốn sách bất kỳ, tránh lặp từ 'book'."
            },
            {
                part: "Part 3 - A",
                originalText: "I like your question. I usually read books in the evening after my busy day. I like to read <del>in my bed</del> where it is cozy and quiet. Reading helps me relax and learn new things. What kind of books do you like to read?",
                correctedText: "I like your question. I usually read books in the evening after my busy day. I like to read <strong>in bed</strong> where it is cozy and quiet. Reading helps me relax and learn new things. What kind of books do you like to read?",
                feedback: "Cấu trúc cố định: Cụm từ đúng là <code>in bed</code> (trên giường), không dùng sở hữu cách 'my bed'."
            },
            {
                part: "Part 3 - B",
                originalText: "That’s cool. I like action books because they are very <del>interesting story</del> and <del>it allows me to read more</del>. Besides, I usually read books about <del>document</del> <del>which is improving</del> my knowledge around the world. Sometimes, I enjoy reading technology books, <del>how computer work and use it</del>.",
                correctedText: "That’s cool. I like action books because they are very <strong>interesting stories</strong> and <strong>they allow me to read more</strong>. Besides, I usually read books about <strong>documents</strong> <strong>which improve</strong> my knowledge around the world. Sometimes, I enjoy reading technology books <strong>about how computers work and how to use them</strong>.",
                feedback: "Nhiều lỗi: Sai số ít/nhiều (stories, documents), sai đại từ (it → they), sai chia động từ (is improving → improve), và sai cấu trúc câu."
            },
            {
                part: "Part 3 - C",
                originalText: "I think people will read in the future. Reading is fun and good for the brain. Books have many stories and information. People like to learn new things and imagine. That’s why reading is very important.",
                isCorrect: true, // Đánh dấu câu này đã đúng
                feedback: "Câu trả lời này đã chính xác về ngữ pháp và nội dung, diễn đạt tốt ý kiến cá nhân."
            }
        ]
    },
    // --- THAY THẾ TOÀN BỘ OBJECT NÀY ---
    "gardening-club": {
        title: "Câu lạc bộ Làm vườn (Gardening Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I joined the garden club because I really like taking care of the trees. I always water my trees or flowers every day. I think it will be fun to meet new people <del>to share similar interests and share tips together</del>.",
                correctedText: "I joined the garden club because I really like taking care of the trees. I always water my trees or flowers every day. I think it will be fun to meet new people <strong>who share similar interests and exchange tips</strong>.",
                feedback: "Cấu trúc câu: Dùng mệnh đề quan hệ <code>who share</code> để mô tả 'new people' sẽ tự nhiên hơn. 'exchange tips' hay hơn 'share tips together' (tránh lặp từ 'share')."
            },
            {
                part: "Part 3 - A",
                originalText: "My garden is small but beautiful. I have some flowers like roses, tulips and mint. <del>Beside that</del>, <del>There</del> is also a small vegetable <del>where</del> I grow tomatoes and potatoes.",
                correctedText: "My garden is small but beautiful. I have some flowers like roses, tulips and mint. <strong>Besides that</strong>, <strong>there</strong> is also a small vegetable <strong>garden where</strong> I grow tomatoes and potatoes.",
                feedback: "Sai từ nối (Beside → Besides), lỗi viết hoa (There → there), và thiếu danh từ (vegetable garden)."
            },
            {
                part: "Part 3 - B",
                originalText: "Yes, many people in my country enjoy gardening. It’s common to see gardens with flowers, vegetables, and fruit trees. People can see the beauty of plants and also enjoy the views of their gardens.",
                isCorrect: true,
                feedback: "Câu trả lời này đã chính xác về ngữ pháp và nội dung, diễn đạt tốt ý kiến."
            },
            {
                part: "Part 3 - C",
                originalText: "My favorite season is summer because the weather is warm. That is <del>the great way go</del> to the beach and have some time together. <del>Morever</del>, I can travel <del>my favorite places</del> like Da Lat in order to see <del>a beautiful flowers</del> in <del>summer vacation</del>.",
                correctedText: "My favorite season is summer because the weather is warm. That is <strong>a great way to go</strong> to the beach and have some time together. <strong>Moreover</strong>, I can travel <strong>to my favorite places</strong> like Da Lat in order to see <strong>beautiful flowers</strong> in <strong>the summer vacation</strong>.",
                feedback: "Nhiều lỗi: Sai mạo từ (the → a), thiếu 'to' (way to go), sai chính tả (Morever → Moreover), thiếu giới từ (travel to), và lỗi mạo từ/số nhiều."
            }
        ]
    },// --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
    "english-club": {
        title: "Câu lạc bộ Tiếng Anh (English Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I often do many activities in my classroom. For example, I play many minigames including hot seats, guess the <del>people on the world</del>, write stories <del>under teacher intruction</del>. I <del>very happy</del> and learn new words and connect <del>many friend</del> in my class. English is a useful language.",
                correctedText: "I often do many activities in my classroom. For example, I play many minigames including hot seats, guess the <strong>people around the world</strong>, write stories <strong>under the teacher’s instruction</strong>. I <strong>am very happy</strong> and learn new words and connect <strong>with many friends</strong> in my class. English is a useful language.",
                feedback: "Nhiều lỗi: Sai giới từ (on → around), thiếu mạo từ/sở hữu cách (the teacher's), thiếu động từ 'to be' (am), thiếu giới từ (with), và sai số ít/số nhiều (friend → friends)."
            },
            {
                part: "Part 3 - A",
                originalText: "I learn English by watching movies and playing games. <del>Beside that</del>, I also talk to other people on social media or <del>online game</del>. I think it is very fun and easy to learn this way. I study for 1 hour a day, but sometimes <del>more and less</del>.",
                correctedText: "I learn English by watching movies and playing games. <strong>Besides that</strong>, I also talk to other people on social media or <strong>online games</strong>. I think it is very fun and easy to learn this way. I study for 1 hour a day, but sometimes <strong>more or less</strong>.",
                feedback: "Sai từ nối (Beside → Besides), sai số ít/nhiều (game → games), và sai cụm từ cố định (more and less → more or less)."
            },
            {
                part: "Part 3 - B",
                originalText: "I think English is popular because many people use it. It is easy to learn for a beginner. English can help us understand different <del>culture</del> and ideas. I <del>very like</del> English.",
                correctedText: "I think English is popular because many people use it. It is easy to learn for a beginner. English can help us understand different <strong>cultures</strong> and ideas. I <strong>really like</strong> English.",
                feedback: "Lỗi số ít/nhiều (culture → cultures) và dùng sai từ loại ('very' không đi với động từ, phải dùng trạng từ như 'really')."
            },
            {
                part: "Part 3 - C",
                originalText: "I use English every day. I speak English with my friends, family and teachers. I also write English for school. I like English because I can communicate with many people around the world.",
                isCorrect: true,
                feedback: "Câu trả lời này đã rất tốt, sử dụng ngữ pháp chính xác và diễn đạt rõ ràng, đúng trọng tâm câu hỏi."
            }
        ]
    },

    // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
    "computer-club": {
        title: "Câu lạc bộ Máy tính (Computer Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I usually use my computer to study at home from 7pm to 9pm. <del>Beside that</del>, I sometimes use <del>this</del> to <del>chat my friend</del>, <del>play game</del>, and listen to music after <del>finish studying</del>. I <del>very happy</del> when I <del>used</del> it.",
                correctedText: "I usually use my computer to study at home from 7pm to 9pm. <strong>Besides that</strong>, I sometimes use <strong>it</strong> to <strong>chat with my friend</strong>, <strong>play games</strong>, and listen to music after <strong>finishing studying</strong>. I <strong>am very happy</strong> when I <strong>use</strong> it.",
                feedback: "Nhiều lỗi cơ bản: Sai từ nối (Beside → Besides), sai đại từ (this → it), thiếu giới từ (chat with), sai số nhiều (game → games), sai dạng từ (finish → finishing), thiếu động từ 'to be' (am), và sai thì (used → use)."
            },
            {
                part: "Part 3 - A",
                originalText: "I think <del>computer maybe to hard understand</del> for older people. Therefore, you should teach <del>carefully your grandmother</del> basic computer skills like typing and <del>finding something internet</del>. Also, you can find some <del>course</del> or video tutorials for your grandmother.",
                correctedText: "I think <strong>computers may be too hard to understand</strong> for older people. Therefore, you should teach <strong>your grandmother carefully</strong> basic computer skills like typing and <strong>searching for things on the internet</strong>. Also, you can find some <strong>courses</strong> or video tutorials for your grandmother.",
                feedback: "Sai cấu trúc (may be too + adj + to V), sai trật tự từ (teach sb carefully), sai cụm từ (search for things on the internet), và sai số nhiều (course → courses)."
            },
            {
                part: "Part 3 - B",
                originalText: "The last time I used my computer was yesterday. I studied hard to prepare <del>the final exam</del>. After the test, I used it to <del>play game</del>.",
                correctedText: "The last time I used my computer was yesterday. I studied hard to prepare <strong>for the final exam</strong>. After the test, I used it to <strong>play games</strong>.",
                feedback: "Thiếu giới từ (prepare for) và sai số nhiều (game → games)."
            },
            {
                part: "Part 3 - C",
                originalText: "It is true that <del>computer are changed people behavior</del> such as work, study, and entertainment, but <del>they depend on them</del>. <del>They maybe lose their creative</del> and <del>become less outside activities</del>.",
                correctedText: "It is true that <strong>computers have changed people’s behavior</strong> such as work, study, and entertainment, but <strong>people depend on them</strong>. <strong>They may lose their creativity</strong> and <strong>become less active outdoors</strong>.",
                feedback: "Sai thì/cấu trúc (HTHT + sở hữu cách), không rõ chủ ngữ, sai từ loại (creative → creativity), và sai cấu trúc (less active outdoors)."
            },
            {
                part: "Part 3 - D",
                originalText: "Nowadays, many children use <del>computer</del> early. Although children learn <del>new thing</del> very soon, they <del>reduce connect with family</del>. <del>Beside that</del>, parents <del>maybe not controll</del> children, such as <del>using it fewer hours</del>. It is very harmful because children <del>can be made health issues</del>. I think that children should only use <del>computer</del> under adult supervision.",
                correctedText: "Nowadays, many children use <strong>computers</strong> early. Although children learn <strong>new things</strong> very soon, they <strong>become less connected with their family</strong>. <strong>Besides that</strong>, parents <strong>may not control</strong> children, such as <strong>limiting their screen time</strong>. It is very harmful because children <strong>can develop health issues</strong>. I think that children should only use <strong>computers</strong> under adult supervision.",
                feedback: "Nhiều lỗi: Sai số nhiều (computers, things), sai cấu trúc, sai từ nối, sai từ loại, và dùng từ không tự nhiên (made → develop health issues)."
            }
        ]
    },

    // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
    "home-living-club": {
        title: "Câu lạc bộ Nhà ở (Home Living Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I live in Ho Chi Minh City, the largest city in Vietnam. It’s a busy place with many shops and schools. I <del>very like</del> this city.",
                correctedText: "I live in Ho Chi Minh City, the largest city in Vietnam. It’s a busy place with many shops and schools. I <strong>really like</strong> this city.",
                feedback: "Dùng sai từ loại: 'Very' không đi với động từ. Cách đúng là dùng trạng từ <code>really like</code> hoặc <code>like... very much</code>."
            },
            {
                part: "Part 3 - A",
                originalText: "I feel happy to share the bedroom with my brother. He is my best friend. We do homework, play games and other activities. That is <del>the great time to spending</del> time together.",
                correctedText: "I feel happy to share the bedroom with my brother. He is my best friend. We do homework, play games and other activities. That is <strong>a great time to spend</strong> time together.",
                feedback: "Sai mạo từ và dạng động từ: Dùng <code>a</code> thay vì 'the' vì chưa xác định, và cấu trúc đúng là 'a great time to + V-inf'."
            },
            {
                part: "Part 3 - B",
                originalText: "I prefer living in the countryside. <del>It’s is</del> quiet and peaceful. The city <del>very busy</del>, noisy and crowded. The countryside has fresh air. It allows me to connect <del>nature</del>. I think the countryside is better for living.",
                correctedText: "I prefer living in the countryside. <strong>It’s</strong> quiet and peaceful. The city <strong>is very busy</strong>, noisy and crowded. The countryside has fresh air. It allows me to connect <strong>with nature</strong>. I think the countryside is better for living.",
                feedback: "Thừa động từ 'is' (It's is), thiếu động từ 'is' (city is very busy), và thiếu giới từ (connect with nature)."
            },
            {
                part: "Part 3 - C",
                originalText: "I agree with you. Old buildings can be used <del>to many things</del>. For example, <del>they maybe use</del> for the historic museum. This is a good idea to improve <del>financial</del> and <del>pay attend</del> to tourists.",
                correctedText: "I agree with you. Old buildings can be used <strong>for many things</strong>. For example, <strong>they may be used</strong> for the historic museum. This is a good idea to improve <strong>finance/income</strong> and <strong>attract / draw attention from</strong> tourists.",
                feedback: "Nhiều lỗi: Sai giới từ (used for), sai cấu trúc bị động (may be used), sai từ loại (financial → finance/income), và sai cụm từ (pay attention / attract tourists)."
            }
        ]
    },

    // --- THÊM CHỦ ĐỀ MỚI VÀO ĐÂY ---
    "food-club": {
        title: "Câu lạc bộ Ẩm thực (Food Club)",
        analysis: [
            {
                part: "Part 2",
                originalText: "I had meat <del>noddle</del> for lunch yesterday. I ate this with my friends <del>in</del> school. It was very <del>delicous</del>. We <del>have</del> a great time together.",
                correctedText: "I had meat <strong>noodles</strong> for lunch yesterday. I ate this with my friends <strong>at</strong> school. It was very <strong>delicious</strong>. We <strong>had</strong> a great time together.",
                feedback: "Nhiều lỗi cơ bản: Sai chính tả (noddle → noodles, delicous → delicious), sai giới từ (in → at school), và sai thì (have → had)."
            },
            {
                part: "Part 3 - A",
                originalText: "Yesterday, I had an amazing dinner with my family. It was truly the best meal I have ever had. The restaurant <del>very</del> beautiful, the food <del>very</del> delicious and the staff <del>very</del> friendly. I <del>hoped</del> to eat this the next time.",
                correctedText: "Yesterday, I had an amazing dinner with my family. It was truly the best meal I have ever had. The restaurant <strong>was very</strong> beautiful, the food <strong>was very</strong> delicious and the staff <strong>were very</strong> friendly. I <strong>hope</strong> to eat this the next time.",
                feedback: "Thiếu động từ 'to be' (was/were) trong các câu miêu tả và chia sai thì của động từ 'hope'."
            },
            {
                part: "Part 3 - B",
                originalText: "I prefer eating with friends. <del>It’s is</del> a great way to talk and share <del>their</del> stories. However, eating at home allows me to relax because I can eat food and watch my favorite film.",
                correctedText: "I prefer eating with friends. <strong>It is</strong> a great way to talk and share <strong>our</strong> stories. However, eating at home allows me to relax because I can eat food and watch my favorite film.",
                feedback: "Thừa động từ 'is' (It's is) và sai đại từ sở hữu (their → our)."
            },
            {
                part: "Part 3 - C",
                originalText: "I disagree <del>this</del> because higher taxes for unhealthy food can be <del>avoid people use</del> this. Many people usually use unhealthy food for relaxing, that is a gift for a busy day or <del>receive</del> a salary. I recommend they can create <del>short video</del> and upload <del>on</del> social media about unhealthy food <del>for</del> its health risk such as overweight, <del>have</del> many sickness… <del>They told</del> them to exercise to reduce their weight.",
                correctedText: "I disagree <strong>with this</strong> because higher taxes for unhealthy food can <strong>avoid people from using</strong> this. Many people usually use unhealthy food for relaxing, that is a gift for a busy day or <strong>when they receive</strong> a salary. I recommend they can create <strong>short videos</strong> and upload <strong>them on</strong> social media about unhealthy food <strong>and</strong> its health risk such as overweight, <strong>having</strong> many sicknesses… They <strong>can tell</strong> them to exercise to reduce their weight.",
                feedback: "Rất nhiều lỗi phức tạp: Sai giới từ (disagree with), sai cấu trúc (avoid sb from doing sth), câu không rõ ràng, sai dạng từ, và chia thì không hợp lý."
            }
        ]
    }
};