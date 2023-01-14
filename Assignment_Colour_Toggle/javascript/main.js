const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu');

const closeMenu = () => {
    menuList.className = "menu-closed";
};
const openMenu = () => {
    menuList.className = "menu-collapsed";
};

// On Hover : Open & Close Menu
menuButton.addEventListener('mouseover', openMenu);
menuContainer.addEventListener('mouseleave', closeMenu);

// Get colours and set background colour to selected colour
const colours = document.querySelectorAll('ul li input');
const toggleBackgroundColour = (colour) => {
    const lowercaseColour = colour.toLowerCase();
    document.body.className = lowercaseColour;
    document.getElementById('colour-name').innerHTML = '<h1>' + colour + '</h1>';
};

colours.forEach((colour) => {
    colour.addEventListener("click", () => {
        const colourName = colour.parentNode.innerText;
        toggleBackgroundColour(colourName);
        closeMenu();
    })
})

// Handle Keypresses
const handleKeypress = (key) => {
    const pressedKey = key.key;
    if (pressedKey == 1) {
        toggleBackgroundColour('home');
        document.getElementById('colour-name').innerHTML = '<h1>HOME</h1>';  
    } else if (pressedKey == 2) {
        toggleBackgroundColour('purple');
        document.getElementById('colour-name').innerHTML = '<h1>PURPLE</h1>';
    } else if (pressedKey == 3) {
        toggleBackgroundColour('yellow');
        document.getElementById('colour-name').innerHTML = '<h1>YELLOW</h1>';
    } else if (pressedKey == 4) {
        toggleBackgroundColour('magenta');
        document.getElementById('colour-name').innerHTML = '<h1>MAGENTA</h1>';
    } else if (pressedKey == 5) {
        toggleBackgroundColour('cobalt');
        document.getElementById('colour-name').innerHTML = '<h1>COBALT</h1>';
    } else if (pressedKey == 6) {
        toggleBackgroundColour('red');
        document.getElementById('colour-name').innerHTML ='<h1>RED</h1>';
    } else if (pressedKey == 7) {
        toggleBackgroundColour('green');
        document.getElementById('colour-name').innerHTML = '<h1>GREEN</h1>';
    }
};

document.addEventListener("keypress", handleKeypress);