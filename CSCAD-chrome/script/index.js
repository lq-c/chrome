let button = document.getElementById('button');
var port = null;

button.onclick = (e) => {
  console.log('1111', chrome);

  // const customProtocol = "openmstscdemo://" + hostname + ":" + username + ":" + password;

  chrome.runtime.sendMessage({ action: "open_rdp", hostname: "10.202.203.229", username: 'SH0220221204\\Administrator', password: 'clq123456A' });

  
  // // 创建MSTSC连接的批处理命令
  // var mstscCommand = 'mstsc /v:' + '10.202.203.229' + ' /u:' + 'SH0220221204\\Administrator' + ' /p:' + 'clq123456A';

  // // 运行批处理命令
  // chrome.runtime.sendNativeMessage('openmstscdemo', { command: mstscCommand }, function (response) {
  //   if (chrome.runtime.lastError) {
  //     console.error(chrome.runtime.lastError);
  //   } else {
  //     console.log(response);
  //   }
  // });


}