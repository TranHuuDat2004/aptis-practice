// js/data-writing-analysis.js

const writingAnalysisData = [
    // --- THÊM BÀI PHÂN TÍCH MỚI VÀO ĐÂY ---
    {
        id: 'analysis_food_club_chef',
        title: 'Chủ đề: Gợi ý chủ đề cho đầu bếp',
        originalText: `Dear manager,
First, I would like to introduce myself. My name is Tran Huu Dat and I have been a food club member for 2 years. I am writing this email to express my opinion <del>the recent email</del>.
According to the email, you said that the club is holding a meeting with a famous chef. To be honest, I felt happy to hear this. It’s very important to <del>pay attend to many people to know</del> traditional Vietnamese food.
Firstly, I recommend the chef <del>make a Vietnamese food</del> such as pho and spring rolls. <del>There are</del> very <del>delicous</del> and many people can <del>use</del> this at <del>event</del>.
In addition, I would like the chef <del>can be introduced for them</del> how to make <del>a pho</del> and spring rolls. <del>There is</del> very helpful because they can cook this for their meal.
<del>That is all my suggestion</del>, I <del>will talk</del> to <del>other member</del> and they <del>argee</del> this.
Thank you for reading the email, I hope you <del>reply this email</del> soon
Best regards,
Huu Dat Tran`,
        correctedText: `Dear Manager,
First, I would like to introduce myself. My name is Tran Huu Dat and I have been a food club member for 2 years. I am writing this email to express my opinion <strong>about the recent email</strong>.
According to the email, you said that the club is holding a meeting with a famous chef. To be honest, I felt happy to hear this. It’s very important <strong>to raise people's awareness of</strong> traditional Vietnamese food.

From my perspective, I suggest that the chef <strong>talk about Vietnamese food</strong>. Vietnamese food is rich in flavors and culture. It will attract both young and older members. Besides, it would be great if the chef could <strong>guide us on how to make a traditional dish</strong> like pho or spring rolls. <strong>They are</strong> very <strong>delicious</strong> and many people can <strong>enjoy</strong> this at <strong>the event</strong>.

<strong>Those are my suggestions</strong>. I <strong>have talked</strong> to <strong>other members</strong> and they <strong>agree with this</strong>.
Thank you for reading the email. I hope you <strong>reply to this email</strong> soon.
Best regards,
Tran Huu Dat`,
        feedback: [
            { errorType: "Lạc đề (Rất quan trọng)", correction: "Đề bài yêu cầu gợi ý <strong>chủ đề để đầu bếp nói chuyện (talk about)</strong>, nhưng bài viết lại tập trung vào việc đầu bếp <strong>nấu ăn cho mọi người (make food)</strong>. Cần bám sát yêu cầu đề bài." },
            { errorType: "Thiếu giới từ", correction: "<code>opinion the recent email</code> → <strong>opinion about the recent email</strong>." },
            { errorType: "Sai cụm từ", correction: "<code>pay attend to</code> → <strong>pay attention to</strong>. Tuy nhiên, trong ngữ cảnh này, <strong>raise awareness of</strong> (nâng cao nhận thức về) sẽ tự nhiên hơn." },
            { errorType: "Dùng từ", correction: "<code>make a Vietnamese food</code> → <strong>talk about Vietnamese food</strong> / <strong>make a Vietnamese dish</strong>. 'Food' là danh từ không đếm được, 'dish' là đếm được." },
            { errorType: "Sai chính tả", correction: "<code>delicous</code> → <strong>delicious</strong>." },
            { errorType: "Dùng từ", correction: "<code>can use this</code> → <strong>can enjoy this</strong> ('enjoy' phù hợp hơn với đồ ăn)." },
            { errorType: "Thiếu mạo từ", correction: "<code>a pho</code> → <strong>pho</strong> ('pho' là danh từ không đếm được)." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>That is all my suggestion</code> → <strong>Those are my suggestions</strong>." },
            { errorType: "Sai thì", correction: "<code>I will talk</code> → <strong>I have talked</strong> (hành động đã xảy ra và có kết quả ở hiện tại)." }
        ]
    },
    {
        id: 'analysis_language_change',
        title: 'Chủ đề: Sự thay đổi của ngôn ngữ',
        // Dùng thẻ <del> để đánh dấu phần sai (đỏ)
        originalText: `Dear Manager,
I hope this email finds you well.
My name is Huu Dat Tran and I have been an active member of the English club <del>last year</del>. I am writing to express my thoughts regarding your recent email.
According to the email, you mentioned that many new words and phrases are being added to the language. While some people accept this happily, <del>other react strongly</del> and hope it <del>should be control</del> these changes.
I think language naturally changes because we need new <del>definition</del> such as technology, software and <del>application</del>. Many people like this because it helps <del>they remember</del> this better.
However, some people worry about the <del>language can be become confusing</del>. This is true for the <del>beginner to learn such as children</del> and people learning English as a second language.
Personally, language should develop but also <del>keep it clear to easy understanding</del>. This is why people <del>react negative</del> to this.
Thank you for reading my views. I look forward to your reply.
Best Regards,
Huu Dat Tran`,
        // Dùng thẻ <strong> để đánh dấu phần đúng (xanh)
        correctedText: `Dear Manager,
I hope this email finds you well.
My name is Huu Dat Tran and I have been an active member of the English club <strong>since last year</strong>. I am writing to express my thoughts regarding your recent email.
According to the email, you mentioned that many new words and phrases are being added to the language. While some people accept this happily, <strong>others react strongly</strong> and hope these changes <strong>can be controlled</strong>.
I think language naturally changes because we need new <strong>definitions</strong> such as technology, software and <strong>applications</strong>. Many people like this because it helps <strong>them remember</strong> this better.
However, some people worry <strong>that the language can become confusing</strong>. This is true for <strong>beginners such as children</strong> and people learning English as a second language.
Personally, language should develop but also <strong>stay clear for easy understanding</strong>. This is why people <strong>react negatively</strong> to this.
Thank you for reading my views. I look forward to your reply.
Best Regards,
Huu Dat Tran`,
        feedback: [
            { errorType: "Sai thì", correction: "<code>have been... last year</code> → <strong>have been... since last year</strong> (Hiện tại hoàn thành đi với mốc thời gian bắt đầu 'since')." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>other react</code> → <strong>others react</strong> ('other' không đứng một mình, phải là 'others')." },
            { errorType: "Sai cấu trúc (Bị động)", correction: "<code>should be control</code> → <strong>can be controlled</strong> (Bị động: can be + V3)." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>definition</code>, <code>application</code> → <strong>definitions</strong>, <strong>applications</strong> (Sau 'new' và trong danh sách liệt kê, danh từ đếm được cần ở dạng số nhiều)." },
            { errorType: "Sai đại từ tân ngữ", correction: "<code>helps they remember</code> → <strong>helps them remember</strong> (Tân ngữ của 'help' là 'them')." },
            { errorType: "Sai cấu trúc câu", correction: "<code>worry about the language can be...</code> → <strong>worry that the language can...</strong> (Không dùng 'about' trước một mệnh đề 'that')." },
            { errorType: "Dùng sai từ loại", correction: "<code>react negative</code> → <strong>react negatively</strong> (Động từ 'react' cần một trạng từ 'negatively' để bổ nghĩa)." }
        ]
    },

    // --- THÊM BÀI PHÂN TÍCH MỚI VÀO ĐÂY ---
    {
        id: 'analysis_computer_club_website',
        title: 'Chủ đề: Thay đổi website Câu lạc bộ Máy tính',
        originalText: `Dear Manager,
I hope this email finds you well.
My name is Huu Dat Tran, and I have been an active member of the Computer Club <del>last year</del>. I am writing to express my thoughts regarding your recent email.
According to the email, you mentioned that the website is simple and <del>needs to improve</del>. To be honest, I was glad to hear this because as the website develops, more students <del>know the club better</del>.
From my perspective, we should add more pictures and short videos of our events and workshops. This will help visitors see what we do and feel interested in joining.
Additionally, it would be great if we could create a computer <del>tips or chat room</del>. It helps many students to <del>connect team</del> and learn new knowledge. This would show the club <del>very helpful and friendly</del>.
Personally, I believe these ideas can make the website more interactive and more useful.
Thank you for reading my views. I look forward to your reply.
<del>Best regard</del>
Huu Dat Tran`,
        correctedText: `Dear Manager,
I hope this email finds you well.
My name is Huu Dat Tran, and I have been an active member of the Computer Club <strong>since last year</strong>. I am writing to express my thoughts regarding your recent email.
According to the email, you mentioned that the website is simple and <strong>needs improvement</strong>. To be honest, I was glad to hear this because as the website develops, more students <strong>can get to know the club better</strong>.
From my perspective, we should add more pictures and short videos of our events and workshops. This will help visitors see what we do and feel interested in joining.
Additionally, it would be great if we could create a computer <strong>tips section or a chat room</strong>. It <strong>would help</strong> many students <strong>connect with the team</strong> and learn new knowledge. This would show the club <strong>as very helpful and friendly</strong>.
Personally, I believe these ideas can make the website more interactive and more useful.
Thank you for reading my views. I look forward to your reply.
<strong>Best regards,</strong>
Huu Dat Tran`,
        feedback: [
            { errorType: "Sai thì", correction: "<code>have been... last year</code> → <strong>have been... since last year</strong> ('have been' (HTHT) đi với 'since' để chỉ một mốc thời gian bắt đầu)." },
            { errorType: "Sai cấu trúc", correction: "<code>needs to improve</code> → <strong>needs improvement</strong> (Cấu trúc 'need + Noun' tự nhiên hơn trong ngữ cảnh này)." },
            { errorType: "Dùng từ", correction: "<code>know the club better</code> → <strong>can get to know the club better</strong> ('get to know' diễn tả quá trình tìm hiểu, tự nhiên hơn)." },
            { errorType: "Thiếu danh từ", correction: "<code>computer tips or chat room</code> → <strong>a computer tips section or a chat room</strong> ('tips' là một phần, cần danh từ 'section'; 'chat room' là một danh từ đếm được, cần mạo từ 'a')." },
            { errorType: "Sai giới từ", correction: "<code>connect team</code> → <strong>connect with the team</strong> (Động từ 'connect' cần giới từ 'with')." },
            { errorType: "Sai cấu trúc", correction: "<code>show the club very helpful</code> → <strong>show the club as very helpful</strong> (Cấu trúc 'show something as something')." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>Best regard</code> → <strong>Best regards,</strong> (Đây là cụm từ cố định, 'regards' luôn ở dạng số nhiều)." }
        ]
    },

    // --- THÊM BÀI PHÂN TÍCH MỚI VÀO ĐÂY ---
    {
        id: 'analysis_home_living_club',
        title: 'Chủ đề: Gợi ý cho Câu lạc bộ Nhà ở',
        originalText: `Dear manager,
First, I would like to introduce myself. My name is Tran Huu Dat and I have been a <del>home living club</del> member for 2 years. I am writing this email to express my opinion <del>the recent email</del>.
According to the email, you said that <del>there are many people want</del> to buy a new house or a new apartment. I think it is very important to know about <del>information for a home</del>. I am happy to share my suggestions <del>to</del> them.
Firstly, I can create a new website about the available homes with <del>picturers</del>, prices and locations. It helps them to research easily and see many choices.
<del>Next to</del> <del>They maybe</del> hold a customer service room. <del>There is very helpful</del> because they can introduce and help <del>for them to resolve problem</del>.
<del>That is my suggestions</del>, I <del>talk</del> <del>other member</del> and they <del>agree this</del>.
I hope you <del>reply this email</del> soon,
Best regards,
Huu Dat Tran`,
        correctedText: `Dear Manager,
First, I would like to introduce myself. My name is Tran Huu Dat and I have been a <strong>Home Living Club</strong> member for 2 years. I am writing this email to express my opinion <strong>about the recent email</strong>.
According to the email, you said that <strong>many people want</strong> to buy a new house or a new apartment. I think it is very important to know <strong>information about buying a home</strong>. I am happy to share my suggestions <strong>with</strong> them.

My suggestion is that the club should create a website that shows available homes, with <strong>pictures</strong>, prices, and locations. This helps families compare and choose more easily.
<strong>Next,</strong> <strong>we may</strong> hold a customer service room. <strong>This is very helpful</strong> because they can introduce and help <strong>them resolve problems</strong>.

<strong>Those are my suggestions</strong>. I <strong>talked</strong> to <strong>other members</strong> and they <strong>agree with this</strong>.
I hope you <strong>reply to this email</strong> soon.
Best regards,
Tran Huu Dat`,
        feedback: [
            { errorType: "Viết hoa", correction: "<code>home living club</code> → <strong>Home Living Club</strong> (Tên riêng của câu lạc bộ cần viết hoa)." },
            { errorType: "Thiếu giới từ", correction: "<code>opinion the recent email</code> → <strong>opinion about the recent email</strong>." },
            { errorType: "Sai cấu trúc", correction: "<code>there are many people want</code> → <strong>many people want</strong> (hoặc 'there are many people who want'). Cấu trúc gốc bị thừa 'there are'." },
            { errorType: "Dùng từ", correction: "<code>information for a home</code> → <strong>information about buying a home</strong> (Diễn đạt tự nhiên và đúng ý hơn)." },
            { errorType: "Sai giới từ", correction: "<code>share suggestions to them</code> → <strong>share... with them</strong> (Cấu trúc 'share something with someone')." },
            { errorType: "Sai chính tả", correction: "<code>picturers</code> → <strong>pictures</strong>." },
            { errorType: "Sai từ nối", correction: "<code>Next to</code> → <strong>Next,</strong> ('Next to' nghĩa là 'bên cạnh', 'Next,' là 'tiếp theo')." },
            { errorType: "Sai cấu trúc", correction: "<code>help for them to resolve problem</code> → <strong>help them resolve problems</strong> (Cấu trúc 'help someone do something'; 'problem' nên ở số nhiều)." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>That is my suggestions</code> → <strong>Those are my suggestions</strong> ('suggestions' là số nhiều)." },
            { errorType: "Sai thì & Lỗi giới từ", correction: "<code>I talk... they agree this</code> → <strong>I talked... they agree with this</strong> (Hành động đã xảy ra nên dùng quá khứ đơn; 'agree with' là cụm đúng)." }
        ]
    },

    {
        id: 'analysis_library_closure',
        title: 'Chủ đề: Thư viện công cộng có nguy cơ đóng cửa',
        originalText: `Dear Manager,
I hope this email finds you well.
First, I would like to introduce myself. My name is Tran Huu Dat and I have been <del>club member</del> for 2 years. I am writing this email to express my opinion about the recent email.
According to the email, the local authorities announced that the public library may close next year. Many people prefer reading on the internet<del>so</del> there is no need for a public library. To be honest, I was disappointed when I heard this news.
From my perspective, I think it is very important to keep it open. The library has many old books that are not on the internet. The library also helps people <del>to find</del> great books. That is a good way for many people <del>want</del> to know <del>new topic</del> or improve <del>them soft skills</del>.
I think we should write a letter to the government <del>why</del> the library is important. We can tell them to think again and try to save money. We can also ask many people <del>sign</del> a paper to support the library. We can share this on social media and ask our friends and family to help.
I hope you agree with me and reply to the email soon.
Best regards,
Tran Huu Dat`,
        correctedText: `Dear Manager,
I hope this email finds you well.
First, I would like to introduce myself. My name is Tran Huu Dat and I have been <strong>a club member</strong> for 2 years. I am writing this email to express my opinion about the recent email.
According to the email, the local authorities announced that the public library may close next year. Many people prefer reading on the internet<strong>, so</strong> there is no need for a public library. To be honest, I was disappointed when I heard this news.
From my perspective, I think it is very important to keep it open. The library has many old books that are not on the internet. The library also helps people <strong>find</strong> great books. That is a good way for many people <strong>to want</strong> to know <strong>new topics</strong> or improve <strong>their soft skills</strong>.
I think we should write a letter to the government <strong>explaining why</strong> the library is important. We can tell them to think again and try to save money. We can also ask many people <strong>to sign</strong> a paper to support the library. We can share this on social media and ask our friends and family to help.
I hope you agree with me and reply to the email soon.
Best regards,
Tran Huu Dat`,
        feedback: [
            { errorType: "Thiếu mạo từ", correction: "<code>club member</code> → <strong>a club member</strong>." },
            { errorType: "Dấu câu", correction: "<code>internet so there is</code> → <strong>internet, so there is</strong> (Luôn có dấu phẩy trước liên từ 'so')." },
            { errorType: "Sai dạng động từ", correction: "<code>helps people to find</code> → <strong>helps people find</strong> (Sau 'help' có thể dùng V-inf không 'to')." },
            { errorType: "Sai cấu trúc", correction: "<code>way for many people want</code> → <strong>way for many people to want</strong>." },
            { errorType: "Lỗi số ít/số nhiều", correction: "<code>new topic</code> → <strong>new topics</strong>." },
            { errorType: "Sai đại từ sở hữu", correction: "<code>improve them soft skills</code> → <strong>improve their soft skills</strong>." },
            { errorType: "Thêm từ nối", correction: "<code>government why</code> → <strong>government explaining why</strong> (Dùng V-ing để nối 2 mệnh đề)." },
            { errorType: "Sai dạng động từ", correction: "<code>ask many people sign</code> → <strong>ask many people to sign</strong> (Cấu trúc: ask somebody to do something)." }
        ]
    },

     // --- THÊM BÀI PHÂN TÍCH MỚI VÀO ĐÂY ---
    {
        id: 'analysis_gardening_proposals',
        title: 'Chủ đề: Đề xuất về làm vườn',
        originalText: `Dear Manager,
I hope this email finds you well.
First, I would like to introduce myself. My name is Tran Huu Dat and I have been <del>club member</del> for 2 years. I am writing this email to express my opinion about the recent email.
According to the email, <del>The</del> City Council wants to <del>more people</del> to take up gardening. They are thinking of planting 500 trees and flowers in the park or organizing gardening workshops at a college. To be honest, I <del>really excited</del> when I heard this.
From my perspective, I think both ideas are fantastic, but I prefer to plant 500 trees and flowers in the local parks. <del>That is the great ways</del> to provide a greener environment, improve air <del>quailty</del> and create a beautiful view for the community.
While gardening workshops are valuable, some people may be too busy to join a workshop, but they can still enjoy the benefits of a green, beautiful park in their free time.
I hope you agree with me and reply to the email soon.
Best regards,
Tran Huu Dat`,
        correctedText: `Dear Manager,
I hope this email finds you well.
First, I would like to introduce myself. My name is Tran Huu Dat and I have been <strong>a club member</strong> for 2 years. I am writing this email to express my opinion about the recent email.
According to the email, <strong>the</strong> City Council wants <strong>more people</strong> to take up gardening. They are thinking of planting 500 trees and flowers in the park or organizing gardening workshops at a college. To be honest, I <strong>was really excited</strong> when I heard this.
From my perspective, I think both ideas are fantastic, but I prefer to plant 500 trees and flowers in the local parks. <strong>That is a great way</strong> to provide a greener environment, improve air <strong>quality</strong> and create a beautiful view for the community.
While gardening workshops are valuable, some people may be too busy to join a workshop, but they can still enjoy the benefits of a green, beautiful park in their free time.
I hope you agree with me and reply to the email soon.
Best regards,
Tran Huu Dat`,
        feedback: [
            { errorType: "Thiếu mạo từ", correction: "<code>club member</code> → <strong>a club member</strong>." },
            { errorType: "Viết hoa", correction: "<code>The City Council</code> (giữa câu) → <strong>the City Council</strong>." },
            { errorType: "Thừa từ", correction: "<code>wants to more people to</code> → <strong>wants more people to</strong>." },
            { errorType: "Thiếu động từ", correction: "<code>I really excited</code> → <strong>I was really excited</strong> (Thiếu động từ 'to be' và chia thì quá khứ cho cảm xúc đã xảy ra)." },
            { errorType: "Sai mạo từ & Số nhiều", correction: "<code>That is the great ways</code> → <strong>That is a great way</strong>." },
            { errorType: "Sai chính tả", correction: "<code>quailty</code> → <strong>quality</strong>." }
        ]
    }
];