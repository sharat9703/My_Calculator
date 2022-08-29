const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let BracketSwitch = false;
    const func = () => {
        let input = display.innerText.toString();
        if(input.length>=1){
            let index= input.charAt(input.length-1);
            if(!isNaN(parseInt(index)) && BracketSwitch){
                display.innerText += ')';
                BracketSwitch = !BracketSwitch;
            }
            else if(!isNaN(parseInt(index))&& !BracketSwitch || index ==='.'){
                display.innerText+='*(';
                BracketSwitch = !BracketSwitch;
            }
            else{
                display.innerText +='(';
                if(!BracketSwitch){
                    BracketSwitch=!BracketSwitch;
                }
            }
        }
        else{
            display.innerText += '(';
            BracketSwitch = !BracketSwitch;
        }
    };

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = " ";
    } else if (item.id == "backspace") {
      let String = display.innerText.toString();
      display.innerText = String.substring(0, String.length - 1);
    } else if (display.innerText != "" && item.id == "equal-to") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal-to") {
      display.innerText = "pls input something!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if(item.id == 'dot') {
      if(display.innerText.length==0){
        display.innerText += '0.';
      }
      else{
        display.innerText += '.';
      }
    }
    else if(item.id == 'brackets'){
    func();
    }
    else{
        display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
