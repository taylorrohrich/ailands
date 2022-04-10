using Microsoft.AspNetCore.Mvc;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;
using Dependencies;
using System.Data;
using Microsoft.VisualBasic.FileIO;

namespace ailands_webapi.Controllers;

[ApiController]
[Route("Card")]
public class CardController : ControllerBase
{
  private readonly string[] colors = new string[] { "green", "red", "white", "blue", "black" };

  private readonly ILogger<CardController> _logger;
  private readonly IAzureBlobStorage _storageClient;
  private readonly IConfiguration _config;
  private readonly CardCounts _cardCounts;

  public CardController(ILogger<CardController> logger, IAzureBlobStorage storageClient, IConfiguration configuration, CardCounts cardCounts)
  {
    _logger = logger;
    _storageClient = storageClient;
    _config = configuration;
    _cardCounts = cardCounts;
  }

  [HttpGet("random/{color?}")]
  public ActionResult Random(string? color = null)
  {
    var rand = new Random();
    if (color is null)
    {
      color = colors[rand.Next(colors.Length)];
    }
    int colorCount = 0;
    switch (color)
    {
      case "red":
        colorCount = _cardCounts.Red;
        break;
      case "blue":
        colorCount = _cardCounts.Blue;
        break;
      case "black":
        colorCount = _cardCounts.Black;
        break;

      case "white":
        colorCount = _cardCounts.White;
        break;
      case "green":
        colorCount = _cardCounts.Green;
        break;
    }
    int randomImageNumber = rand.Next(colorCount);
    return Ok(new { Url = $"card/{color}/{randomImageNumber}", color = color });
  }
  [HttpGet("{color}/{id:long}")]
  public ActionResult Card(string color, long id)
  {
    var blob = _storageClient.DownloadBlob(_config["CARD_ART_CONTAINER"], $"{color}/{color}-{id}.jpg");
    return File(blob.Content.ToArray(), "image/png");
  }
}