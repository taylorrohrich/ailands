using System;
using System.Collections.Generic;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;
using System.Linq;
using System.IO;
namespace AiLands.Function
{
  public class UpdateCardCounts
  {
    [FunctionName("UpdateCardCounts")]
    public void Run([TimerTrigger("0 0 0 * * *")] TimerInfo myTimer, ILogger log)
    {
      List<string> lands = new List<string>() { "red", "blue", "green", "black", "white" };
      List<int> fileCounts = new List<int>();
      var client = new BlobContainerClient(new Uri("https://ailandsblob.blob.core.windows.net/cardart"), new DefaultAzureCredential());
      for (int i = 0; i < lands.Count; i++)
      {
        string land = lands[i];
        int landCount = 0;
        var hierarchy = client.GetBlobs(prefix: land).AsPages();
        foreach (var page in hierarchy)
        {
          landCount += page.Values.Count;
        }
        fileCounts.Add(landCount);
      }
      string csvString = "land,count\n" + String.Join("\n", lands.Select((l, i) => $"{l},{fileCounts[i]}"));
      using (MemoryStream memStream = new MemoryStream())
      {
        StreamWriter sw = new StreamWriter(memStream);
        sw.Write(csvString);
        sw.Flush();
        memStream.Position = 0;
        var blobClient = client.GetBlobClient("fileCounts.csv");
        blobClient.Upload(memStream, overwrite: true);
        sw.Dispose();
      }
      log.LogInformation(csvString);
    }
  }
}
