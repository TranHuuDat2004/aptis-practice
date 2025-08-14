const writingPrompts = [
    {
        id: 'chef_suggestion',
        title: 'Chủ đề: Gợi ý cho đầu bếp',
        prompt: `
            <h4>Dear Member,</h4>
            <p>The Food Club is going to organize a meeting with a famous chef and we would like to ask members for suggestions. The chef will give a talk and demonstrate how to cook something. What do you think the chef should talk about and what kind of meal should the chef guide to cook? We want to attract as wide an audience as possible of both young and elder people. Please send us your suggestions and also give reasons for your suggestions.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn thực hiện mấy nhiệm vụ chính?",
                options: [ "1 nhiệm vụ: Gợi ý một món ăn.", "2 nhiệm vụ: Gợi ý chủ đề nói chuyện VÀ gợi ý món ăn để nấu.", "3 nhiệm vụ: Gợi ý chủ đề, món ăn VÀ cách tổ chức sự kiện." ],
                answer: "2 nhiệm vụ: Gợi ý chủ đề nói chuyện VÀ gợi ý món ăn để nấu."
            },
            {
                question: "Nhiệm vụ đầu tiên là gợi ý về điều gì?",
                options: [ "Chủ đề đầu bếp sẽ nói chuyện (give a talk).", "Món ăn đầu bếp sẽ nấu.", "Cách trang trí cho buổi gặp mặt." ],
                answer: "Chủ đề đầu bếp sẽ nói chuyện (give a talk)."
            },
            {
                question: "Đối tượng khán giả mà sự kiện muốn thu hút là ai?",
                options: [ "Chỉ những người trẻ tuổi.", "Chỉ những người lớn tuổi, có kinh nghiệm.", "Cả người trẻ và người lớn tuổi (as wide an audience as possible)." ],
                answer: "Cả người trẻ và người lớn tuổi (as wide an audience as possible)."
            },
            {
                question: "Ngoài việc đưa ra gợi ý, đề bài còn có một yêu cầu quan trọng nào khác?",
                options: [ "Kể về kinh nghiệm nấu ăn của bản thân.", "Nêu lý do cho các gợi ý của mình (give reasons for your suggestions).", "Mời thêm bạn bè tham gia câu lạc bộ." ],
                answer: "Nêu lý do cho các gợi ý của mình (give reasons for your suggestions)."
            },
            {
                question: "Dựa vào yêu cầu của đề bài, mục tiêu chính của các gợi ý là gì?",
                options: [ "Thể hiện sự sành ăn của bản thân.", "Chọn món ăn phức tạp nhất để thử thách đầu bếp.", "Thu hút được nhiều đối tượng khán giả khác nhau." ],
                answer: "Thu hút được nhiều đối tượng khán giả khác nhau."
            }
        ]
    },
    // {
    //     id: 'fee_increase',
    //     title: 'Chủ đề: Tăng phí câu lạc bộ',
    //     prompt: `
    //         <h4>Dear Member,</h4>
    //         <p>We are writing to inform you that we are planning to increase the monthly membership fee from next month. The new fee will be higher. We understand this might be unwelcome news, but this is to cover the rising costs of equipment maintenance and to upgrade our facilities. We would like to hear your opinion on the fee increase and any suggestions you may have on how we can improve our services with the extra funds. We welcome all feedback.</p>
    //     `,
    //     questions: [
    //         {
    //             question: "Bạn cần viết email để làm gì?",
    //             options: [ "Phàn nàn về việc tăng phí.", "Đưa ra ý kiến về việc tăng phí VÀ gợi ý cách cải thiện dịch vụ.", "Xin miễn giảm phí thành viên." ],
    //             answer: "Đưa ra ý kiến về việc tăng phí VÀ gợi ý cách cải thiện dịch vụ."
    //         },
    //         {
    //             question: "Lý do chính mà câu lạc bộ đưa ra cho việc tăng phí là gì?",
    //             options: [ "Để có thêm lợi nhuận.", "Để chi trả cho chi phí bảo trì và nâng cấp cơ sở vật chất.", "Để tổ chức thêm nhiều sự kiện." ],
    //             answer: "Để chi trả cho chi phí bảo trì và nâng cấp cơ sở vật chất."
    //         },
    //         {
    //             question: "Email của bạn cần có mấy phần gợi ý chính?",
    //             options: [ "Chỉ cần 1 gợi ý về dịch vụ mới.", "Chỉ cần nêu ý kiến đồng ý hay không đồng ý.", "Cần nêu ý kiến về việc tăng phí VÀ đưa ra các gợi ý cụ thể." ],
    //             answer: "Cần nêu ý kiến về việc tăng phí VÀ đưa ra các gợi ý cụ thể."
    //         }
    //     ]
    // }
    // Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó


    {
        id: 'tourist_plan',
        title: 'Chủ đề: Kế hoạch thu hút khách du lịch',
        prompt: `
            <h4>Dear Member,</h4>
            <p>Our club is planning to encourage tourists to visit an area. We also want visitors coming to our areas to behave politely. Please raise your voice and give some suggestions for this plan.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn đưa ra gợi ý cho mấy vấn đề chính?",
                options: [
                    "1 vấn đề: Cách thu hút khách du lịch.",
                    "2 vấn đề: Cách thu hút khách du lịch VÀ cách khuyến khích họ cư xử lịch sự.",
                    "1 vấn đề: Cách để du khách cư xử lịch sự."
                ],
                answer: "2 vấn đề: Cách thu hút khách du lịch VÀ cách khuyến khích họ cư xử lịch sự."
            },
            {
                question: "Trong bài viết mẫu (email cho quản lý), gợi ý về 'brochures or flyers' nhằm giải quyết vấn đề nào?",
                options: [
                    "Khuyến khích du khách cư xử lịch sự.",
                    "Thu hút khách du lịch biết đến khu vực.",
                    "Cả hai vấn đề trên."
                ],
                answer: "Thu hút khách du lịch biết đến khu vực."
            },
            {
                question: "Yêu cầu thứ hai 'behave politely' (cư xử lịch sự) được giải quyết trong bài mẫu bằng gợi ý nào?",
                options: [
                    "Phân phát tờ rơi về các điểm tham quan.",
                    "Tổ chức các tour đi bộ miễn phí.",
                    "Đặt các biển báo thân thiện nhắc nhở về văn hóa địa phương."
                ],
                answer: "Đặt các biển báo thân thiện nhắc nhở về văn hóa địa phương."
            },
            {
                question: "Việc nào sau đây sẽ bị coi là 'lạc đề' so với yêu cầu chính?",
                options: [
                    "Gợi ý tổ chức một lễ hội ẩm thực để thu hút du khách.",
                    "Gợi ý câu lạc bộ nên tăng phí thành viên để có thêm kinh phí.",
                    "Gợi ý đặt thêm thùng rác ở các điểm công cộng để khuyến khích du khách giữ vệ sinh."
                ],
                answer: "Gợi ý câu lạc bộ nên tăng phí thành viên để có thêm kinh phí."
            }
        ]
    },
    {
        id: 'science_exhibition',
        title: 'Chủ đề: Triển lãm của Câu lạc bộ Khoa học',
        prompt: `
            <h4>Dear all members in our club,</h4>
            <p>Our club is preparing to organize the science exhibition next month. Both young people and elderly people can take part in our activities in the exhibition. We are planning for our exhibition. Could you contribute some ideas for our event team? Whether our club issues the ticket for participants? I would like to hear your contribution.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn đóng góp ý kiến về mấy vấn đề?",
                options: [
                    "1 vấn đề: Các hoạt động cho triển lãm.",
                    "2 vấn đề: Góp ý về hoạt động VÀ ý kiến về việc bán vé.",
                    "1 vấn đề: Việc có nên bán vé hay không."
                ],
                answer: "2 vấn đề: Góp ý về hoạt động VÀ ý kiến về việc bán vé."
            },
            {
                question: "Đối tượng chính mà các hoạt động cần nhắm đến là ai?",
                options: [
                    "Chỉ người trẻ và học sinh.",
                    "Chỉ người lớn tuổi có quan tâm đến khoa học.",
                    "Cả người trẻ và người lớn tuổi."
                ],
                answer: "Cả người trẻ và người lớn tuổi."
            },
            {
                question: "Trong bài viết mẫu (email cho quản lý), tác giả đã đề xuất loại hoạt động nào?",
                options: [
                    "Chỉ các bài giảng học thuật.",
                    "Các thí nghiệm tương tác và trò chơi kiến thức.",
                    "Chỉ chiếu phim tài liệu khoa học."
                ],
                answer: "Các thí nghiệm tương tác và trò chơi kiến thức."
            },
            {
                question: "Về vấn đề vé, bài viết mẫu đã đưa ra quan điểm và giải pháp nào?",
                options: [
                    "Nên bán vé với giá cao để thể hiện sự chuyên nghiệp.",
                    "Nên phát vé miễn phí nhưng không cần nguồn thu thay thế.",
                    "Không nên bán vé, thay vào đó hãy kêu gọi quyên góp hoặc tài trợ."
                ],
                answer: "Không nên bán vé, thay vào đó hãy kêu gọi quyên góp hoặc tài trợ."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'encourage_cooking',
        title: 'Chủ đề: Khuyến khích người trẻ nấu ăn',
        prompt: `
            <h4>Dear member,</h4>
            <p>A recent report states that young people in their 20s do not cook at home. We want to encourage more people to learn cooking. What advice would you give to those who have never cooked before but want to start, and what is the best way to convey this advice?</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn trả lời mấy câu hỏi chính?",
                options: [
                    "1 câu hỏi: Lời khuyên cho người mới bắt đầu nấu ăn.",
                    "1 câu hỏi: Cách tốt nhất để truyền đạt lời khuyên.",
                    "2 câu hỏi: Đưa ra lời khuyên VÀ cách tốt nhất để truyền đạt lời khuyên đó."
                ],
                answer: "2 câu hỏi: Đưa ra lời khuyên VÀ cách tốt nhất để truyền đạt lời khuyên đó."
            },
            {
                question: "Đối tượng chính mà lời khuyên của bạn cần hướng đến là ai?",
                options: [
                    "Các đầu bếp chuyên nghiệp.",
                    "Những người chưa từng nấu ăn bao giờ (have never cooked before).",
                    "Những người đã có kinh nghiệm nấu ăn."
                ],
                answer: "Những người chưa từng nấu ăn bao giờ (have never cooked before)."
            },
            {
                question: "Trong bài viết mẫu (email cho quản lý), 'organize cooking workshops' là câu trả lời cho nhiệm vụ nào?",
                options: [
                    "Lời khuyên cho người mới bắt đầu (What advice).",
                    "Cách truyền đạt lời khuyên (best way to convey).",
                    "Cả hai."
                ],
                answer: "Lời khuyên cho người mới bắt đầu (What advice)."
            },
            {
                question: "Gợi ý 'create video tutorials or recipe cards' trong bài mẫu là một ví dụ cho:",
                options: [
                    "Một lời khuyên khác cho người mới bắt đầu.",
                    "Một cách hiệu quả để câu lạc bộ truyền đạt lời khuyên.",
                    "Một hoạt động không liên quan đến đề bài."
                ],
                answer: "Một cách hiệu quả để câu lạc bộ truyền đạt lời khuyên."
            }
        ]
    },
    {
        id: 'walking_competition',
        title: 'Chủ đề: Cuộc thi đi bộ vòng quanh Châu Âu',
        prompt: `
            <h4>Dear member,</h4>
            <p>The club is going to organize a walking competition through several Europe countries in two weeks. But there are some opinions that it is not realistic. Give your opinion and alternative suggestion for this.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Chỉ cần nói rằng ý tưởng đó không thực tế.",
                    "Nêu ý kiến của bạn về ý tưởng VÀ đưa ra một gợi ý thay thế (alternative suggestion).",
                    "Lên kế hoạch chi tiết cho chuyến đi bộ ở Châu Âu."
                ],
                answer: "Nêu ý kiến của bạn về ý tưởng VÀ đưa ra một gợi ý thay thế (alternative suggestion)."
            },
            {
                question: "Vấn đề chính của kế hoạch đi bộ ở Châu Âu là gì?",
                options: [
                    "Nó quá dễ dàng.",
                    "Nó bị cho là không thực tế (not realistic).",
                    "Nó chỉ dành cho thành viên lớn tuổi."
                ],
                answer: "Nó bị cho là không thực tế (not realistic)."
            },
            {
                question: "Bài viết mẫu đã nêu ra quan điểm như thế nào về kế hoạch ban đầu?",
                options: [
                    "Hoàn toàn ủng hộ và cho rằng nó rất thực tế.",
                    "Đồng ý rằng ý tưởng này thú vị nhưng cũng không thực tế.",
                    "Không đưa ra ý kiến rõ ràng."
                ],
                answer: "Đồng ý rằng ý tưởng này thú vị nhưng cũng không thực tế."
            },
            {
                question: "Gợi ý thay thế (alternative suggestion) trong bài mẫu là gì?",
                options: [
                    "Tổ chức một cuộc thi chạy marathon ở Châu Âu.",
                    "Vẫn tổ chức đi bộ ở Châu Âu nhưng trong thời gian dài hơn.",
                    "Tổ chức một thử thách đi bộ ở trong thành phố hoặc trong nước."
                ],
                answer: "Tổ chức một thử thách đi bộ ở trong thành phố hoặc trong nước."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'road_safety',
        title: 'Chủ đề: Nâng cao nhận thức về An toàn giao thông',
        prompt: `
            <h4>Dear Member,</h4>
            <p>Road safety has become a major issue in big cities. Some people say this is because many pedestrians are reading their phones as they walk and not concentrating. There may be other issues, too. We would like to produce some information about road safety for people. What advice should we include and how can we communicate this effectively to members of public? Please write about your suggestions and why.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn đưa ra gợi ý về những nội dung nào?",
                options: [
                    "Chỉ cần đưa ra lời khuyên (What advice).",
                    "Chỉ cần đưa ra cách truyền thông (how can we communicate).",
                    "Cả lời khuyên VÀ cách truyền thông hiệu quả."
                ],
                answer: "Cả lời khuyên VÀ cách truyền thông hiệu quả."
            },
            {
                question: "Vấn đề chính mà đề bài nhấn mạnh là gì?",
                options: [
                    "Người đi bộ không tập trung do sử dụng điện thoại.",
                    "Tài xế lái xe quá tốc độ.",
                    "Hệ thống đèn giao thông bị hỏng."
                ],
                answer: "Người đi bộ không tập trung do sử dụng điện thoại."
            },
            {
                question: "Gợi ý 'create a flyer or a brochure' trong bài mẫu là một ví dụ cho:",
                options: [
                    "Một lời khuyên về an toàn (advice).",
                    "Một cách để truyền thông (communicate effectively).",
                    "Một hoạt động không liên quan."
                ],
                answer: "Một cách để truyền thông (communicate effectively)."
            },
            {
                question: "Bài viết mẫu cũng đề xuất 'organize a road safety awareness event'. Đây là gợi ý về điều gì?",
                options: [
                    "Một cách truyền thông khác.",
                    "Một lời khuyên an toàn cụ thể cho người đi bộ.",
                    "Một cách để gây quỹ cho câu lạc bộ."
                ],
                answer: "Một cách truyền thông khác."
            }
        ]
    },
    {
        id: 'gardening_proposal',
        title: 'Chủ đề: Đề xuất của Hội đồng Thành phố về làm vườn',
        prompt: `
            <h4>Dear members,</h4>
            <p>The City Council wants to encourage people to take up gardening. The City Council has two proposals. The first is to plant 500 new trees and some species of flowers at the local park. The second is to organise gardening workshops at a local college. As a member of the gardening club, please email which proposal you would like to propose.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Đưa ra một đề xuất thứ ba hoàn toàn mới.",
                    "Phân tích ưu và nhược điểm của cả hai đề xuất.",
                    "Chọn một trong hai đề xuất có sẵn và nêu lý do tại sao bạn ủng hộ nó."
                ],
                answer: "Chọn một trong hai đề xuất có sẵn và nêu lý do tại sao bạn ủng hộ nó."
            },
            {
                question: "Đề xuất thứ nhất của Hội đồng Thành phố là gì?",
                options: [
                    "Tổ chức các lớp học làm vườn ở trường cao đẳng.",
                    "Phát miễn phí hạt giống cho người dân.",
                    "Trồng 500 cây xanh và hoa ở công viên địa phương."
                ],
                answer: "Trồng 500 cây xanh và hoa ở công viên địa phương."
            },
            {
                question: "Trong bài viết mẫu, tác giả đã chọn ủng hộ đề xuất nào?",
                options: [
                    "Ủng hộ cả hai.",
                    "Ủng hộ việc trồng cây ở công viên.",
                    "Ủng hộ việc tổ chức lớp học làm vườn."
                ],
                answer: "Ủng hộ việc trồng cây ở công viên."
            },
            {
                question: "Lý do chính mà tác giả đưa ra để ủng hộ việc trồng cây là gì?",
                options: [
                    "Vì nó ít tốn kém hơn.",
                    "Vì nó sẽ mang lại lợi ích cho nhiều người hơn và có tác động lâu dài.",
                    "Vì nó dễ thực hiện hơn."
                ],
                answer: "Vì nó sẽ mang lại lợi ích cho nhiều người hơn và có tác động lâu dài."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'europe_car_program',
        title: 'Chủ đề: Chương trình xe hơi xuyên Châu Âu',
        prompt: `
            <h4>Dear Member,</h4>
            <p>There will be a car program running across Europe. The program invites the Car Club to send 2 representatives (1 main driver and 1 passenger) and both must have good driving skills. Do you have any suggestions for the above positions?</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Đăng ký tham gia chương trình cho bản thân.",
                    "Gợi ý 2 người cho 2 vị trí cụ thể được yêu cầu.",
                    "Phàn nàn về yêu cầu của chương trình."
                ],
                answer: "Gợi ý 2 người cho 2 vị trí cụ thể được yêu cầu."
            },
            {
                question: "Câu lạc bộ đang tìm kiếm những vị trí nào?",
                options: [
                    "Hai tài xế chính.",
                    "Một tài xế chính và một hành khách.",
                    "Một tài xế và một người phiên dịch."
                ],
                answer: "Một tài xế chính và một hành khách."
            },
            {
                question: "Yêu cầu BẮT BUỘC đối với cả hai đại diện là gì?",
                options: [
                    "Chỉ tài xế chính cần có kỹ năng lái xe tốt.",
                    "Cả hai người đều phải có kỹ năng lái xe tốt.",
                    "Chỉ cần có hộ chiếu hợp lệ."
                ],
                answer: "Cả hai người đều phải có kỹ năng lái xe tốt."
            },
            {
                question: "Trong bài viết mẫu (email cho Sir/Madam), tác giả đã làm gì để đáp ứng yêu cầu?",
                options: [
                    "Chỉ tự đề cử mình làm tài xế.",
                    "Đề xuất một người khác làm tài xế và tự đề cử mình làm hành khách.",
                    "Đề xuất hai người bạn khác cho cả hai vị trí."
                ],
                answer: "Đề xuất một người khác làm tài xế và tự đề cử mình làm hành khách."
            }
        ]
    },
    {
        id: 'recommend_english_course',
        title: 'Chủ đề: Giới thiệu khóa học Tiếng Anh (cho bạn bè)',
        prompt: `
            <h4>Dear Friend,</h4>
            <p>You are a member of the language club. You are taking an English Course at the American Dream Center. After studying for 2 months, you find the course effective and useful. Write an email to your friend. Write about your feelings and recommend the course to her/him.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn viết cho bạn bè về những nội dung chính nào?",
                options: [
                    "Bày tỏ cảm nhận của bạn VÀ giới thiệu khóa học cho bạn ấy.",
                    "Chỉ phàn nàn về học phí của khóa học.",
                    "Chỉ hỏi thăm tình hình của bạn bè."
                ],
                answer: "Bày tỏ cảm nhận của bạn VÀ giới thiệu khóa học cho bạn ấy."
            },
            {
                question: "Cảm nhận của bạn về khóa học được mô tả như thế nào?",
                options: [
                    "Khá nhàm chán và khó.",
                    "Rất tuyệt vời và hữu ích ('amazing', 'helpful').",
                    "Quá đắt và không đáng tiền."
                ],
                answer: "Rất tuyệt vời và hữu ích ('amazing', 'helpful')."
            },
            {
                question: "Mục đích cuối cùng của email này là gì?",
                options: [
                    "Cảnh báo bạn mình không nên tham gia khóa học.",
                    "Khuyến khích/Giới thiệu (recommend) bạn mình tham gia.",
                    "Rủ bạn mình đi chơi sau khóa học."
                ],
                answer: "Khuyến khích/Giới thiệu (recommend) bạn mình tham gia."
            }
        ]
    },
    {
        id: 'cancel_english_course',
        title: 'Chủ đề: Không thể tham gia khóa học (cho quản lý)',
        prompt: `
            <h4>Dear Sir,</h4>
            <p>You had registered for the English course at the A Level Speaking Center. Write an email to the manager. Write about your feelings, the reason why you can’t attend and what you would like to do.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn phải trình bày mấy ý chính trong email?",
                options: [
                    "1 ý: Thông báo nghỉ học.",
                    "2 ý: Cảm nhận và lý do.",
                    "3 ý: Cảm nhận, lý do không tham gia, và mong muốn/đề xuất."
                ],
                answer: "3 ý: Cảm nhận, lý do không tham gia, và mong muốn/đề xuất."
            },
            {
                question: "Lý do chính mà tác giả đưa ra cho việc không thể tham gia là gì?",
                options: [
                    "Do học phí quá cao.",
                    "Do lịch trình công việc và lý do cá nhân.",
                    "Do khóa học không hiệu quả như mong đợi."
                ],
                answer: "Do lịch trình công việc và lý do cá nhân."
            },
            {
                question: "Để thể hiện sự tiếc nuối và mong muốn tiếp tục, tác giả đã đề xuất điều gì?",
                options: [
                    "Yêu cầu hoàn lại 100% học phí ngay lập tức.",
                    "Hỏi về các khóa học trong tương lai khi có lịch phù hợp.",
                    "Yêu cầu chuyển sang học online."
                ],
                answer: "Hỏi về các khóa học trong tương lai khi có lịch phù hợp."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'library_closure',
        title: 'Chủ đề: Thư viện công cộng có nguy cơ đóng cửa',
        prompt: `
            <h4>Dear Member,</h4>
            <p>The local authorities announced that the public library may close next year. Many people prefer reading on the internet so there is no need for a public library. We want to write a letter to the authorities and we may need your help. What do you think?</p>
        `,
        questions: [
            {
                question: "Vấn đề chính mà email đề cập là gì?",
                options: [
                    "Thư viện cần sửa chữa.",
                    "Thư viện có thể bị đóng cửa vào năm sau.",
                    "Thư viện cần thêm nhiều sách mới."
                ],
                answer: "Thư viện có thể bị đóng cửa vào năm sau."
            },
            {
                question: "Theo đề bài, lý do được đưa ra cho việc có thể đóng cửa thư viện là gì?",
                options: [
                    "Thiếu kinh phí hoạt động.",
                    "Tòa nhà đã quá cũ.",
                    "Nhiều người thích đọc sách trên mạng hơn."
                ],
                answer: "Nhiều người thích đọc sách trên mạng hơn."
            },
            {
                question: "Nhiệm vụ của bạn là gì?",
                options: [
                    "Đưa ra ý kiến và gợi ý để viết một lá thư cho chính quyền.",
                    "Quyên góp tiền để cứu thư viện.",
                    "Tình nguyện làm việc tại thư viện."
                ],
                answer: "Đưa ra ý kiến và gợi ý để viết một lá thư cho chính quyền."
            },
            {
                question: "Trong bài viết mẫu (email cho quản lý), một trong những hành động được đề xuất là gì?",
                options: [
                    "Tổ chức một buổi bán sách cũ.",
                    "Bắt đầu một bản kiến nghị (petition) và thu thập chữ ký.",
                    "Yêu cầu thư viện tăng cường các đầu sách điện tử."
                ],
                answer: "Bắt đầu một bản kiến nghị (petition) và thu thập chữ ký."
            }
        ]
    },
    {
        id: 'new_library_design',
        title: 'Chủ đề: Thiết kế thư viện quốc gia mới',
        prompt: `
            <h4>Dear member,</h4>
            <p>Our club has been invited to contribute to design a new national library. We would like to find out what our members think. Some people say that libraries are boring places and they are rarely used. We want the new library to be modern and exciting so that it will attract both young and old people. Please tell us what you think the kind of new library should be.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn là gì?",
                options: [
                    "Gợi ý các ý tưởng thiết kế cho một thư viện quốc gia mới.",
                    "Phàn nàn về tình trạng của thư viện hiện tại.",
                    "Bình chọn cho một trong các mẫu thiết kế có sẵn."
                ],
                answer: "Gợi ý các ý tưởng thiết kế cho một thư viện quốc gia mới."
            },
            {
                question: "Mục tiêu chính của thư viện mới là gì?",
                options: [
                    "Chỉ để lưu trữ các cuốn sách cổ.",
                    "Trở nên hiện đại, thú vị và thu hút cả người trẻ lẫn người lớn tuổi.",
                    "Chỉ phục vụ cho mục đích nghiên cứu học thuật."
                ],
                answer: "Trở nên hiện đại, thú vị và thu hút cả người trẻ lẫn người lớn tuổi."
            },
            {
                question: "Theo đề bài, quan niệm phổ biến về thư viện hiện nay là gì?",
                options: [
                    "Là nơi rất hiện đại và thú vị.",
                    "Là nơi nhàm chán và ít được sử dụng.",
                    "Là nơi quá đông đúc và ồn ào."
                ],
                answer: "Là nơi nhàm chán và ít được sử dụng."
            },
            {
                question: "Trong bài viết mẫu, một gợi ý để làm thư viện trở nên 'tương tác' (interactive) hơn là gì?",
                options: [
                    "Sơn tường bằng màu sắc sặc sỡ.",
                    "Trang bị công nghệ hiện đại như sách điện tử và màn hình thông minh.",
                    "Giảm số lượng sách để có thêm không gian."
                ],
                answer: "Trang bị công nghệ hiện đại như sách điện tử và màn hình thông minh."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'photo_competition_changes',
        title: 'Chủ đề: Thay đổi hạng mục cuộc thi nhiếp ảnh',
        prompt: `
            <h4>Dear Member,</h4>
            <p>As you know, every year we hold a competition for the best photograph from our members. In the past we have had just one single category. This year we are thinking about having separate categories for men and women and another category for people under 16. Before we make any changes, we would like to hear from you. What do you think of the proposed change? Please do not forget to tell us the reason for your opinion.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Đăng ký tham gia cuộc thi nhiếp ảnh.",
                    "Nêu ý kiến về đề xuất thay đổi hạng mục và đưa ra lý do.",
                    "Gửi ảnh dự thi của bạn."
                ],
                answer: "Nêu ý kiến về đề xuất thay đổi hạng mục và đưa ra lý do."
            },
            {
                question: "Sự thay đổi mà câu lạc bộ đang cân nhắc là gì?",
                options: [
                    "Tăng giải thưởng của cuộc thi.",
                    "Thay đổi chủ đề của cuộc thi.",
                    "Chia cuộc thi thành các hạng mục riêng cho nam, nữ và người dưới 16 tuổi."
                ],
                answer: "Chia cuộc thi thành các hạng mục riêng cho nam, nữ và người dưới 16 tuổi."
            },
            {
                question: "Trong bài viết mẫu, tác giả đã thể hiện quan điểm như thế nào?",
                options: [
                    "Hoàn toàn đồng ý với sự thay đổi.",
                    "Không đồng ý với sự thay đổi và cho rằng nên giữ một hạng mục duy nhất.",
                    "Đề nghị thêm nhiều hạng mục hơn nữa."
                ],
                answer: "Không đồng ý với sự thay đổi và cho rằng nên giữ một hạng mục duy nhất."
            },
            {
                question: "Bên cạnh việc giữ một hạng mục, tác giả đã đưa ra một gợi ý thay thế nào?",
                options: [
                    "Tổ chức các giải thưởng đặc biệt cho các chủ đề hoặc phong cách khác nhau.",
                    "Hủy bỏ cuộc thi trong năm nay.",
                    "Chỉ cho phép người trên 16 tuổi tham gia."
                ],
                answer: "Tổ chức các giải thưởng đặc biệt cho các chủ đề hoặc phong cách khác nhau."
            }
        ]
    },
    {
        id: 'speaker_change',
        title: 'Chủ đề: Thay đổi diễn giả buổi nói chuyện',
        prompt: `
            <h4>Dear members,</h4>
            <p>We are writing to tell you that the talk and slide show on The Gardens of Japan by Mr.Seiko has been canceled because the speaker has been taken ill. Mr.Jones has kindly agreed to give his talk on The Gardens of England again. I know that many of you have already heard Mr. Jones before but I hope you will be happy to hear him once again. Please give your suggestions.</p>
        `,
        questions: [
            {
                question: "Lý do chính của sự thay đổi trong sự kiện là gì?",
                options: [
                    "Diễn giả Mr. Jones bận việc đột xuất.",
                    "Diễn giả Mr. Seiko bị ốm.",
                    "Không có đủ người đăng ký tham gia."
                ],
                answer: "Diễn giả Mr. Seiko bị ốm."
            },
            {
                question: "Sự thay đổi cụ thể là gì?",
                options: [
                    "Sự kiện bị hủy hoàn toàn.",
                    "Mr. Jones sẽ thay thế Mr. Seiko và nói lại về chủ đề 'Vườn Anh'.",
                    "Mr. Seiko sẽ nói chuyện online thay vì trực tiếp."
                ],
                answer: "Mr. Jones sẽ thay thế Mr. Seiko và nói lại về chủ đề 'Vườn Anh'."
            },
            {
                question: "Đề bài yêu cầu bạn làm gì?",
                options: [
                    "Gửi lời chúc sức khỏe đến Mr. Seiko.",
                    "Đăng ký tham gia buổi nói chuyện của Mr. Jones.",
                    "Đưa ra các gợi ý (give your suggestions) cho câu lạc bộ."
                ],
                answer: "Đưa ra các gợi ý (give your suggestions) cho câu lạc bộ."
            },
            {
                question: "Trong bài viết mẫu, bên cạnh việc chấp nhận sự thay đổi, tác giả đã đưa ra gợi ý nào cho tương lai?",
                options: [
                    "Mời một diễn giả khác hoặc khám phá các chủ đề mới.",
                    "Yêu cầu giảm giá vé cho buổi nói chuyện này.",
                    "Đề nghị Mr. Jones nói về một chủ đề khác."
                ],
                answer: "Mời một diễn giả khác hoặc khám phá các chủ đề mới."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'exam_schedule_change',
        title: 'Chủ đề: Thay đổi lịch thi cuối kỳ',
        prompt: `
            <h4>Dear student,</h4>
            <p>We are writing to inform you that the end of course exams will now take place two weeks earlier than originally planned. Your exam, which was scheduled for the 21st of next month, will now take place on the 7th of next month. We apologize for any difficulty this may cause.</p>
        `,
        questions: [
            {
                question: "Vấn đề chính mà email từ ban quản trị thông báo là gì?",
                options: [
                    "Kỳ thi đã bị hủy.",
                    "Lịch thi cuối kỳ sẽ diễn ra sớm hơn 2 tuần so với kế hoạch.",
                    "Hình thức thi đã được thay đổi thành thi online."
                ],
                answer: "Lịch thi cuối kỳ sẽ diễn ra sớm hơn 2 tuần so với kế hoạch."
            },
            {
                question: "Ngày thi mới được dời đến là ngày nào?",
                options: [
                    "Ngày 21 của tháng sau.",
                    "Ngày 7 của tháng này.",
                    "Ngày 7 của tháng sau."
                ],
                answer: "Ngày 7 của tháng sau."
            },
            {
                question: "Trong bài viết mẫu (email cho quản trị), tác giả đã thể hiện cảm xúc gì?",
                options: [
                    "Rất vui mừng và hào hứng (on top of the world).",
                    "Buồn bã và thất vọng (felt blue).",
                    "Không thể hiện cảm xúc gì."
                ],
                answer: "Buồn bã và thất vọng (felt blue)."
            },
            {
                question: "Bài viết mẫu đã đưa ra những gợi ý nào cho nhà trường?",
                options: [
                    "Yêu cầu giảm độ khó của đề thi.",
                    "Chấp nhận lịch thi mới mà không có ý kiến gì.",
                    "Đề nghị dời lại ngày thi như cũ và cung cấp thêm các buổi ôn tập, tài liệu hỗ trợ."
                ],
                answer: "Đề nghị dời lại ngày thi như cũ và cung cấp thêm các buổi ôn tập, tài liệu hỗ trợ."
            }
        ]
    },
    {
        id: 'support_small_business',
        title: 'Chủ đề: Hỗ trợ doanh nghiệp nhỏ',
        prompt: `
            <h4>Dear Members,</h4>
            <p>Currently our club is planning to support local individuals who want to start up a small business. The club has 2 proposals: First, create a call center where customers can call to ask questions and request help. Second, create free courses to support local universities nearby. Let us know which option you would use and why.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Phân tích tài chính của cả hai đề xuất.",
                    "Chọn một trong hai đề xuất có sẵn và giải thích lý do cho sự lựa chọn của bạn.",
                    "Đưa ra một đề xuất thứ ba hoàn toàn mới."
                ],
                answer: "Chọn một trong hai đề xuất có sẵn và giải thích lý do cho sự lựa chọn của bạn."
            },
            {
                question: "Đề xuất thứ hai của câu lạc bộ là gì?",
                options: [
                    "Tạo một trung tâm chăm sóc khách hàng (call center).",
                    "Cung cấp các khóa học miễn phí tại các trường đại học địa phương.",
                    "Cho các doanh nghiệp nhỏ vay vốn."
                ],
                answer: "Cung cấp các khóa học miễn phí tại các trường đại học địa phương."
            },
            {
                question: "Trong bài viết mẫu, tác giả đã chọn ủng hộ đề xuất nào?",
                options: [
                    "Tạo trung tâm chăm sóc khách hàng.",
                    "Tổ chức các khóa học miễn phí.",
                    "Không chọn đề xuất nào cả."
                ],
                answer: "Tổ chức các khóa học miễn phí."
            },
            {
                question: "Một trong những lý do chính mà tác giả đưa ra để ủng hộ việc tổ chức khóa học là gì?",
                options: [
                    "Vì nó dễ thực hiện hơn.",
                    "Vì nó sẽ cung cấp kiến thức và kỹ năng giá trị cho người khởi nghiệp.",
                    "Vì nó sẽ mang lại lợi nhuận cho câu lạc bộ."
                ],
                answer: "Vì nó sẽ cung cấp kiến thức và kỹ năng giá trị cho người khởi nghiệp."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'nature_club_plan',
        title: 'Chủ đề: Kế hoạch cho người trẻ của CLB Thiên nhiên',
        prompt: `
            <h4>Dear Members,</h4>
            <p>The club wants to make a plan for the young people because they just love to stay home and play games.</p>
        `,
        questions: [
            {
                question: "Vấn đề chính mà câu lạc bộ muốn giải quyết là gì?",
                options: [
                    "Người trẻ không có nơi để chơi game.",
                    "Câu lạc bộ thiếu kinh phí hoạt động.",
                    "Người trẻ có xu hướng ở nhà chơi game thay vì tham gia các hoạt động khác."
                ],
                answer: "Người trẻ có xu hướng ở nhà chơi game thay vì tham gia các hoạt động khác."
            },
            {
                question: "Nhiệm vụ của bạn trong email này là gì?",
                options: [
                    "Phàn nàn về thói quen của người trẻ.",
                    "Đưa ra các gợi ý về hoạt động để thu hút người trẻ tham gia.",
                    "Đăng ký làm tình nguyện viên cho kế hoạch."
                ],
                answer: "Đưa ra các gợi ý về hoạt động để thu hút người trẻ tham gia."
            },
            {
                question: "Trong bài viết mẫu, gợi ý chính được đưa ra là gì?",
                options: [
                    "Tổ chức các giải đấu e-sports (thể thao điện tử).",
                    "Tổ chức các hoạt động ngoài trời như đi bộ đường dài (hiking).",
                    "Mở các lớp học về thiên nhiên trong nhà."
                ],
                answer: "Tổ chức các hoạt động ngoài trời như đi bộ đường dài (hiking)."
            },
            {
                question: "Để làm cho các sự kiện thêm phần thú vị, bài mẫu đã đề xuất thêm điều gì?",
                options: [
                    "Tặng quà cho tất cả người tham gia.",
                    "Thêm vào các thử thách vui nhộn như trò chơi truy tìm kho báu (scavenger hunt).",
                    "Mời những người nổi tiếng tham dự."
                ],
                answer: "Thêm vào các thử thách vui nhộn như trò chơi truy tìm kho báu (scavenger hunt)."
            }
        ]
    },
    {
        id: 'community_projects_support',
        title: 'Chủ đề: Hỗ trợ các dự án cộng đồng',
        prompt: `
            <h4>Dear Members,</h4>
            <p>Our club needs support with several tasks this year. First, we need more members who can actively participate in our ongoing projects. Second, we are looking for creative ideas to develop new activities. Could you share some suggestions with us to help support our projects this year?</p>
        `,
        questions: [
            {
                question: "Câu lạc bộ đang cần sự hỗ trợ ở mấy lĩnh vực chính?",
                options: [
                    "1 lĩnh vực: Cần thêm ý tưởng sáng tạo.",
                    "2 lĩnh vực: Cần thêm thành viên tích cực VÀ ý tưởng sáng tạo cho hoạt động mới.",
                    "1 lĩnh vực: Cần thêm thành viên tích cực."
                ],
                answer: "2 lĩnh vực: Cần thêm thành viên tích cực VÀ ý tưởng sáng tạo cho hoạt động mới."
            },
            {
                question: "Đối với việc cần thêm thành viên, bài viết mẫu đã đề xuất giải pháp gì?",
                options: [
                    "Đăng quảng cáo trên báo địa phương.",
                    "Giảm phí thành viên.",
                    "Khuyến khích các thành viên hiện tại mời bạn bè và gia đình tham gia."
                ],
                answer: "Khuyến khích các thành viên hiện tại mời bạn bè và gia đình tham gia."
            },
            {
                question: "Để có thêm các hoạt động sáng tạo, gợi ý nào đã được đưa ra trong bài mẫu?",
                options: [
                    "Tổ chức các buổi tiệc hàng tháng.",
                    "Tổ chức các buổi hội thảo kỹ năng, cuộc thi vui và các dự án dịch vụ cộng đồng.",
                    "Chỉ tập trung vào một dự án duy nhất trong năm."
                ],
                answer: "Tổ chức các buổi hội thảo kỹ năng, cuộc thi vui và các dự án dịch vụ cộng đồng."
            },
            {
                question: "Bài mẫu còn đưa ra một gợi ý bổ sung nào để tăng hiệu quả?",
                options: [
                    "Sử dụng mạng xã hội để quảng bá hoạt động.",
                    "Hợp tác với các câu lạc bộ khác.",
                    "Gửi thư tay đến từng nhà."
                ],
                answer: "Sử dụng mạng xã hội để quảng bá hoạt động."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'fashion_event_format',
        title: 'Chủ đề: Lựa chọn hình thức sự kiện thời trang',
        prompt: `
            <h4>Dear Members,</h4>
            <p>The club is planning to hold meetings with famous designers who will talk about their clothing designs and answer members' questions. We need feedback on organizations. There are opinions that it should be held online while others want to organize a fashion show-style event. State your opinion.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn trong email này là gì?",
                options: [
                    "Đề xuất một nhà thiết kế cụ thể để mời.",
                    "Đưa ra ý kiến của bạn về việc nên tổ chức sự kiện online hay theo kiểu trình diễn thời trang.",
                    "Đăng ký làm người mẫu cho sự kiện."
                ],
                answer: "Đưa ra ý kiến của bạn về việc nên tổ chức sự kiện online hay theo kiểu trình diễn thời trang."
            },
            {
                question: "Có mấy lựa chọn về hình thức tổ chức đang được cân nhắc?",
                options: [
                    "Chỉ có một lựa chọn là tổ chức online.",
                    "Hai lựa chọn: tổ chức online hoặc tổ chức theo kiểu trình diễn thời trang (fashion show).",
                    "Ba lựa chọn: online, fashion show, hoặc một buổi nói chuyện thân mật."
                ],
                answer: "Hai lựa chọn: tổ chức online hoặc tổ chức theo kiểu trình diễn thời trang (fashion show)."
            },
            {
                question: "Trong bài viết mẫu, tác giả đã ủng hộ hình thức nào?",
                options: [
                    "Tổ chức online.",
                    "Tổ chức theo kiểu trình diễn thời trang.",
                    "Đề nghị kết hợp cả hai."
                ],
                answer: "Tổ chức theo kiểu trình diễn thời trang."
            },
            {
                question: "Một trong những lý do chính mà tác giả đưa ra để ủng hộ 'fashion show' là gì?",
                options: [
                    "Nó tiết kiệm chi phí hơn.",
                    "Nó cho phép thành viên gặp gỡ và nói chuyện trực tiếp với nhau và với nhà thiết kế.",
                    "Nó có thể được ghi hình và phát lại dễ dàng."
                ],
                answer: "Nó cho phép thành viên gặp gỡ và nói chuyện trực tiếp với nhau và với nhà thiết kế."
            }
        ]
    },
    {
        id: 'negative_comments_solution',
        title: 'Chủ đề: Xử lý bình luận tiêu cực',
        prompt: `
            <h4>Dear Members,</h4>
            <p>As you know, our members are very active online and like to post comments on the club's website. However, recently some members have been posting negative comments about other members. At the moment, everyone who posts on our website is anonymous. We are thinking of changing the system so that we can identify everyone who makes a comment. We would like to hear your opinion about this. Also, can you think of an alternative solution to this problem?</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn phải trả lời mấy vấn đề?",
                options: [
                    "1 vấn đề: Nêu ý kiến về việc thay đổi hệ thống.",
                    "2 vấn đề: Nêu ý kiến về việc thay đổi hệ thống VÀ đề xuất một giải pháp thay thế.",
                    "1 vấn đề: Đề xuất một giải pháp thay thế."
                ],
                answer: "2 vấn đề: Nêu ý kiến về việc thay đổi hệ thống VÀ đề xuất một giải pháp thay thế."
            },
            {
                question: "Giải pháp mà câu lạc bộ đang cân nhắc là gì?",
                options: [
                    "Xóa bỏ hoàn toàn tính năng bình luận.",
                    "Thay đổi hệ thống để có thể xác định danh tính người bình luận.",
                    "Thuê người kiểm duyệt tất cả các bình luận."
                ],
                answer: "Thay đổi hệ thống để có thể xác định danh tính người bình luận."
            },
            {
                question: "Trong bài viết mẫu, tác giả có đồng ý với giải pháp của câu lạc bộ không?",
                options: [
                    "Có, tác giả hoàn toàn đồng ý.",
                    "Không, tác giả cho rằng đó không phải là một ý kiến hay.",
                    "Tác giả không đưa ra ý kiến rõ ràng."
                ],
                answer: "Không, tác giả cho rằng đó không phải là một ý kiến hay."
            },
            {
                question: "Giải pháp thay thế mà tác giả đề xuất là gì?",
                options: [
                    "Cấm các thành viên bình luận tiêu cực.",
                    "Yêu cầu thành viên sử dụng tên thật khi đăng ký.",
                    "Đặt ra các quy tắc bình luận rõ ràng và có một hệ thống kiểm duyệt."
                ],
                answer: "Đặt ra các quy tắc bình luận rõ ràng và có một hệ thống kiểm duyệt."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'tech_fair_volunteer',
        title: 'Chủ đề: Tình nguyện viên cho Hội chợ Công nghệ',
        prompt: `
            <h4>Dear Members,</h4>
            <p>Our club is going to participate in the annual Technology Fair. We are asking members for help. We need several volunteers to speak to members of general public about computers and the internet. Please write to us and tell us why technology is important and why you think you would be a good presenter?</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của email này là gì?",
                options: [
                    "Đăng ký làm tình nguyện viên cho hội chợ.",
                    "Hỏi thêm thông tin chi tiết về hội chợ.",
                    "Chỉ đưa ra ý kiến về tầm quan trọng của công nghệ."
                ],
                answer: "Đăng ký làm tình nguyện viên cho hội chợ."
            },
            {
                question: "Đề bài yêu cầu bạn phải giải thích mấy ý chính?",
                options: [
                    "1 ý: Tại sao bạn sẽ là một người thuyết trình tốt.",
                    "2 ý: Tại sao công nghệ quan trọng VÀ tại sao bạn sẽ là người thuyết trình tốt.",
                    "1 ý: Tại sao công nghệ quan trọng."
                ],
                answer: "2 ý: Tại sao công nghệ quan trọng VÀ tại sao bạn sẽ là người thuyết trình tốt."
            },
            {
                question: "Trong bài viết mẫu, tác giả đã đưa ra lý do gì để chứng tỏ mình sẽ là một người thuyết trình tốt?",
                options: [
                    "Tác giả có nhiều bạn bè trong câu lạc bộ.",
                    "Tác giả có kiến thức tốt về máy tính và đã từng thuyết trình trước đây.",
                    "Tác giả có giọng nói to và rõ ràng."
                ],
                answer: "Tác giả có kiến thức tốt về máy tính và đã từng thuyết trình trước đây."
            },
            {
                question: "Mục đích của việc viết email này là để...",
                options: [
                    "Thể hiện sự quan tâm đến hội chợ.",
                    "Thuyết phục câu lạc bộ chọn bạn làm tình nguyện viên.",
                    "Góp ý về cách tổ chức hội chợ."
                ],
                answer: "Thuyết phục câu lạc bộ chọn bạn làm tình nguyện viên."
            }
        ]
    },
    {
        id: 'music_club_noise_complaint',
        title: 'Chủ đề: Khiếu nại về tiếng ồn của CLB Âm nhạc',
        prompt: `
            <h4>Dear Members,</h4>
            <p>As you know, we regularly have concerts at our club in the evenings. Unfortunately, there have been complaints about the music from people in the living area. If we do not do something about this situation, we may have to stop the concerts. I would be interested to hear what you think about this. What can be done about this problem? I am writing to ask all members for their suggestions. Please send me your ideas in an email.</p>
        `,
        questions: [
            {
                question: "Vấn đề chính mà câu lạc bộ đang đối mặt là gì?",
                options: [
                    "Không có đủ người tham gia các buổi hòa nhạc.",
                    "Chi phí tổ chức hòa nhạc quá cao.",
                    "Có những lời phàn nàn về tiếng ồn từ các buổi hòa nhạc buổi tối."
                ],
                answer: "Có những lời phàn nàn về tiếng ồn từ các buổi hòa nhạc buổi tối."
            },
            {
                question: "Hậu quả có thể xảy ra nếu vấn đề không được giải quyết là gì?",
                options: [
                    "Câu lạc bộ có thể phải dừng tổ chức các buổi hòa nhạc.",
                    "Câu lạc bộ sẽ bị phạt tiền.",
                    "Câu lạc bộ sẽ phải chuyển địa điểm."
                ],
                answer: "Câu lạc bộ có thể phải dừng tổ chức các buổi hòa nhạc."
            },
            {
                question: "Đề bài yêu cầu bạn phải làm gì?",
                options: [
                    "Bảo vệ quan điểm rằng các buổi hòa nhạc nên được tiếp tục mà không cần thay đổi.",
                    "Đưa ra các gợi ý (suggestions) để giải quyết vấn đề tiếng ồn.",
                    "Viết thư xin lỗi những người hàng xóm."
                ],
                answer: "Đưa ra các gợi ý (suggestions) để giải quyết vấn đề tiếng ồn."
            },
            {
                question: "Trong bài viết mẫu, một trong những giải pháp được đề xuất là gì?",
                options: [
                    "Chơi nhạc nhỏ hơn.",
                    "Thực hiện các biện pháp cách âm và thay đổi lịch trình hòa nhạc.",
                    "Chỉ tổ chức hòa nhạc vào ban ngày."
                ],
                answer: "Thực hiện các biện pháp cách âm và thay đổi lịch trình hòa nhạc."
            }
        ]
    }// Dán khối mã này vào cuối file js/data-writing-prompt-quiz.js
// Đảm bảo có dấu phẩy ở cuối đề thi trước đó

, // <--- Dấu phẩy ngăn cách
    {
        id: 'social_club_meeting',
        title: 'Chủ đề: Tổ chức buổi gặp mặt CLB Xã hội',
        prompt: `
            <h4>Dear Members,</h4>
            <p>We would like to organize some monthly face-to-face meetings. We would like your suggestions about when and where we could meet. It should suit both young and older people. Please send us your suggestions and your reasons.</p>
        `,
        questions: [
            {
                question: "Bạn cần đưa ra gợi ý về mấy vấn đề chính?",
                options: [
                    "1 vấn đề: Thời gian (when).",
                    "2 vấn đề: Thời gian (when) và Địa điểm (where).",
                    "1 vấn đề: Địa điểm (where)."
                ],
                answer: "2 vấn đề: Thời gian (when) và Địa điểm (where)."
            },
            {
                question: "Yếu tố quan trọng nhất cần cân nhắc khi đưa ra gợi ý là gì?",
                options: [
                    "Phải là nơi rẻ nhất có thể.",
                    "Phải phù hợp cho cả người trẻ và người lớn tuổi.",
                    "Phải là nơi có thể tổ chức tiệc."
                ],
                answer: "Phải phù hợp cho cả người trẻ và người lớn tuổi."
            },
            {
                question: "Trong bài viết mẫu, gợi ý về thời gian là khi nào?",
                options: [
                    "Buổi tối các ngày trong tuần.",
                    "Sáng thứ Bảy đầu tiên của mỗi tháng.",
                    "Chiều Chủ nhật hàng tuần."
                ],
                answer: "Sáng thứ Bảy đầu tiên của mỗi tháng."
            },
            {
                question: "Bài viết mẫu đề xuất địa điểm nào và tại sao?",
                options: [
                    "Một nhà hàng sang trọng vì nó thể hiện đẳng cấp.",
                    "Trung tâm cộng đồng gần công viên vì nó yên tĩnh và dễ đi lại.",
                    "Tại nhà riêng của một thành viên để tiết kiệm chi phí."
                ],
                answer: "Trung tâm cộng đồng gần công viên vì nó yên tĩnh và dễ đi lại."
            }
        ]
    },
    {
        id: 'public_talk_speaker',
        title: 'Chủ đề: Tổ chức buổi nói chuyện công khai',
        prompt: `
            <h4>Dear Members,</h4>
            <p>We are planning to organize a public talk soon. We would like your ideas on who we should invite as a guest speaker and what topics they should cover. Our goal is to attract a wide audience, including both young people and older adults. Please send us your suggestions.</p>
        `,
        questions: [
            {
                question: "Đề bài yêu cầu bạn đưa ra gợi ý về những gì?",
                options: [
                    "Gợi ý về diễn giả VÀ chủ đề buổi nói chuyện.",
                    "Chỉ gợi ý về diễn giả.",
                    "Chỉ gợi ý về chủ đề buổi nói chuyện."
                ],
                answer: "Gợi ý về diễn giả VÀ chủ đề buổi nói chuyện."
            },
            {
                question: "Mục tiêu chính của buổi nói chuyện là gì?",
                options: [
                    "Chỉ thu hút các chuyên gia trong ngành.",
                    "Thu hút một lượng lớn khán giả đa dạng, bao gồm cả người trẻ và người lớn tuổi.",
                    "Chỉ thu hút các thành viên của câu lạc bộ."
                ],
                answer: "Thu hút một lượng lớn khán giả đa dạng, bao gồm cả người trẻ và người lớn tuổi."
            },
            {
                question: "Trong bài viết mẫu, ai đã được đề xuất làm diễn giả?",
                options: [
                    "Một nhà khoa học nổi tiếng.",
                    "Một doanh nhân thành đạt.",
                    "Nhà văn Nguyễn Nhật Ánh."
                ],
                answer: "Nhà văn Nguyễn Nhật Ánh."
            },
            {
                question: "Lý do tác giả chọn diễn giả và chủ đề đó là gì?",
                options: [
                    "Vì diễn giả đó là bạn thân của tác giả.",
                    "Vì chủ đề đó rất chuyên sâu và học thuật.",
                    "Vì cả diễn giả và chủ đề đều hấp dẫn và phù hợp với nhiều lứa tuổi."
                ],
                answer: "Vì cả diễn giả và chủ đề đều hấp dẫn và phù hợp với nhiều lứa tuổi."
            }
        ]
    },
    {
        id: 'debate_club_young_members',
        title: 'Chủ đề: Khuyến khích người trẻ tham gia CLB Tranh biện',
        prompt: `
            <h4>Dear Members,</h4>
            <p>We want to encourage young people to join our club. Sadly, young people often think debating is not for them. We are writing to ask for your help. Please write and tell us the two most important benefits of learning how to debate topical issues and speak in public. Please share your ideas about the importance of debating. We will publish them on our website.</p>
        `,
        questions: [
            {
                question: "Nhiệm vụ chính của bạn là gì?",
                options: [
                    "Viết email phàn nàn về thái độ của người trẻ.",
                    "Nêu ra hai lợi ích quan trọng nhất của việc học tranh biện.",
                    "Đăng ký làm người hướng dẫn cho các thành viên trẻ."
                ],
                answer: "Nêu ra hai lợi ích quan trọng nhất của việc học tranh biện."
            },
            {
                question: "Vấn đề mà câu lạc bộ đang gặp phải là gì?",
                options: [
                    "Người trẻ tham gia quá đông, gây quá tải.",
                    "Người trẻ thường nghĩ rằng tranh biện không dành cho họ.",
                    "Câu lạc bộ không có đủ chủ đề để tranh biện."
                ],
                answer: "Người trẻ thường nghĩ rằng tranh biện không dành cho họ."
            },
            {
                question: "Theo bài viết mẫu, hai lợi ích chính của việc tranh biện là gì?",
                options: [
                    "Giúp chiến thắng mọi cuộc tranh cãi và kiếm được nhiều tiền.",
                    "Cải thiện kỹ năng nói và tư duy, đồng thời tiếp thu kiến thức mới.",
                    "Giúp trở nên nổi tiếng trên mạng xã hội."
                ],
                answer: "Cải thiện kỹ năng nói và tư duy, đồng thời tiếp thu kiến thức mới."
            },
            {
                question: "Mục đích cuối cùng của việc bạn viết email này là gì?",
                options: [
                    "Để câu lạc bộ đăng ý kiến của bạn lên website nhằm thu hút người trẻ.",
                    "Để xin một vị trí trong ban quản trị câu lạc bộ.",
                    "Để đề nghị thay đổi quy tắc của câu lạc bộ."
                ],
                answer: "Để câu lạc bộ đăng ý kiến của bạn lên website nhằm thu hút người trẻ."
            }
        ]
    }
    // Bạn có thể thêm các chủ đề khác vào đây với cấu trúc tương tự
];