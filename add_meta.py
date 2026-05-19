import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the title
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
    title_text = "Aptis Practice Hub"
    if title_match:
        title_text = title_match.group(1).strip()
    
    # Generate description
    # Default description
    desc = f"Trang bị kiến thức và luyện tập {title_text} cho kỳ thi Aptis. Tài liệu hướng dẫn chi tiết, bài tập thực hành hiệu quả và mẹo thi đạt điểm cao miễn phí."
    
    if 'reading' in filepath.lower():
        desc = f"Luyện tập kỹ năng Reading Aptis: {title_text}. Tổng hợp các bài đọc hiểu, mẹo làm bài và phân tích đáp án chi tiết."
    elif 'listening' in filepath.lower():
        desc = f"Luyện tập kỹ năng Listening Aptis: {title_text}. Cải thiện kỹ năng nghe với các bài test thực tế và hướng dẫn chi tiết."
    elif 'speaking' in filepath.lower():
        desc = f"Luyện tập kỹ năng Speaking Aptis: {title_text}. Kho câu hỏi, bài mẫu và các tip để tự tin trả lời phần thi nói."
    elif 'writing' in filepath.lower():
        desc = f"Luyện tập kỹ năng Writing Aptis: {title_text}. Hướng dẫn viết bài, từ vựng ăn điểm và sửa lỗi thường gặp."
    elif 'vocabulary' in filepath.lower() or 'grammar' in filepath.lower():
        desc = f"Ôn tập Từ vựng và Ngữ pháp Aptis: {title_text}. Củng cố nền tảng tiếng Anh, tránh các lỗi sai phổ biến."
    
    # Check if there is already a meta description
    if re.search(r'<meta\s+name=["\']description["\']\s+content=["\'].*?["\']\s*/?>', content, re.IGNORECASE):
        # Replace existing
        new_content = re.sub(r'<meta\s+name=["\']description["\']\s+content=["\'].*?["\']\s*/?>', 
                             f'<meta name="description" content="{desc}">', content, flags=re.IGNORECASE)
    else:
        # Insert after <head> or <title> or <meta charset
        if '<head>' in content:
            new_content = re.sub(r'(<head>\s*)', r'\1' + f'<meta name="description" content="{desc}">\n    ', content, count=1, flags=re.IGNORECASE)
        else:
            # Maybe just return original if no head
            new_content = content
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath} with description: {desc}")
    else:
        print(f"Skipped {filepath} - no change")

if __name__ == "__main__":
    html_files = glob.glob('**/*.html', recursive=True)
    for f in html_files:
        process_file(f)
