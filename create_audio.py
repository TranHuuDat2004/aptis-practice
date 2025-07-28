import os
import subprocess
import requests
from pathlib import Path

# === PHẦN BẠN CẦN CHỈNH SỬA ===

# 1. Dán đoạn văn bạn muốn chuyển thành giọng nói vào đây
TEXT_TO_SPEAK = """
In this picture, I can see a woman and a child standing on a rocky mountain.
They are both wearing backpacks, so I think they are hiking. The woman is
holding the child gently, and they are looking at the beautiful view.
"""

# 2. Đặt tên cho file audio sẽ được tạo ra (nên có đuôi .wav)
OUTPUT_FILENAME = "speaking_part2_hiking_describe.wav"

# === KẾT THÚC PHẦN CHỈNH SỬA ===


# --- CÁC THIẾT LẬP (Không cần sửa) ---
VOICE_MODEL_NAME = "en_US-lessac-medium"
VOICES_DIR = "piper_voices"
OUTPUT_DIR = "output_audio"

def download_file(url, local_path):
    """Tải file từ URL và lưu vào đường dẫn cục bộ."""
    print(f"Downloading {url}...")
    try:
        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            with open(local_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
        print(f"Successfully downloaded to {local_path}")
        return True
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {url}: {e}")
        return False

def setup_piper():
    """Kiểm tra và tự động tải giọng đọc nếu cần."""
    voices_path = Path(VOICES_DIR)
    voices_path.mkdir(exist_ok=True)

    model_path = voices_path / f"{VOICE_MODEL_NAME}.onnx"
    config_path = voices_path / f"{VOICE_MODEL_NAME}.onnx.json"

    if not model_path.exists() or not config_path.exists():
        print("Voice model not found. Starting download...")
        
        # Tách tên model để tạo đường dẫn mới
        # Ví dụ: 'en_US-lessac-medium' -> ['en_US', 'lessac', 'medium']
        parts = VOICE_MODEL_NAME.split('-')
        lang_code = parts[0]
        voice_name = parts[1]
        quality = parts[2]
        
        # Tạo base_url theo cấu trúc mới
        base_url = f"https://huggingface.co/rhasspy/piper-voices/resolve/main/en/{lang_code}/{voice_name}/{quality}/{VOICE_MODEL_NAME}"
        
        model_url = f"{base_url}.onnx"
        config_url = f"{base_url}.onnx.json"

        download_file(model_url, model_path)
        download_file(config_url, config_path)
    else:
        print("Voice model found locally.")
        
    return str(model_path)

def generate_audio(text, model_path, output_path):
    """Tạo file audio từ văn bản."""
    print("\nGenerating audio...")
    try:
        process = subprocess.run(
            ['piper', '--model', model_path, '--output_file', str(output_path)],
            input=text.strip().encode('utf-8'),
            check=True,
            capture_output=True
        )
        print(f"🎉 Success! Audio saved to: {output_path}")
    except FileNotFoundError:
        print("\n--- ERROR ---")
        print("Command 'piper' not found. Did you install it correctly?")
        print("Try running: pip install piper-tts")
        print("---------------")
    except subprocess.CalledProcessError as e:
        print("\n--- ERROR ---")
        print(f"Piper failed to generate audio. Error message:")
        print(e.stderr.decode('utf-8'))
        print("---------------")

if __name__ == "__main__":
    model_path = setup_piper()
    if model_path:
        output_path = Path(OUTPUT_DIR)
        output_path.mkdir(exist_ok=True)
        full_output_path = output_path / OUTPUT_FILENAME
        generate_audio(TEXT_TO_SPEAK, model_path, full_output_path)