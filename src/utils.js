export function displayDialogue(text , onDisplayEnd){
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogue.style.display = "block";
//for clickable on table 
    let index = 0;
    let currentText = "";
    const intervalRef =setInterval(() =>{
        if(index < text.length){
            currentText += text[index];
            dialogue.innerHTML =currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    },5);


    const closebtn = document.getElementById("close");

    function onClosebtnClick() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closebtn.removeEventListener("click" , onClosebtnClick);//remove function with recursive
    }
    closebtn.addEventListener("click" , onClosebtnClick);
}