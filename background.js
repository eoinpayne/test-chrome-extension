
window.word_count = {}  //window, because from popup.js we are accessing background window

chrome.runtime.onMessage.addListener(function(request,sender,sendMessage){
    window.word_count[request.url] = request.count     //add key:value url:count to track which site had what count

})

// //we want a new window to open, with the above data inside
// chrome.browserAction.onClicked.addListener(function(tab){  //add listener will call callback with the tab which was clicked
//     chrome.tabs.create({url: "popup.html"})  //to open new tabs, need permissions set in manifest
// })