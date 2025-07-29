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
    part1: formattedListeningData
};