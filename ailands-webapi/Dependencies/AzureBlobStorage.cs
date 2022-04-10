using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;

namespace Dependencies
{
  public interface IAzureBlobStorage
  {
    public BlobDownloadResult DownloadBlob(string containerName, string blobName);
    public void DownloadBlob(string containerName, string blobName, Stream fileStream);
  }
  public class AzureBlobStorage : IAzureBlobStorage
  {

    private readonly IConfiguration _config;
    private BlobServiceClient client;


    public AzureBlobStorage(IConfiguration configuration)
    {
      _config = configuration;
      client = new BlobServiceClient(new Uri(_config["STORAGE_ACCOUNT_BLOB_URL"]), new DefaultAzureCredential());
    }

    public BlobDownloadResult DownloadBlob(string containerName, string blobName)
    {
      var blobContainerClient = client.GetBlobContainerClient(containerName);
      var blobClient = blobContainerClient.GetBlobClient(blobName);
      var result = blobClient.DownloadContent();
      return result;
    }

    public void DownloadBlob(string containerName, string blobName, Stream fileStream)
    {
      var blobContainerClient = client.GetBlobContainerClient(containerName);
      var blobClient = blobContainerClient.GetBlobClient(blobName);
      blobClient.DownloadTo(fileStream);
    }
  }

}