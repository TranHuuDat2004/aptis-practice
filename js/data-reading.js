// js/data-reading.js

const readingData = {
    // Dữ liệu cho Part 2
    part2: [
        {
            id: "p3_staff_welcome",
            title: "Nhập học / Nhà hàng",
            type: "Bịa (Ghi nhớ)",
            fragments: [
                "He or she ...", "You will find ...", "You can use ...",
                "A member of staff ...", "When you arrive ..."
            ],
            key: "5-4-1-3-2",
            story: 'Câu chuyện bịa: "<strong>Khi bạn đến (5)</strong> nhà hàng Trung Quốc, một người <strong>nhân viên (4)</strong> sẽ chào đón bạn. <strong>Anh ấy/cô ấy (1)</strong> sẽ đưa bạn thực đơn, bạn <strong>có thể sử dụng (3)</strong> nó để gọi món. Bạn <strong>sẽ thấy (2)</strong> thực đơn phong phú đa dạng ."'
        },
        // {
        //     id: "p2_timeline_words",
        //     title: "Trình tự lời khuyên",
        //     type: "Logic (Thật)",
        //     fragments: ["Before", "When", "After", "Remember", "You should"],
        //     key: "1-4-5-2-3",
        //     story: 'Câu chuyện logic: "<strong>Trước khi (1)</strong> bạn bắt đầu, <strong>hãy nhớ (4)</strong> rằng <strong>bạn nên (5)</strong> đọc kỹ hướng dẫn. <strong>Khi (2)</strong> bạn hoàn thành, hãy kiểm tra lại. <strong>Sau khi (3)</strong> nộp bài, bạn có thể nghỉ ngơi."'
        // },

        {
            id: "p2_parking_ticket",
            title: "Đi gửi xe",
            type: "Logic (Thật)",
            fragments: [
                "The machine will ...",
                "Please display the ticket ...",
                "When you arrive ...",
                "Before you leave, ...",
                "The ticket will have ... date and time"
            ],
            key: "3-5-2-4-1",
            story: 'Câu chuyện logic: "<strong>Khi bạn đến</strong> gửi xe, <strong>cái vé sẽ ghi ngày giờ</strong>, <strong>xuất trình vé</strong>, <strong>trước khi rời đi</strong>, <strong>cái máy</strong> xe thu cái vé."'
        },
        {
            id: "p2_famous_author",
            title: "Tác giả nổi tiếng",
            type: "Bịa (Ghi nhớ)",
            fragments: [
                "He almost ...",
                "The characters ...",
                "He soon ...",
                "When he...",
                "This popularity ..."
            ],
            key: "4-3-5-1-2",
            story: 'Câu chuyện bịa: "<strong>Khi anh ấy</strong> nổi tiếng, <strong>anh ấy sớm</strong>, <strong>hầu hết</strong> hoàn thành xong quyển sách, <strong>các nhân vật</strong> cũng trở nên <strong>nổi tiếng</strong>."'
        },
        {
            id: "p2_cinema_ticket",
            title: "Đi xem phim",
            type: "Logic (Thật)",
            fragments: [
                "Take the lift to the third floor ...",
                "... Someone will help you find your seat.",
                "He or she will tell you your seat number ...",
                "Show your pass ...",
                "When you collect your pass ..."
            ],
            key: "5-1-4-3-2",
            story: 'Câu chuyện logic: "<strong>Khi bạn lấy cái vé</strong>, <strong>lên lầu 3</strong>, <strong>show vé</strong>, <strong>anh ấy hoặc cô ấy</strong> chỉ cho mình số ghế, <strong>ai đó giúp bạn</strong> tìm chỗ ngồi."'
        },

        {
            id: "p2_send_file", // ID này đã có, chúng ta chỉ cập nhật câu chuyện và type
            title: "Câu chuyện gửi file",
            type: "Logic (Thật)", // Cập nhật thành "Thật"
            fragments: [
                "Simply drag and drop your files.", "When you do this,", "Press the “send” button.",
                "After you send … check your email.", "In your account,",
            ],
            key: "5-2-1-3-4",
            story: 'Câu chuyện thật: "<strong>Trong tài khoản của bạn</strong>, nhấn nút mở window, <strong>khi bạn làm điều này</strong>, cửa sổ sẽ mở ra, <strong>kéo thả file</strong>, <strong>nhấn gửi</strong>, <strong>sau khi gửi</strong> check email."'
        },
        {
            id: "p2_veggie_food",
            title: "Câu chuyện mua đồ ăn chay",
            type: "Bịa (Ghi nhớ)",
            fragments: [
                "Enter code", "Go to", "When...finish", "When", "Choose"
            ],
            key: "2-5-1-4-3",
            story: 'Câu chuyện bịa: "<strong>Đến</strong> cửa hàng ăn chay, <strong>chọn</strong> món, <strong>nhập mã</strong>, <strong>khi</strong> bạn làm xong, <strong>hoàn thành</strong> việc thanh toán."'
        },
        {
            id: "p2_university_love",
            title: "Tình yêu thời đại học",
            type: "Logic (Thật)",
            fragments: [
                "These were ...", "Princeton University ...", "As a child...", "She later ...", "His best friend ..."
            ],
            key: "3-5-4-1-2",
            story: 'Câu chuyện thật: "<strong>Thời còn nhỏ</strong> anh ấy thích đọc sách, <strong>bạn thân anh ấy</strong> cũng thích đọc sách, <strong>Cô ấy sớm</strong> thành người yêu của ảnh, <strong>đó là khoảng thời gian</strong> đẹp nhất tại trường <strong>đại học Princeton</strong>."'
        },
        {
            id: "p2_timeline_words", // ID này đã có, chúng ta cập nhật câu chuyện
            title: "Câu chuyện nhớ về nước Úc sơ khai",
            type: "Bịa (Ghi nhớ)",
            fragments: ["Before", "When", "After", "Remember", "You should"],
            key: "1-4-5-2-3",
            story: 'Câu chuyện bịa: "<strong>Trước </strong>khi<strong> nhớ </strong> về nước Úc sơ khai, <strong>bạn nên</strong> tìm kiếm thông tin, <strong>khi</strong> có thông tin, <strong>sau đó</strong> viết ra giấy."'
        },
        {
            id: "p2_gym_keys",
            title: "Câu chuyện mượn đồ tập gym",
            type: "Logic (Thật)",
            fragments: [
                "You must return your keys", "You should ....collect keys", "When you have completed...", 
                "Follow the route on the map", "Collect a map"
            ],
            key: "2-5-4-3-1",
            story: 'Câu chuyện thật: "<strong>lấy chìa khóa</strong>, <strong>lấy bản đồ</strong>, <strong>đi theo bản đồ</strong>, <strong>khi tập xong (hoàn thành)</strong>, <strong>trả chìa khóa</strong>."'
        },
        {
            id: "p2_exhibition_visit",
            title: "Câu chuyện đi tham quan triển lãm",
            type: "Logic (Thật)",
            fragments: [
                "Before you look at the picture a guide...", "These activitives inlude...", 
                "Inside the building there is a photograph...", "When you arrive...collect your ticket", 
                "You must show it..."
            ],
            key: "4-5-3-1-2",
            story: 'Câu chuyện thật: "<strong>Khi bạn đến</strong> triển lãm, bạn <strong>lấy cái vé</strong>, <strong>show vé</strong>, <strong>bên trong có những bức tranh</strong>, <strong>trước khi xem tranh</strong>, nhân viên sẽ nói về <strong>các hoạt động của ngày hôm nay</strong>."'
        },
        {
            id: "p2_running_race",
            title: "Câu chuyện tham gia chạy bộ",
            type: "Logic (Thật)",
            fragments: [
                "Runners must register...", "Please put this in...", "On arrival at the park",
                "An employee...", "To do this..."
            ],
            key: "3-1-5-4-2",
            story: 'Câu chuyện thật: "<strong>Khi bạn đến công viên</strong>, <strong>người tham gia phải đăng kí</strong>, <strong>để làm điều này</strong> thì bạn phải điền form, <strong>nhân viên</strong> sẽ phát quà lưu niệm, khi điền xong <strong>hãy trả lại form</strong>."'
        },
        {
            id: "p2_planting_rose",
            title: "Trồng hoa hồng",
            type: "Logic (Thật)",
            fragments: [
                "Finally", "Push", "Must water everyday", "Dig a hole", "Put the rose base down"
            ],
            key: "4-5-2-3-1",
            story: 'Câu chuyện thật: "<strong>Đào cái hố</strong>, <strong>đặt bông hồng xuống</strong>, <strong>lấp đất</strong>, <strong>tưới nước mỗi ngày</strong>, <strong>cuối cùng</strong> cây sẽ phát triển."'
        },
        {
            id: "p2_original_house",
            title: "Câu chuyện nhà ban đầu",
            type: "Logic (Thật)",
            fragments: [
                "Too small", "That original house", "After extension",
                "Today it has hundreds of rooms", "Since then,"
            ],
            key: "2-1-3-5-4",
            story: 'Câu chuyện thật: "<strong>Nhà ban đầu</strong> <strong>quá nhỏ</strong>, <strong>sau khi sửa chữa</strong>, <strong>kể từ đó</strong>, <strong>có trăm phòng</strong>."'
        },
        {
            id: "p2_famous_singer",
            title: "Câu chuyện ca sĩ nổi tiếng",
            type: "Logic (Thật)",
            fragments: [
                "He became successful", "Jay was really good at", "He started his highschool",
                "At one of these events", "When he was young,"
            ],
            key: "5-3-2-4-1",
            story: 'Câu chuyện thật: "<strong>Thời còn nhỏ</strong>, anh ấy muốn làm ca sĩ nổi tiếng, <strong>anh ấy bắt đầu học đại học</strong>, <strong>giỏi về âm nhạc</strong>, <strong>tại 1 trong những sự kiện</strong>, <strong>anh ấy trở thành ca sĩ nổi tiếng</strong>."'
        },
        {
            id: "p2_presentation_day",
            title: "Câu chuyện thuyết trình",
            type: "Logic (Thật)",
            fragments: [
                "Before the open day", "With this information", "You must show",
                "Each one", "Following these presentations"
            ],
            key: "1-2-3-4-5",
            story: 'Câu chuyện thật: "<strong>trước khi</strong> – <strong>có thông tin</strong> – <strong>bạn phải show</strong> – <strong>mỗi</strong> – <strong>bài thuyết trình</strong>."'
        },
        {
            id: "p2_used_car",
            title: "Mua xe hơi cũ",
            type: "Logic (Thật)",
            fragments: [
                "I had just passed", "However,", "So, ",
                "I called the number", "We agreed on a price "
            ],
            key: "1-2-3-4-5",
            story: 'Câu chuyện thật: "<strong>Pass</strong> kì thi lái xe, <strong>Tuy nhiên,</strong> không có xe, <strong>Vì thế,</strong> khi thấy tờ quảng cáo, <strong> gọi điện thoại ngay</strong>, <strong> đồng ý giao tiền giao chìa khóa</strong>."'
        }
        // Thêm các câu hỏi Part 2 khác vào đây
    ],

    // Dữ liệu cho Part 3
    part3: [
        {
            id: "p3_natural_history",
            title: "Natural History Center",
            type: "Logic (Thật)",
            fragments: [
                "As well as selling tickets, (maps and information)...", "When you arrive..., you will see a set of stairs",
                "The entrance ... is on the square.", "The most important ...", "The ticket office ...",
            ],
            key: "4-3-2-5-1",
            story: 'Câu chuyện logic: "<strong>Điều quan trọng nhất (4)</strong> là phải đến đúng tòa nhà. <strong>Lối vào (3)</strong> ở trên quảng trường. <strong>Khi bạn đến (2)</strong>, bạn sẽ thấy một dãy cầu thang. Hãy đến <strong>văn phòng vé (5)</strong>. <strong>Ngoài việc bán vé (1)</strong>, họ còn cung cấp bản đồ và thông tin."'
        },

        // Thêm các câu hỏi Part 3 khác vào đây
    ]
    // Thêm dữ liệu cho part1, part4, part5... vào đây
};