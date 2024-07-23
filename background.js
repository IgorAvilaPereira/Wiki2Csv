function script(conteudo) {
  var vetH2 = document.querySelectorAll("h2");
  var output = "";
  for (let index = vetH2.length-1; index >= 0; index--) {
    if (vetH2[index].innerText.trim() != "Use saved searches to filter your results more quickly" && vetH2[index].innerText.trim()  != "Navigation Menu" && vetH2[index].innerText.trim()  != "Footer")
    output+= vetH2[index].innerText + "<br>";    
  }
  // var linhas = document.querySelector("#form > fieldset > table").rows.length;
  // var i = 1;
  // var resultado = "";
  // var resultado = document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>================<br>";
  // i++;
  // while (i < linhas) {
  //   resultado += document.querySelector("#form > fieldset > table").rows[i].cells[2].innerText + "<br>================<br>";
  //   i++;
  // }
  //  baixando todos os trabalhos!
  // document.querySelector("#form > fieldset > p > a").click();    
  
  newpopupWindow = window.open('', 'pagina', "width=400 height=400");
  newpopupWindow.document.write("");
  newpopupWindow.document.write(output);

  // newpopupWindow.document.write(document.querySelector("#form > fieldset > div:nth-child(3)").innerText + "<br><br>"+ resultado);    

}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script
      });
    })()
  });
});   
