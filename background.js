function script(conteudo) {
    Array.prototype.has = function (e) { return this.indexOf(e) >= 0; }
    
    const skipText = [
        "Use saved searches to filter your results more quickly",
        "Navigation Menu",
        "Footer"
    ];
    
    const newpopupWindow = window.open('', 'pagina', "width=400 height=400");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(
        Array.from(document.querySelectorAll("h2"))
            .reverse()
            .map(el => el.innerText)
            .reduce((acc, curr) => skipText.has(curr) ? curr : acc + curr + "<br>", "")
    );
}

function script2(conteudo) {
    var vetH2 = document.querySelectorAll("h2");
    var output = "";
    for (let index = 0; index < vetH2.length; index++) {
        if (vetH2[index].innerText.trim() != "Use saved searches to filter your results more quickly" && vetH2[index].innerText.trim() != "Navigation Menu" && vetH2[index].innerText.trim() != "Footer")
            output += vetH2[index].innerText + "<br>";
    }
    newpopupWindow = window.open('', 'pagina', "width=400 height=400");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(output);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#btn1").addEventListener("click", function() {
        (async () => {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });
            chrome.scripting.executeScript({
                target: {
                    tabId: tab.id
                },
                func: script
            });
        })()
    });

    document.querySelector("#btn2").addEventListener("click", function() {
        (async () => {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });
            chrome.scripting.executeScript({
                target: {
                    tabId: tab.id
                },
                func: script2
            });
        })()
    });
});