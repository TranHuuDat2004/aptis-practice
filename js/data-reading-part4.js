const readingPart4Data = [
    {
        id: 'p4_volunteering',
        title: 'Volunteering to clean a local park',
        key: ['A', 'B', 'C', 'A', 'B', 'C', 'D'],
        questions: [
            'Who thinks the park is a beautiful place to relax?',
            'Who thinks volunteering will help with future employment?',
            'Who thinks local areas need cleaning?',
            'Who will ask for others to help?',
            "Who can't clean the park because of their busy work?",
            'Who thinks the cleaning needs to be done regularly?',
            'Who thinks volunteering is important for students?',
        ],
        story: '"Người <strong>A</strong> thấy đây là <strong>nơi đẹp để thư giãn</strong> và sẽ <strong>nhờ người khác giúp</strong>. Người <strong>B</strong> thì <strong>không dọn được vì bận</strong> nhưng tin rằng nó <strong>giúp cho công việc tương lai</strong>. Người <strong>C</strong> cho rằng <strong>khu vực cần dọn dẹp</strong> và việc này nên <strong>diễn ra thường xuyên</strong>. Người <strong>D</strong> nghĩ nó <strong>quan trọng cho trẻ em</strong>."'
    },
    {
        id: 'p4_visit_island',
        title: 'Visit an island',
        key: ['A', 'A', 'D', 'D', 'B', 'C', 'C'],
        questions: [
            'Who forgot to bring something?',
            'Who liked to be alone?',
            'Who loved eating food here?',
            'Who liked buying things on the island?',
            'Who spent a lot of money on transport?',
            'Who thought public transport could be improved?',
            'Who liked to walk?',
        ],
        story: '"Người <strong>A</strong> <strong>quên mang đồ</strong> và <strong>thích đi một mình</strong>. Người <strong>B</strong> thì <strong>chi nhiều tiền cho việc đi lại</strong>. Người <strong>C</strong> nghĩ <strong>phương tiện công cộng cần cải thiện</strong> và <strong>thích đi bộ</strong>. Người <strong>D</strong> thì <strong>thích ăn đồ ăn</strong> ở đó và <strong>thích mua đồ được làm sẵn</strong>."'
    },
    {
        id: 'p4_art',
        title: 'Art',
        key: ['B', 'C', 'A', 'A', 'B', 'D', 'D'],
        questions: [
            'Who thinks visitors should focus on the art?',
            'Who has a good knowledge of art?',
            'Who has some artistic skills?',
            'Who thinks seeing exhibitions is a boring activity?',
            'Who prefers seeing exhibitions by themselves?',
            'Who prefers going to art exhibitions with other people?',
            'Who has been going to art exhibitions all their life?',
        ],
        story: '"Người <strong>A</strong> <strong>có năng khiếu hội họa</strong> nhưng lại thấy <strong>triển lãm nhàm chán</strong>. Người <strong>B</strong> thì <strong>thích đi xem một mình</strong> và muốn mọi người <strong>tập trung vào nghệ thuật</strong>. Người <strong>C</strong> lại rất <strong>am hiểu về hội họa</strong>. Người <strong>D</strong> thì <strong>thích đi xem với bạn bè</strong> và đã <strong>dành cả đời để đi xem</strong>."'
    },
    {
        id: 'p4_reading_books',
        title: 'Reading books',
        key: ['A', 'B', 'C', 'D', 'D', 'A', 'B'],
        questions: [
            'Who plans their reading schedule?',
            'Who wants to read a lot of books?',
            'Who is having difficulty in fishing a book?', // "fishing a book" có thể là lỗi đánh máy, thường là "finishing a book"
            'Who thinks that factual books are boring?',
            'Who has limited time to read books?',
            'Who reads more than another family member?',
            'Who reads many books at once?',
        ],
        story: '"Người <strong>A</strong> <strong>lên kế hoạch đọc</strong> và <strong>đọc nhiều hơn người khác</strong>. Người <strong>B</strong> <strong>muốn đọc nhiều sách</strong> và <strong>đọc nhiều cuốn cùng lúc</strong>. Người <strong>C</strong> thì <strong>gặp khó khăn khi đọc</strong>. Người <strong>D</strong> thấy <strong>sách thực tế nhàm chán</strong> và <strong>không có thời gian đọc</strong>."'
    },
    {
        id: 'p4_watching_tv',
        title: 'Watching television',
        key: ['A', 'A', 'D', 'D', 'B', 'B', 'C'],
        questions: [
            'Who watches TV instead of studying?',
            'Who likes TV programs which continue over several weeks?',
            "Who isn't a very selective viewer?",
            'Who keeps up to date on cinema and music?',
            'Who avoids watching reality TV programs?',
            'Who has lost interest in watching football on TV?',
            'Who gets a lot of knowledge by watching TV?',
        ],
        story: '"Người <strong>A</strong> <strong>thích xem TV hơn học</strong> và thích các <strong>chương trình dài tập</strong>. Người <strong>B</strong> thì <strong>tránh xem chương trình thực tế</strong> và <strong>không còn hứng thú với đá banh</strong>. Người <strong>C</strong> học được nhiều <strong>kiến thức từ TV</strong>. Người <strong>D</strong> là người <strong>xem không kén chọn</strong> và <strong>thích cập nhật tin tức và phim ảnh</strong>."'
    },
    {
        id: 'p4_eating_cooking',
        title: 'Eating and cooking',
        key: ['C', 'C', 'D', 'A', 'B', 'B', 'D'],
        questions: [
            'Who likes to eat a wide range of dishes?', 'Who takes a cookery course?',
            'Who only wants to eat a few range of food?', 'Who likes to eat with friends?',
            'Who prefers to eat alone?', 'Who needs to save money?', 'Who likes home cooked food?',
        ],
        story: '"Người <strong>A</strong> thì <strong>thích ăn cùng bạn bè</strong>. Người <strong>B</strong> thì <strong>thích ăn một mình</strong> để <strong>tiết kiệm tiền</strong>. Người <strong>C</strong> thích <strong>ăn nhiều món đa dạng</strong> và có <strong>tham gia khóa học nấu ăn</strong>. Người <strong>D</strong> chỉ <strong>ăn được vài món</strong> và <strong>thích đồ ăn nấu ở nhà</strong>."'
    },
    {
        id: 'p4_visit_city',
        title: 'Visit a city',
        key: ['B', 'C', 'C', 'D', 'A', 'A', 'B'],
        questions: [
            'Who visits one part of the city?', 'Who liked the public theatre that the city puts on?',
            'Who usually spends a lot of money on shopping?', 'Who paid a lot for their meal?',
            'Who thought public transport system was good?', 'Who thought walking too much causes a problem?',
            'Who likes the natural resort here?',
        ],
        story: '"Người <strong>A</strong> nghĩ <strong>phương tiện công cộng tốt rồi</strong> nhưng <strong>đi bộ nhiều thì gặp vấn đề (mệt)</strong>. Người <strong>B</strong> <strong>thích khu resort tự nhiên</strong> và chỉ <strong>tham quan một phần thành phố</strong>. Người <strong>C</strong> <strong>thích nhà hát công cộng</strong> và <strong>chi nhiều tiền mua sắm</strong>. Người <strong>D</strong> thì <strong>chi nhiều tiền cho đồ ăn</strong>."'
    },
    {
        id: 'p4_new_restaurant',
        title: 'A new restaurant',
        key: ['D', 'B', 'B', 'C', 'D', 'A', 'A'],
        questions: [
            'Who was impressed by the range of appetizers?', 'Who thought his experience was probably unusual?',
            'Who thought the food was of average quality?', 'Who will definitely not return to the restaurant?',
            'Who thought the music was too quiet?', "Who didn't eat anything at the restaurant?",
            'Who enjoyed the atmosphere?',
        ],
        story: '"Người <strong>A</strong> <strong>chưa ăn gì cả</strong> nhưng <strong>thích không khí ở đây</strong>. Người <strong>B</strong> thấy <strong>chất lượng đồ ăn trung bình</strong> và nghĩ <strong>trải nghiệm này không thường xuyên</strong>. Người <strong>C</strong> thì <strong>sẽ không bao giờ quay lại</strong>. Người <strong>D</strong> <strong>ấn tượng với món khai vị</strong> và thấy <strong>âm nhạc quá nhỏ</strong>."'
    },
    {
        id: 'p4_opinions_flying',
        title: 'Opinions on flying',
        key: ['B', 'C', 'D', 'D', 'A', 'A', 'B'],
        questions: [
            'Who tries to protect the environment?', 'Who likes relaxing while they travel?',
            'Who finds flying tiring?', 'Who needs to fly for their work?',
            'Who suggests making flights more expensive?', 'Who wants to work in other countries?',
            'Who visits relatives regularly?',
        ],
        story: '"Người <strong>A</strong> <strong>muốn làm việc ở nhiều quốc gia</strong> nên <strong>đề nghị tăng giá vé</strong>. Người <strong>B</strong> <strong>thăm gia đình thường xuyên</strong> và cũng muốn <strong>bảo vệ môi trường</strong>. Người <strong>C</strong> <strong>thấy thư giãn khi bay</strong>. Người <strong>D</strong> phải <strong>bay vì công việc</strong> nhưng thấy đó là một <strong>trải nghiệm tệ</strong>."'
    },
    {
        id: 'p4_going_holiday',
        title: 'Going on holiday',
        key: ['D', 'D', 'C', 'C', 'A', 'A', 'B'],
        questions: [
            'Who likes seeing tourist attractions?', 'Who thinks going to the beach is boring?',
            'Who prefers to stay at home?', 'Who likes going walking?',
            'Who thinks holiday requires good weather?', 'Who wants to go mountaineering trip?',
            'Who has never been abroad?',
        ],
        story: '"Người <strong>A</strong> nghĩ kỳ nghỉ cần <strong>thời tiết đẹp</strong> và <strong>muốn đi leo núi</strong>. Người <strong>B</strong> thì <strong>chưa bao giờ đi nước ngoài</strong>. Người <strong>C</strong> <strong>thích ở nhà</strong> và <strong>thích đi bộ</strong>. Người <strong>D</strong> <strong>thích các điểm thu hút khách du lịch</strong> nhưng thấy <strong>đi biển nhàm chán</strong>."'
    },
    {
        id: 'p4_sports',
        title: 'Sports',
        key: ['A', 'C', 'D', 'A', 'B', 'C', 'D'],
        questions: [
            'Who thinks work out with friends is a good idea?', 'Who thinks competitions are not useful for everybody?',
            'Who thinks experience pain is not necessary?', 'Who thinks a proper meal is important?',
            'Who thinks a routine can help us do more sport?', 'Who thinks exercise is for both the young and the elderly?',
            'Who thinks at times we seek expert advice?',
        ],
        story: '"Người <strong>A</strong> <strong>thích tập với bạn</strong> và cho rằng <strong>chế độ ăn quan trọng</strong>. Người <strong>B</strong> chỉ tin vào <strong>thói quen tập luyện</strong>. Người <strong>C</strong> nghĩ <strong>thi đấu không có lợi</strong> và <strong>tập thể dục tốt cho mọi lứa tuổi</strong>. Người <strong>D</strong> cho rằng <strong>không cần trải qua đau đớn</strong> vì <strong>có thể hỏi chuyên gia</strong>."'
    },
    {
        id: 'p4_watching_movie',
        title: 'Watching a movie',
        key: ['A', 'C', 'D', 'A', 'B', 'B', 'D'],
        questions: [
            'Who saw the film previously?', 'Who saw the movies with friends?', 'Who thought the film was too long?',
            'Who found the film scary?', 'Who saw the film at home?', 'Who enjoyed the story of the film?',
            'Who read the book of the film?',
        ],
        story: '"Người <strong>A</strong> <strong>đã xem phim trước đó rồi</strong> và <strong>vẫn thấy sợ</strong>. Người <strong>B</strong> <strong>xem phim ở nhà</strong> và <strong>thích cốt truyện bộ phim</strong>. Người <strong>C</strong> thì <strong>xem phim với bạn bè</strong>. Người <strong>D</strong> thấy <strong>phim quá dài</strong> và <strong>thích đọc sách của bộ phim</strong>."'
    },
    {
        id: 'p4_new_station',
        title: 'Plans for a new station',
        key: ['C', 'D', 'A', 'B', 'B', 'C', 'D'],
        questions: [
            "Who thinks transport system doesn't need improving?", 'Who thinks better medical facilities are needed?',
            'Who thinks people should plan their journeys better??', 'Who thinks the bus is too busy?',
            'Who thinks the new station will improve train travel?', 'Who thinks the bus service is good?',
            'Who thinks the new station will cost too much to build?',
        ],
        story: '"Người <strong>A</strong> nghĩ mọi người nên <strong>tự lên kế hoạch chuyến đi</strong>. Người <strong>B</strong> thấy <strong>xe buýt quá đông</strong> và tin rằng <strong>nhà ga mới sẽ giúp ích</strong>. Người <strong>C</strong> lại thấy <strong>dịch vụ xe buýt đã tốt</strong> và <strong>không cần cải thiện</strong>. Người <strong>D</strong> lo rằng <strong>nhà ga mới sẽ tốn kém</strong> và nên <strong>xây trạm y tế</strong> hơn."'
    },
    {
        id: 'p4_technology',
        title: 'Technology',
        key: ['A', 'D', 'B', 'C', 'A', 'B', 'C'],
        questions: [
            'Who uses technology to communicate with family?', "Who thinks children shouldn't use technology?",
            'Who advises against using technology before going to bed?', 'Who uses technology for entertainment?',
            'Who believes that people depend too much on technology?', 'Who uses technology for work purposes?',
            'Who buys the latest technology products?',
        ],
        story: '"Người <strong>A</strong> <strong>dùng để liên lạc gia đình</strong> và nghĩ <strong>mọi người quá phụ thuộc</strong> vào nó. Người <strong>B</strong> <strong>dùng cho công việc</strong> và khuyên <strong>không dùng trước khi ngủ</strong>. Người <strong>C</strong> <strong>dùng để giải trí</strong> và <strong>luôn mua đồ mới nhất</strong>. Người <strong>D</strong> thì cho rằng <strong>trẻ em không nên dùng</strong> công nghệ."'
    }
];