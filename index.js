// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count +=  1
    countEl.innerText = count //---> no spaces in mdn
    countEl.textContent = count //---> with spaces in mdn
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    countEl.textContent = 0 // ----> to reset back to zero when you hit save 
    count = 0 // ----> to initialize 0 when you hit save 
    // NB: Make sure to not delete the existing content of the paragraph

//     console.log(count)
}

function reset() {
    // Reset the count variable to 0
    count = 0

    // Update the displayed count element (h2 with id="count-el") to show 0
    countEl.textContent = count

    // Clear the previous entries by resetting the paragraph text
    // (p with id="save-el") to its original label
    saveEl.textContent = "Previous entires: "
}










