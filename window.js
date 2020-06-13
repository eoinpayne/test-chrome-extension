//on context of extenion popup
//will run everytime button inside poppup extension tile is clicked (? or every time extension tile is clicked?)



document.addEventListener("DOMContentLoaded", function () {  //event lsitener that waits for everything to load

    const bg = chrome.extension.getBackgroundPage() //gives access to background page WINDOW
    Object.keys(bg.word_count).forEach(function (url) {
        const div = document.createElement("div")
        div.textContent = `${url} ${bg.word_count[url]}`
        document.body.appendChild(div)
    })

}, false)