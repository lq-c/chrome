chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "open_rdp") {
    const hostname = request.hostname;
    const username = request.username;
    const password = request.password;
    // const rdpUrl = "openmstscdemo:" + hostname;
    // const rdpUrl = "openmstscdemo:";



    const rdpUrl = "openmstscdemo://" + hostname;

    // 构建MSTSC连接的URL
    // var rdpUrl = `openmstscdemo://${encodeURIComponent(hostname)}`;

    console.log('1234', rdpUrl);
    chrome.tabs.create({ url: rdpUrl });
  }
});
