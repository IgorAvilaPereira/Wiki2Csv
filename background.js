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
});