
tabs = document.getElementsByClassName('tab');
contents = document.getElementsByClassName('content-body');
for (var tab of tabs) {
  tab.addEventListener('click', (e) => {
    eventHandler(e);
  })
}

function eventHandler(event) {
  var currentTab = event.currentTarget;
console.log(currentTab.innerText);
  for (tab of tabs) {
    tab.classList.remove("active-tab");
  }
  currentTab.classList.add("active-tab");
  for (var content of contents) {
    console.log(content);
    content.classList.remove("active-content");
  }

 
  document.getElementById(currentTab.innerText).classList.add("active-content");


}

