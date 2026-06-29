import sys
from PIL import Image

def crop_edges(image_path, crop_percent=0.03):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        left = int(width * crop_percent)
        top = int(height * crop_percent)
        right = int(width * (1 - crop_percent))
        bottom = int(height * (1 - crop_percent))
        
        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(image_path)
        print(f"Successfully cropped {image_path}")
    except Exception as e:
        print(f"Error cropping {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        crop_edges(sys.argv[1])
    else:
        print("Please provide an image path.")
