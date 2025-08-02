# Ghi chú Kỹ thuật - Dự án Aptis Practice Tool

Tài liệu này ghi lại các giải pháp và kỹ thuật lập trình chính đã được sử dụng trong quá trình xây dựng công cụ luyện thi Aptis.

## I. Cấu trúc Dự án (Frontend)

Dự án được xây dựng theo mô hình **trang web tĩnh (Static Website)**, không yêu cầu cơ sở dữ liệu và có thể triển khai dễ dàng trên các nền tảng như GitHub Pages.

-   **HTML Modularization (Mô-đun hóa):**
    -   Các thành phần giao diện chung như Header và Footer được tách ra thành các file riêng (`components/header.html`, `components/footer.html`).
    -   JavaScript được sử dụng để tự động "nhúng" (inject) các component này vào các trang chính bằng cách sử dụng `fetch()` và `Promise.all()`.
    -   **Lợi ích:** Dễ dàng bảo trì. Chỉ cần sửa Header ở một nơi, tất cả các trang sẽ được cập nhật.

-   **Data-Driven UI (Giao diện điều khiển bởi dữ liệu):**
    -   Toàn bộ nội dung luyện tập (câu hỏi, đáp án, script, đường dẫn audio/hình ảnh) được tách biệt hoàn toàn khỏi HTML và lưu trong các file `.js` riêng biệt (ví dụ: `js/data-reading.js`, `js/data-speaking.js`).
    -   JavaScript sẽ đọc dữ liệu từ các file này và tự động render (tạo ra) các thành phần giao diện tương ứng khi trang được tải.
    -   **Lợi ích:** Cực kỳ dễ dàng trong việc thêm/sửa/xóa nội dung ôn tập mà không cần đụng đến code HTML hay logic phức tạp.

-   **CSS Variables:**
    -   Các giá trị màu sắc, font chữ, bo góc... được định nghĩa bằng biến CSS (`--primary-color`, `--card-radius`) trong `:root`.
    -   **Lợi ích:** Giúp việc thay đổi giao diện toàn bộ trang web trở nên nhanh chóng và đồng bộ.

## II. Các kỹ thuật JavaScript chính

### 1. Luồng thi mô phỏng (`speaking_test.html`)
-   **`async/await`:** Được sử dụng để điều khiển luồng thi một cách tuần tự (Part 1 -> Part 2 -> ...). Mỗi phần thi (`runPart1`, `runPart2`...) là một hàm `async` và được gọi với từ khóa `await` để đảm bảo nó chạy xong hoàn toàn trước khi chuyển sang phần tiếp theo.
-   **`Promise`:** Hàm `runTimer` trả về một `Promise`, cho phép luồng thi `await` (chờ đợi) cho đến khi đồng hồ đếm ngược kết thúc hoặc người dùng nhấn "Next".
-   **Lấy phần tử ngẫu nhiên từ mảng:**
    -   Sử dụng cú pháp `shuffle([...array])[0]`.
    -   **`[...array]` (Toán tử Spread):** Tạo một bản sao (shallow copy) của mảng gốc để hàm `shuffle` không làm thay đổi dữ liệu gốc.
    -   **`shuffle(...)`:** Hàm xáo trộn mảng tại chỗ.
    -   **`[0]`:** Lấy ra phần tử đầu tiên sau khi đã xáo trộn.

### 2. Tương tác Người dùng (Kéo-thả & Lưu trữ)
-   **Kéo-thả (Drag and Drop):**
    -   Sử dụng thư viện **SortableJS**. Nó được chọn vì hỗ trợ hoàn hảo cả trên desktop (chuột) và mobile (cảm ứng), khắc phục hạn chế của API Drag and Drop mặc định của HTML5.
-   **Lưu trữ cục bộ (`localStorage`):**
    -   Trong các phần Writing, bài làm của người dùng được tự động lưu vào `localStorage` của trình duyệt.
    -   Sự kiện `input` trên thẻ `<textarea>` được sử dụng để kích hoạt việc lưu trữ mỗi khi có thay đổi.
    -   Dữ liệu được lưu dưới dạng chuỗi JSON bằng `JSON.stringify()`.
    -   Khi tải lại trang, `JSON.parse()` được dùng để đọc và điền lại dữ liệu vào các ô.
    -   Mỗi bộ đề có một `storageKey` riêng biệt (ví dụ: `writing_part1_wp1_topic1`) để lưu trữ độc lập.

### 3. Tối ưu Giao diện
-   **Responsive Design:** Sử dụng `@media (max-width: ...)` để tạo ra các giao diện khác nhau cho desktop và mobile.
-   **Hamburger Menu (Sidebar):**
    -   Trên mobile, menu được chuyển thành dạng sidebar trượt ra từ bên phải.
    -   Hiệu ứng **"Push Content"**: Thay vì dùng lớp `overlay` tối màu, `transform: translateX(-300px)` được áp dụng cho `content-pusher` để tạo hiệu ứng toàn bộ nội dung bị đẩy sang trái, mang lại cảm giác hiện đại hơn.
    -   Sử dụng JavaScript để `toggle` một class (`.u-nav-open`) trên thẻ `<body>`, và CSS sẽ xử lý toàn bộ các hiệu ứng hình ảnh.

## III. Công cụ hỗ trợ (Backend)

### Text-to-Speech Generator (https://github.com/TranHuuDat2004/tts-flask-app)
-   **Công nghệ:** Python + Flask + Piper TTS.
-   **Mô hình:** Một ứng dụng web nhỏ chạy local.
    -   **Frontend (`index.html`):** Gửi yêu cầu `fetch` POST chứa văn bản cần chuyển đổi.
    -   **Backend (`app.py`):**
        -   Một server Flask lắng nghe ở cổng 5000.
        -   Route `/generate` nhận request, gọi tiến trình con (`subprocess`) để thực thi lệnh `piper` của Piper TTS.
        -   Tự động tải về "voice model" từ Hugging Face nếu chưa có.
        -   Trả về file audio (`.wav`) đã được tạo cho trình duyệt.
-   **Lý do chọn:** Giải pháp này cho phép tạo audio **không giới hạn** và **hoàn toàn miễn phí**, khắc phục nhược điểm của các dịch vụ TTS online.