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
            story: 'Câu chuyện thật: "<strong>Thời còn nhỏ</strong> ảnh ấy thích đọc sách, <strong>bạn thân anh ấy</strong> cũng thích đọc sách, <strong>Cô ấy sớm</strong> thành người yêu của họ, <strong>đó là khoảng thời gian</strong> đẹp nhất tại trường <strong>đại học Princeton</strong>."'
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