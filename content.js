//content script now has access to all info passed in 
//runs per page loaded if it matches url in manifest

const re = RegExp ('how', "gi") 
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
    url: window.location.href, //the payload, where the count of "how" came from
    count: matches.length
})