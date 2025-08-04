// js/data-listening.js

// Danh sách thô chứa tất cả các đáp án
const rawAnswers = [
    // --- Bộ 1 ---
    "To suggest a drink", "3250 pounds", "Phone", "Glasses", "One", "Bathroom",
    "Camping", "Art", "Go to the theater and play sport", "Where to buy a new table",
    "Practical", "Furniture", "Three",

    // --- Bộ 2 ---
    "Tea", "10.000", "The town hall", "First floor", "2.5 pounds", "Wednesday afternoon",
    "Opposite the hotel", "Outside the shop", "7:00 - ăn tối", "Play football",
    "The ending", "Residential area", "Persuading his family",

    // --- Bộ 3 ---
    "An electrician", "6:30", "350 pounds", "... he will be late", "Ten minutes",
    "Clothes", "Win", "With people", "Swimming in the sea", "Because of its size",
    "The drawer", "Department store", "Use the public transport",

    // --- Bộ 4 ---
    "Suggest to drink", "Long and red", "9 a.m Sunday", "Thursday 13th", "Outside the station",
    "Stayed at home", "Two weeks", "Opposite the hotel", "By the hotel’s main entrance",
    "Photography", "Play Golf", "The city’s favorite group", "Teacher",

    // --- BỘ 5 (MỚI) ---
    "Quarter to eight", "The market place", "21", "The park", "Fish", "Go walking",
    "Chocolate", "9:30", "In the east", "Not enough the people", "Opposite the gift shop",
    "River boat", "Kitchen",

    // --- BỘ 6 (MỚI) ---
    "2000", "3:00", "6:30", "Tea", "Sees her family", "Clothes", "Black",
    "On Saturday morning", "Speak at conference", "The South", "The words",
    "The mountain scenes", "A large stone",

    // --- BỘ 7 (MỚI) ---
    "Room 301", "1p.m", "20 10 30", "On the left of the square", "Over 300.000",
    "Camping", "Make plan later", "Iced tea", "Go to the park", "The girl’s team",
    "Cold and wet", "Have a meeting without him", "Platform 2",

    // --- BỘ 8 (MỚI) ---
    "250 pounds", "Food", "White", "A suit for office", "Walking", "He taught her a lot",
    "A writer", "Water", "History class", "Go on a city tour",
    "They have similar interests", "Go for a drive", "They stay in group for protection",

    // --- BỘ 9 (MỚI) ---
    "Sick", "20 & 40 minutes", "To say thank you", "His sister and children", "2:00",
    "Stay late office", "1.5 pounds", "The mountains", "Go cycling", "15 minutes",
    "Best friend", "To help people", "Poor weather condition",

    // --- BỘ 10 (MỚI) ---
    "1.5 pounds", "9:15", "She walks", "2:00 pm", "Go for a walk", "At the park",
    "Goes for a walk", "Tuesday", "To work in business", "Computer",
    "She works irregular time", "At a new shopping center", "Fire from the countryside",

    // --- BỘ 11 (MỚI) ---
    "A dress", "Order the food", "Cook for yourself", "20 cái ghế", "The front entrance",
    "In the corner", "The college", "Friday", "A performance space", "The windows",
    "France", "Drawing", "He enjoy his job here",

    // --- BỘ 12 (MỚI) ---
    "10:15", "Ask for more money", "Miss Brown", "Eggs", "10:00", "Stayed late at the office",
    "An action film", "In a townhouse", "By bus", "In the morning", "To have some quite time",
    "He has to drive to work", "Clothes",

    // --- BỘ 13 (MỚI) ---
    "A bag", "A computer", "5:30", "135", "5553920", "Four", "Cleaning",
    "Teaching", "A department store", "$ 4.99", "Adjust the schedule",
    "The main hall", "Shirt",

    // --- BỘ 14 (MỚI) ---
    "White", "Outside the station", "7:00", "Sunday", "Watch",
    "At a new shopping mall", "Blue", "A group of", "Black hair",
    "10 - 15 trang", "Not enough seat", "Photography", "Do exercise",

    // --- BỘ 15 (MỚI) ---
    "$ 50", "By the park", "In the bank", "6:40 a.m", "Shoes",
    "In the front door", "By car", "At the traffic lights", "Blue",
    "On the left of the square", "The service is slow", "The use of technology",
    "Measure the speed of the plant growth",

    // --- BỘ 16 (MỚI) ---
    "Thursday morning", "1500 years", "Red", "Short", "Goes running",
    "By train", "35 minutes", "Arrange the private classes for his son",
    "Go to the theater", "Football", "They were both thin", "In the afternoon",
    "Request a transfer",

    // --- BỘ 17 (CUỐI CÙNG) ---
    "Missed the train", "Her journey to work", "...457", "Thirty pounds", "See a film",
    "The North", "Go to the shops", "Look at the view", "Have coffee", "Books",
    "12 o’clock", "Exchange a shirt", "To study something"


    // Khi có bộ đề mới, bạn chỉ cần dán các đáp án vào đây, cách nhau bởi dấu phẩy
];

