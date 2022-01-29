
# Importing Image class from PIL module
from PIL import Image


# Cropped image of above dimension
# (It will not change original image)
for i in range(1, 623):
    # Opens a image in RGB mode
    im = Image.open(f"forest/forest-{i}.jpg")
    im1 = im.crop((0, 0, 28, 28))
    im1.save(f"forest_crop/forest-{i}.jpg")
