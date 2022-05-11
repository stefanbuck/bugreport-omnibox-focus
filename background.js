chrome.omnibox.onInputChanged.addListener(async function (
  value,
  suggest
) {

  suggest([
    {
      content: 'https://google.com',
      description: 'open link in new tab',
    },
    {
      content: 'https://wikipedia.org',
      description: 'open link in same tab',
    }
  ]);
});

chrome.omnibox.onInputEntered.addListener(async function (url) {
  if (url === 'https://wikipedia.org') {
    chrome.tabs.update({
      url,
    })
    return
  }

  chrome.tabs.create({
    url,
  })
});
