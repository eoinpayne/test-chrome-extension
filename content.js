//content script now has access to all info passed in 
//runs per page loaded if it matches url in manifest

// waits for signal from button in popup
chrome.runtime.onMessage.addListener(  //any time content.js gets called, like from popup.js, listener fires
    function(request, sender, sendResponse){      // request will be message sent //listener gives ability to send response, this is a function passed in from popup.js
        const re = RegExp ('popupandwindow', "gi") //gi is case insensitive?
        const matches = document.documentElement.innerHTML.match(re)  //documentElement the entire docuement // find every instance of "how" on the page
        sendResponse({count : matches.length}) //response sent to where this was called(popup.js)
        
        //alert(request)

})

const re = RegExp ('how', "gi") 
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
    url: window.location.href, //the payload, where the count of "how" came from
    count: matches.length
})