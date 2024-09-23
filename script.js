let display = document.querySelector(".display");
let subdisplay = document.querySelector(".subdisplay");
let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '='){
      string = eval(string);
      display.innerText = string;
      subdisplay.innerHTML = string;
      
    }
    else if (e.target.innerHTML == 'AC'){
      string = "";
      display.innerHTML = string;
      subdisplay.innerHTML = string;
    }
    else if (e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);
      display.innerHTML = string;
      subdisplay.innerHTML = string;
    }

    else{
    string += e.target.innerHTML;
    display.innerText = string;
   }
  })
})
