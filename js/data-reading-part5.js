const readingPart5Data = [
    {
        id: 'p5_chinese_food',
        title: 'Chủ đề: Ẩm thực Trung Quốc',
        type: 'Bịa (Ghi nhớ)', // Giữ lại 'type' để có tag màu
        // 'fragments' bây giờ là 7 tiêu đề ĐÚNG
        fragments: [
            'The origins of Chinese food', // Đáp án 1
            'The influence of philosophy', // Đáp án 2
            'Regional variations',         // Đáp án 3
            'Cooking methods',             // Đáp án 4
            'The style',                   // Đáp án 5
            'Changes in the Chinese diet', // Đáp án 6
            'Effects of a changing diet'   // Đáp án 7
        ],
        // 'key' bây giờ luôn là 1-2-3-4-5-6-7 vì mục tiêu là sắp xếp lại đúng thứ tự
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Biết được <strong>nguồn gốc thức ăn Trung Quốc (1)</strong>, nó <strong>ảnh hưởng bởi triết học (2)</strong>, <strong>đa dạng vùng miền (3)</strong>, có <strong>nhiều cách chế biến (4)</strong>, <strong>phong cách đa dạng (5)</strong>, và đã <strong>làm ảnh hưởng (6)</strong> đến <strong>chế độ ăn (7)</strong>."'
    },
    {
        id: 'p5_experiment',
        title: 'Chủ đề: Thí nghiệm / ốp lưng',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Making things last longer', 'A temporary experiment', 'The reason of secrecy',
            'Still relevant to our times', 'The difficulty of being generous', 'Reason to reach a compromise',
            'Important lessons for all of us'
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Mình muốn nó <strong>bền hơn (1)</strong>, nên đã <strong>làm thí nghiệm  (2)</strong>, ốp lưng rớt không bể là <strong> bí mật (3)</strong>. Nhưng <strong>bí mật bị lan rộng (4)</strong>, <strong>mình cảm thấy khó chịu (5)</strong>. <strong>Lý do vì sao phải thỏa hiệp (6)</strong> Từ đó rút ra <strong>bài học quan trọng (7)</strong>."'
    },
    {
        id: 'p5_dickens_book',
        title: 'Chủ đề: Đọc sách Dickens',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Dickens for our time', 'Difficulties for modern readers', 'Keeping the reader guessing',
            'The influence of the media', "Dickens' early success", 'Trying to protect his property',
            'Bringing the books to life'
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Đọc quyển sách <strong>Dickens for our time (1)</strong>, gặp<strong> khó khăn khi đọc (2)</strong>. <strong>cố gắng đọc để đoán cái kết (3)</strong>, <strong>ảnh hưởng truyền thông (4)</strong>,<strong>thành công sớm (5)</strong> của ông. Ông đã <strong>cố gắng bảo vệ tài sản (6)</strong> của mình để <strong>mang sách đến đời sống (7)</strong>."'
    },
    {
        id: 'p5_zoo_history',
        title: 'Chủ đề: Đi sở thú',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'A symbol of privilege and wealth', 'Opening the door to everyone', 'Away from amusement to conservation',
            'Away from enclosure to greater freedom', 'A different set of values', 'A new mission of conservation',
            'A modern-life alternative'
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "<strong>Đó là biểu tượng quyền lực và giàu có (1)</strong>, từ đây <strong>mở cửa cho mọi người (2)</strong>.<strong>Không còn là nơi giam cầm (3)</strong>, hướng tới <strong>tự do (4)</strong>. Nó mang <strong>nhiều giá trị khác nhau (5)</strong>, với <strong>sứ mệnh là để bảo tồn (6)</strong>. <strong>Đó là cuộc sống hiện đại (7)</strong>."'
    },
    {
        id: 'p5_coffee',
        title: 'Chủ đề: Cà phê',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'The custom',               // 1
            'Coffee encouraging',       // 2
            'A habit of',               // 3
            'The problem of',           // 4
            'A remedy',                 // 5
            'The health risks',         // 6
            'The ancient origin of'     // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Uống cà phê là <strong>thói quen (custom) (1)</strong> của mọi người vì nó giúp mình <strong>kích thước sự tỉnh táo (2)</strong>, đó là một <strong>thói quen  xấu (habit) (3)</strong>vì nó gây ra <strong>vấn đề (problem) (4)</strong> về sức khoẻ. Do đó, cần tìm <strong>giải pháp (5)</strong> để giảm thiểu <strong>rủi ro về sức khỏe (health risks)(6)</strong>, từ đó biết được <strong>nguồn gốc cà phê (7)</strong>."'
    },
    {
        id: 'p5_pole_race',
        title: 'Chủ đề: Vùng đất băng giá',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Who is in charge?',        // 1
            'First step on the ice',    // 2
            'Where is the end',         // 3
            'Hidden geography',         // 4
            'Race to the Pole',         // 5
            'Less effort needed',       // 6
            'Why is it so cold?'        // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "<strong>Mình là người chịu trách nhiệm (1)</strong>, đặt <strong>bước chân đầu tiên lên vùng đất băng giá (2)</strong> để đến <strong>tận cùng thế giới (3)</strong>, <strong>ẩn sau bên trong là gì (4)</strong>? Mình phải <strong> chạy đua với đoàn đua khác (5)</strong>, cần <strong>nhiều sự nỗ lực (6)</strong> và cuối cùng biết được <strong>tại sao nó lại lạnh (7)</strong>."'
    },
    {
        id: 'p5_success_factors',
        title: 'Chủ đề: Nhân tố thành công / Đi tập gym',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Factor',                   // 1
            'Situation',                // 2
            'Success',                  // 3
            'The wider effects',        // 4
            'Way',                      // 5
            'A design',                 // 6
            'Achieving'                 // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "<strong>Nhân tố (1)</strong> và <strong>hoàn cảnh (2)</strong> dẫn đến <strong>thành công (3)</strong>. Nó còn <strong>ảnh hưởng bởi (4)</strong> <strong>cách (5)</strong>  <strong>thiết kế (6)</strong> của thiết bị giúp bạn <strong>đạt được hiệu quả.(7) </strong>"'
    },
    {
        id: 'p5_vegetarianism',
        title: 'Chủ đề: Ăn chay',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Type of vegetarian',       // 1
            'Various explanations',     // 2
            'Understanding the Possible',// 3
            'Farming Factory',          // 4
            'Respect the life',         // 5
            'Numerous Health benefits', // 6
            'Our global responsibilities'// 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Mình đã gặp một <strong>1 người ăn chay</strong>, người đó đã<strong> giải thích</strong> cho mình, về việc <strong>những điều có thể xảy ra</strong>  <strong>nhà máy chăn nuôi</strong>. Chúng ta cần <strong>tôn trọng sự sống</strong> để có <strong>sức khỏe tốt hơn</strong>, do đó chúng ta cần có phải có <strong>trách nhiệm toàn cầu</strong> ."'
    },
    {
        id: 'p5_champions',
        title: 'Chủ đề: Các nhà vô địch',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'The easiest way to travel',        // 1
            'Results of a lucky escape',        // 2
            'Origin of what the winner receives',// 3
            'A need for a change',              // 4
            'Earning a reputation',             // 5
            'Generations of champions',         // 6
            'Not in it for the money'           // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "<strong>Cách tốt nhất để đi du lịch</strong> bằng Doggest (tên nhân vật trong bài thi), mình <strong>may mắn thoát nạn</strong>, mình biết được <strong>nguồn gốc giải thưởng</strong>, do đó mình thấy <strong>cần phải thay đổi </strong>, muốn <strong>đạt được danh tiếng (nổi tiếng)</strong> <strong>qua nhiều thế hệ</strong>, vì thế chuyến đi này <strong>không phải vì tiền</strong> (mà để lấy kinh nghiệm)."'
    },
    {
        id: 'p5_exploration',
        title: 'Chủ đề: Khám phá nước Úc sơ khai',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'New evidence',                 // 1
            'Natural barier',               // 2
            'Technology',                   // 3
            'Journey',                      // 4
            'No precise figure',            // 5
            'Lack of knowledge and skills', // 6
            'Determination'                 // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Mình khám phá nước Úc sơ khai để tìm <strong>bằng chứng mới (1)</strong>, tuy nhiên gặp phải <strong>rào cản thiên nhiên (2)</strong> và không có <strong>công nghệ (3)</strong>. Do đó, <strong>chuyến đi này (4)</strong> <strong>không có được số liệu chính xác (5)</strong>, vì <strong>thiếu kiến thức kĩ năng (6)</strong>, nhưng vẫn <strong>quyết tâm (7)</strong> hoàn thành công việc."'
    },
    {
        id: 'p5_tulip_economy',
        title: 'Chủ đề: Kinh tế hoa Tulip',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'The economy during the golden age', // 1
            'Coming into',                       // 2
            'An item of trade',                  // 3
            'Different types of tulip',          // 4
            'Trade mechanics',                   // 5
            'Trade across Europe',               // 6
            'An Unexpected turn of events'       // 7
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "<strong>Nền kinh tế trong thời kỳ hoàng kim (1)</strong>, mình <strong>tới nơi bán (2)</strong>, mình tìm <strong>thứ có thể bán (3)</strong>, đó là <strong>nhiều loại hoa tulip khác nhau (4)</strong>. Mình tìm hiểu <strong>cơ cấu mậu dịch (5)</strong>, rồi <strong>bán khắp Châu Âu (6)</strong>, và <strong>nhiều chuyện bất ngờ đã xảy ra (7)</strong>."'
    },
    {
        id: 'p5_business_solutions',
        title: 'Chủ đề: Giải pháp kinh doanh',
        type: 'Bịa (Ghi nhớ)',
        // Thứ tự các tiêu đề đúng
        fragments: [
            'A finance visible solution / A sensible financial choice',
            'The price of convenience may be high',
            'The importance of planning in advance',
            'The impact of lack of freedom',
            'The benefits of living with less',
            'The challenges that come with a new perspective / The advantages of having your own space',
            'A competitive business'
        ],
        // Key được suy ra từ câu chuyện mới
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Mình phải tìm <strong>giải pháp tài chính</strong>, mình biết rằng <strong>cái giá thuận tiện cao</strong>, vì vậy mình <strong>phải lên kế hoạch trước</strong>. Nó <strong>ảnh hưởng đến </strong>, <strong>lợi ích</strong> và có nhiều<strong>thử thách</strong> về việc<strong>kinh doanh cạnh tranh</strong>."'
    },


    // --- HAI CHỦ ĐỀ ĐÃ ĐƯỢC CẬP NHẬT CÂU CHUYỆN ---
    {
        id: 'p5_small_homes',
        title: 'Chủ đề: Nhà nhỏ',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Life on a small scale', 'Motivated by economics', 'The advantage',
            'Homes too big', 'Sharing skill and knowledge', 'Making a smaller impact',
            'The lasting change'
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Mình <strong>sống trong ngôi nhà nhỏ</strong>, đó là <strong>động lực kiếm tiền</strong>. <strong>Lợi thế</strong> của mình là mua được <strong>ngôi nhà lớn</strong>. Mình <strong>chia sẻ kinh nghiệm</strong> này, làm <strong>tác động (impact) đến họ</strong> và làm cho họ <strong>thay đổi lâu dài</strong>."'
    },
    {
        id: 'p5_creative_hobbies',
        title: 'Chủ đề: Âm nhạc / Sở thích sáng tạo',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Physically demanding', 'A good way to boost memory', 'A great opportunity to broaden your social circle',
            'Routines', 'Creative outlet', "Enhancing other people's feelings",
            'A great sense of well-being'
        ],
        key: '1-2-3-4-5-6-7',
        story: 'Câu chuyện bịa: "Muốn hát hay thì <strong>đòi hỏi thể chất</strong> tốt. Việc làm này giúp <strong>tăng trí nhớ</strong>, <strong>mở rộng mối quan hệ</strong>. <strong>Thói quen</strong> này giúp mình có <strong>lối thoát sáng tạo</strong>, <strong>nâng cao cảm xúc</strong> (đang buồn hát để hết buồn) và mình cảm thấy <strong>vui vẻ hạnh phúc hơn</strong>(well being)."'
    },
    {
        id: 'p5_humor_psychology',
        title: 'Chủ đề: Tâm lý học của sự hài hước (Đề mới cập nhật)',   // Thêm dữ liệu cho đề mới,
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'Humor is common...',        // 1
            'What is the purpose...',    // 2
            'How humor helps...',        // 3
            'Take care of...',           // 4
            'The difference...',         // 5
            'What we find...',           // 6
            'Why we...'                  // 7
        ],
        key: '1-2-3-4-5-6-7',
        // === CÂU CHUYỆN MỚI CỦA BẠN - NGẮN GỌN VÀ DỄ NHỚ HƠN ===
        story: 'Câu chuyện bịa: "<strong>Sự hài hước rất phổ biến (1)</strong>, <strong>mục đích (2)</strong> là <strong>giúp chúng ta (3)</strong> biết cách <strong>chăm sóc (4)</strong> bản thân. Nó tạo ra <strong>sự khác biệt (5)</strong> về <strong>thứ mà chúng ta thấy (6)</strong> là hài hước, và đó là <strong>lý do tại sao (7)</strong> nó quan trọng."'
    },
    {
        id: 'p5_exploration_v2',
        title: 'Chủ đề: Nước Úc sơ khai (Phiên bản 2)',
        type: 'Bịa (Ghi nhớ)', // Đây là dạng bài logic
        // Các tiêu đề mới bạn đã cung cấp
        fragments: [
            'An alternative history of settlement',      // 1
            'Natural barrier to resettlement',           // 2
            'Technology helps uncover the ocean’s secret',// 3
            'A Journey made by stages',                  // 4
            'A new evidence that leads to speculation',  // 5
            'Lack of knowledge and skills',              // 6
            'Determination of the explorers through the ages' // 7
        ],
        // Thứ tự key đúng dựa trên logic và ghi chú của bạn
        key: '1-2-3-4-5-6-7',
        // Câu chuyện được bịa lại để khớp với các tiêu đề mới
        story: 'Câu chuyện bịa: "Mình khám phá nước Úc sơ khai để tìm hiểu về <strong>lịch sử (1)</strong>, tuy nhiên gặp phải <strong>rào cản thiên nhiên (2)</strong> và không có <strong>công nghệ (3)</strong>. Do đó, <strong>chuyến đi này (4)</strong> không tìm được <strong> bằng chứng mới (5)</strong>, vì <strong>thiếu kiến thức kĩ năng (6)</strong>, nhưng vẫn <strong>quyết tâm (7)</strong> hoàn thành công việc."'
    },


];