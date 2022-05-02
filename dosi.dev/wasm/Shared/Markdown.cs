namespace dosi.dev.wasm.Shared;

public class MarkdownLoader
{
    private readonly HttpClient _client;

    public MarkdownLoader(HttpClient client)
    {
        _client = client;
    }
    public async Task<string> Load(string url)
    {
        return Markdig.Markdown.ToHtml(await GetContentFromUrl(url));
    }

    private async Task<string> GetContentFromUrl(string path)
    {
        HttpResponseMessage httpResponse = await _client.GetAsync(path);
        return httpResponse.IsSuccessStatusCode ? await httpResponse.Content.ReadAsStringAsync() : httpResponse.ReasonPhrase;
    }
}
