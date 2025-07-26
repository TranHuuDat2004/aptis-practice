// js/data-reading.js

const readingData = {
    part1: [
        {
            id: 'p1_just_too',
            title: 'Key: Just / Too / To',
            keys: ['Just', 'Too', 'To', 'Some', 'Give'],
            story: 'Câu chuyện gợi nhớ: "Tôi <strong>Just</strong> (vừa mới) nhận ra trời <strong>Too</strong> (quá) lạnh <strong>To</strong> (để) đi ra ngoài, nên tôi đã gọi <strong>Some</strong> (một vài) người bạn đến và <strong>Give</strong> (đưa) họ ít trà nóng."'
        },
        {
            id: 'p1_miss_called',
            title: 'Key: Miss / Called',
            keys: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'],
            story: 'Câu chuyện gợi nhớ: "Tôi rất <strong>nhớ (Miss)</strong> bạn, tôi đã <strong>gọi (Called)</strong> để hỏi bạn đã <strong>sẵn sàng (Ready)</strong> để <strong>gặp (Meet)</strong> tôi cho bữa <strong>tối (Dinner)</strong> chưa."'
        },
        {
            id: 'p1_near_friendly',
            title: 'Key: Near / Friendly',
            keys: ['Near', 'Friendly', 'Practice', 'Read', 'So'],
            story: 'Câu chuyện gợi nhớ: "Ở <strong>gần (Near)</strong> nhà tôi có một người hàng xóm <strong>thân thiện (Friendly)</strong>. Chúng tôi thường <strong>luyện tập (Practice)</strong> và <strong>đọc (Read)</strong> sách cùng nhau, <strong>vì vậy (So)</strong> chúng tôi rất thân."'
        },
        {
            id: 'p1_balance_slowly',
            title: 'Key: Balance / Slowly',
            keys: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'],
            story: 'Câu chuyện gợi nhớ: "Để <strong>cân bằng (Balance)</strong> tài khoản, hãy xem <strong>sao kê (Statement)</strong>. <strong>Hãy nghĩ (Think)</strong> thật <strong>chậm (Slowly)</strong> <strong>trước khi (Before)</strong> chi tiêu."'
        },

        // --- TOÀN BỘ KEY MỚI TỪ HÌNH ẢNH ---
        {
            id: 'p1_sick_read',
            title: 'Key: Sick / Read',
            keys: ['Sick', 'Read', 'Meeting', 'Ringing', 'Drink'],
            story: 'Câu chuyện gợi nhớ: "Tôi cảm thấy <strong>bệnh (Sick)</strong> nên không thể <strong>đọc (Read)</strong> tài liệu cho buổi <strong>họp (Meeting)</strong>. Điện thoại cứ <strong>reo (Ringing)</strong> liên tục, tôi phải <strong>uống (Drink)</strong> một ly nước để bình tĩnh."'
        },
        {
            id: 'p1_friendly_walk',
            title: 'Key: Friendly / Walk',
            keys: ['Friendly', 'Walk', 'First', 'Speak', 'Together'],
            story: 'Câu chuyện gợi nhớ: "Người bạn <strong>thân thiện (Friendly)</strong> và tôi đi <strong>dạo (Walk)</strong>. <strong>Đầu tiên (First)</strong>, chúng tôi không <strong>nói (Speak)</strong> gì, nhưng sau đó đã trò chuyện <strong>cùng nhau (Together)</strong>."'
        },
        {
            id: 'p1_near_move',
            title: 'Key: Near / Move',
            keys: ['Near', 'Move', 'Drive', 'Walk', 'Pretty'],
            story: 'Câu chuyện gợi nhớ: "Tôi sống <strong>gần (Near)</strong> một nơi rất đẹp. Để <strong>di chuyển (Move)</strong>, bạn có thể <strong>lái xe (Drive)</strong> hoặc đi <strong>bộ (Walk)</strong>. Khung cảnh rất <strong>xinh đẹp (Pretty)</strong>."'
        },
        {
            id: 'p1_window_buy',
            title: 'Key: Window / Buy',
            keys: ['Window', 'Buy', 'Market', 'Cake', 'Watch'],
            story: 'Câu chuyện gợi nhớ: "Tôi nhìn qua <strong>cửa sổ (Window)</strong> và quyết định đi <strong>mua (Buy)</strong> đồ ở <strong>chợ (Market)</strong>. Tôi mua một cái <strong>bánh (Cake)</strong> rồi về nhà <strong>xem (Watch)</strong> TV."'
        },
        {
            id: 'p1_clear_sun',
            title: 'Key: Clear / Sun',
            keys: ['Clear', 'Sun', 'Enjoyable', 'Working', 'Read'],
            story: 'Câu chuyện gợi nhớ: "Trời hôm nay <strong>quang đãng (Clear)</strong> và có <strong>nắng (Sun)</strong>, thật là một ngày <strong>dễ chịu (Enjoyable)</strong>. Thay vì <strong>làm việc (Working)</strong>, tôi quyết định đi <strong>đọc (Read)</strong> sách."'
        },
        {
            id: 'p1_visit_hot',
            title: 'Key: Visit / Hot',
            keys: ['Visit', 'Hot', 'Speak', 'Game', 'Train'],
            story: 'Câu chuyện gợi nhớ: "Tôi đi <strong>thăm (Visit)</strong> bạn. Trời rất <strong>nóng (Hot)</strong>. Chúng tôi <strong>nói chuyện (Speak)</strong>, chơi một ván <strong>cờ (Game)</strong> rồi cùng nhau đi <strong>tàu (Train)</strong> về nhà."'
        },
        {
            id: 'p1_long_detail',
            title: 'Key: Long / Detail',
            keys: ['Long', 'Detail', 'Copy', 'Busy', 'Client'],
            story: 'Câu chuyện gợi nhớ: "Bản báo cáo này rất <strong>dài (Long)</strong> và có nhiều <strong>chi tiết (Detail)</strong>. Hãy <strong>sao chép (Copy)</strong> nó ra vì sếp đang rất <strong>bận (Busy)</strong> và cần gửi cho <strong>khách hàng (Client)</strong>."'
        },
        {
            id: 'p1_live_share',
            title: 'Key: Live / Share',
            keys: ['Live', 'Share', 'Class', 'Drive', 'Cook'],
            story: 'Câu chuyện gợi nhớ: "Chúng tôi <strong>sống (Live)</strong> và <strong>chia sẻ (Share)</strong> mọi thứ trong một <strong>lớp (Class)</strong> học. Chúng tôi cùng nhau <strong>lái xe (Drive)</strong> và <strong>nấu ăn (Cook)</strong>."'
        },
        {
            id: 'p1_late_meetings',
            title: 'Key: Late / Meetings',
            keys: ['Late', 'Meetings', 'Park', 'Shop', 'Cook'],
            story: 'Câu chuyện gợi nhớ: "Tôi bị <strong>trễ (Late)</strong> các <strong>cuộc họp (Meetings)</strong>, nên tôi đã đi ra <strong>công viên (Park)</strong>, ghé <strong>cửa hàng (Shop)</strong> mua đồ và về nhà <strong>nấu ăn (Cook)</strong>."'
        },
        {
            id: 'p1_early_lunch',
            title: 'Key: Early / Lunch',
            keys: ['Early', 'Lunch', 'Leave', 'Car', 'Sleepy'],
            story: 'Câu chuyện gợi nhớ: "Tôi dậy <strong>sớm (Early)</strong>, ăn <strong>trưa (Lunch)</strong>, rồi <strong>rời đi (Leave)</strong> bằng <strong>ô tô (Car)</strong>. Lái xe một mình khiến tôi thấy <strong>buồn ngủ (Sleepy)</strong>."'
        },
        {
            id: 'p1_great_boat',
            title: 'Key: Great / Boat',
            keys: ['Great', 'Boat', 'Then', 'Drive', 'Too'],
            story: 'Câu chuyện gợi nhớ: "Thật là <strong>tuyệt (Great)</strong> khi đi <strong>thuyền (Boat)</strong>. <strong>Sau đó (Then)</strong>, chúng tôi <strong>lái xe (Drive)</strong> về nhà. Chuyến đi thật vui <strong>quá (Too)</strong>!"'
        }// Bạn có thể thêm các bộ key khác vào đây
    ],


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
            title: "Tìm kiếm thông tin",
            type: "Bịa (Ghi nhớ)",
            fragments: [
                "After", "You can", "Document", "The search", "First"
            ],
            key: "5-4-3-1-2",
            story: 'Câu chuyện bịa: "<strong>Đầu tiên</strong> bạn phải bắt đầu việc <strong>tìm kiếm</strong>. Hãy <strong>ghi lại (document)</strong> mọi thứ. <strong>Sau đó</strong>, <strong>bạn có thể</strong> viết ra giấy."'
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
        }

        // Thêm các câu hỏi Part 3 khác vào đây
    ],
    part4: [
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> thấy đây là <strong>nơi đẹp để thư giãn</strong> và sẽ <strong>nhờ người khác giúp</strong>. Người <strong>B</strong> thì <strong>không dọn được vì bận</strong> nhưng tin rằng nó <strong>giúp cho công việc tương lai</strong>. Người <strong>C</strong> cho rằng <strong>khu vực cần dọn dẹp</strong> và việc này nên <strong>diễn ra thường xuyên</strong>. Người <strong>D</strong> nghĩ nó <strong>quan trọng cho trẻ em</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>quên mang đồ</strong> và <strong>thích đi một mình</strong>. Người <strong>B</strong> thì <strong>chi nhiều tiền cho việc đi lại</strong>. Người <strong>C</strong> nghĩ <strong>phương tiện công cộng cần cải thiện</strong> và <strong>thích đi bộ</strong>. Người <strong>D</strong> thì <strong>thích ăn đồ ăn</strong> ở đó và <strong>thích mua đồ được làm sẵn</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>có năng khiếu hội họa</strong> nhưng lại thấy <strong>triển lãm nhàm chán</strong>. Người <strong>B</strong> thì <strong>thích đi xem một mình</strong> và muốn mọi người <strong>tập trung vào nghệ thuật</strong>. Người <strong>C</strong> lại rất <strong>am hiểu về hội họa</strong>. Người <strong>D</strong> thì <strong>thích đi xem với bạn bè</strong> và đã <strong>dành cả đời để đi xem</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>lên kế hoạch đọc</strong> và <strong>đọc nhiều hơn người khác</strong>. Người <strong>B</strong> <strong>muốn đọc nhiều sách</strong> và <strong>đọc nhiều cuốn cùng lúc</strong>. Người <strong>C</strong> thì <strong>gặp khó khăn khi đọc</strong>. Người <strong>D</strong> thấy <strong>sách thực tế nhàm chán</strong> và <strong>không có thời gian đọc</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>thích xem TV hơn học</strong> và thích các <strong>chương trình dài tập</strong>. Người <strong>B</strong> thì <strong>tránh xem chương trình thực tế</strong> và <strong>không còn hứng thú với đá banh</strong>. Người <strong>C</strong> học được nhiều <strong>kiến thức từ TV</strong>. Người <strong>D</strong> là người <strong>xem không kén chọn</strong> và <strong>thích cập nhật tin tức và phim ảnh</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> thì <strong>thích ăn cùng bạn bè</strong>. Người <strong>B</strong> thì <strong>thích ăn một mình</strong> để <strong>tiết kiệm tiền</strong>. Người <strong>C</strong> thích <strong>ăn nhiều món đa dạng</strong> và có <strong>tham gia khóa học nấu ăn</strong>. Người <strong>D</strong> chỉ <strong>ăn được vài món</strong> và <strong>thích đồ ăn nấu ở nhà</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> nghĩ <strong>phương tiện công cộng tốt rồi</strong> nhưng <strong>đi bộ nhiều thì gặp vấn đề (mệt)</strong>. Người <strong>B</strong> <strong>thích khu resort tự nhiên</strong> và chỉ <strong>tham quan một phần thành phố</strong>. Người <strong>C</strong> <strong>thích nhà hát công cộng</strong> và <strong>chi nhiều tiền mua sắm</strong>. Người <strong>D</strong> thì <strong>chi nhiều tiền cho đồ ăn</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>chưa ăn gì cả</strong> nhưng <strong>thích không khí ở đây</strong>. Người <strong>B</strong> thấy <strong>chất lượng đồ ăn trung bình</strong> và nghĩ <strong>trải nghiệm này không thường xuyên</strong>. Người <strong>C</strong> thì <strong>sẽ không bao giờ quay lại</strong>. Người <strong>D</strong> <strong>ấn tượng với món khai vị</strong> và thấy <strong>âm nhạc quá nhỏ</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>muốn làm việc ở nhiều quốc gia</strong> nên <strong>đề nghị tăng giá vé</strong>. Người <strong>B</strong> <strong>thăm gia đình thường xuyên</strong> và cũng muốn <strong>bảo vệ môi trường</strong>. Người <strong>C</strong> <strong>thấy thư giãn khi bay</strong>. Người <strong>D</strong> phải <strong>bay vì công việc</strong> nhưng thấy đó là một <strong>trải nghiệm tệ</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> nghĩ kỳ nghỉ cần <strong>thời tiết đẹp</strong> và <strong>muốn đi leo núi</strong>. Người <strong>B</strong> thì <strong>chưa bao giờ đi nước ngoài</strong>. Người <strong>C</strong> <strong>thích ở nhà</strong> và <strong>thích đi bộ</strong>. Người <strong>D</strong> <strong>thích các điểm thu hút khách du lịch</strong> nhưng thấy <strong>đi biển nhàm chán</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>thích tập với bạn</strong> và cho rằng <strong>chế độ ăn quan trọng</strong>. Người <strong>B</strong> chỉ tin vào <strong>thói quen tập luyện</strong>. Người <strong>C</strong> nghĩ <strong>thi đấu không có lợi</strong> và <strong>tập thể dục tốt cho mọi lứa tuổi</strong>. Người <strong>D</strong> cho rằng <strong>không cần trải qua đau đớn</strong> vì <strong>có thể hỏi chuyên gia</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>đã xem phim trước đó rồi</strong> và <strong>vẫn thấy sợ</strong>. Người <strong>B</strong> <strong>xem phim ở nhà</strong> và <strong>thích cốt truyện bộ phim</strong>. Người <strong>C</strong> thì <strong>xem phim với bạn bè</strong>. Người <strong>D</strong> thấy <strong>phim quá dài</strong> và <strong>thích đọc sách của bộ phim</strong>."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> nghĩ mọi người nên <strong>tự lên kế hoạch chuyến đi</strong>. Người <strong>B</strong> thấy <strong>xe buýt quá đông</strong> và tin rằng <strong>nhà ga mới sẽ giúp ích</strong>. Người <strong>C</strong> lại thấy <strong>dịch vụ xe buýt đã tốt</strong> và <strong>không cần cải thiện</strong>. Người <strong>D</strong> lo rằng <strong>nhà ga mới sẽ tốn kém</strong> và nên <strong>xây trạm y tế</strong> hơn."'
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
            story: 'Câu chuyện gợi nhớ: "Người <strong>A</strong> <strong>dùng để liên lạc gia đình</strong> và nghĩ <strong>mọi người quá phụ thuộc</strong> vào nó. Người <strong>B</strong> <strong>dùng cho công việc</strong> và khuyên <strong>không dùng trước khi ngủ</strong>. Người <strong>C</strong> <strong>dùng để giải trí</strong> và <strong>luôn mua đồ mới nhất</strong>. Người <strong>D</strong> thì cho rằng <strong>trẻ em không nên dùng</strong> công nghệ."'
        }
    ]
    // Thêm dữ liệu cho part1, part4, part5... vào đây
};