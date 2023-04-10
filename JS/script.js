let colorName = document.querySelector(".specialColor")

let blue = document.querySelector(".blue")
let purple = document.querySelector(".purple")
let yellow = document.querySelector(".yellow")
let midnight = document.querySelector(".midnight")
let starlight = document.querySelector(".starlight")
let red = document.querySelector(".red")

let picture = document.querySelector(".specialPicture")

blue.onmouseenter = () => {
    colorName.innerHTML = "Blue"
}

purple.onmouseenter = () => {
    colorName.innerHTML = "Purple"
}

yellow.onmouseenter = () => {
    colorName.innerHTML = "Yellow"
}

midnight.onmouseenter = () => {
    colorName.innerHTML = "Midnight"
}

starlight.onmouseenter = () => {
    colorName.innerHTML = "Starlight"
}

red.onmouseenter = () => {
    colorName.innerHTML = "Red"
}

blue.onclick = () => {
    picture.setAttribute("src", "../PICTURES/gray.jpg")
}

purple.onclick = () => {
    picture.setAttribute("src", "../PICTURES//purple.jpg")
}

yellow.onclick = () => {
    picture.setAttribute("src", "../PICTURES//yellow.jpg")
}

midnight.onclick = () => {
    picture.setAttribute("src", "../PICTURES/midnight.jpg")
}

starlight.onclick = () => {
    picture.setAttribute("src", "../PICTURES/starlight.jpg")
}

red.onclick = () => {
    picture.setAttribute("src", "../PICTURES/red.jpg")
}

let windowOpening = document.querySelector(".openWindow")
let theWindow = document.querySelector(".modalWindow")
let descriptionOpenClose = document.querySelector(".first")
let openCloseDescriptionBtns = document.querySelectorAll(".toggleBtn")
let closeingBg = document.querySelector(".closeBg")
let closeWindowBtn = document.querySelector(".closeBtn")

windowOpening.onclick = () => {
    setTimeout(() => {
        theWindow.style.display = "block"
        closeingBg.style.display = "flex"
    }, 200);
}

openCloseDescriptionBtns.forEach(btnOne => {
    btnOne.onclick = () => {
        descriptionOpenClose.style.height = "70vh"
        descriptionOpenClose.style.overflow = "visible"
    }
})

closeingBg.onclick = () => {
    theWindow.style.display = "none"
    closeingBg.style.display = "none"
}

closeWindowBtn.onclick = () => {
    theWindow.style.display = "none"
    closeingBg.style.display = "none"
}