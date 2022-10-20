const userinputX = document.getElementById("userinputX")
const userinputY = document.getElementById("userinputY")
const send = document.getElementById("send")
const content = document.getElementById("content")

send.onclick = () => {
    const userinputXValue = userinputX.value;
    const userinputYValue = userinputY.value;
    content.style.left = `${userinputXValue}px`;
    content.style.top = `${userinputYValue}px`;
}