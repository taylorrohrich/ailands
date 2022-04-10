using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;
namespace Dependencies
{
  public class CardCounts
  {
    private DateTime UpdateTime;
    private BlobClient client;
    private int _red;
    private int _blue;
    private int _green;
    private int _white;
    private int _black;
    public int Red { get { return GetColor(_red); } }
    public int Blue { get { return GetColor(_blue); } }
    public int Green { get { return GetColor(_green); } }
    public int White { get { return GetColor(_white); } }
    public int Black { get { return GetColor(_black); } }

    private int GetColor(int colorCount)
    {
      // Update the card counts daily
      if ((DateTime.Now.Date - UpdateTime.Date).Days > 0)
      {
        DownloadCardCounts();
      }
      return colorCount;
    }
    private void DownloadCardCounts()
    {
      var cardCounts = client.DownloadContent();
      var cardCountsText = System.Text.Encoding.UTF8.GetString(cardCounts.Value.Content.ToArray());
      var df = cardCountsText.Split("\n").Select(r => r.Split(",")).Where((r, i) => i > 0);
      foreach (string[] colorArray in df)
      {
        string color = colorArray[0];
        int count = int.Parse(colorArray[1]);
        switch (color)
        {
          case "red":
            _red = count;
            break;
          case "blue":
            _blue = count;
            break;
          case "green":
            _green = count;
            break;
          case "white":
            _white = count;
            break;
          case "black":
            _black = count;
            break;
        }
      }
      UpdateTime = DateTime.UtcNow;
    }
    public CardCounts(IConfiguration config)
    {
      client = new BlobClient(new Uri($"{config["STORAGE_ACCOUNT_BLOB_URL"]}{config["CARD_ART_CONTAINER"]}/{config["CARD_COUNTS_FILE"]}"), new DefaultAzureCredential());
      DownloadCardCounts();
    }
  }
}