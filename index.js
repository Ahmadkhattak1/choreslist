// javascript
const inputEl = document.getElementById("input-chore")
const submitBtn = document.getElementById("submit-chore-btn")
const deleteBtn = document.getElementById("delete-chore-btn")
const choreItemEl = document.getElementById("chore-item-el")
let choresArray = []
let isChoresArrayEmpty = true




choresArray = JSON.parse(localStorage.getItem("Chores:")) || []

if (choresArray !== null) {
  renderArray(choresArray)
}

function renderArray(array) {
  choreItemEl.innerHTML = ""
    for (let i = choresArray.length-1; i >= 0; i--){
      choreItemEl.innerHTML += `
      <li data-index="${i}" class="chore-list-item">${array[i]}<li>
      `
  }
  
  inputEl.value = ""
}

submitBtn.addEventListener("click", function() {
  if (inputEl.value !== "") {
    choresArray.push(inputEl.value)
    localStorage.setItem("Chores:", JSON.stringify(choresArray))
    renderArray(choresArray)
    
  }
  
})


function deleteEntries() {
  localStorage.clear()
  choreItemEl.innerHTML = ``
  choresArray = []
  
}

deleteBtn.addEventListener("click", deleteEntries)




