//on context of extenion popup
//will run everytime button inside poppup extension tile is clicked (? or every time extension tile is clicked?)



document.addEventListener("DOMContentLoaded", function () {  //event lsitener that waits for everything to load

    // const bg = chrome.extension.getBackgroundPage() //gives access to background page WINDOW
    // Object.keys(bg.word_count).forEach(function (url) {
    //     const div = document.createElement("div")
    //     div.textContent = `${url} ${bg.word_count[url]}`
    //     // document.body.appendChild(div)
    // })

    document.querySelector('button[id = "bg-button"]').addEventListener("click", function onclick() {
        chrome.tabs.create({ url: "window.html" })
    }, false)  // find the button (with more buttons, might need more accurate element retrieveal for button)
    // function onclick(){
    // chrome.tabs.create({url: "window.html"})  //to open new tabs, need permissions set in manifest


    // chrome.tabs.query({currentWindow:true, active:true },
    //     function(tabs)  {   //with all the tabs that matched
    //     chrome.tabs.sendMessage(tabs[0].id, tabs[0], setCount) //sending content of tab to content.js listener, sending setCount method to be used in "send response"
    //     }
    //     )

    // }

    document.querySelector('button[id="page-button"]').addEventListener("click", function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {   //with all the tabs that matched
                chrome.tabs.sendMessage(tabs[0].id, tabs[0], setCount) //sending content of tab to content.js listener, sending setCount method to be used in "send response"
            }
        )
    })

    function setCount(response) {
        const div = document.createElement('div')
        div.textContent = `${response.count} "hows"`
        document.body.appendChild(div) //add this to the popup document body

    }


}, false)