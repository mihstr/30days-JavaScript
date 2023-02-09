const divs = document.querySelectorAll("div");
const button = document.querySelectorAll("button");

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}

divs.forEach(div => div.addEventListener("click", logText,
{
    // capture: true means taht the events will be triggered on the bubble up not on capture down
    capture: false, 
    // once: true means that the event will run only one time
    once: true
    }));

button.forEach(button => button.addEventListener("click", () => {
    console.log(this);
}, {
    once: true
}))