const readingPart3Data = [
    {
        id: "p3_lost_card",
        title: "Câu chuyện mất thẻ",
        type: "Logic (Thật)",
        fragments: [
            "If you lost this, ....",
            "He or she will ask for ...",
            "He or she will take ...",
            "To access the bulidings ...",
            "You will also need ..."
        ],
        key: "4-1-2-5-3",
        story: 'Câu chuyện thật: "<strong>Để vào tòa nhà</strong> bạn cần có thẻ, <strong>nếu bạn mất thẻ</strong>, <strong>anh ấy hoặc cô ấy sẽ hỏi</strong> bạn đi đâu, <strong>bạn cần</strong> trả lời, <strong>anh ấy hoặc cô ấy sẽ dẫn bạn đi</strong>."'
    },
    {
        id: "p3_submit_assignment",
        title: "Nộp bài tập",
        type: "Logic (Thật)",
        fragments: [
            "When ...", "A staff ...", "You hand your assignment ...",
            "Also, remember", "First, ..."
        ],
        key: "5-1-4-3-2",
        story: 'Câu chuyện thật: "<strong>đầu tiên</strong>, kiểm tra và sửa lỗi, <strong>khi</strong> kiểm tra xong, <strong>ngoài ra nhớ</strong> in trang bìa, <strong>mang đi nộp</strong>, <strong>1 người nhân viên</strong> sẽ kiểm tra và xác nhận."'
    },
    {
        id: "p3_reading_books",
        title: "Đọc sách",
        type: "Bịa (Ghi nhớ)",
        fragments: [
            "You can ...", "In this way, ...", "Then, ...",
            "The next ...", "The first ..."
        ],
        key: "5-4-3-1-2",
        story: 'Câu chuyện bịa: "Đọc cuốn sách <strong>đầu tiên</strong>, đọc cuốn sách <strong>tiếp theo</strong>, <strong>sau đó</strong> mời bạn đọc chung, <strong>bạn có thể</strong> đọc những quyển sách này, <strong>bằng cách này</strong> bạn sẽ có được những thông tin thú vị."'
    },
    {
        id: "p3_natural_history",
        title: "Trung tâm Lịch sử Tự nhiên",
        type: "Logic (Thật)",
        fragments: [
            "As well as selling tickets, (maps and information)...",
            "When you arrive..., you will see a set of stairs",
            "The entrance ... is on the square.",
            "The most important ...",
            "The ticket office"
        ],
        key: "4-3-2-5-1",
        story: 'Câu chuyện thật: "<strong>điều quan trọng nhất</strong> là đến trung tâm Lịch sử Tự nhiên, <strong>lối vào</strong> nằm ở quảng trường, <strong>khi bạn đến</strong>, bạn sẽ thấy cầu thang, trên cùng cầu thang sẽ có <strong>quầy bán vé</strong>, <strong>ngoài bán vé</strong> họ còn cung cấp bản đồ và thông tin."'
    },
    {
        id: "p3_veggie_flyer",
        title: "Tờ rơi ăn chay",
        type: "Bịa (Ghi nhớ)",
        fragments: [
            "Such as", "In order to", "The most", "The first", "Other factors"
        ],
        key: "4-2-3-5-1",
        story: 'Câu chuyện bịa: "<strong>Đầu tiên</strong> thấy tờ rơi, <strong>để ăn chay</strong>, <strong>bạn phải ăn nhiều rau</strong>. <strong>ngoài ra </strong>còn phải ăn những món ăn khác <strong>như là</strong> hạt và trái cây."'
    },
    {
        id: "p3_power_outage",
        title: "Câu chuyện mất điện",
        type: "Logic (Thật)",
        fragments: [
            "They were out of work for hours", "This caused long delays", "Fortunately",
            "As a result", "Therefore"
        ],
        key: "1-2-4-3-5",
        story: 'Câu chuyện thật: "<strong>chúng không hoạt động</strong>, <strong>gây ra cản trở kéo dài</strong>, <strong>kết quả là</strong> đi làm trễ, <strong>may mắn</strong> nhờ có điện, <strong>do đó</strong> về nhà đúng giờ."'
    },
    {
        id: "p3_submit_assignment_v2",
        title: "Nộp bài tập (v2)",
        type: "Logic (Thật)",
        fragments: [
            "Bring the assignment...", "The staff member ...", "Next, ...",
            "When you are sure", "First, ..."
        ],
        key: "5-4-3-1-2",
        story: 'Câu chuyện thật: "<strong>đầu tiên</strong> kiểm tra và sửa lỗi, <strong>khi bạn chắc chắn ròi</strong>, <strong>tiếp đến</strong> mang bài đi in, <strong>mang bài đi nộp</strong>, <strong>1 người nhân viên</strong> kiểm tra và xác nhận."'
    },
    {
        id: "p3_printer_use",
        title: "Sử dụng máy in",
        type: "Logic (Thật)",
        fragments: [
            "If the light is green", "A light comes on", "First",
            "When", "Before using"
        ],
        key: "3-4-2-1-5",
        story: 'Câu chuyện thật: "<strong>Đầu tiên</strong> tìm nơi để đặt máy in, <strong>khi</strong> tìm được chỗ thích hợp, nhấn nút mở, <strong>đèn sáng</strong>, <strong>nếu đèn chuyển qua màu xanh</strong>, nó bắt đầu sử dụng, <strong>trước khi sử dụng</strong>, bỏ giấy vào."'
    },
    {
        id: "p3_gym_signup",
        title: "Đăng kí tập gym",
        type: "Bịa (Ghi nhớ)",
        fragments: [
            "Inside", "After...finish", "When you arrive",
            "If you would like", "A staff member"
        ],
        key: "3-5-1-4-2",
        story: 'Câu chuyện bịa: "<strong>Khi bạn đến</strong> tập gym, <strong>1 người nhân viên</strong>, <strong>bên trong</strong> sẽ ra chào đón bạn, <strong>nếu bạn muốn biết thêm thông tin</strong>, anh ấy sẽ trả lời bạn, <strong>sau đó hoàn tất</strong> việc đăng kí."'
    },
    {
        id: "p3_football_manager",
        title: "Quản lí CLB / Cầu thủ tài ba",
        type: "Logic (Thật)",
        fragments: [
            "... played in Italy and Spain", "He then moved to France",
            "Since he retired, he was a football club manager", "... became a brilliant footballer",
            "As a child,..."
        ],
        key: "5-2-4-1-3",
        story: 'Câu chuyện thật: "<strong>Thời còn nhỏ</strong>, anh ấy chơi với đội nhà, <strong>sau đó qua Pháp</strong>, <strong>trở thành cầu thủ tài ba</strong>, <strong>chơi với Ý, Tây Ban Nha</strong>, <strong>khi anh ấy nghỉ hưu</strong>, trở thành quản lí câu lạc bộ."'
    },
    {
        id: "p3_fire_escape",
        title: "Câu chuyện thoát nạn / gặp đám cháy",
        type: "Logic (Thật)",
        fragments: [
            "When you reach", "Next, walk calmly", "Through this",
            "Outside", "When you hear the alarm"
        ],
        key: "5-2-3-1-4",
        story: 'Câu chuyện thật: "<strong>Khi nghe còi báo động reo</strong>, <strong>tiếp theo đi bình tĩnh</strong>, <strong>xuyên qua</strong> đám cháy, <strong>khi bạn đến</strong> nơi an toàn, hãy đợi ở <strong>bên ngoài</strong>."'
    },
    {
        id: "p3_astronaut_dream",
        title: "Trở thành phi hành gia",
        type: "Bịa (Ghi nhớ)",
        fragments: [
            "They", "Because", "A year later", "This hard work", "As a child"
        ],
        key: "5-2-4-1-3",
        story: 'Câu chuyện bịa: "<strong>Thời còn nhỏ</strong>, <strong>bởi vì</strong> mong muốn trở thành phi hành gia, <strong>anh ấy làm việc chăm chỉ</strong>, nhiều người <strong>họ</strong> đã giúp đỡ, <strong>1 năm sau</strong> anh ấy đã trở thành phi hành gia."'
    },
    {
        id: "p3_info_search",
        title: "Tìm kiếm thông tin xây nhà",
        type: "Bịa (Ghi nhớ)",
        fragments: [
            "After", "You can", "Document", "The search", "First"
        ],
        key: "5-4-3-1-2",
        story: 'Câu chuyện bịa: "<strong>Đầu tiên</strong> bạn phải <strong>tìm kiếm</strong> <strong>tài liệu</strong>. <strong>Sau đó</strong>, <strong>bạn có thể</strong> xây."'
    },
    {
        id: "p3_planting_potato",
        title: "Trồng khoai tây",
        type: "Logic (Thật)",
        fragments: [
            "This care ...", "An old potato ...", "That colour means ...",
            "Put it in a sunny place and water everyday", "All you need is..."
        ],
        key: "5-2-3-4-1",
        story: 'Câu chuyện thật: "<strong>Tất cả mọi thứ mình cần là</strong> <strong>củ khoai tay già</strong>, <strong>màu sẵm</strong>, <strong>tưới nước mỗi ngày</strong>, tiếp tục <strong>chăm sóc</strong>."'
    },
    {
        id: "p3_famous_man",
        title: 'Câu chuyện người đàn ông nổi tiếng (Đề mới cập nhật)',
        type: 'Bịa (Ghi nhớ)',
        fragments: [
            'He first...', 'Although...', 'His popularity...', 'After being famous...', 'He travelled...'
        ],
        key: "1-2-3-4-5",
        story: 'Câu chuyện bịa: "<strong>Đầu tiên (1)</strong>, anh ấy rất nghèo. <strong>Mặc dù (2)</strong> vậy, anh ấy thử làm video TikTok và <strong>sự nổi tiếng của anh ấy (3)</strong> đột nhiên tăng vọt. <strong>Sau khi nổi tiếng (4)</strong>, <strong>anh ấy đi du lịch (5)</strong> khắp nơi."'
    },
    {
        id: "p3_shanghai_woman",
        title: 'Câu chuyện người phụ nữ Thượng Hải (Đề mới cập nhật)',
        type: 'Logic (Thật)',
        fragments: [
            'She was born in Shanghai in 1933...', 'At that time...', 'A few years later, she went abroad...', 'However, in 1972 she began to miss China...', 'In 1980, she finally returned...'
        ],
        key: "1-2-3-4-5",
        story: 'Câu chuyện thật: "<strong>Cô ấy được sinh ra tại Thượng Hải vào năm 1933(1)</strong>. <strong>Vào thời điểm đó (2)</strong>, cô cố gắng hoàn thành việc học. <strong>Vài năm sau (3)</strong>, cô đi du học Mỹ. <strong>Tuy nhiên, vào năm 1972 (4)</strong>, cô luôn nhớ về quê hương. <strong>Vào năm 1980 , cô trở về Trung Quốc (5)</strong>."'
    },
    {
        id: "p3_receive_gift",
        title: "Câu chuyện nhận quà (Đề mới cập nhật)",
        type: "Logic (Thật)",
        fragments: [
            "Ring the bell", "Show your card", "Provide details", "Fill the document", "Take a seat"
        ],
        key: "1-2-3-4-5",
        story: 'Câu chuyện thật: "Để nhận quà, đầu tiên bạn phải <strong>bấm chuông (1)</strong>. Sau đó, <strong>đưa thẻ (2)</strong> thành viên. Tiếp theo, <strong>cung cấp thông tin (3)</strong> người nhận, <strong>điền vào giấy tờ (4)</strong> và cuối cùng là <strong>ngồi xuống (5)</strong> chờ đến lượt."'
    }
];
