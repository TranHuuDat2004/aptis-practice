const readingPart1Data = [
    {
        id: 'p1_just_too',
        title: 'Key: Just / Too / To',
        keys: ['Just', 'Too', 'To', 'Some', 'Give'],
        story: '"Tôi <strong>Just</strong> (vừa mới) nhận ra trời <strong>Too</strong> (quá) lạnh <strong>To</strong> (để) đi ra ngoài, nên tôi đã gọi <strong>Some</strong> (một vài) người bạn đến và <strong>Give</strong> (đưa) họ ít trà nóng."'
    },
    {
        id: 'p1_miss_called',
        title: 'Key: Miss / Called',
        keys: ['Miss', 'Called', 'Ready', 'Meet', 'Dinner'],
        story: '"Tôi rất <strong>nhớ (Miss)</strong> bạn, tôi đã <strong>gọi (Called)</strong> để hỏi bạn đã <strong>sẵn sàng (Ready)</strong> để <strong>gặp (Meet)</strong> tôi cho bữa <strong>tối (Dinner)</strong> chưa."'
    },
    {
        id: 'p1_near_friendly',
        title: 'Key: Near / Friendly',
        keys: ['Near', 'Friendly', 'Practice', 'Read', 'So'],
        story: '"Ở <strong>gần (Near)</strong> nhà tôi có một người hàng xóm <strong>thân thiện (Friendly)</strong>. Chúng tôi thường <strong>luyện tập (Practice)</strong> và <strong>đọc (Read)</strong> sách cùng nhau, <strong>vì vậy (So)</strong> chúng tôi rất thân."'
    },
    {
        id: 'p1_balance_slowly',
        title: 'Key: Balance / Slowly',
        keys: ['Balance', 'Statement', 'Think', 'Slowly', 'Before'],
        story: '"Để <strong>cân bằng (Balance)</strong> tài khoản, hãy xem <strong>sao kê (Statement)</strong>. <strong>Hãy nghĩ (Think)</strong> thật <strong>chậm (Slowly)</strong> <strong>trước khi (Before)</strong> chi tiêu."'
    },
    {
        id: 'p1_sick_read',
        title: 'Key: Sick / Read',
        keys: ['Sick', 'Read', 'Meeting', 'Ringing', 'Drink'],
        story: '"Tôi cảm thấy <strong>bệnh (Sick)</strong> nên không thể <strong>đọc (Read)</strong> tài liệu cho buổi <strong>họp (Meeting)</strong>. Điện thoại cứ <strong>reo (Ringing)</strong> liên tục, tôi phải <strong>uống (Drink)</strong> một ly nước để bình tĩnh."'
    },
    {
        id: 'p1_friendly_walk',
        title: 'Key: Friendly / Walk',
        keys: ['Friendly', 'Walk', 'First', 'Speak', 'Together'],
        story: '"Người bạn <strong>thân thiện (Friendly)</strong> và tôi đi <strong>dạo (Walk)</strong>. <strong>Đầu tiên (First)</strong>, chúng tôi không <strong>nói (Speak)</strong> gì, nhưng sau đó đã trò chuyện <strong>cùng nhau (Together)</strong>."'
    },
    {
        id: 'p1_near_move',
        title: 'Key: Near / Move',
        keys: ['Near', 'Move', 'Drive', 'Walk', 'Pretty'],
        story: '"Tôi sống <strong>gần (Near)</strong> một nơi rất đẹp. Để <strong>di chuyển (Move)</strong>, bạn có thể <strong>lái xe (Drive)</strong> hoặc đi <strong>bộ (Walk)</strong>. Khung cảnh rất <strong>xinh đẹp (Pretty)</strong>."'
    },
    {
        id: 'p1_window_buy',
        title: 'Key: Window / Buy',
        keys: ['Window', 'Buy', 'Market', 'Cake', 'Watch'],
        story: '"Tôi nhìn qua <strong>cửa sổ (Window)</strong> và quyết định đi <strong>mua (Buy)</strong> đồ ở <strong>chợ (Market)</strong>. Tôi mua một cái <strong>bánh (Cake)</strong> rồi về nhà <strong>xem (Watch)</strong> TV."'
    },
    {
        id: 'p1_clear_sun',
        title: 'Key: Clear / Sun',
        keys: ['Clear', 'Sun', 'Enjoyable', 'Working', 'Read'],
        story: '"Trời hôm nay <strong>quang đãng (Clear)</strong> và có <strong>nắng (Sun)</strong>, thật là một ngày <strong>dễ chịu (Enjoyable)</strong>. Thay vì <strong>làm việc (Working)</strong>, tôi quyết định đi <strong>đọc (Read)</strong> sách."'
    },
    {
        id: 'p1_visit_hot',
        title: 'Key: Visit / Hot',
        keys: ['Visit', 'Hot', 'Speak', 'Game', 'Train'],
        story: '"Tôi đi <strong>thăm (Visit)</strong> bạn. Trời rất <strong>nóng (Hot)</strong>. Chúng tôi <strong>nói chuyện (Speak)</strong>, chơi một ván <strong>cờ (Game)</strong> rồi cùng nhau đi <strong>tàu (Train)</strong> về nhà."'
    },
    {
        id: 'p1_long_detail',
        title: 'Key: Long / Detail',
        keys: ['Long', 'Detail', 'Copy', 'Busy', 'Client'],
        story: '"Bản báo cáo này rất <strong>dài (Long)</strong> và có nhiều <strong>chi tiết (Detail)</strong>. Hãy <strong>sao chép (Copy)</strong> nó ra vì sếp đang rất <strong>bận (Busy)</strong> và cần gửi cho <strong>khách hàng (Client)</strong>."'
    },
    {
        id: 'p1_live_share',
        title: 'Key: Live / Share',
        keys: ['Live', 'Share', 'Class', 'Drive', 'Cook'],
        story: '"Chúng tôi <strong>sống (Live)</strong> và <strong>chia sẻ (Share)</strong> mọi thứ trong một <strong>lớp (Class)</strong> học. Chúng tôi cùng nhau <strong>lái xe (Drive)</strong> và <strong>nấu ăn (Cook)</strong>."'
    },
    {
        id: 'p1_late_meetings',
        title: 'Key: Late / Meetings',
        keys: ['Late', 'Meetings', 'Park', 'Shop', 'Cook'],
        story: '"Tôi bị <strong>trễ (Late)</strong> các <strong>cuộc họp (Meetings)</strong>, nên tôi đã đi ra <strong>công viên (Park)</strong>, ghé <strong>cửa hàng (Shop)</strong> mua đồ và về nhà <strong>nấu ăn (Cook)</strong>."'
    },
    {
        id: 'p1_early_lunch',
        title: 'Key: Early / Lunch',
        keys: ['Early', 'Lunch', 'Leave', 'Car', 'Sleepy'],
        story: '"Tôi dậy <strong>sớm (Early)</strong>, ăn <strong>trưa (Lunch)</strong>, rồi <strong>rời đi (Leave)</strong> bằng <strong>ô tô (Car)</strong>. Lái xe một mình khiến tôi thấy <strong>buồn ngủ (Sleepy)</strong>."'
    },
    {
        id: 'p1_great_boat',
        title: 'Key: Great / Boat',
        keys: ['Great', 'Boat', 'Then', 'Drive', 'Too'],
        story: '"Thật là <strong>tuyệt (Great)</strong> khi đi <strong>thuyền (Boat)</strong>. <strong>Sau đó (Then)</strong>, chúng tôi <strong>lái xe (Drive)</strong> về nhà. Chuyến đi thật vui <strong>quá (Too)</strong>!"'
    }
];
