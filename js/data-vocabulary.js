// js/data-vocabulary.js

const vocabularyData = {
    places: {
        indoors: [
            {
                category: "Cửa hiệu", items: [
                    { en: "grocery store", vi: "cửa hàng tạp hóa" },
                    { en: "bread store, bakery", vi: "tiệm bánh mì" },
                    { en: "flower shop", vi: "tiệm bán hoa" }
                ]
            },
            {
                category: "Cơ quan, nơi công cộng", items: [
                    { en: "fire station", vi: "sở cứu hỏa" },
                    { en: "library", vi: "thư viện" },
                    { en: "airport", vi: "sân bay" },
                    { en: "parking garage", vi: "bãi đậu xe (có mái che)" }
                ]
            },
            {
                category: "Khu vui chơi giải trí", items: [
                    { en: "indoor swimming pool", vi: "hồ bơi có mái che" },
                    { en: "gym, fitness center", vi: "phòng tập thể dục" },
                    { en: "hotel lounge", vi: "sảnh khách sạn" }
                ]
            },
            {
                category: "Sự kiện", items: [
                    { en: "exhibition", vi: "triển lãm" }
                ]
            }
        ],
        outdoors: [
            {
                category: "Cửa hiệu", items: [
                    { en: "flea market", vi: "chợ trời" },
                    { en: "street market", vi: "chợ đường phố" },
                    { en: "open market", vi: "chợ ngoài trời" }
                ]
            },
            {
                category: "Cơ quan, nơi công cộng", items: [
                    { en: "bus station", vi: "trạm xe buýt" },
                    { en: "parking lot", vi: "khu vực đậu xe" },
                    { en: "square", vi: "quảng trường" },
                    { en: "park", vi: "công viên" }
                ]
            },
            {
                category: "Khu vui chơi giải trí", items: [
                    { en: "playground", vi: "sân chơi" },
                    { en: "ski resort", vi: "khu trượt tuyết" },
                    { en: "beach", vi: "bãi biển" },
                    { en: "riverside", vi: "bờ sông" }
                ]
            },
            {
                category: "Sự kiện và nơi khác", items: [
                    { en: "garden party", vi: "tiệc tổ chức trong vườn" },
                    { en: "construction site", vi: "công trường xây dựng" },
                    { en: "tourist attraction", vi: "khu du lịch" }
                ]
            }
        ]
    },
    people: {
        no_s: [
            { en: "police", vi: "cảnh sát" },
            { en: "staff", vi: "nhân viên" },
            { en: "family", vi: "gia đình" },
            { en: "audience", vi: "khán giả" }
        ],
        with_s: [
            { en: "passengers", vi: "hành khách" },
            { en: "pedestrians", vi: "khách bộ hành" },
            { en: "receptionists", vi: "nhân viên tiếp tân" },
            { en: "visitors", vi: "du khách" },
            { en: "musicians", vi: "nhạc sĩ" },
            { en: "attendees", vi: "người tham dự" },
            { en: "spectators", vi: "khán giả (thể thao)" },
            { en: "flight attendants", vi: "tiếp viên hàng không" },
            { en: "helpers", vi: "người giúp đỡ" },
            { en: "players", vi: "người chơi, cầu thủ" }, // Sửa lại: players là cầu thủ/người chơi
            { en: "workers", vi: "công nhân" }, // Sửa lại: workers là công nhân
            { en: "customers", vi: "khách hàng" },
            { en: "clients", vi: "khách hàng" },
            { en: "diners", vi: "khách ăn trong nhà hàng" },
            { en: "clerks", vi: "thư ký" }
        ]
    },
    // THÊM OBJECT MỚI VÀO ĐÂY
    features: {
        position: [
            { en: "be displayed", vi: "được trưng bày" },
            { en: "be arranged", vi: "được sắp xếp" },
            { en: "be sorted", vi: "được sắp theo loại" },
            { en: "be set", vi: "được bố trí" },
            { en: "be put", vi: "được đặt" },
            { en: "be left", vi: "được để" },
            { en: "be tied", vi: "được buộc" },
            { en: "be placed", vi: "được đặt/để" },
            { en: "be located", vi: "được đặt ở vị trí" },
            { en: "be parked", vi: "được đậu" },
            { en: "be scattered", vi: "được đặt rải rác" }
        ],
        situation: [
            { en: "be busy with", vi: "bận rộn với" },
            { en: "be crowded with", vi: "đông đúc với" },
            { en: "be packed with", vi: "dày đặc với" },
            { en: "be full of", vi: "đầy" },
            { en: "be filled with", vi: "được chất đầy" }
        ]
    },
    // --- THÊM OBJECT MỚI VÀO ĐÂY ---
    descriptions: {
        hair_has: [
            { en: "blond hair", vi: "tóc hoe" },
            { en: "straight hair", vi: "tóc thẳng" },
            { en: "curly hair", vi: "tóc quăn" },
            { en: "wavy hair", vi: "tóc gợn sóng" },
            { en: "pigtails", vi: "tóc đuôi sam" },
            { en: "a ponytail", vi: "tóc kẹp đuôi ngựa" }
        ],
        hair_is: [
            { en: "bald", vi: "hói" },
            { en: "blond", vi: "tóc vàng" },
            { en: "brunet", vi: "tóc nâu" },
            { en: "blonde", vi: "tóc vàng" }
        ],
        beard: [
            { en: "a beard", vi: "râu" },
            { en: "a mustache", vi: "ria mép" },
            { en: "whiskers", vi: "râu quai nón" },
            { en: "sideburns", vi: "tóc mai" },
            { en: "a goatee", vi: "chòm râu dê" }
        ],
        body_shape: [
            { en: "slim", vi: "mảnh khảnh" },
            { en: "short", vi: "thấp" },
            { en: "chubby", vi: "mập mạp" },
            { en: "tall", vi: "cao" }
        ],
        clothes: [
            { en: "jeans", vi: "quần jean" },
            { en: "pants", vi: "quần tây" },
            { en: "a skirt", vi: "váy" },
            { en: "a shirt", vi: "áo sơ mi" },
            { en: "a turtleneck", vi: "áo cổ lọ" },
            { en: "a cardigan", vi: "áo len dài tay (có nút cài)" },
            { en: "a sweater", vi: "áo len dài tay (tròng cổ)" },
            { en: "shorts", vi: "quần soóc" },
            { en: "a dress", vi: "áo đầm" },
            { en: "a blouse", vi: "áo sơ mi của phụ nữ" },
            { en: "a shirt dress", vi: "áo đầm kiểu sơ mi" },
            { en: "a suit", vi: "bộ com lê" },
            { en: "a vest", vi: "áo lót, áo ghi-lê" },
            { en: "a coat", vi: "áo khoác ngoài" },
            { en: "sportswear", vi: "quần áo thể thao" },
            { en: "a swim suit", vi: "quần áo bơi lội" },
            { en: "a uniform", vi: "đồng phục" },
            { en: "a sari", vi: "áo sari" },
            { en: "short/long-sleeved shirt", vi: "áo sơ mi ngắn/dài tay" },
            { en: "sleeveless dress", vi: "áo đầm không tay" },
            { en: "a jacket", vi: "áo vét" },
            { en: "pajamas", vi: "đồ pijama" },
            { en: "a track suit", vi: "quần áo vận động viên" },
            { en: "a lab coat", vi: "áo khoác mặc trong phòng thí nghiệm" },
            { en: "a poncho", vi: "áo ponsô choàng cổ" }
        ],
        accessories: [
            { en: "a ring", vi: "nhẫn" },
            { en: "a cap", vi: "mũ lưỡi trai" },
            { en: "earrings", vi: "bông tai" },
            { en: "a hat", vi: "nón" },
            { en: "a bracelet", vi: "vòng tay" },
            { en: "a helmet", vi: "mũ bảo hộ" },
            { en: "a necklace", vi: "dây trang sức đeo cổ" },
            { en: "ear muffs", vi: "mũ len che tai giữ ấm" },
            { en: "a watch", vi: "đồng hồ đeo tay" },
            { en: "a belt", vi: "thắt lưng (dây nịt)" },
            { en: "a name sticker on her lapel", vi: "bảng tên trên ve áo" },
            { en: "tie", vi: "cra-vat" },
            { en: "gloves", vi: "găng tay" },
            { en: "a scarf", vi: "khăn choàng cổ" },
            { en: "sandals", vi: "dép quai, xăng đan" },
            { en: "a muffler", vi: "khăn choàng cổ" },
            { en: "boots", vi: "giày ống" },
            { en: "sunglasses", vi: "kính mát" },
            { en: "a lei", vi: "vòng hoa choàng quanh cổ" },
            { en: "a headband", vi: "dải băng quấn đầu" },
            { en: "suspenders", vi: "dây đeo quần" }
        ]
    },
     // --- THÊM OBJECT MỚI VÀO ĐÂY ---
    details: {
        colors: [
            { en: "burgundy", vi: "màu đỏ thẫm" }, { en: "pink", vi: "màu hồng" },
            { en: "purple", vi: "màu tím" }, { en: "pastel", vi: "màu tùng lam" },
            { en: "brown", vi: "màu nâu" }, { en: "grey", vi: "màu xám" },
            { en: "orange", vi: "màu cam" }, { en: "beige", vi: "màu be" }
        ],
        size_intensity: [
            { en: "thick–thin", vi: "dày – mỏng" }, { en: "dark–light", vi: "đậm – nhạt" },
            { en: "long–short", vi: "dài – ngắn" }, { en: "blunt–sharp", vi: "cùn – sắc" },
            { en: "high–low", vi: "cao – thấp" }, { en: "fancy–plain", vi: "lòe loẹt – thuần màu" },
            { en: "heavy–light", vi: "nặng – nhẹ" }, { en: "wide–narrow", vi: "rộng – hẹp" }
        ],
        shapes: [
            { en: "oval", vi: "hình bầu dục" }, { en: "pentagram", vi: "hình ngôi sao năm cánh" },
            { en: "round", vi: "hình tròn" }, { en: "pentagonal", vi: "hình ngũ giác" },
            { en: "square", vi: "hình vuông" }, { en: "hexagram", vi: "hình ngôi sao sáu cánh" },
            { en: "triangle", vi: "hình tam giác" }, { en: "hexagonal", vi: "hình lục giác" },
            { en: "rectangle", vi: "hình chữ nhật" }, { en: "diamond shape", vi: "hình thoi" }
        ],
        object_actions: [
            { en: "handing", vi: "đưa cho" }, { en: "pushing", vi: "đẩy" },
            { en: "holding", vi: "cầm, nắm, giữ" }, { en: "pulling", vi: "kéo" },
            { en: "carrying", vi: "mang" }, { en: "checking", vi: "kiểm tra" },
            { en: "lifting", vi: "nâng, nhấc lên" }, { en: "trying", vi: "thử" },
            { en: "riding on", vi: "đi (bằng phương tiện)" }, { en: "taking a picture", vi: "chụp ảnh" },
            { en: "boarding", vi: "lên (tàu, máy bay)" }, { en: "resting", vi: "dựa vào, tựa" },
            { en: "getting on", vi: "lên xe" }, { en: "stacking", vi: "chất vào" },
            { en: "getting off", vi: "xuống xe" }, { en: "throwing", vi: "ném đi" }
        ],
        special_actions: [
            { en: "folding one’s arms", vi: "khoanh tay lại" }, { en: "arm-in-arm", vi: "khoác tay nhau" },
            { en: "clasping fingers", vi: "đan ngón tay vào nhau" }, { en: "pointing at", vi: "chỉ tay vào" },
            { en: "sitting cross-legged", vi: "ngồi bắt chéo chân" }, { en: "resting his chin on his hand", vi: "ngồi chống tay lên cằm" },
            { en: "resting her hand on her waist", vi: "chống tay lên hông" }, { en: "crouching on the ground", vi: "khom người xuống nền đất" },
            { en: "leaning back in his seat", vi: "dựa người ra sau ghế" }, { en: "kneeling down", vi: "quỳ gối xuống" },
            { en: "crawling on the floor", vi: "bò trên sàn nhà" }, { en: "bending down", vi: "cúi người xuống" },
            { en: "applauding", vi: "vỗ tay hoan hô" }, { en: "shoulder riding", vi: "cõng trên vai" }
        ],
        movement_actions: [
            { en: "walking on tiptoe", vi: "đi nhón chân" },
            { en: "walking up/down the stairs", vi: "đi lên xuống cầu thang" },
            { en: "walking around the park", vi: "đi bộ quanh công viên" },
            { en: "walking along the street", vi: "đi bộ dọc theo phố" },
            { en: "walking across the street", vi: "băng ngang qua đường" },
            { en: "passing by", vi: "đi ngang qua" }
        ],
        activities: [
            { en: "playing", vi: "chơi (+ môn thể thao)" }, { en: "fishing", vi: "câu cá" },
            { en: "jogging", vi: "chạy bộ thể thao" }, { en: "flying a kite", vi: "thả diều" }
        ],
        emotions: [
            { en: "smiling", vi: "mỉm cười" }, { en: "crying", vi: "khóc" },
            { en: "laughing", vi: "cười to tiếng" }, { en: "disappointed", vi: "thất vọng" },
            { en: "excited", vi: "hứng thú" }, { en: "annoyed", vi: "bực bội" },
            { en: "happy", vi: "hạnh phúc, vui vẻ" }, { en: "nervous", vi: "căng thẳng" },
            { en: "thirsty", vi: "khát nước" }, { en: "worried", vi: "lo lắng" },
            { en: "hot", vi: "nóng nực" }, { en: "scared", vi: "sợ hãi" },
            { en: "cold", vi: "lạnh" }, { en: "bored", vi: "chán chường" },
            { en: "confused", vi: "bối rối" }
        ]
    }
};