import requests
import time
import urllib
land = "island"
URL = f"https://api.scryfall.com/cards/search?q=type%3A{land}+unique%3Aart"
cropImages = []
while URL is not None:
    req = requests.get(URL).json()
    data = req["data"]
    if data is not None:
        for card in data:
            cropImages.append(card["image_uris"]["art_crop"])
    if ("next_page" in req):
        print(req["next_page"])
        URL = req["next_page"]
    else:
        URL = None
    # don't bamboozle their api
    time.sleep(1)

print(f"downloading {len(cropImages)} images...")
for (i, url) in enumerate(cropImages):
    urllib.request.urlretrieve(cropImages[i], f"{land}/{land}-{i+1}.jpg")
print("done.")
