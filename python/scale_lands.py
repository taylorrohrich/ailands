
# Importing Image class from PIL module
from PIL import Image
import os
land = "island"
# def make_square(im, min_size=256):
#     x, y = im.size
#     size = max(min_size, x, y)
#     new_im = Image.new("RGB",(size, size))
#     new_im.paste(im, (int((size - x) / 2), int((size - y) / 2)))
#     return new_im


# Cropped image of above dimension
# (It will not change original image)
for file in os.listdir(f"./{land}"):
    # Opens a image in RGB mode
    im = Image.open(f"./{land}/{file}")
    scaled_image = im.resize((512, 512), Image.ANTIALIAS)
    scaled_image.save(f"{land}_scale/{file}")
