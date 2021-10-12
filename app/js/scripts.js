// 
var nav_func = document.querySelectorAll("nav a");
document.addEventListener("click", showActive);

function showActive(event) {
  event.preventDefault();
  if (event.target.matches("nav a")) {
    for (let nav_tags of nav_func) {
      nav_tags.classList.remove("active");
    }
    event.target.classList.add("active");
  }
}

// // variables
// var tabs = document.querySelectorAll('nav a')
// var contentPara = document.querySelector('.content')

// // when the hash changes
// function setActiveTabAccordingToHash(type) {
//   makeAllTabsInactive()
//   var tabToActivate = document.querySelector(`[href="#${type}"]`)
//   tabToActivate.classList.add('active')
// }

// function makeAllTabsInactive() {
//   tabs.forEach((tab) => tab.classList.remove('active'))
// }

// // runs on page load and whenever the hash changes
// function setContentAccordingToHash() {
//   const type = window.location.hash.substring(1)
//   for (var item of data) {
//     if (item.section === type) {
//       contentPara.innerHTML = `
//       <h2>${item.section}</h2> 
//       <p>${item.story}</p>`

//       setActiveTabAccordingToHash(type)
//     }
//   }
// }

// // only runs once on page load
// function initializePage() {
//   if (!window.location.hash) {
//     window.location.hash = 'cuisines'
//     document.querySelector('[href="#cuisines"]').classList.add('active')
//   } else {
//     document
//       .querySelector(`[href="${window.location.hash}"]`)
//       .classList.add('active')
//   }
//   setContentAccordingToHash()
// }

// // event listeners
// window.addEventListener('hashchange', setContentAccordingToHash)

// // initializePage()
// document.addEventListener('DOMContentLoaded', initializePage)