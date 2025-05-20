function script(conteudo) {
//    if (newpopupWindow != null){
//        newpopupWindow.document.write("");    
//    }
    var vetH2 = document.querySelectorAll("h2");
    var output = "";
    for (let index = vetH2.length - 1; index >= 0; index--) {
        if (vetH2[index].innerText.trim() != "Use saved searches to filter your results more quickly" && vetH2[index].innerText.trim() != "Navigation Menu" && vetH2[index].innerText.trim() != "Footer" && vetH2[index].innerText.trim() != "Add file" && vetH2[index].innerText.trim() != "Folders and files" && vetH2[index].innerText.trim() != "Latest commit" && vetH2[index].innerText.trim() != "History" &&   vetH2[index].innerText.trim() != "Suggested workflows" && vetH2[index].innerText.trim() != "Languages && Packages" && vetH2[index].innerText.trim() != "Releases" && vetH2[index].innerText.trim() != "About" && vetH2[index].innerText.trim() != "Repository files navigation" && vetH2[index].innerText.trim() != "Packages" && vetH2[index].innerText.trim() != "Languages"){       
       
            output += vetH2[index].innerText.replace("./", "") + "<br>";
        }
    }
    newpopupWindow = window.open('', 'pagina', "width=400 height=400");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(output);
}

function script2(conteudo) {
//    if (newpopupWindow != null){
//        newpopupWindow.document.write("");    
//    }
    var vetH2 = document.querySelectorAll("h2");
    var output = "";
    for (let index = 0; index < vetH2.length; index++) {
            if (vetH2[index].innerText.trim() != "Use saved searches to filter your results more quickly" && vetH2[index].innerText.trim() != "Navigation Menu" && vetH2[index].innerText.trim() != "Footer" && vetH2[index].innerText.trim() != "Add file" && vetH2[index].innerText.trim() != "Folders and files" && vetH2[index].innerText.trim() != "Latest commit" && vetH2[index].innerText.trim() != "History" &&   vetH2[index].innerText.trim() != "Suggested workflows" && vetH2[index].innerText.trim() != "Languages && Packages" && vetH2[index].innerText.trim() != "Releases" && vetH2[index].innerText.trim() != "About" && vetH2[index].innerText.trim() != "Repository files navigation" && vetH2[index].innerText.trim() != "Packages" && vetH2[index].innerText.trim() != "Languages"){           
            output += vetH2[index].innerText.replace("./", "") + "<br>";
          }
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
