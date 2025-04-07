// Grab elements
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// Initialize the count
let count = 0

// Increase the count and display it
function increment() {
    count += 1
    countEl.textContent = count
}

// Save the current count, then reset it
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    // Reset the displayed count
    count = 0
    countEl.textContent = 0
}