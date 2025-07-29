// js/data-listening.js

// Danh sách thô chứa tất cả các đáp án
const rawAnswers = [
    // --- Bộ 1 ---
    "To suggest a drink", "3250 pounds", "Phone", "Glasses", "One", "Bathroom",
    "Camping", "Art", "Go to the theater and play sport", "Where to buy a new table",
    "Practical", "Furniture", "Three",

    // --- Bộ 2 ---
    "Tea", "10.000", "The town hall", "First floor", "2.5 pounds", "Wednesday afternoon",
    "Opposite the hotel", "Outside the shop", "7:00 – ăn tối", "Play football",
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

    // --- THÊM MỚI DỮ LIỆU câu 15 ---
    part15: [
        { id: 'topic1', title: '1. Politics', baseKey: 'B-W-M-B', story: 'Cả hai (B) - người Phụ nữ (W) và người Đàn ông (M) – đều (B) quan tâm đến chính trị.' },
        { id: 'topic2', title: '2. Arts', baseKey: 'W-M-B-M', story: 'Người Phụ nữ (W) - và người Đàn ông (M) – cả hai (B) – Muốn (M) học hội họa.' },
        { id: 'topic3', title: '3. Audition', baseKey: 'W-M-B-B', story: 'Người Phụ nữ (W) - và người Đàn ông (M) – cả hai (B) – bắt đầu Buổi (B) thử giọng.' },
        { id: 'topic4', title: '4. Information and technology', baseKey: 'W-M-M-B', story: 'Người Phụ nữ (W) - và người Đàn ông (M) – Muốn (M) – Biết (B) thêm về công nghệ thông tin.' },
        { id: 'topic5', title: '5. Local cultural center', baseKey: 'W-B-M-M', story: 'Người Phụ nữ (W) – Biết (B) – người Đàn ông (M) – đừng một Mình (M) ở trung tâm văn hóa địa phương.' },
        { id: 'topic6', title: '6. Community design', baseKey: 'B-M-W-W', story: 'Boss (B) – Muốn (M) – Wăn (W) – Wện (W).' },
        { id: 'topic7', title: '7. University and technology', baseKey: 'B-M-W-M', story: 'Boss (B) – Muốn (M) – Website (W) trường đại học công nghệ- được tạo Miễn (M) phí.' },
        { id: 'topic8', title: '8. Urban farming', baseKey: 'M-W-W-B', story: 'Người Đàn ông (M) và người Phụ nữ (W) – Wyết (W) định – Bàn bạc (B) về Urban farming.' },
        { id: 'topic9', title: '9. The subject of beauty', baseKey: 'M-W-B-W', story: 'Người Đàn ông - (M) và người Phụ nữ (W) – cả hai (B) – đều Wan (W) tâm đến sắc đẹp.' },
        { id: 'topic10', title: '10. Internet', baseKey: 'M-B-W-B', story: 'Về Internet: Man (M) biết (B) trước, Woman (W) biết (B) sau.' },
        { id: 'topic11', title: '11. Music and Singers', baseKey: 'W-B-M-B', story: 'Về Music and Singers: Woman (W) biết (B) trước, Man (M) biết (B) sau.' },
        // --- CHỦ ĐỀ 12 ĐƯỢC CẬP NHẬT ---
        {
            id: 'topic12',
            title: '12. Changes in the work place (Trường hợp đặc biệt)',
            baseKey: 'M-W-B-M',
            story: 'Người Đàn ông (M) và người Phụ nữ (W) – cả hai (B) – đều Muốn (M) có nhiều thay đổi ở nơi làm việc.',
            isFixed: true // Thêm thuộc tính này để đánh dấu là key cố định
        }
    ]
};

// js/data-listening.js

// ... (phần code cũ và listeningData.part1 giữ nguyên)

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