//id button = color-changer

const colorChangerButton = document.getElementById('color-changer');
const colorTitle = document.getElementById('color-title');

//default back ground color/title
let currColor= "White";
colorTitle.innerHTML = `Background Color: ${currColor}`;

//background color options
const arrayColors = [ "Aqua", "Black", "Blue", "Fuchsia", 
                        "Gray", "Green", "Lime", "Maroon",
                        "Navy", "Olive", "Purple", "Red", "Silver", "Teal", "White", "Yellow"]

// function to randomly generate color from arrayColor options
const randomColorGenerator = function(){
    const randomIndex = Math.floor(Math.random() * arrayColors.length);
    const newColor = arrayColors[randomIndex];
    // don't want same color twice in a row
    if(newColor == currColor)randomColorGenerator();

    currColor = newColor;
    return newColor;
};

colorChangerButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const newBackGroundColor = randomColorGenerator();
    document.body.style.backgroundColor = newBackGroundColor;
    if(newBackGroundColor == "Black"){
        colorTitle.style.color = "White";
    } else {colorTitle.style.color = "Black"};
    colorTitle.innerHTML = `Background Color: ${newBackGroundColor}`;
})