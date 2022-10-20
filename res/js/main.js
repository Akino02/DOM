const userinput = document.getElementById("userinput")
const send = document.getElementById("send")
const content = document.getElementById("content")

const changecolor = (color) => {
    content.style.backgroundColor = color
}

send.onclick = () => { 
    changecolor(userinput.value);

}

content.onmouseover = () => {
    changecolor(userinput.value);
}

window.onload = () => {
    changecolor("pink");
}

//content.style.backgroundColor = userValue = pro barvu