
I'm working on a extension that make use of the omnibox API to open links.

I've noticed that the focus remains in the omnibox when using `chrome.tabs.update()`, but I expected the focus on the page. However, when using `chrome.tabs.create()` the focus is on the page. I've recorded a quick video to demonstrate the behaviour.

## Demo

https://user-images.githubusercontent.com/1393946/167937275-0f4eaed0-a8fb-4b4d-a70a-e16ae5edb202.mp4