// Tự động tạo mảng object với số thứ tự tuần tự từ 1
const formattedListeningData = rawAnswers.map((answer, index) => {
    return {
        number: index + 1, // Bắt đầu từ 1
        answer: answer
    };
});

const listeningData = {
    // --- THÊM MỚI DỮ LIỆU câu 1-13 ---
    part1: formattedListeningData,


    // --- THÊM MỚI DỮ LIỆU câu 15 ---
    part15: [
        { id: 'topic1', title: '1. Politics', baseKey: 'B-W-M-B', story: 'Cả hai (B) - người Phụ nữ (W) và người Đàn ông (M) - đều (B) quan tâm đến chính trị.' },
        { id: 'topic2', title: '2. Arts', baseKey: 'W-M-B-M', story: 'Người Phụ nữ (W) - và người Đàn ông (M) - cả hai (B) - Muốn (M) học hội họa.' },
        { id: 'topic3', title: '3. Audition', baseKey: 'W-M-B-B', story: 'Người Phụ nữ (W) - và người Đàn ông (M) - cả hai (B) - bắt đầu Buổi (B) thử giọng.' },
        { id: 'topic4', title: '4. Information and technology', baseKey: 'W-M-M-B', story: 'Người Phụ nữ (W) - và người Đàn ông (M) - Muốn (M) - Biết (B) thêm về công nghệ thông tin.' },
        { id: 'topic5', title: '5. Local cultural center', baseKey: 'W-B-M-M', story: 'Người Phụ nữ (W) - Biết (B) - người Đàn ông (M) - đừng một Mình (M) ở trung tâm văn hóa địa phương.' },
        { id: 'topic6', title: '6. Community design', baseKey: 'B-M-W-W', story: 'Boss (B) - Muốn (M) - Wăn (W) - Wện (W).' },
        { id: 'topic7', title: '7. University and technology', baseKey: 'B-M-W-M', story: 'Boss (B) - Muốn (M) - Website (W) trường đại học công nghệ- được tạo Miễn (M) phí.' },
        { id: 'topic8', title: '8. Urban farming', baseKey: 'M-W-W-B', story: 'Người Đàn ông (M) và người Phụ nữ (W) - Wyết (W) định - Bàn bạc (B) về Urban farming.' },
        { id: 'topic9', title: '9. The subject of beauty', baseKey: 'M-W-B-W', story: 'Người Đàn ông - (M) và người Phụ nữ (W) - cả hai (B) - đều Wan (W) tâm đến sắc đẹp.' },
        { id: 'topic10', title: '10. Internet', baseKey: 'M-B-W-B', story: 'Về Internet: Man (M) biết (B) trước, Woman (W) biết (B) sau.' },
        { id: 'topic11', title: '11. Music and Singers', baseKey: 'W-B-M-B', story: 'Về Music and Singers: Woman (W) biết (B) trước, Man (M) biết (B) sau.' },
        // --- CHỦ ĐỀ 12 ĐƯỢC CẬP NHẬT ---
        {
            id: 'topic12',
            title: '12. Changes in the work place (Trường hợp đặc biệt)',
            baseKey: 'M-W-B-M',
            story: 'Người Đàn ông (M) và người Phụ nữ (W) - cả hai (B) - đều Muốn (M) có nhiều thay đổi ở nơi làm việc.',
            isFixed: true // Thêm thuộc tính này để đánh dấu là key cố định
        }
    ],

    part14: [
        {
            id: 'listening14_environment',
            title: 'Bảo vệ môi trường',
            audioSrc: 'audio/listening-part14/1.mp3',
            fragments: [
                "Does not use commercial cleaning products",
                "Give away used items",
                "Buy environmentally friendly products",
                "Reuse containers for storing food"
            ],
            key: '1-2-3-4',
            // Cập nhật lại phần script với thẻ <strong>
            script: `
                <p><strong>Person A:</strong> "<strong>I stopped buying commercial cleaning products altogether.</strong> Most of them are filled with harsh chemicals that are terrible for the environment and probably for us, too. Now, I make my own cleaning solutions. Vinegar, baking soda, and a little lemon juice can handle pretty much anything around the house. It's cheaper, safer, and I don't feel like I'm dumping toxins down the drain every time I clean,..."</p>
                <p><strong>Person B:</strong> "You know, it amazes me how much we throw away without thinking. <strong>I've started giving away my old clothes and furniture instead of dumping them.</strong> Think about it, someone else could really use what we consider junk. It's such a simple thing, but it keeps stuff out of landfills and helps people out. The more we share, the less we waste,..."</p>
                <p><strong>Person C:</strong> "I think one of the biggest ways we can protect the environment is by changing what we buy. <strong>I only purchase products that are sustainably sourced or made from recycled materials.</strong> Every dollar we spend is like casting a vote for the kind of world we want. Choosing eco-friendly products is a way to push back against waste and pollution,..."</p>
                <p><strong>Person D:</strong> "<strong>I've started reusing containers for storing food.</strong> I was tired of buying plastic wrap and bags every month, just to toss them out after one use. You don't realize how much waste you produce until you try cutting it down. Now, I use glass jars and old containers to store leftovers, and it works just as well. Honestly, it makes me feel a little less guilty about all the plastic in my life,..."</p>
            `
        },

        {
            id: 'listening14_environment_2',
            title: 'Bảo vệ môi trường (tiếp theo)',
            audioSrc: 'audio/listening-part14/2.mp3',
            fragments: [
                "Using less electricity",
                "Not driving to work",
                "Shopping online",
                "Using less water"
            ],
            key: '1-2-3-4', // Key theo thứ tự A, B, C, D trong audio
            script: `
                <p><strong>Speaker A:</strong> "I try to help the environment by <strong>using less electricity at home</strong>. I always turn off the lights when I don't need them and make sure my appliances are energy efficient.. I've also started unplugging things like chargers when I'm not using them because they still use power. This helps lower my electricity bill and reduces my impact on the planet,..."</p>
                <p><strong>Speaker B:</strong> "To protect the environment, <strong>I don't drive to work anymore</strong>. Instead, I walk when the weather is nice, or I take the bus. It's not only better for the planet, but it also keeps me more active and I enjoy the fresh air. By not driving, I use less fuel and help reduce air pollution in the city."</p>
                <p><strong>Speaker C:</strong> "I've decided to <strong>shop online as a way to protect the environment</strong>. By ordering things online, I don't need to drive to the store, which means I'm using less fuel and producing less pollution. Many companies now offer eco-friendly packaging, and I try to buy from them whenever possible. It's convenient for me, and I feel like I'm doing something good for the environment at the same time."</p>
                <p><strong>Speaker D:</strong> "I try to <strong>save water every day as a way to protect the environment</strong>. For example, I take shorter showers, turn off the tap while brushing my teeth, and use less water when washing dishes. I've also installed special taps and showerheads that use less water but still work well. Water is a limited resource... that's why I think it's important for all of us to be careful and not waste it."</p>
            `
        },

        {
            id: 'listening14_online_shopping',
            title: 'Mua sắm online',
            audioSrc: 'audio/listening-part14/3.mp3',
            fragments: [
                "It saves time",
                "It is cheaper",
                "There are more choices",
                "The products are delivered"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "I've always been a bit short on time, especially with my busy work schedule. That's why I prefer shopping online, it really helps me <strong>save so much time</strong>. Instead of spending hours in stores, I can quickly browse through different websites, compare prices, and make my purchase in just a few clicks..."</p>
                <p><strong>Person B:</strong> "For me, one of the main reasons I shop online is because <strong>it's usually more affordable</strong>. I've noticed that many online stores offer discounts, and I can often find <strong>cheaper prices</strong> than I would in physical shops. Plus, I don't have to spend money on transportation or parking..."</p>
                <p><strong>Person C:</strong> "What I love about shopping online is the incredible variety of products available. When I go to a store, I'm limited to what's in stock, but online, there's <strong>so much more choice</strong>. I can find different brands, styles, and even products that aren't available locally..."</p>
                <p><strong>Person D:</strong> "The biggest advantage of shopping online for me is the fact that I don't have to leave my house. I love how <strong>products get delivered straight to my doorstep</strong>, especially when I order something heavy or large. It saves me the hassle of carrying things back from the store..."</p>
            `
        },
        {
            id: 'listening14_listening_to_music',
            title: ' Nghe nhạc',
            audioSrc: 'audio/listening-part14/4.mp3',
            fragments: [
                "Listen to music to relax",
                "Listen to music while studying",
                "Listen to music while singing",
                "Listen to music after waking up"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "I've always found music to be the best way to unwind after a long day. <strong>I like to listen to music when I want to relax</strong>. It helps me switch off from everything, whether I'm lying on the couch or taking a walk in the park. I usually go for something soft and calming, like acoustic or classical music..."</p>
                <p><strong>Person B:</strong> "<strong>For me, music is a must when I'm studying</strong>. I know some people find it distracting, but I actually concentrate better when there's music playing in the background. I usually pick something without lyrics, like instrumental or electronic music, so it doesn't interrupt my thinking. It keeps me focused..."</p>
                <p><strong>Person C:</strong> "I've always loved singing, so <strong>I listen to music whenever I feel like practicing my vocals</strong>. It's not just about listening for fun. I like to sing along and try to improve my voice. Whether it's pop songs or karaoke tracks, I find it really enjoyable and a great way to express myself..."</p>
                <p><strong>Person D:</strong> "<strong>I like to start my day with music as soon as I wake up</strong>. It helps me feel energized and ready for whatever lies ahead. As soon as I get out of bed, I turn on my favorite playlist, which is usually full of upbeat, happy songs. It's like my morning ritual..."</p>
            `
        },
        {
            id: 'listening14_outdoor_activities',
            title: ' Hoạt động ngoài trời',
            audioSrc: 'audio/listening-part14/5.mp3',
            fragments: [
                "Horse riding",
                "Going for a run",
                "Walking",
                "Mountain biking"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "I've been involved in different sports over the years, but one thing that stands out for me is <strong>horse riding</strong>. There's something about being with horses that feels both calming and exciting..."</p>
                <p><strong>Person B:</strong> "When it comes to staying active, I've tried lots of different things. But I've found that I get the most out of a <strong>good jog</strong>. It's a great way to keep my energy levels up, and I enjoy how it clears my mind..."</p>
                <p><strong>Person C:</strong> "I prefer something more low-key and calming when it comes to exercise. I'm not really into intense activities like running or biking. Instead, I find <strong>walking</strong> to be the perfect balance for me..."</p>
                <p><strong>Person D:</strong> "I've always been drawn to outdoor activities, especially those that get my heart racing. While some of my friends prefer running or hiking, I find nothing more exciting than <strong>mountain biking</strong>..."</p>
            `
        },
        {
            id: 'listening14_places_to_run',
            title: ' Nơi để chạy bộ',
            audioSrc: 'audio/listening-part14/6.mp3',
            fragments: [
                "On the street",
                "At the seaside",
                "On the running track",
                "In the fitness centre"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "The city gives me new things to see every time I run. I like the busy streets and different buildings around me. Stopping at traffic lights and watching out for people helps me stay alert. <strong>Running in the street</strong> is what I love most..."</p>
                <p><strong>Person B:</strong> "The clean air by the sea makes me feel good and helps clear my head. I enjoy feeling the sand under my feet, which helps make my legs stronger. The sound of the waves makes a nice beat for my run. There's nothing better than <strong>running by the seaside</strong>."</p>
                <p><strong>Person C:</strong> "The track lets me know exactly how far I've run and helps me set goals. The smooth surface is better for my knees and ankles. There are no bumps or things in the way, so I can focus on how I run. For me, the <strong>running track</strong> is the best place to run."</p>
                <p><strong>Person D:</strong> "Inside, I don't have to worry about it being too hot, cold, or rainy. I can use the treadmill and other machines to mix up my workout. The soft surface of the treadmill is easier on my knees than the road. I like <strong>running in the fitness centre</strong> best."</p>
            `
        },
        {
            id: 'listening14_exercise_opinions',
            title: 'Tập thể dục',
            audioSrc: 'audio/listening-part14/7.mp3',
            fragments: [
                "Finds exercise tiring",
                "Helps improve work performance",
                "Hates exercising",
                "Has fun when exercising with friends"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "Honestly, exercise wears me out... Every time I try to work out, it feels like I'm running on empty within minutes... Exercise for me is just <strong>exhausting</strong>."</p>
                <p><strong>Person B:</strong> "Exercise has become essential in my life, especially with my demanding and stressful job... I've noticed that after exercising, I feel more focused, energized, and ready to tackle my work... It's incredible how something as simple as exercise can greatly <strong>improve my work performance</strong>."</p>
                <p><strong>Person C:</strong> "Exercise? Ugh, <strong>I can't stand it</strong>. I know it's supposed to be good for you and all that, but I find it completely miserable... I've tried, and I still <strong>hate it</strong>. Honestly, life's too short to spend it doing something you can't stand."</p>
                <p><strong>Person D:</strong> "Exercising is a blast when you're with the right people. I've joined a few group classes, and they're like a party every time... Working out alone can get boring, but with friends? You laugh, you encourage each other, and suddenly an hour has flown by... The camaraderie makes it worth every minute."</p>
            `
        },
        {
            id: 'listening14_internet_usage',
            title: ' Sử dụng Internet',
            audioSrc: 'audio/listening-part14/8.mp3',
            fragments: [
                "Finds transport information",
                "Communicates with friends",
                "Completes assignments",
                "Watches films"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "Whenever I need to plan a trip or get somewhere, I always use the internet to <strong>find transportation details</strong>. I can check train schedules, bus routes, and even look up flights. It helps me figure out the best way to travel..."</p>
                <p><strong>Person B:</strong> "The main reason I use the internet is to <strong>stay in touch with my friends</strong>. It's great because I can talk to people who live far away without any issues. Whether it's through social media, video calls, or messaging apps, the internet allows me to communicate easily and quickly."</p>
                <p><strong>Person C:</strong> "For me, the internet is an essential tool for <strong>completing my school assignments</strong>. I use it to research information, find articles, and access educational websites that help me understand my subjects better. I also use it to download notes and submit my homework."</p>
                <p><strong>Person D:</strong> "I spend quite a bit of my free time online, mostly because I love <strong>watching movies</strong>. The internet makes it so easy to find a wide variety of films, from the latest releases to old classics. I can stream them directly on my laptop or TV without needing to go out..."</p>
            `
        },
        {
            id: 'listening14_art_opinions',
            title: 'Hội họa',
            audioSrc: 'audio/listening-part14/9.mp3',
            fragments: [
                "As part of their job",
                "Alone",
                "As a social activity",
                "With children"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "<strong>Art is part of my work</strong>, so it comes with structured deadlines, clients, and goals. It's different from personal art because I'm balancing my ideas with what's needed for the project..."</p>
                <p><strong>Person B:</strong> "Art, for me, is a quiet, personal thing. It's my time to focus inward, away from distractions. I don't need anyone else there; it's just me and my thoughts. Creating <strong>alone</strong> brings a peace where I can explore and express freely..."</p>
                <p><strong>Person C:</strong> "I love when people come together to create something. It's not just about the art itself but about connecting with each other... Art becomes a shared experience, bringing us all together."</p>
                <p><strong>Person D:</strong> "Kids are so fearless with art. They jump in without worrying about mistakes, making everything feel magical. <strong>Teaching them</strong> is a reminder that creativity should be free and fun. They show you that art is as much about play and expression as it is about any rules."</p>
            `
        },
        {
            id: 'listening14_ways_to_work',
            title: ' Cách đi làm',
            audioSrc: 'audio/listening-part14/10.mp3',
            fragments: [
                "Walks with a friend",
                "Travels by bus",
                "Walks alone",
                "Travels by car"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "Mornings are actually my favorite time of day. I get to catch up <strong>with my friends</strong>, laugh about silly things, and just share a moment before the real day starts. We're out there together, moving through the city..."</p>
                <p><strong>Person B:</strong> "I <strong>hop on the bus</strong>, find a seat if I'm lucky, and just watch the world go by. You see all kinds of faces, each with their own story, each heading somewhere. It's my little escape time to listen to my favorite songs or daydream out the window."</p>
                <p><strong>Person C:</strong> "Mornings are quiet, and that's how I like it. It's just me, the fresh air, and the city slowly waking up. I take my time, choosing the paths that are less crowded. It's my chance to breathe, to think, to just be <strong>by myself</strong>."</p>
                <p><strong>Person D:</strong> "Every morning, it's just me, <strong>my car</strong>, and the open road. There's a kind of freedom in it, you know? I get to decide my route, crank up my favorite tunes, and just go. Traffic can be a pain, sure, but it's worth it for those moments..."</p>
            `
        },
        {
            id: 'listening14_study_habits',
            title: ' Nơi để học',
            audioSrc: 'audio/listening-part14/11.mp3',
            fragments: [
                "Late at night",
                "In various places",
                "With music",
                "In a quiet place"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "Surprisingly, I find that <strong>late night hours</strong> work best for my studying. The quietness of the night really helps me concentrate. While others are winding down, I feel more alert and inspired..."</p>
                <p><strong>Person B:</strong> "I've realized that my study environment has a significant impact on my productivity. <strong>Changing my study space</strong> has really helped me focus better. The library offers a quiet atmosphere... but sometimes, a lively cafe... Being outdoors in a park..."</p>
                <p><strong>Person C:</strong> "I've discovered that the right soundtrack can enhance my study sessions significantly. When I study, having some <strong>background music</strong> makes a noticeable difference. I tend to choose soft melodies or instrumental tracks that won't distract me."</p>
                <p><strong>Person D:</strong> "Finding the right space to study is crucial for effective learning. I usually end up in a <strong>quiet room at home or a secluded corner in the library</strong>. It's incredible how much I can absorb without distractions."</p>
            `
        },
        {
            id: 'listening14_study_places',
            title: 'Nơi để học (tiếp theo)',
            audioSrc: 'audio/listening-part14/12.mp3',
            fragments: [
                "In the coffee shop",
                "In the park",
                "On public transport",
                "At home"
            ],
            key: '1-2-3-4', // Key theo thứ tự người nói A, B, C, D
            script: `
                <p><strong>Person A:</strong> "I don't like studying in very quiet places such as at home or in the library because I get sleepy easily... There's a <strong>coffee shop near my house</strong> and I often go there to study because the presence of other people makes me feel more motivated."</p>
                <p><strong>Person B:</strong> "For me, those chairs are way too hard and leave me sore all day. I prefer sitting under the trees <strong>in the park</strong> to study. It's cool and the air is fresh. There's a famous coffee shop across from where I sit and they serve really good coffee."</p>
                <p><strong>Person C:</strong> "The distance from my house to school is 20 kilometers and it usually takes me an hour to get there. So, <strong>when I'm on the train</strong>, I use the time to do homework and review the lessons for the day... I find it very effective for me."</p>
                <p><strong>Person D:</strong> "I don't like studying in very crowded places because I can't focus well. I usually sit on the sofa in the living room to study. My parents often travel for work, so my <strong>house is very quiet</strong>."</p>
            `
        }
    ],

};


// --- DỮ LIỆU MỚI CHO CÂU 16 & 17 ---

const rawAnswers1617 = [
    // --- Cột 1 ---
    "Create dedicated periods for writing & <strong>Refuse to seek the advice of others</strong>",
    "Series are damaged by overexposure. & <strong>They can generate negative publicity for the sport</strong>",
    "It <strong>caught the audience's attention</strong> from the start. & <strong>Series are damaged</strong> by overexposure.",
    "<strong>Blocking out noise and light is a key</strong> & The media overemphasize the subject",
    "<strong>Maintain a positive attitude</strong> & Our definition of it is changing",
    "They have both been <strong>overlooked by academics</strong>. & It is <strong>not always easy for the meanings to be identified</strong>.",
    "It helps to <strong>reach new customers</strong>. & They are <strong>not always good for sport fans</strong>",
    "It doesn’t provide enough alternatives to driving. & <strong>It is likely to meet resistance from local communities</strong>.",
    "<strong>They seem unrealistic</strong>. & It is <strong>negatively influencing script production</strong>.",
    "It is making <strong>exaggerated claims</strong> & It is <strong>to similar to many existing products</strong>",
    "<strong>Be flexible and open-minded</strong> & They are <strong>becoming more competitive</strong>",
    "People are <strong>unnecessarily worried</strong> about them & People should be <strong>reassured by their presence</strong>.",
    "It <strong>allows you to be more flexible</strong> & It <strong>prevents you from making mistakes</strong>",
    "<strong>Organize their resources more effectively</strong> & <strong>Get advice from someone they know who is experienced</strong>",

    // --- Cột 2 ---
    "It <strong>wasn't as good as she expected</strong> & It <strong>depends on your situation and personality</strong>",
    "It is <strong>very exciting to read</strong> & It has been <strong>written for the general audience</strong>",
    "They can <strong>cause harmful effects</strong> & Provides them with a <strong>balance in their lives</strong>",
    "They are <strong>difficult to relate to</strong> & It <strong>lacks originality</strong>",
    "The <strong>characters were interesting</strong> & It will <strong>establish the author's popularity</strong>",
    "It has <strong>consistent quality throughout</strong> & <strong>Viewer habits influence</strong> the way that series are made",
    "Its <strong>production techniques</strong> & They should be <strong>released at the right time</strong>",
    "The <strong>dialogues seems unrealistic</strong>. & The new industry demands are <strong>negatively influencing script production</strong>",
    "Standard of service is <strong>not good</strong> & They need to make the <strong>customers feel valued and welcome</strong>",
    "<strong>He will probably retire</strong> from singing & <strong>He could have been more successful</strong>",
    "It has <strong>not been accurately reported by the media</strong> & The research is <strong>unlikely to find a conclusive answer</strong>",
    "It is <strong>different from his earlier works</strong> & He should <strong>listen to the critics</strong> before writing the next novel",
    "It <strong>creates an adventure</strong> & It is <strong>only suitable for a particular generation</strong>",

    // --- Cột 3 (bên dưới) ---
    "<strong>They are not typical</strong> of modern buildings & They often display a <strong>lack of ambition</strong>",
    "<strong>He wasn't ready to start a higher education</strong> & <strong>How to be independent</strong>",
    "The team members <strong>lose confidence</strong> & Someone who <strong>can set a realistic goal</strong>",
    "They were <strong>not making enough money</strong> & He was <strong>continuing policies</strong>",
    "The plot was <strong>very strong</strong> & It is <strong>very similar to the author's other books</strong>",
    "It <strong>uses simple language</strong> to describe complex ideas & It is <strong>similar to the previous book</strong> about the scientist",
    "They help you <strong>make decisions</strong> & It <strong>requires you to set your certain limits</strong>",
    "<strong>Monitor your spending</strong> for a weekly plan & <strong>Seek advice from someone who have experience</strong>",
];


// Tự động tạo mảng object với số thứ tự tuần tự từ 1
const formattedListeningData1617 = rawAnswers1617.map((answer, index) => {
    return {
        number: index + 1, // Bắt đầu từ 1
        answer: answer
    };
});

// Thêm dữ liệu mới vào object listeningData chính
listeningData.part1617 = formattedListeningData1617;

